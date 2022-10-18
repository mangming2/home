import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './detailCarousel.css';

const Contain = styled.div`
  width: 76.6vw;
  display: flex;
  align-items: center;
  margin: 3vw 0 5vw 0;
  @media all and (max-width: 768px) {
    display: none;
  }
`;

const MobileContain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media all and (min-width: 768px) {
    display: none;
  }
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

  const responsiveMobile = {
    0: {
      items: 1,
    },
    650: {
      items: 1,
    },
  };

  return (
    <>
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
      <MobileContain>
        <AliceCarousel
          mouseTracking
          infinite={true}
          animationDuration={2000}
          autoPlayInterval={2500}
          disableDotsControls
          disableButtonsControls
          responsive={responsiveMobile}
          autoPlay
          items={children}
          fadeOutAnimation={true}
        />
      </MobileContain>
    </>
  );
};

export default DetailPageCarousel;
