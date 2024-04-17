import styles from "./Login.module.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <Stack
      gap={2}
      className={`col-md-5 mx-auto ${styles.login}`}
    >
      <h2 className={styles.title}>Bienvenido</h2>
      <Button variant="secondary">
        Ingresar con <FaGoogle />
      </Button>
      <Button variant="secondary">
        Ingresar con <FaFacebook />
      </Button>
    </Stack>
  );
}

export default Login;
