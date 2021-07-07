import Head from "next/head";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";
import Banner from "../components/Banner.js"
import Services from "../components/Services";
import Team from "../components/Team";
import Form from "../components/Form";
import Project from "../components/Project"
import Technologies from "../components/Technologies"

export default function Home({ data }) {
  console.log(data, "this is data");

  const banner = data[0].banner;
  const bio = {
    title: data[0].bioTitle,
    imageTeam: data[0].imageTeam,
    description: data[0].description,
  };

  const projects = data[0].projects

  console.log(projects)

  return (
    <div>
      <Head>
        <title>Comono Colombia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text={banner}/>
     <Services />
     <Technologies />
      <Team bio={bio} />


      <Project projectList={projects} /> 


 {/* 


      <div className="container-form">
        <h1 className="form-title">Contáctanos</h1>
        <div className="form">
          <div className="left-form">
            <div className="message-one">
              <h1>Gracias por llegar hasta aquí</h1>
            </div>

            <div className="message-two">
              <p>Déjanos tus datos y nos pondremos en contacto contigo</p>
            </div>
          </div>

          <div className="right-form">
            <Form />
          </div>
        </div>
      </div>

      */}
      

      <style jsx>{`
        .container-form{
          width:100%;
          margin:1rem;
        }
        .form-title{
          text-align:center;
          font-size:3rem;
        }

        .form{
          display:flex;
          padding:3rem;
          border: solid thin gray;
          border-radius: 12px;
        }

        .left-form{
          width:50%;
       
          display:flex;
          flex-direction: column;
          margin:auto;
          
        }

        .right-form{
          width:50%;
          height:100%;
        }

        .message-one{
       
          padding:1rem;
          margin-bottom:0;
          display:flex;
          flex-wrap:wrap;
     
        }

        .message-one > h1 {
          font-size: 3.5rem;
        
        }

        .message-two{
        
         
          margin-bottom:4rem;
          
          
        }
      
      `}</style>
    </div>
  );
}

const queryHome = `*[_type == 'home']{
  _id,
  banner,
  "bioTitle": bio.bioTitle,
  "imageTeam": bio.image.asset->url,
  "description": bio.name,
  "projects": project[].project->{
    "nameProject": name, 
    description,
    "imageProject": image.asset->url,
    "link": href 
    }
}`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(queryHome);
  console.log(data);
  return { props: { data } };
}
