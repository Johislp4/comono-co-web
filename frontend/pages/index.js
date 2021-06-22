import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { sanityClient, urlFor } from '../lib/sanity'
import Banner from '../components/Banner'
import Services from "../components/Services"
import Team from '../components/Team'


export default function Home({data}) {

  console.log(data, 'this is data')
  
  const banner = data[0].banner
  const bio = {title: data[0].bioTitle, imageTeam: data[0].imageTeam, description: data[0].description}
  
  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Comono Colombia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text={banner}/>
      <Services/>
      <Team  bio={bio} />


    
    </div>
  )
}


const queryHome = `*[_type == 'home']{
  _id,
  banner,
  "bioTitle": bio.bioTitle,
  "imageTeam": bio.image.asset->url,
  "description": bio.name
}`

export async function getStaticProps(){
  const data = await sanityClient.fetch(queryHome)
  console.log(data)
  return { props: { data }}
}