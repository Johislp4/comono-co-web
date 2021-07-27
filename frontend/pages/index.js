import Head from "next/head";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";
import Banner from "../components/Banner.js"
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
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

      <Banner text={banner} />
      <Services />
      <Technologies />
      <Team bio={bio} />
      {/* <Project projectList={projects} /> */}
      <Contact />
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
  return { props: { data }, revalidate: 10 };
}
