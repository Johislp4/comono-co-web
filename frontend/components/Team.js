import React from "react";

import { PortableText } from "../lib/sanity";

const Team = ({ bio }) => {
  return (
    <>
      <div className="parallax-container">
        <div className="wave-top"></div>
        <div className="image">
          <img className="team-image" src={bio.imageTeam} alt="Comono Team" />
        </div>
        <div className="wave-bottom">
          <section className="head-wave-bottom">
            <div className="block"></div>
            <h1 className="bio-title">{bio.title}</h1>
          </section>
        </div>
      </div>

      <div className="description">
        <div className="portableText">
          
          <PortableText blocks={bio?.description} />
          
          <button>
            <span>Descubre más</span>
            <span>
              <img src="/row-right.svg" alt="row-right" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .parallax-container {
       
          height: 100vh;
          position: relative;
          width: 100%;
          background-attachment: fixed;
          overflow-x: hidden;
          overflow-y: sroll;
          perspective: 4px;
          perspective-origin: 50%;
        }

        .wave-top {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          margin: auto 0;
          background-image: url("/wave-top.svg");
          background-size: cover;
          background-position: top;
          height: 130px;

          z-index: 3;
        }

        .wave-bottom {
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url("/wave-bottom.svg");
          background-size: cover;

          height: 45%;

          z-index: 3;
        }

        .head-wave-bottom {
          width: 50%;
          height: 100%;
          display: grid;
          grid-template-columns: [start-full] minmax(1rem, 130px) [main] minmax(
              0,
              1fr
            ) [end-full];
          grid-gap: 1rem;
        }

        .block {
          display: block;
          width: 100%;
          height: 50px;
          background-color: #383838;
          grid-column: start-full / main;
          align-self: center;
        }

        .bio-title {
          grid-column: main / end-full;
          align-self: center;
          font-size: 3rem;
        }

        .image {
          margin-bottom: auto;
          height: calc(100%);
          width: 100%;
        }

        .team-image {
         
          width: 100%;
        }


        .description{
          background: #fff;
          display: grid;
          grid-template-columns: 
          [start-full] minmax(1rem, 130px) [main] minmax(0, 1fr) [end-full];
          grid-gap: 1rem;
          
        }

        .portableText{
          grid-column: main;
          padding: 0 3rem 3rem 0;
          font-size: 1.4rem;
        }

        button{
          background: #fff;
          margin: 2rem 0;
          border:none;
          font-size: 2.5rem;
          padding: 1rem  1rem 1 1rem 0;
        }
      `}</style>
    </>
  );
};

export default Team;
