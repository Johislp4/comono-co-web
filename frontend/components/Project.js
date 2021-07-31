import React, { useEffect } from "react";
import Link from "next/link";

const Project = ({ projectList }) => {
  const [image, setImage] = React.useState(projectList[0].imageProject);
  const element = process.browser && document.querySelector(".project-text");
  const target =
    process.browser && document.querySelectorAll(".comono-project");

  const isIntersecting = (entry) => {
    return entry.isIntersecting;
  };

  const action = (entry) => {
    if (isIntersecting) {
      const srcImage = entry.target.dataset.image;
      setImage(srcImage);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.filter(isIntersecting).forEach(action);
      },
      { threshold: 0.7 }
    );
    target.forEach((element) => element && observer.observe(element));
  }, [element]);

  return (
    <div className="article-project">
      <aside className="container-project-text">
        <div className="title-proyect-section">
          <div className="block"></div>
          <h1 className="head-project">
            Proyectos <br />
            Comono
          </h1>
        </div>

        <div className="project-text">
          {projectList.map((project) => {
            return (
              <>
                <a href={`https://${project.nameProject}`} target="_blank" className="title-project">
                  <img src="/arrow-white.svg" alt="" />
                  <h1>{project.nameProject}</h1>
                </a>
                <div
                  className="comono-project"
                  key={project.id}
                  data-image={project.imageProject}
                >

                  <p className="comono-project-description">
                    {project.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </aside>

      <aside className="container-project-image">
        <img src={image} />
      </aside>

      <style jsx>{`
      .article-project {
        width: 100%;
        display: flex;
        height: 1000px;
        width: 100%;
        margin: 1rem 0;
      }
      
      .title-proyect-section {
        display: flex;
        padding-top: 7rem;
        padding-bottom: 5rem;
      }
      
      .container-project-text {
        width: 50%;
        overflow: hidden;
        background-color: black;
        color: white;
        background: black;
      }
      
      img {
        width: 100%;
      }
      
      .container-project-image {
        background-color: #fff;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .block {
        display: block;
        width: 130px;
        height: 50px;
        background-color: #fff;
        margin-top: 0.8rem;
      }
      
      .head-project {
        padding-left: 2rem;
        font-size: 4rem;
      }
      
      .project-text {
        height: 100%;
        overflow-y: scroll;
        background-color: black;
        overflow-x: hidden;
      }
      
      .project-text::-webkit-scrollbar {
        width: 16px;
      }
      
      .project-text > div {
        color: #fff;
        padding: 0 4rem;
        height: auto;
      }
      
      .project-text > div:last-child {
        height: 100%;
      }
      
      .title-project {
        display: flex;
        width: 60%;
        justify-content: flex-start;
        border-bottom: thin solid white;
      }
      
      .title-project img {
        width: 70px;
      }
      
      .title-project h1 {
        padding: 1rem 0;
        font-size: 2.5rem;
        position: relative;
        padding-left: 1rem;
        color: white;
      }
      
      .comono-project-description {
        margin: 2rem 0;
        font-size: 1.2rem;
      }
      
      @media (max-width: 540px) {
        .article-project {
          flex-direction: column;
        }
      
        .article-project aside {
          width: 100%;
        }
      
        .block {
          width: 70px;
        }
      
        .title-project img {
          width: 50px;
        }
      }
      `}</style>
    </div>
  );
};

export default Project;
