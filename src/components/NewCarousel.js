import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Contain = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NewCarousel = ({ children }) => {
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={true}
        animationDuration={3000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={children}
      />
    </Contain>
  );
};

export default NewCarousel;
