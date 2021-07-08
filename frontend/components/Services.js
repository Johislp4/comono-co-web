import React from "react";

const services = () => {
  const [services, setService] = React.useState({
    ["cloud-service"]: false,
    ["app-service"]: false,
    ["software-service"]: false,
  });

  const handleClick = (e) => {
    const serviceName = e.target.dataset.name;
    setService({
      ["cloud-service"]: false,
      ["app-service"]: false,
      ["software-service"]: false,
      [serviceName]: !services[serviceName],
    });
  };

  return (
    <main>
      <div className="container-head">
        <div className="bg-black"></div>
        <div className="bg-gray"> Conoce como lo hacemos ...</div>
      </div>

      <div className="container-service">
        
        <section className="service cloud-service" >
          <div className="head-service d-flex align-items-center">
            <img src="/arrow-white.svg" alt="arrow"/>
            <div className="title-service" data-name="cloud-service" onClick={handleClick}> Soluciones en la nube </div>
          </div>
          {
            services["cloud-service"] &&
            <p>
            Usando tecnología de desarrollo de software en la nube,
                diseñamos e implementamos aplicaciones sin que necesites
                infraestructura tecnológica
            </p>
          }
         
        </section>

        <section className="service app-service">
        <div className="head-service d-flex align-items-center">
            <img src="/arrow-white.svg" alt="arrow"/>
            <div className="title-service" data-name="app-service" onClick={handleClick}> Soluciones en la nube </div>
          </div>
          {
            services["app-service"] &&
            <p>
                Nos encargamos del diseño y programación de tu página web,
                haciendo que cada acción cuente
            </p>
          }
        </section>

        <section className="service software-service">
        <div className="head-service d-flex align-items-center">
            <img src="/arrow-white.svg" alt="arrow"/>
            <div className="title-service" data-name="software-service" onClick={handleClick}> Soluciones en la nube </div>
          </div>
          {
            services["software-service"] &&
            <p>
                Nos enfocamos en tus necesidades y presupuesto para desarrollar
                software y soluciones digitales
            </p>
          }
        </section>
      </div>

      <style jsx>{`

        .container-head{
          height: 173px;
          width:100%;

          position: relative;
      }

      .bg-black{
          background-color: black;
          height: 88.5px;
          width:100%;
          transform: skewY(1deg);
          position:absolute;
          bottom:0px;

      }

      .bg-gray{
          background-color: #F4F4F4;
          height: 86.5px;
          width:100%;
          transform: skewY(-4deg);
          position:absolute;
          bottom:0px;  
          font-size: 2rem;
          display:flex;
          justify-content:center;
          align-items:center;     
    }

      .service{
        height: auto;
        background-size:cover;
        background-position: top;
      }

      .cloud-service{
        background-image: url('/services-blue-screen.svg');
        display:flex;
        flex-direction: column;
        
      }

      .head-service{
        height: 200px;
        color: white;
        justify-content: flex-end;
      }

      .title-service {
        font-size: 2rem;
        margin: auto  4.5rem;
        cursor:pointer;
      }

      .service > p {
        height:300px;
        color: white;
        width: 66%;
        margin-right: 0;
        margin-left: auto;
       
      }

      .app-service{
        background-image: url('/services-purple-screen.svg');
      }

      .software-service{
        background-image: url('/services-green-screen.svg');
      }
      }

      `}</style>
    </main>
  );
};

export default services;
