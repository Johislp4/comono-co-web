import * as React from "react";
import { useWindowSize } from '../hooks/useWindowSize'
import CardImage from "./CardImage";
import CardText from "./CardText";


const Project = ({ projectList }) => {

  const [ haveShow, setHaveShow ] = React.useState({0:false, 1:false, 2:false, 3:false})
  const size = useWindowSize()

  React.useEffect(()=>{
    console.log(size, 'size projects')
  }, [size])

  return (
    <>
      <main className="container-projects">
       { size.width >= "501" && <div className="left-images">
          {projectList.map((project, i) => (
            <CardImage imageProp={{ project, i, haveShow, setHaveShow }} />
          ))}
        </div>}

        <div className="right-text">
         
          {projectList.map((project, i) => (
            <CardText textProps={{ project, i, haveShow, setHaveShow, size }} />
          ))}
        </div>
      </main>

      <style jsx>{`
      
      .container-projects{
      background: gray;
      display: flex;
      position: relative;
    }

    .left-images, 
    .right-text{
      max-width:50%;
      width:100%;
      background: #eee;
      position: relative;
    }
   

    @media(max-width:500px){
      .right-text{
        max-width: 100%;
      }
    }
   
      `}</style>

     
    </>
  );
};

export default Project;
