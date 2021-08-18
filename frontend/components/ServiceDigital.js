import React from "react";
import { PortableText, urlFor } from "../lib/sanity";

const ServiceDigital = ({
  borderRadius = "22%",
  minHeight = "65vh",
  minWidth = "100%",
  background = "#C6ED88",
  rotate = "60deg",
  marginLeft = "0",
  word,
  info
}) => {

  

  const { serviceInfo , serviceAdvantage , serviceExtract } = info




  return (
    <>
      <section className="bg">
        <div className="left-side">
          <div className="block"></div>
          <div className="service-title"> 
            <div className="title-word one">{word?.one}</div>
            <div className="title-word two">{word?.two}</div>
            <div className="title-word three">{word?.three}</div>
            <div className="title-word four">{word?.four}</div>
          
           </div>
        </div>
        <div className="right-side" style={{ background }}>
          <div className="service-container">
            <div
              className="service-shape"
              style={{
                borderRadius,
                minHeight,
                minWidth,
                transform: `rotate(${rotate})`,
                marginLeft,
              }}
            >
              <div
                className="service-info"
                style={{ transform: `rotate(-${rotate})` }}
              >
                <PortableText blocks={serviceExtract} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg {
          display: grid;
          grid-template-columns:
            [col-start] minmax(0, 1fr)
            [col-two] 25rem
            [col-three] 25rem
            [col-four] minmax(0, 1fr)
            [col-end];
          position: relative;
          min-height: 100vh;
        
          
          margin: auto;
        }

        .left-side {
          grid-column-start: col-start;
          grid-column-end: col-three;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(25rem, 1fr);
        }

        .right-side {
          grid-column-start: col-three;
          grid-column-end: col-end;
          display: grid;
          grid-template-columns: minmax(25rem, 1fr) minmax(0, 1fr);
        }

        .block {
          grid-column-start: 1;
          grid-column-end: 2;
          height: 30px;
          max-width: 4rem;
          background: black;
          align-self: center;
        }

        .service-title {
          grid-column-start: 2;
          grid-column-end: 3;
          align-self: center;
          position: relative;
        
          height: 90%;
        }

        .title-word{
          position:absolute;
          font-family: 'Roboto', sans-serif;
          font-size: 3rem;
          font-weight:700;
          color: #04ACC5;
          
        }

        .one{
          top:30%;
          left:5%;
        }

        .two{
          top:40%;
          right:40%
        }

        .three{
          top:50%;
          left:20%;

        }
        .four{
          top:60%;
          left:40%;

        }

        .service-container {
          grid-column-start: 1;
          grid-column-end: 2;
          align-self: center;
        }

        .service-shape {
          background: white;
          min-height: 65vh;
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(60deg);
          padding: 1rem;
          position: relative;
        }

        .service-info {
          transform: rotate(-60deg);
          font-weight:200;
          line-height: 1.2;
          max-width: 70%;
          position: relative;
          font-family:'Lexend Exa', sans-serif;
          font-size:0.9rem;
        }

        .service-info::before {
          content: "";
          position: absolute;
          top: 1rem;
          left: -9rem;
          height: 3px;
          min-width: 7rem;
          background: black;
        }
      `}</style>
    </>
  );
};

export default ServiceDigital;
