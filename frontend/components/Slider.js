import * as React from "react";
import CardEmployee from '../components/CardEmployee'
import { useWindowSize } from "../hooks/useWindowSize";


const Slider = ({ Slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const length = Slides.length;
  const size = useWindowSize()

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  // };

  const moveDot = (index) => {
    setCurrentSlide(index);
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) null;

  return (
    <>
      <section className="slider" > 
       {/* { size.width > 769 && <><div className="left-arrow" onClick={prevSlide}>
          <img src="/arrow-left-slides.svg" className="arrow" />
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          <img src="/arrow-right-slides.svg" className="arrow" />
        </div></>} */}

        {Slides.sort((a, b) => a.order - b.order).map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide active" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <CardEmployee employee={slide }  index={index}  />
              )}
            </div>
          );
        })}

        <ul className="container-dots">
          {Array.from({ length }).map((_, index) => (
            <li
              onClick={() => moveDot(index)}
              className={currentSlide === index ? "dot active" : "dot"}
              key={index}
            ></li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .slider {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;   
        }

        .slide {
          opacity: 0;
          transition-duration: 10ms ease;
          width:100%;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 10ms;
          /* transform: scale(1.08); */
        }

        .right-arrow {
          position: absolute;
          top: 50%;
          right: 32px;
          font-size: 3rem;
          color: black;
          z-index: 10;
          cursor: pointer;
          user-select: none;
        }

        .left-arrow {
          position: absolute;
          top: 50%;
          left: 32px;
          font-size: 3rem;
          z-index: 10;
          cursor: pointer;
          user-select: none;
        }

        .arrow {
          width: 70px;
        }

        .container-dots {
          display: flex;
          justify-content: center;
          position:absolute;
          bottom:3rem;
          left:0;
          right:0;
       
        }

        .dot {
          height: 10px;
          width: 10px;
          background: transparent;
          
          background: rgba(255,255,255,0.7);
          margin: 0 4px;
          border-radius: 100%;
          display: inline-block;
        }

        .active{
          background: #106bdd;
          
        }

      `}</style>
    </>
  );
};

export default Slider;
