import React from 'react'
import CardAdvantage from './CardAdvantage'

const ServiceAdvantages = ({ advantages }) => {

    const { serviceAdvantage } = advantages;

    return (
        <>
        <div className="title">
        <h1>Las ventajas son inmensas,</h1>
        <h3>Una de las mas significativas es que las soluciones en la nube te permiten:</h3>

        </div>
       
        <section className="service-advantage-container  d-flex">
           { serviceAdvantage.legth != 0 ? serviceAdvantage.map( ( advantageItem, index) => {
             return (  <CardAdvantage key={index} advantageItem={advantageItem}/> )
           })
            : 'Cargando...'
          }
        </section>

      <style jsx>{`
        .title{
            position:relative;
            margin-left: 5rem;
        }

        .title:before{
            content:"";
            width: 5vw;
            max-width: 4rem;
            height: 30px;
            background: #7FD9E3;
            position:absolute;
            top:0;
            left:-5rem;
        }

        .service-advantage-container{
          margin-left:1rem;
          overflow-x: scroll;
        }

        @media(max-width: 540px){

          
            h1 , h3 {
              width: 90%;
            }
          
        }
      
      `}</style>
            
        </>
    )
}

export default ServiceAdvantages
