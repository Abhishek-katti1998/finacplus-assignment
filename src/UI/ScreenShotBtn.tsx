import "./style.css";
const ScreenShotPanel = ({
  screenshotHandler
}: {
  screenshotHandler: React.MouseEventHandler;
}) => {
  return (
    <div className="screenshot-panel-container">
      <h5>Facing Problem</h5>
      <button onClick={screenshotHandler}>Take a screen shot</button>
    </div>
  );
};

export default ScreenShotPanel;
