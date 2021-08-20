import React from "react";
import ServiceMenu from "../components/ServiceMenu";
import ServiceDigital from "../components/ServiceDigital";
import ServiceDetail from "../components/ServiceDetail";
import ServiceAdvantages from "../components/ServiceAdvantages";
import ServiceSoftware from "../components/ServiceSoftware";
import ServiceNavBar from "../components/ServiceNavBar";
import ServiceTextPlane from "../components/ServiceTextPlane";
import { sanityClient } from "../lib/sanity";

const servicios = ({ dataService }) => {
  
  const [cloudSolution, customSoftware, webSite] = dataService;

  return (
    <>
      <ServiceMenu />

      {/* Website and App */}
      <>
        <ServiceDigital
          borderRadius="45%"
          minHeight="40vh"
          minWidth="150%"
          background="#CEAED6"
          rotate="15deg"
          marginLeft="-2rem"
          word={{
            one: "Páginas web,",
            two: "aplicaciones",
            three: "web y",
            four: "moviles",
          }}
          info={webSite}
          id="web-app"
        />
        <section className="sticky">
          <ServiceNavBar />
        </section>

        <ServiceDetail data={webSite} />
      </>

      {/* //Cloud Solution */}
      <>
        <ServiceDigital 
          background="#94D2DD"
          word={{ one: "Soluciones,", two: "en", three: "la", four: "nube:" }}
          info={cloudSolution}
          id = "nube"
        />
        <ServiceDetail data={cloudSolution} />
        
        <div className="service-detail">
          <ServiceAdvantages advantages={cloudSolution} />
        </div>
      </>

      {/* //Custom Software */}

      <>
        <ServiceDigital
          borderRadius="45%"
          minHeight="60vh"
          minWidth="150%"
          background="#C6ED88"
          rotate="30deg"
          marginLeft="-3rem"
          word={{ one: "Software,", two: "a", three: "la", four: "medida:" }}
          info={customSoftware}
          id = "software"
        />
        <ServiceSoftware />
        <ServiceTextPlane />
        <ServiceDetail data={customSoftware}/>
      </>
      <style jsx>{`
        .sticky {
          float:right;
          position: sticky;
          margin-top: -200px;
          top: 94vh;
          z-index: 10;
        }

        .service-detail {
          overflow-y: none;
          overflow-x: scroll;
          padding-top:2rem;
          margin-top:2rem;
        }
      `}</style>
    </>
  );
};

export default servicios;

const queryService = `*[_type == 'service']{
   name,
  'serviceExtract':descriptionSection.serviceExtract,
  'serviceAdvantage': descriptionSection.serviceAdvantage,
  'serviceInfo': descriptionSection.sectionScreen,
}

  `;

export async function getStaticProps() {
  const dataService = await sanityClient.fetch(queryService);

  //const dataHomeEnglish = await sanityClient.fetch(queryHomeEnglish)

  return {
    props: {
      dataService,
      // 'dataHome': {
      // //   'es-CO': { dataHome, dataService },
      // //   'en-US': { dataHome: dataHomeEnglish, dataService: dataServiceEnglish }
      // }
    },

    revalidate: 10,
  };
}
