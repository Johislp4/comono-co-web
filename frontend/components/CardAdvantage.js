import React from 'react'
import { urlFor } from '../lib/sanity'

const CardAdvantage = ({advantageItem}) => {

    const { description, image, order, title } = advantageItem;
    
    return (
        <>
        <div className="card-container">
            <div className="card-photo">
                <img src={urlFor(image).url()} alt="photo" className="service-advantage-pic"/>
            </div>
            <div className="card-info">
                <div className="card-number">{order}</div>
                <div className="card-title">{title}</div>
                <div className="card-excerpt">{description}</div>
            </div>
            
        </div>

        <style jsx>{`
            .card-container{
                width:250px;
         
                padding: 1rem;
                margin:1rem auto 1rem .2rem;
               
            }
            .card-photo{
                height:55%;
                width:100%;
                width:inherit;
                border-radius: 12px;
                
                transform: rotate(-5deg);

            }

            .card-info{
                position:relative;
            }

            .card-number{
                position:absolute;
                top:-50px;
                left:0;
                
               
                font-size: 7rem;
                color: lightblue;
               
                
            }

            .card-number::before{
                content:"";
                position:absolute;
                top:50%;
                left:0;
                height:1px;
                width: 50px;
                background: black;
                z-index:2;
            }

            .card-title{
                text-align:center;
                margin: 2rem auto;
                margin-left: 4rem;
            }

            .card-excerpt{
                margin: 1rem auto;
            }

            .service-advantage-pic{
                width: 100%;
                height: 100%;
            }
        
        `}</style>
        </>
    )
}

export default CardAdvantage
