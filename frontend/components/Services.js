import * as React from "react";
import Button from "../UI/Button";

const services = ({dataService}) => {
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
          <div>
            <div className="head-service d-flex align-items-center" >
              <img src="/arrow-white.svg" alt="arrow" />
              <div className="title-service" data-name="cloud-service" onClick={handleClick}> {dataService[0].name} </div>
            </div>
            {
              services["cloud-service"] &&
              <div className="text-service">
              <p>
              {dataService[0].description}
              <Button url="/"/>
              </p> 
              </div>
            }
          </div>
        </section>

        <section className="service app-service">
          <div>
            <div className="head-service d-flex align-items-center">
              <img src="/arrow-white.svg" alt="arrow" />
              <div className="title-service" data-name="app-service" onClick={handleClick}> {dataService[2].name} </div>
            </div>
            {
              services["app-service"] &&
              <div className="text-service">
              <p>
              {dataService[2].description}
              <Button url="/" />
              </p>
              </div>
            }
          </div>
        </section>

        <section className="service software-service">
          <div>
            <div className="head-service d-flex align-items-center">
              <img src="/arrow-white.svg" alt="arrow" />
              <div className="title-service" data-name="software-service" onClick={handleClick}> {dataService[1].name} </div>
            </div>
            {
              services["software-service"] &&
              <div className="text-service">
              <p>
                {dataService[1].description}
                <Button url="/" />
              </p>
             
              </div>
            }
          </div>
        </section>
      </div>

      <style jsx>{`
        .container-head{
          height: 100px;
          width:100%;
          position: relative;
      }

      .bg-black{
          background-color: black;
          height: 6.5rem;
          width:100%;
          transform: skewY(1deg);
          position:absolute;
          bottom:0px;
      }

      .bg-gray{
          background-color: #F4F4F4;
          height: 6rem;
          width:100%;
          padding: 0 1rem;
          transform: skewY(-4deg);
          position:absolute;
          bottom:0;  
          font-family:'Lexend Exa', sans-serif;
          font-size: 2.5rem;
          line-height: 3.125rem;
          display:flex;
          justify-content:center;
          align-items:center;     
      }

      .service{
        height: auto;
        background-size:cover;
        background-position: top;
        font-weight:bold;
      }

      .cloud-service{
        background-image: url('/services-blue-screen.svg');
        display:flex;
        flex-direction: column;
        
      }

      .head-service{
        height:150px;
        color: white;
        justify-content: flex-end;
        align-content: flex-end;
        
      }

      .title-service {
        font-size: 2rem;
        margin-left: 4.5rem;
        cursor:pointer;
      }

      .service > div{
        width: 95%;
      }
      
      .service > div p {
        text-align: right;
        height:18rem;
        color: white;
        width: 66%;
        margin-right: 0;
        margin-left: auto;
        padding-top:2rem;
        font-size: 1.5rem;
      }

      .app-service{
        background-image: url('/services-purple-screen.svg');
      }

      .software-service{
        background-image: url('/services-green-screen.svg');
      }
      }

      @media (max-width: 540px) {
        .container-head{
          height: 0px;
      }
      `}</style>
    </main>
  );
};

export default services;
