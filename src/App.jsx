// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ComponentContainer from "./components/ComponentContainer";
import Keys from "./components/Keys";
import Screen from "./components/Screen";
import { useState } from "react";
function App() {
  let [calVal, setDisplay] = useState("0");
  const onButtonClick = (val) => {
    const temp = ["-", "/", "*", "+", "%", ".", "X"];
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."];
    const operators = ["/", "X", "+/-", "-", "+", "."];
    if (val === "C") {
      setDisplay("0");
    } else if (temp.includes(calVal[calVal.length - 1]) && temp.includes(val)) {
      return;
    } else if (val === "=") {
      try {
        let result = "";
        if (temp.includes(calVal[calVal.length - 1])) {
          result = calVal + "0";
          result = eval(result);
          setDisplay(result);
        } else {
          result = eval(calVal);
          setDisplay(result);
        }
      } catch (err) {
        setDisplay("Error");
        setTimeout(() => {
          setDisplay("0");
        }, 2000);
      }
    } else if (val === "X") {
      if (!digits.includes(calVal[0])) {
        return;
      }
      const newValue = calVal + "*";
      setDisplay(newValue);
    } else if (val === "+/-") {
      if (!digits.includes(calVal[0])) {
        return;
      }
      if (calVal[0] === "-" || calVal < 0) {
        return;
      }
      let newValue = "-" + calVal;
      if (parseInt(calVal) == 0) {
        newValue = val;
      }
      setDisplay(newValue);
    } else if (val === "0" && parseInt(calVal) == 0) {
      setDisplay("0");
    } else {
      if (operators.includes(val) && !digits.includes(calVal[0])) {
        return;
      }
      if (val === "." && calVal.includes(".")) {
        return;
      }
      let newValue = calVal + val;
      if (calVal.length == 1 && calVal[0] == 0) {
        console.log(calVal.length);
        newValue = val;
      }
      if (parseInt(calVal) == 0) {
        newValue = val;
      }
      setDisplay(newValue);
    }
  };
  return (
    <ComponentContainer>
      <Screen displayValue={calVal} />
      <Keys onButtonClick={onButtonClick} />
    </ComponentContainer>
  );
}

export default App;
