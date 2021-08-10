import Head from "next/head";
import { useRouter } from 'next/router'
import { sanityClient } from "../lib/sanity";
import Banner from "../components/Banner.js";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Blog from "../components/Blog";

export default function Home({ dataHome }) {

  const router = useRouter()
  const { locale } = router
  const data = locale === 'es-CO' ? dataHome['es-CO'] : dataHome['en-US']
  const banner = data.dataHome[0].banner;
  const bio = {
    title: data.dataHome[0].bioTitle,
    imageTeam: data.dataHome[0].imageTeam,
    description: data.dataHome[0].description,
  };
  const { projects } = data.dataHome[0];

  return (
    <div>
      <Head>
        <title>Comono Colombia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner text={banner} />
      <Services dataService={data.dataService} locale={locale} />
      <Technologies />
      <Team bio={bio} locale={locale} />
      <Project projectList={projects} />
      <Contact locale={locale} />
      <Blog locale={locale}/>
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
    "technologies" : tagsTechnologies,
    "link": href 
    }
}`;

const queryHomeEnglish = `*[_type == 'homeEnglish']{
  _id,
  banner,
   "bioTitle": bio.bioTitle,
  "imageTeam": bio.image.asset->url,
  "description": bio.name,
   "projects": project[].project->{
    "nameProject": name, 
    description,
    "imageProject": image.asset->url,
    "technologies" : tagsTechnologies,
    "link": href 
   }
}`;

const queryService = `*[_type == 'service']{
  _id,
 name,
 description,
 'detailDescription': completeService
}`
const queryServiceEnglish = `*[_type == 'serviceEnglish']{
  _id,
 name,
 description,
 'detailDescription': completeService
}`

export async function getStaticProps() {

  const dataHome = await sanityClient.fetch(queryHome);
  const dataHomeEnglish = await sanityClient.fetch(queryHomeEnglish)
  const dataService = await sanityClient.fetch(queryService);
  const dataServiceEnglish = await sanityClient.fetch(queryServiceEnglish);

  return {
    props: {
      'dataHome': {
        'es-CO': { dataHome, dataService },
        'en-US': { dataHome: dataHomeEnglish, dataService: dataServiceEnglish }
      }
    },

    revalidate: 10
  };
}
