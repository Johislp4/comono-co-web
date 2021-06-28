import React from "react";
import Image from "next/image";

const services = () => {
  const [services, setService] = React.useState({
    serviceOne: false,
    serviceTwo: false,
    serviceThree: false,
  });

  const handleClick = (e) => {
    const serviceName = e.target.dataset.name;
    setService({
      ...services,
      [serviceName]: !services[serviceName],
    });
  };

  return (
    <section>
      <div className="container-head">
        <div className="bg-black"></div>
        <div className="bg-gray"> Conoce como lo hacemos ...</div>
      </div>

      <main className="container-service">
        <div className="service">
          <div className="service-content">
            <div className="service-head">
              <img src="/row-right.svg" alt="row-right" />
              <span data-name="serviceOne" onClick={handleClick}>
                Soluciones en la nube
              </span>
            </div>
            {services.serviceOne && (
              <div className={`detail-services`}>
                Usando tecnología de desarrollo de software en la nube,
                diseñamos e implementamos aplicaciones sin que necesites
                infraestructura tecnológica.
              </div>
            )}
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <div className="service-head">
              <img src="/row-right.svg" alt="row-right" />
              <span data-name="serviceTwo" onClick={handleClick}>
                Páginas web y aplicaciones web
              </span>
            </div>
            {services.serviceTwo && (
              <div className="detail-services">
                Nos encargamos del diseño y programación de tu página web,
                haciendo que cada acción cuente
              </div>
            )}
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <div className="service-head">
              <img src="/row-right.svg" alt="row-right" />
              <span data-name="serviceThree" onClick={handleClick}>
                Software a la medida
              </span>
            </div>
            {services.serviceThree && (
              <div className="detail-services">
                Nos enfocamos en tus necesidades y presupuesto para desarrollar
                software y soluciones digitales
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`


      .service{
        display: flex;

        flex-grow:1;
        flex-shrink:3;

      }

      .service-head{
        display:flex;
        justify-content: flex-end;
        font-size:3rem;
        color:white;
        width:100%;
      }

     

      .service-content{
        width: 100%;
        
      }

      .detail-services{
        background-color: pink;
        height: 200px;
      }
      
      section{
         width:100%;
         margin-top:10px;
         height:auto;
        
         position: relative;
         
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
       
        height: calc(100% - 173px);
        display:flex;
        flex-direction: column;
        background-color: black;
        transform: translateY(0px);
     
        
    }
      }

      `}</style>
    </section>
  );
};

export default services;
