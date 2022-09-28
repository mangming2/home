import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import animationData from '../animations/98428-arrow-down-purple.json';

const ArrowAnimation = props => {
  const container = document.querySelector('#container');
  useEffect(() => {
    Lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <>
      <div id="container" style={{ width: '200px' }}></div>
    </>
  );
};

export default ArrowAnimation;
