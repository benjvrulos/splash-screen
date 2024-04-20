import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);
  return (
    <div className={styles.loginContainer}>
      <Form
        onSubmit={handleSubmit}
        className={styles.login}
      >
        <div className={styles.loginHeader}>
          <h1 className={styles.title}>Iniciar sesión</h1>
          <Logo style={styles.loginLogo} />
        </div>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Correo</Form.Label>
          <Form.Control
            isInvalid={error}
            type="email"
            placeholder="admin@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-1"
          controlId="formBasicPassword"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            isInvalid={error}
            type="password"
            placeholder="***************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.btnContainer}>
          <Button
            className="col-md-3"
            variant="secondary"
            type="submit"
          >
            Ingresar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
