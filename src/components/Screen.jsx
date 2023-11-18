import Styles from "../componentStyles/Screen.module.css";
const Screen = ({ displayValue }) => {
  return (
    <div className="input-group mb-3">
      <input
        value={displayValue}
        type="text"
        className={Styles.display}
        readOnly
      />
    </div>
  );
};
export default Screen;
