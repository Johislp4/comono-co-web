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
      <aside className="container-project-image">
        <div className="project-image">
          <img src={image} />
        </div>
      </aside>

      <aside className="container-project-text">
        <div className="block"></div>
        <h1 className="head-project">
          Proyectos <br />
          Comono
        </h1>

        <div className="project-text">
          {projectList.map((project) => {
            return (
              <div
                className="comono-project"
                key={project.id}
                data-image={project.imageProject}
              >
                <a href={`https://${project.nameProject}`} target="_blank">
                  <h1 className="title-project">{project.nameProject}</h1>
                </a>
                <p className="comono-project-description">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </aside>

      <style jsx>{`
        .article-project {
          width: 100%;
          display: flex;
          height: 1000px;
          width: 100%;
          margin: 1rem 0;
        }

        .container-project-text {
          display: grid;
          grid-template-columns: [full-start] minmax(1rem, 130px) [main] minmax(1rem, 1fr)  [full-end];
          // grid-template-columns: 1fr 1fr;
          grid-template-rows: 300px 1fr;
          width: 50%;
          overflow: hidden;
          background-color: black;
          color: white;
          grid-gap: 0 1rem;
          background:black;
        }

        img {
          width: 200px;
          height: 200px;
        }

        .container-project-image {
          background-color: #fff;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .block {
            grid-column: [full-start]/[main];
            display: block;
            width: 100%;
            height: 50px;
            background-color: #fff;
            margin-top: 150px;
          }


        .head-project {
          width: 100%;
          grid-column: main ;
          grid-row: 1/2;
          margin: auto 0;
          padding-left: 4rem;
          font-size: 4rem;
        }

        .project-text {
          grid-column: main;
          grid-row: 2;
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
          height: 100%;
        }

        .title-project {
          padding: 1rem 0;
          font-size: 3rem;
          position: relative;
        }

        .title-project::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: -4rem;
          width: 50%;
          height: 1px;
          background: white;
        }
        .title-project::after {
          content: url('/arrow-white.svg');
          position: absolute;
          background-image: ;
          left: -6rem;
        }

        .comono-project-description {
          margin: 2rem 0;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Project;
