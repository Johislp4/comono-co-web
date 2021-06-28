import React from "react";
import Image from "next/image";
import {PortableText} from '../lib/sanity'

const Team = ({ bio }) => {
  return (
    <div className="parallax-container">
      <div className="image image-background">
        <img src={bio.imageTeam} alt="Comono Team" />
      </div>

      <div className="image image-middle">
        <img src="/top-wave.svg" />
      </div>

      <div className="image image-foreground">
        <div className="container-description">

          <div className="title">
            <div className="block"></div>
            <h2 className="bio-title">{bio.title}</h2>
          </div>
          
          <div className="description">
                <div className="portableText">
                    <PortableText blocks={bio?.description}/>
                    <button><span>Descubre más</span><span><img src="/row-right.svg" alt="row-right"/></span></button>   
                </div>
                
               
          </div>
          {/* <img src="/bottom-wave.svg" /> */}
        </div>
        <div className="bottom"></div>
      </div>

      <style jsx>{`
        .parallax-container {
          margin-top: 2rem;
          margin-bottom: 4rem;
          width: 100%;
          height: 1000px;
          overflow-x: hidden;
          overflow-y: scroll;
          position: relative;
          /* border: solid 1px gray;
          border-radius: 12px; */
          perspective: 6.5px;
        }

        .image {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
        }

        .parallax-container::-webkit-scrollbar{
          width:12px;
        }

        .image-background {
          transform: translateZ(4.3px) scale(0.4);
          bottom: 0px;
          top: 40px;
          z-index: 1;
        }

        .image-background > img {
          width: 110%;
          height: 100%;
          transform: translateZ(5px);
        }

        .image-middle {
          width: 100%;
          top: 0;
          z-index: 3;
        }

        .image-foreground {
          width: 100%;
          bottom: 0;
          background-image: url("/bottom-wave.svg");
          background-size: cover;
          height: 400px;
          z-index: 2;
        }

        img {
          width: 100%;
        }

        .container-description {
      
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 0.7fr 1fr;
        }

        .title{
            grid-column: 1/2;
            grid-row:1/2;
            display:grid;
            grid-template-columns: 80px 1fr;
            align-self: end;
            
        }

        .block {
          display: block;
          width: 66px;
          height: 50px;
          background-color: #383838;
          margin: auto 2rem auto 0;
          grid-column: 1/2
        }

        .bio-title{
            grid-column: 2/3;
        }

        .description{
            grid-column: 1/3;
            grid-row:2/3;
            display:grid;
            grid-template-columns: 80px 1fr;
        }

        .portableText{
           grid-column: 2/3;
           align-self:center;
           padding-right: 4rem;
           align-self:end;
            
        }

        button{
            display:flex;
            padding: 1rem;
            margin: 1rem 0;
            border:none;
        }

        button > span {
            margin: 1rem;
        }
        .bottom{

        position:relative;
        bottom:0;
        background:white;
        height:40px;
        }
        

       
        }
      `}</style>
    </div>
  );
};

export default Team;
