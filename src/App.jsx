import { useState } from "react";
import ControlledCarousel from "./components/Carousel";
import Login from "./components/Login";

import { peopleObjectList } from "./utils/peopleObjectList";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [infoToast, setInfoToast] = useState({});
  function handleToast(id) {
    setShowToast(true);
    setInfoToast(peopleObjectList.find((obj) => obj.id === id));
  }

  return (
    <>
      {showToast && <div className="nombreToast">Nombre : {infoToast.nombre}</div>}
      <ControlledCarousel handleToast={handleToast} />
      <Login></Login>
    </>
  );
}

export default App;
