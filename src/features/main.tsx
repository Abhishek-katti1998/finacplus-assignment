import { HiCamera, HiX } from "react-icons/hi";
import "./style.css";
// import "../index.css";
import { useState } from "react";
import ScreenShotPanel from "../UI/ScreenShotBtn";
import ScreenshotApi from "./screenshot/ScreenShotApi";
const Main = () => {
  const [openScreenShotBtn, setScreenShotBtn] = useState(false);
  const [openSnippingTool, setSnippingTool] = useState(false);
  if (openScreenShotBtn) {
    return (
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi
        dolorem doloremque totam eaque. Vel aliquam aperiam magni ratione natus
        cupiditate fugiat suscipit delectus deleniti amet alias eum, temporibus
        eos.lasmdlkasndlkansdklnads Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Fuga excepturi dolorem doloremque totam eaque. Vel
        aliquam aperiam magni ratione natus cupiditate fugiat suscipit delectus
        deleniti amet alias eum, temporibus eos.lasmdlkasndlkansdklnads
        {!openSnippingTool && (
          <div
            className="left-positioned-icon close-icon circular"
            onClick={(event) => {
              event.stopPropagation();
              setScreenShotBtn(false);
              setSnippingTool(false);
            }}
          >
            <HiX size={30} />
          </div>
        )}
        {!openSnippingTool && (
          <ScreenShotPanel
            screenshotHandler={(event) => {
              event.stopPropagation();
              setSnippingTool(true);
            }}
          />
        )}
        {
          <ScreenshotApi
            openSnippingTool={openSnippingTool}
            setSnippingTool={setSnippingTool}
          />
        }
      </>
    );
  }
  return (
    <>
      <HiCamera
        size={40}
        className="left-positioned-icon "
        onClick={() => setScreenShotBtn(true)}
        id="camera"
      />
    </>
  );
};
export default Main;
