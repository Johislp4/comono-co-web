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
              [full-start] minmax(1rem, 130px)
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
            display: block;
            width: 100%;
            height: 50px;
            background-color: #383838;
            margin-top: 150px;
          }

          .bg-pieces {
            grid-column: second-main/full-end;
            background-image: url("/bg-banner.svg");
            background-size: cover;
            background-position: top;
           
          }

          .background-text{
           color: white;
          font-size:6vw;
          font-weight: 700;
          z-index: 0;
          width: 150%;
          position: relative;
          padding: 1.5rem 0;
          }

          .banner-text{
            position: absolute;
            top:100px;
            left: 0;
            font-size:2.5vw;
            font-weight: 700;
            width: 50%;
            line-height: 1.5;
            z-index:10;
            color: black;
          }

         
        `}</style>

       
      </section>

  );
};

export default Banner;
