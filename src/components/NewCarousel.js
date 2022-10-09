import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Contain = styled.div`
  width: 78%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const NewCarousel = ({ children }) => {
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  };
  const padding = {
    paddingLeft: 550,
    paddingRight: 0,
  };

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={true}
        animationDuration={2000}
        autoPlayInterval={3000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={children}
        fadeOutAnimation={true}
        paddingLeft={50}
      />
    </Contain>
  );
};

export default NewCarousel;
