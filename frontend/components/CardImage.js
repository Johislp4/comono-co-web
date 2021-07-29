import * as React from 'react'
import { urlFor } from "../lib/sanity";

const CardImage = ({imageProp}) => {
    const {project, i, haveShow} = imageProp;

    return (
    <>
       <div key={i} className="container-image" data-project={i}>
       { haveShow[i] && <img src={urlFor(project.imageProject).url()} alt={project.nameProject} /> }
      </div>

      <style jsx>{`

     

    .container-image{
        position: sticky;
        top:0;
        left:0;
        width: 100%;
        min-height: 100vh;
        }

      img{
        width: 100%;
        height: 75vh;
        animation: fadeIn 2s ease-out;
      }

      @keyframes fadeIn{
        0%{
        opacity: 0;
    }
    
    100%{
        opacity:1;
        
    }

      }
      
      `}</style>

      </>
    )
}

export default CardImage
