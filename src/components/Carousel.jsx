import styles from "./Carousel.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { filterFirstNElements } from "../utils/peopleObjectList";

function ControlledCarousel({ children, handleToast }) {
  const [firstIndex, setFirstIndex] = useState(0);

  //Carga cada 10 elementos
  const peopleList = filterFirstNElements(firstIndex, firstIndex + 11);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    if (selectedIndex > 9) {
      setFirstIndex((i) => i + 10);
      setIndex(0);
    } else {
      setIndex(selectedIndex);
    }
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
      indicators={false}
    >
      {children}
      {peopleList.map((obj) => (
        <Carousel.Item
          key={obj.id}
          className={styles.carouselItem}
          style={{ backgroundImage: `url(${obj.foto})` }}
          onClick={() => handleToast(obj.id)}
        />
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
