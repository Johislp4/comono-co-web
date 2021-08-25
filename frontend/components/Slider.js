import * as React from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardEmployee from '../components/CardEmployee'
import { useWindowSize } from "../hooks/useWindowSize";


const Slider = ({ dataSlides }) => {

  const  { locale }  = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const Slides = locale === 'es-CO' ? dataSlides['es-CO'] : dataSlides['en-US'];
  const length =   Slides.length;


  return(
    <Carousel 
    dynamicHeight={false}  
    showThumbs={false}
    infiniteLoop={true}
    showStatus={false}
    swipeable={true}
    showArrows={false}
    >
      {
        Slides.sort((a, b) => a.order - b.order).map((slide, index) => {
          return <CardEmployee employee={slide }  index={index}  />
        })
      }
    </Carousel>
  )
  
};

export default Slider;
