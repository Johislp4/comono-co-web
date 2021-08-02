import * as React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { PortableText, urlFor } from "../lib/sanity";

const CardEmployee = ({ employee, index }) => {
  const slide = React.useRef(null);
  const size = useWindowSize()

<<<<<<< HEAD
  console.log(employee)
=======
  const size = useWindowSize();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setBackgroundSlider(entries[0].target.dataset.backgroundcolor);
        }
      },
      { threshold: 1 }
    );

    observer.observe(slide.current);
  }, [slide]);
>>>>>>> e03f13a843464456968a54c5d7cc2d31395681be

  return (
    <>
      <div
        id={employee._id}
        className="container"
        ref={slide}
        style={
          employee?.backgroundColor && {
            background: `#${employee?.backgroundColor}`,
          }
        }
        data-backgroundColor={`#${employee.backgroundColor}`}
      >
      <div className="slide">
        {size.width >= "501" && (
          <div
            className="employee-image"
            style={index % 2 === 0 ? { order: "0" } : { order: "1" }}
          >
            {employee?.imageURL  && <img src={urlFor(employee.imageURL).url()} alt={employee.name} />}
          </div>
        )}

        <div className="employee-container">
          <div className="employee-info">
            <h2 className="employee-profile">{employee.profile}</h2>
            <p>
              <PortableText blocks={employee?.skill} />
            </p>
          </div>
          <div className="employee-name">
            {size.width <= "500" && (
              employee?.imageURL && <img src={urlFor(employee.imageURL).url()} alt={employee.name} />
            )}
            <h1
              style={
                employee?.fontColor && { color: `#${employee?.fontColor}` }
              }
            >
              {employee.name}
            </h1>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
  
          .container{
            width:100%;
          }

          .slide{
          display: flex;
          max-width: 65rem;
          width: 100%;
          height: 90vh;
          padding: 0 1rem;
          scroll-snap-align: center;
          position: relative;
          margin:auto;
        }

        .employee-image {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          height: 90%;
        }

        .employee-container {
          width: 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 50vh;
          min-width: 300px;
        }

        .employee-info {
          margin: 5rem 0;
        }

        .employee-info p {
          margin-right: 3rem;
          color: white;
        }

        .employee-profile {
          color: white;
          background: black;
          font-size: 1rem;
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          width: 70%;
        }

        .employee-profile::before {
          content: "";
          background: white;
          position: absolute;
          width: 80%;
          height: 2px;
          bottom: 0;
          left: 0;
        }

        .employee-name {
          margin-bottom: 1rem;
          letter-spacing: 0.7rem;
        }

        h1 {
          font-size: 7vw;
        }

        @media (max-width: 500px) {
          .container {
          }

          .employee-container {
            width: 100%;

            display: block;
            min-height: auto;
          }

          .employee-image {
            width: 100%;
          }
          .employee-profile {
            margin: 1rem auto;
            text-align: center;
          }

          .employee-info {
            margin-bottom: 3rem;
          }
          .employee-info > p {
            margin: auto;
          }
          .employee-name > h1 {
            text-align: center;
            font-size: 4rem;
          }
        }
      `}</style>
    </>
  );
};

export default CardEmployee;
