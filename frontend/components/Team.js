import React from "react";
import Link from 'next/link'
import { PortableText } from "../lib/sanity";

const Team = ({ bio, locale }) => {
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
          <Link href ="/nosotros">
          <a>
          <button>
            <span className="btn">{ locale === 'es-CO' ? 'Descubre más' : 'More' }</span>
            <span>
              <img src="/row-right.svg" alt="row-right" />
            </span>
          </button>
          </a>
          
          </Link>
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
          font-family:'Lexend Exa', sans-serif;
          font-size:3rem;
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
          font-family: 'Lexend Tera', sans-serif;
          font-size: 1.1rem;
          line-height: 1.5 ;
          font-weight:400;
          
        }

        .btn{
          font-family: 'Lexend Exa', sans-serif;
          font-size: 1.5rem;
          font-weight:600;
          cursor: pointer;
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
          cursor: pointer;
        }

        @media (max-width: 540px) {
          .parallax-container{
            background-size: contain;
            background-attachment: scroll;
            width: 100vw;
            min-height:400px;
             
          }

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
          }

          .bio-title{
            font-size: 2rem;
          }

          .block {
            width:40px;
            height: 30px;
            margin-right:30px;
          }
          
          .wave-top{
            top:-2px;
          }
          .wave-bottom {
            background-image: none;
          }

          .btn{
            font-size:1.2rem !important;

          }

          button > span > img{
            width: 20px;
            padding-bottom: 0.3rem;
           
            
          
         
          }
        }
      `}</style>
    </>
  );
};

export default Team;
