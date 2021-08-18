import React from "react";
import { PortableText, urlFor } from "../lib/sanity";

const ServiceDetail = ({ data }) => {
  const { serviceInfo } = data;
 
  return (
    <>
      <section className="service-container"  >
        {serviceInfo ? serviceInfo.map((item) =>
          item.description.length != 0 ? (
            <div className="d-flex">
              <div className="service-container-info" style={item.order === 0 ? {order:1} : {order:2}}>
                <div className={(item.order === 0) ? 'order-one d-flex' : 'order-two d-flex'}>
                  <div className="block"></div>
                  <div className="service-container-text">
                    <PortableText blocks={item.description} key={item._key} />
                  </div>
                </div>
              </div>

              <div className="service-container-image"  style={item.order === 0 ? {order:2} : {order:1, justifyContent:'flex-end'}}>
                <div className="image">
                  <img alt="Image" src={urlFor(item.image).url()} />
                </div>
              </div>
            </div>
          ) : null
        ):
        null}
      </section>

      <style jsx>{`
        .service-container {
          
        }
        .service-container-info,
        .service-container-image {
          width: 50%;
          display: flex;
          
          margin: auto;
       
        }

        .order-one {
          width: 100%;
          justify-content: space-between;
        }
        .order-two {
          width: 100%;
          max-width: 25rem;
        }

        .block {
          width: 5vw;
          height: 30px;
          max-width: 4rem;
          background: #94d2dd;
          align-self: center;
        }

        .service-container-text {
          max-width: 25rem;
          width: 100%;
          margin-right: 0;
          align-items: center;
          padding: 2rem;
        }

        .image {
          max-width: 25rem;
          width: 100%;
        }

        .image > img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default ServiceDetail;
