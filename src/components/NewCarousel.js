import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NewCarousel = ({ children }) => {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };
  const handleDragStart = e => e.preventDefault();

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={4000}
        animationDuration={4000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={children}
        paddingRight={40}
      />
    </Contain>
  );
};

export default NewCarousel;
