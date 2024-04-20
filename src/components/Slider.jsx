import styles from "./Slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { peopleObjectList } from "../utils/peopleObjectList";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = ({ handleShowToast }) => {
  const peopleList = peopleObjectList;

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={false}
        partialVisible={false}
      >
        {peopleList.map((person, index) => {
          return (
            <div
              onClick={() => handleShowToast(person)}
              className={styles.slider}
              key={index}
            >
              <img
                src={person.foto}
                alt="movie"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
