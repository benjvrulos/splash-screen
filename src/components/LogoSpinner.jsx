import Spinner from "react-bootstrap/Spinner";
import styles from "./Logo.module.css";
import Logo from "./Logo";
function LogoSpinner() {
  return (
    <div className={styles.logoContainer}>
      <Logo />
      <Spinner animation="border" />;
    </div>
  );
}

export default LogoSpinner;
