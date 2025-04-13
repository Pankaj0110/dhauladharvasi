/**
 * All Rights Reserved with Dhauladhar Vasi (DhauladharVasi)
 */

import { useEffect, useRef, useState } from 'react';
import classes from './Carousel.module.less';

const timerInSec = 2;
const elements = [
  <div>Image1</div>,
  <div>Image2</div>,
  <div>Image3</div>
];
const Carousel = () => {
  const [currentImageIndex, setImageindex] = useState(0)

  const intervalRef = useRef();

  if (currentImageIndex >= elements.length) {
    setImageindex(0);
  }
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setImageindex((prev) => prev + 1)
    }, timerInSec * 1000)

    return () => clearInterval(intervalRef.current)
  })
  return (
    <div className={classes.carousel}>
      {elements[currentImageIndex]}
    </div>
  )
}

export default Carousel;
