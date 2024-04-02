// export default App;
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import SelectBtnView from "../../UI/SelectBtnView";
import Modal from "../../UI/Modal";

function ScreenshotApi({
  openSnippingTool,
  setSnippingTool
}: {
  openSnippingTool: boolean;
  setSnippingTool: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selecting, setSelecting] = useState(false);
  const snipRef = useRef<null | HTMLDivElement>(null);
  const canvasRef = useRef<null | HTMLDivElement>(null);
  const confirmRef = useRef<null | HTMLDivElement>(null);
  const [initialCords, setInitialCoords] = useState([0, 0]);
  const [opens, setOpens] = useState("preview");
  const [snip, setSnipView] = useState(false);
  const [canvas, setCanvasVal] = useState<null | HTMLCanvasElement>(null);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const selectBtnRef = useRef<null | HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (
      !snip ||
      e.target?.nodeName === "svg" ||
      e.target?.nodeName === "path" ||
      e.target?.nodeName === "BUTTON"
    )
      return;
    if (initialCords[0] === 0 && initialCords[1] === 0 && snip) {
      setInitialCoords([e.clientX, e.clientY]);
    }
    setSelecting(true);
    setCoordinates({ x: e.clientX, y: e.clientY, width: 0, height: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (
      !snip ||
      e.target?.nodeName === "svg" ||
      e.target?.nodeName === "path" ||
      e.target?.nodeName === "BUTTON"
    )
      return;
    if (selecting) {
      const width = e.clientX - coordinates.x;
      const height = e.clientY - coordinates.y;
      setCoordinates((prev) => ({ ...prev, width, height }));
    }
  };

  const initialiseSnip = () => {
    setSelecting(false);
    if (snipRef.current) snipRef.current.style.opacity = "0";
    setSnipView(false);
    captureScreenshot({ fullPage: false });
    setInitialCoords([0, 0]);
    setCoordinates({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
  };
  const handleMouseUp = (e) => {
    if (
      !snip ||
      e.target?.nodeName === "svg" ||
      e.target?.nodeName === "path" ||
      e.target?.nodeName === "BUTTON"
    )
      return;
    initialiseSnip();
  };

  const captureScreenshot = ({ fullPage }: { fullPage?: boolean }) => {
    const { x, y, width, height } = coordinates;
    if (selectBtnRef.current) selectBtnRef.current.style.opacity = "0";
    const options = fullPage
      ? {}
      : {
          x: x,
          y: y,
          width: width,
          height: height
        };
    html2canvas(document.body, options).then((canvas) => {
      setOpens("saveView");
      canvas.style.maxWidth = "1200px";
      canvas.style.maxHeight = "600px";
      setCanvasVal(canvas);
    });
  };

  const removeListners = () => {
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      removeListners();
    };
  });

  useEffect(() => {
    debugger;
    if ((opens === "saveView" || opens === "confirmView") && canvas) {
      canvasRef.current?.appendChild(canvas);
      confirmRef.current?.appendChild(canvas);
    }
  }, [opens]);
  const primaryHandler = () => {
    switch (opens) {
      case "preview":
        setSnipView(true);
        break;
      case "saveView":
        setOpens("confirmView");
        break;
      case "confirmView":
        break;
      default:
        throw "invalid modal name";
    }
  };
  const secondaryHandler = () => {
    switch (opens) {
      case "preview":
        captureScreenshot({ fullPage: true });
        setSnipView(true);
        break;
      case "saveView":
        setOpens("preview");
        break;
      case "confirmView":
        setOpens("preview");
        break;
      default:
        throw "invalid modal name";
    }
  };
  const closeHandler = () => {
    if (opens === "saveView") {
      setOpens("preview");
    }
    setSnipView(false);
    setSnippingTool(false);
  };

  console.log("opens", opens);
  if (openSnippingTool) {
    return (
      <>
        {snip && (
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              position: "absolute",
              border: "1px dashed red",
              top: initialCords[1] + "px",
              left: initialCords[0] + "px",
              pointerEvents: selecting ? "none" : "auto",
              ...coordinates
            }}
            ref={snipRef}
          />
        )}
        {opens === "preview" && (
          <SelectBtnView closeHandler={closeHandler} ref={selectBtnRef}>
            <button onClick={primaryHandler}>Custom </button>
            <button onClick={secondaryHandler}>Full Screen</button>
          </SelectBtnView>
        )}
        <Modal>
          <Modal.Open opens="saveView">
            <div></div>
          </Modal.Open>

          <Modal.Window name={opens} persistBackDrop={true}>
            <div style={{ position: "relative" }}>
              <>
                <div style={{ backgroundColor: "white" }} ref={canvasRef}></div>
              </>
              <SelectBtnView closeHandler={closeHandler}>
                <Modal.Open opens="confirmView" handler={primaryHandler}>
                  <button>Save</button>
                </Modal.Open>

                <button onClick={secondaryHandler}>Reset</button>
              </SelectBtnView>
            </div>
          </Modal.Window>
          <Modal.Window name="confirmView" persistBackDrop={true}>
            <div className={"confirm-screen"}>
              <div style={{ backgroundColor: "white" }} ref={confirmRef}></div>
              {opens === "confirmView" && <div>input</div>}
            </div>
          </Modal.Window>
        </Modal>
      </>
    );
  }
  return null;
}

export default ScreenshotApi;
