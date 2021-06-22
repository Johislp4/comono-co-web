import Head from "next/head";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Team from "../components/Team";
import Form from "../components/Form";

export default function Home({ data }) {
  console.log(data, "this is data");

  const banner = data[0].banner;
  const bio = {
    title: data[0].bioTitle,
    imageTeam: data[0].imageTeam,
    description: data[0].description,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Comono Colombia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text={banner} />
      <Services />
      <Team bio={bio} />

      <div className="container-form">
        <h1 className="form-title">Contáctanos</h1>
        <div className="form">
          <div>
            <div>
              <h1>Gracias por llegar hasta aquí</h1>
            </div>

            <div>
              <p>Déjanos tus datos y nos pondremos en contacto contigo</p>
            </div>
          </div>

          <div>
            <Form />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container-form{
          width:100%;
          height: 400px;
          border: solid thin gray;
          border-radius: 12px;
          margin:1rem;
        }
        .form-title{
          text-align:center;
          font-size:3rem;
        }

        .form{
          display:flex;
          padding:3rem
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
  "description": bio.name
}`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(queryHome);
  console.log(data);
  return { props: { data } };
}
