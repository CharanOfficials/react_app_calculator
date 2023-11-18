import { useRef } from "react";
import Styles from "../componentStyles/Keys.module.css";
const Keys = () => {
  const value = useRef();
  return (
    <table className={`table ${Styles.custom_table}`}>
      <thead>
        <tr>
          <td scope="col">
            <button
              className={`btn btn-light ${Styles.keys}`}
              value={"C"}
              type="button"
              onClick={() => console.log(value)}
            >
              C
            </button>
          </td>
          <td scope="col">
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              +/-
            </button>
          </td>
          <td className={Styles.operation} scope="col">
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              %
            </button>
          </td>
          <td scope="col">
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              /
            </button>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              7
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              8
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              9
            </button>
          </td>
          <td>
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              X
            </button>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              4
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              5
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              6
            </button>
          </td>
          <td>
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              1
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              2
            </button>
          </td>
          <td>
            <button type="button" className={`btn btn-light ${Styles.keys}`}>
              3
            </button>
          </td>
          <td>
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan={2} scope="row">
            <button
              style={{ width: "10rem" }}
              type="button"
              className={`btn btn-light ${Styles.keys}`}
            >
              0
            </button>
          </td>
          <td>
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              .
            </button>
          </td>

          <td>
            <button
              className={`btn btn-light ${Styles.operation}`}
              type="button"
            >
              =
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Keys;
