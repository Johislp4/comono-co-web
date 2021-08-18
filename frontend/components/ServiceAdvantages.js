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
       
        <section className="d-flex">
           { serviceAdvantage.legth != 0 ? serviceAdvantage.map( ( advantageItem, index) => {
             return (  <CardAdvantage key={index} advantageItem={advantageItem}/> )
           })
            : 'Cargando...'
          }
        </section>

      <style jsx>{`
        .title{
            position:relative;
            margin-left: 10rem;
        }

        .title:before{
            content:"";
            width: 70px;
            height: 30px;
            background: #7FD9E3;
            position:absolute;
            top:0;
            left:-5rem;
        }
      
      `}</style>
            
        </>
    )
}

export default ServiceAdvantages
