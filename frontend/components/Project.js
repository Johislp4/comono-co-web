import React, { useEffect } from 'react'
import Link from "next/link"


const Project = ({projectList}) => {

    const [image, setImage] = React.useState(projectList[0].imageProject)
    const element = process.browser && document.querySelector('.project-text')
    const target = process.browser && document.querySelectorAll('.text1');


    const isIntersecting = entry => {
        return entry.isIntersecting
    }

    const action = entry => {
        if(isIntersecting){     
            const srcImage = entry.target.dataset.image
            setImage(srcImage)
        }
    }

   useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.filter(isIntersecting).forEach(action)
    }, { threshold: 0.70} )
    target.forEach(element => element && observer.observe(element))
   }, [element])


    return (
        
        <div className="article-project">
            <aside className="container-project-image">
                <div className="project-image">
                    <img src={image}/>
                </div>
            </aside>

            <aside className="container-project-text">
                <h1 className="head-project">Proyectos de Comono</h1>
                <div className="project-text">
                {
                    projectList.map( project => {
                        return (
                            <div key={project.id} className="text1" data-image={project.imageProject}>
                                <Link href={project.link}><h1>{project.nameProject}</h1></Link>
                                <p>{project.description}</p> 
                            </div>
                            
                        )
                    })
                }
    
                </div>
            </aside>


        <style jsx>{`

            .article-project{
                width:100%;
                display:flex;
                border: solid thin gray;
                border-radius: 12px;
                margin: 1rem;
                height: 500px;
                width:100%;
            }

            .container-project-text{
                width:50%;
                overflow:hidden;
                background-color: black;
                color: white;
                
            }

            .head-project{
                width:100%;
                height: 90px;
                display:flex;
                justify-content: center;
                align-items: center;

            }

            .container-project-image{
                background-color: gray;
                width:50%;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .project-text{
                height:calc(100% - 90px);
                overflow-y: scroll;
                background-color:black;
                overflow-x:hidden;
            }

            .project-text::-webkit-scrollbar {
                width: 16px;
            }

            .project-text > div {
                color:white;
                padding:1rem;
                height:100%;
            }

            img{
                width: 200px;
                height:200px;
            }

            
        `}</style>
        </div>
    )
}

export default Project
