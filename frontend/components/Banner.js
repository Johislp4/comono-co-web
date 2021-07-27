import React from "react";

const Banner = ({ text }) => {

  return (

    <section className="Hero">
      <div className="block"></div>
      <div className="background-text"> {text}
        <div className="banner-text"> {text} </div>
      </div>

      <div className="bg-pieces"></div>

      <style jsx>{`
          .Hero{
            display:grid;
            grid-template-columns:
              [full-start] minmax(0, 130px)
              [first-main] minmax(0, 1fr)
              [second-main] minmax(0, 1fr)
              [thrid-main] minmax(1rem, 130px)
              [full-end];
            grid-gap: 1rem;
            width:100%;
            position: relative;
          }

          .block {
            grid-column: [full-start]/[first-main];
            width: 8rem;
            height: 3rem;
            background-color: #383838;
            margin-top: 150px;
          }

          .bg-pieces {
            grid-column: second-main/full-end;
            background-image: url("/bg-banner.svg");
            background-size: 100% 100%;
            background-position: -10px center;
            background-repeat: no-repeat;
          }

          .background-text{
          color: white;
          font-size: 5vw;
          // font-size:3rem;
          font-weight: 700;
          width: 120%;
          position: relative;
          padding: 4rem 0;
          }

          .banner-text{
            position: absolute;
            top:100px;
            left: 0;
            font-size:2.5vw;
            // font-size: 1.875rem;
            font-weight: 700;
            width: 50%;
            line-height: 1.5;
            color: black;
          }

          @media(max-width: 540px){
            .Hero{
              display:flex;
              height:100vh;
            }

            .block{
              display:none
            }

            .background-text{
              font-size: 3.5rem;
              margin-left:50px;
              margin-rigth:0;
              padding: 3rem 0;
            }

            .banner-text{
              font-size: 2.5rem;
              top: 5rem;
              width: 90%;
            }

            .bg-pieces{
              display:none;
            }
          }
        `}</style>
    </section>

  );
};

export default Banner;
