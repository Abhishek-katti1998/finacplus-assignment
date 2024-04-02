import { HiX } from "react-icons/hi";
import "./style.css";
import { forwardRef } from "react";

type MouseEventType = React.MouseEventHandler;
type SelectBtnViewType = {
  children: React.ReactNode;
  closeHandler: MouseEventType;
};
const SelectBtnView = forwardRef(
  ({ children, closeHandler }: SelectBtnViewType, ref) => {
    return (
      <div className="select-btn-view" ref={ref}>
        <div className="btn-container">{children}</div>

        <div className="close-icon rectangular">
          <HiX size={30} onClick={closeHandler} style={{ cursor: "pointer" }} />
        </div>
      </div>
    );
  }
);

export default SelectBtnView;
