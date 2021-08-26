import React from "react";

const ServiceTextPlane = ({locale}) => {
  return (

    
    <>
     <div className="service-container">
        {locale === "es-CO" ?
        <div className="service-title">
          <h1 className="title one">¿Por qué un </h1>
          <h1 className="title two">software a la medida</h1>
          <h1 className="title three">es tu mejor opción?</h1>
        </div>
        :
        <div className="service-title">
          <h1 className="title one">Why choose</h1>
          <h1 className="title two">custom software as</h1>
          <h1 className="title three">the best option?</h1>
        </div>
        }
        {
          locale === "es-CO" ?
          <p> Un software <b>estándar o “cerrado”</b> es un software genérico, con
          un costo más bajo, sin embargo, tiene muchas funciones que
          probablemente tu empresa no requiera y por ende, no vayas a utilizar.
          <br /> <br />
          Un <b>software a la medida, </b> se adapta a tu tipo de empresa y los
          procesos que ya funcionan, incluso si ya existe un sistema
          implementado. Porque se lleva a cabo un proceso de análisis y estudio
          de tus necesidades para que tu software se pueda desarrollar, crear,
          implementar u optimizar. Básicamente, lo que tienes en tu mente, lo
          llevamos a la realidad.</p> 
          : 
          <p></p>
        }
      
      </div>
     
      <style jsx>{`
        .service-container {
          min-height: 30rem;
          max-width: 64rem;
          margin: auto;
          background-image: linear-gradient(
              to right bottom,
              rgba(0, 0, 0, 0),
              rgba(255, 255, 255, 1)
            ),
            url("/bg-rayas.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right;
          padding:2rem;
          color: black;
        }

        .service-title {
          max-width: 60rem;
          width: 100%;
          margin-bottom: 2rem;
        }

        .title {
          color: #afd342;
          font-size: 3rem;
        }

        .two {
          text-align: center;
        }

        .three {
          text-align: end;
        }

        p {
          text-align: justify;
          line-height: 1.5;
          -webkit-columns: 25rem 2;
          -moz-columns: 25rem 2;
          columns: 25rem 2;
          -webkit-column-gap: 40px;
          -moz-column-gap: 40px;
          column-gap: 40px;
          font-family: "Lexend Exa", sans-serif;
          
        }

        @media (max-width: 540px) {
          .service-container {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceTextPlane;
