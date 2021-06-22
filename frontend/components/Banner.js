import React from "react";

const Banner = ({ text }) => {
  return (
    <div className="container-banner">
      <div className="container-banner-text">
        <div className="block"></div>
        {text}
      </div>
      <div className="bg-pieces"></div>
      
      <style jsx>{`
        .container-banner {
          position: relative;
          overflow-x: hidden;
          width: 100%;
          height: 400px;
          border: 1px solid #dcdacb;
          border-radius: 4px;
          margin-top: 0rem;
        }

        .container-banner-text {
          max-width: 100%;
          outline: solid 1px black;
          font-size: 3.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 4rem 0 0;
        }

        .block {
          display: block;
          width: 135px;
          height: 50px;
          background-color: #383838;
          margin: auto 2rem auto 0;
        }

        .bg-pieces {
          position: absolute;
          top: 0;
          right: -55px;
          height: 100%;
          width: 30%;
          background-image: url("/pieces.svg");
          background-size: contain;
        }
      `}</style>
    </div>
  );
};

export default Banner;
