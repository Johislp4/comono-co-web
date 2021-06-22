import React from "react";
import Image from 'next/image'

const services = () => {
    

    
  return (
    <section>
      <div className="container-head">
        <div className="bg-black"></div>
        <div className="bg-gray"> Conoce como lo hacemos ...</div>
      </div>

      <main className="container-service">

 
      

      </main>

      <style jsx>{`
      
      section{
         width:100%;
         margin-top:10px;
      }

      .container-head{
          height: 173px;
          width:100%;

          position: relative;
      }

      .bg-black{
          background-color: black;
          height: 86.5px;
          width:100%;
          transform: skewY(3deg);
          position:absolute;
          bottom:26px;

      }

      .bg-gray{
          background-color: #F4F4F4;
          height: 86.5px;
          width:100%;
          transform: skewY(-4deg);
          position:absolute;
          bottom:35px;  
          font-size: 2rem;
          display:flex;
          justify-content:center;
          align-items:center;     
    }

    .container-service{
        border: 1px solid #dcdacb;
        border-radius: 4px;
        height: 300px;
    }
      }

      `}</style>
    </section>
  );
};

export default services;
