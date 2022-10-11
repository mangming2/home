import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './detailCarousel.css';

const Contain = styled.div`
  display: flex;
  align-items: center;
  margin: 5vw 11.7vw;
`;

const DetailPageCarousel = ({ children }) => {
  const responsive = {
    0: {
      items: 1,
    },
    650: {
      items: 1,
    },
    980: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  };

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={true}
        animationDuration={2000}
        autoPlayInterval={2500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={children}
        fadeOutAnimation={true}
      />
    </Contain>
  );
};

export default DetailPageCarousel;
