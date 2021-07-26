import React from "react";
import { PortableText, urlFor } from "../lib/sanity";

const CardEmployee = ({ employee, orderFlex }) => {
  return (
    <>
      <div className="container" style={employee?.colorBackground && {background: `#${employee?.colorBackground}`}}>
        
        <div className="employee-image" style={{order:orderFlex}}>
            <img src={urlFor(employee.imageURL).url()} alt={employee.name} />
        </div>

        <div className="employee-container">
          <div className="employee-info">
            <h2 className="employee-profile">{employee.profile}</h2>
            <PortableText blocks={employee?.skill} />
          </div>
          <div className="employee-name">
            <h1 style={employee?.colorFont && {color: `#${employee?.colorFont}`}}>{employee.name}</h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          margin-right: 1rem;
          min-width: 100%;
        }

        .container:last-child{
          margin-right: 0;
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
          width: 100%;
          height: 90%;
        }

        .employee-container {
          width: 50%;
          height: 100%;
          position: relative;
        }

        .employee-info {
          position: absolute;
          top: 10%;
          left: 0;
          right: 20%;
        }

        .employee-profile {
          color: white;
          background: black;
          font-size: 1rem;
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
          position:relative;
        }

        .employee-profile::before{
          content:"";
          background: white;
          position:absolute;
          width: 80%;
          height: 2px;
          bottom:0;
          left:0;
        }
        /* .employee-profile::after{
          content:"";
          background: white;
          position:absolute;
          width: 5%;
          height: 2px;
          bottom:0;
          left:-1rem;
          transform: rotate(-45deg);
          transform-origin: top right;
        } */

        .employee-name {
          position: absolute;
          bottom: 10%;
          left: 0;
          right: 10%;
        
          letter-spacing: 0.7rem;
        }

        h1{
            font-size: 7rem;
        }
      `}</style>
    </>
  );
};

export default CardEmployee;
