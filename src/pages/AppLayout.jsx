import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./AppLayout.module.css";
import Slider from "../components/Slider";
import Button from "react-bootstrap/Button";

function AppLayout() {
  const { user, logout } = useAuth();

  const [show, setShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});

  function showToast(person) {
    setSelectedPerson(person);
    setShow(true);
  }

  return (
    <div className={styles.layoutContainer}>
      <h2 className={styles.title}>Bienvenido {user}</h2>
      <Slider handleShowToast={showToast} />
      {show && <p className={styles.toastLabel}>{selectedPerson?.nombre}</p>}
      <div className={styles.btnContainer}>
        <Button
          onClick={logout}
          className="col-md-3"
          variant="danger"
          type="submit"
        >
          Salir
        </Button>
      </div>
    </div>
  );
}

export default AppLayout;
