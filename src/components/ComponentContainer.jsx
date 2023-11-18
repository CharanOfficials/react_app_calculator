import Styles from "../componentStyles/ComponentContainer.module.css";
const ComponentContainer = ({ children }) => {
  return (
    <div className={`container-sm ${Styles.outer_container}`}>{children}</div>
  );
};
export default ComponentContainer;
