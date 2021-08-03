import React from "react";
import { PortableText } from "../lib/sanity";

const Team = ({ bio }) => {
  return (
    <>
      <div
        className="parallax-container"
        style={{
          backgroundImage: `url(${bio.imageTeam})`
        }}>
        <div className="wave-top"></div>
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
        .parallax-container{
          position:relative;
          min-height: 110vh; 
          margin:auto;
          background-attachment: fixed;
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
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
        }

        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url("/wave-bottom.svg");
          background-size: cover;
          height: 45%;
        }

        .head-wave-bottom {
          width: 50%;
          height: 100%;
          display: grid;
          grid-template-columns: [start-full] minmax(min-content, max-content) [main] minmax(
              0,
              1fr
            ) [end-full];
          grid-gap: 1rem;
        }

        .block {
          display: block;
          width: 130px;
          height: 50px;
          background-color: #383838;
          grid-column: start-full / main;
          align-self: center;
        }

        .bio-title {
          // grid-column: main / end-full;
          align-self: center;
          font-size:2.2rem;
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
          display: grid;
          grid-template-columns: 
          [start-full] minmax(1rem, 130px) [main] minmax(0, 1fr) [end-full];
          grid-gap: 1rem;
          
        }

        .portableText{
          grid-column: main;
          padding: 0 3rem 3rem 0;
        }

        .portableText button span:first-child {
          margin-right: 1rem;
        }

        button{
          background: #fff;
          margin: 1rem 0;
          border:none;
          font-size: 2.5rem;
          padding: 0.5rem  1rem  0.5rem 0;
        }

        @media (max-width: 540px) {
          .description{
           display:flex;
          }

          .portableText {
            max-width:90%;
            margin: 0 auto;
            padding:0;
          }

          .portableText button span:first-child {
            font-size:2rem;
          }

          .head-wave-bottom {
            width:100%;
            margin-top:3rem;
          }

          .block {
            width:70px;
          }

          .wave-bottom {
            height: 30%;
          }
        }
      `}</style>
    </>
  );
};

export default Team;
