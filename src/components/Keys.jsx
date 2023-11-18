import Styles from "../componentStyles/Keys.module.css";
const Keys = ({ onButtonClick }) => {
  const keys = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="key_constainer">
      {keys.map((key) => (
        <button
          onClick={() => onButtonClick(key)}
          type="button"
          key={key}
          className={`btn btn-light ${
            key === "0" ? Styles.zero_button : Styles.keys
          } ${
            key === "/" ||
            key === "X" ||
            key === "-" ||
            key === "+" ||
            key === "=" ||
            key === "0" ||
            key === "."
              ? Styles.operation
              : null
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default Keys;
