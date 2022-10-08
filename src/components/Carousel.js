import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';

const Arrow = props => {
  const { className, style, onClick, isRight } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        border: '2px solid #fff',
        borderRadius: '50%',
        padding: isRight ? '2px 0 0 3px' : '4px',
        paddingLeft: '3px',
        paddingTop: '2px',
      }}
      onClick={onClick}>
      <img src={isRight ? arrowRight : arrowLeft} alt={isRight ? '다음' : '이전'} style={{ width: '15px' }} />
    </div>
  );
};

const settings = {
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  initialSlide: 0,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  nextArrow: <Arrow isRight={true} />,
  prevArrow: <Arrow isRight={false} />,
  responsive: [
    {
      breakpoint: 1024,
      sliderSettings: {
        slidesToShow: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      sliderSettings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      sliderSettings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SlideTitle = styled.p`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const Container = styled.div`
  margin-right: 25px;
`;

const StyledSlider = styled(Slider)`
  height: 350px;
  margin-left: 10vw;
  margin-right: 10vw;
  position: relative;
  .slick-slide {
    float: left;
    min-height: 1px;
  }

  .slick-track {
    display: flex;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    top: 83%;
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: 45%;
  }

  .slick-next {
    left: 50%;
  }
`;

function Carousel({ children }) {
  return (
    <Container>
      <SlideTitle>최근 미디엄 글</SlideTitle>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </Container>
  );
}

export default Carousel;
