import React from "react";

const ServiceSoftware = () => {
  return (
    <>
      <div className="container d-flex">
        <div className="vs"></div>
        <div className="container-standard-soft d-flex">
          <h1>Software estándar</h1>
        </div>
        <div className="container-custom-soft">
          <div className="container-img">
            <img alt="custom-soft" src="/apple-fit.png"/>
          </div>
          <div className="custom-soft">
            <h1>Software a la medida</h1>
            <p>
              Es importante que conozcas sobre el desarrollo de los productos
              digitales y de los servicios que vas a adquirir; que reconozcas
              cuál es el que mejor se ajusta a las soluciones que necesitas y
              cuáles son funcionales para tu tipo de empresa, así, adquieres el
              que realmente necesites.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
            padding:2rem;
            position:relative;
            margin:auto;
            justify-content:center;
            max-width:64rem;
            justify-content: space-between;
            
           
        }

        .container-standard-soft,
        .container-custom-soft {
          width: 50%;
          max-width: 32rem;
        }

        .container-standard-soft{
          background-image: linear-gradient(
            to right bottom,
            rgba(255,255,255,0.5),
            rgba(255,255,255,1)
          ),url('/bg-rayas.svg');
          background-size: contain;
          background-repeat: no-repeat;
         justify-content: center;
         align-items:center;
          color: black;
        }
        .container-standard-soft h1{
          font-size:3rem;
        }

        .container-custom-soft {
          width: 50%;
          max-width: 25rem;
        }

        .custom-soft{
            margin-top:2rem;
        }

        .custom-soft h1{
          font-size:2.5rem;
          
          margin-bottom: 2rem;
        }

        .custom-soft >  p, .jsx-2498948556{
          line-height: 1.5;
        }

        .vs{
            position:absolute;
            top:50%;
            bottom:20%;
            right:50%;
            left:40%;
            margin:auto;
            width: 150px;
            height:150px;
            background-image: url('/against.svg');
            background-size: contain;
            background-position:center;
            background-repeat: no-repeat;
        }

        .container-img{
         height:auto;
         max-width:25rem;
         width:400px;
         
        }
        .container-img img{
          width:100%;
        }
      `}</style>
    </>
  );
};

export default ServiceSoftware;
