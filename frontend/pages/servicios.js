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
 
      
        <ServiceDigital
          borderRadius="45%"
          minHeight="70vh"
          minWidth="100%"
          background="#CEAED6"
          rotate="15deg"
          marginLeft="-2rem"
          word={{
            one: "Páginas web,",
            two: "aplicaciones",
            three: "web y",
            four: "moviles",
            color: "#C473CB" 
          }}
          info={webSite}
          id="web-app"
        />
        {/* <section className="sticky">
          <ServiceNavBar />
        </section> */}
         

        <ServiceDetail data={webSite} color="#C473CB" />
     

      
      <>
        <ServiceDigital 
          background="#94D2DD"
          word={{ one: "Soluciones,", two: "en", three: "la", four: "nube:", color: "#04ACC5"}}
          info={cloudSolution}
          id = "nube"
        />
        <ServiceDetail data={cloudSolution} />
        
        <section className="service-detail">
          <ServiceAdvantages advantages={cloudSolution} />
        </section>
      </>



      <>
        <ServiceDigital
          borderRadius="45%"
          minHeight="60vh"
          minWidth="80%"
          background="#C6ED88"
          rotate="30deg"
          marginLeft="-3rem"
          word={{ one: "Software,", two: "a", three: "la", four: "medida:", color: "#AFD342" }}
          info={customSoftware}
          id = "software"
        />
        <ServiceSoftware />
        <ServiceTextPlane />
        <ServiceDetail data={customSoftware}/>
      </>
      <style jsx>{`
        .sticky {
          /* max-width:80rem;
          position: sticky;
          margin-top: -100px;
          top: 91vh;
          margin:auto;
          z-index:1; */
        }

        .service-detail {
          overflow-y: none;
          overflow-x: hidden;
          padding-top:2rem;
          margin-top:2rem;
      
        }

        @media(max-width:540px){
          .sticky {
            position:sticky;
            bottom:0;
          }
          

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
