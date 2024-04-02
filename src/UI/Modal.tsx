/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState
} from "react";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const StyledModal = forwardRef(
  ({ children }: { children: React.ReactNode }, ref) => {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "fff",
          borderRadius: "1.5rem",
          padding: "3.2rem 4rem",
          transition: "all 0.5s"
        }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        // backgroundColor: "grey",
        backdropFilter: "blur(1px)",
        // zIndex: "1000",
        transition: "all 0.5s"
      }}
    >
      {children}
    </div>
  );
};

type ModalCtxType = {
  open: React.Dispatch<React.SetStateAction<string>>;
  openName: string;
  close: React.Dispatch<React.SetStateAction<string>>;
};
const ModalContext = createContext({
  open,
  close,
  openName: ""
} as ModalCtxType);

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({
  children,
  opens: opensWindowName,
  handler
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  opens: string;
  handler?: () => void;
}) => {
  const { open } = useContext(ModalContext);
  useEffect(() => {
    if (opensWindowName === "saveView") open(opensWindowName);
  }, []);
  if (opensWindowName === "saveView") {
    return null;
  }
  return cloneElement(children, {
    onClick: () => {
      debugger;
      if (handler) {
        handler();
      }
      open(opensWindowName);
    }
  });
};

const Window = ({
  children,
  name,
  persistBackDrop
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  name: string;
  persistBackDrop: boolean;
}) => {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick({
    handler: close,
    listenCapturing: true,
    persistBackDrop
  });

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        {name !== "saveView" && (
          <button onClick={close}>
            <HiXMark />
          </button>
        )}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
