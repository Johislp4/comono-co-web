import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { sanityClient, urlFor } from '../lib/sanity'
import Banner from '../components/Banner'


export default function Home({data}) {
  
  const banner = data[0].banner
  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Comono Colombia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner text={banner}/>


    
    </div>
  )
}


const queryHome = `*[_type == 'home']{
  banner
}`

export async function getStaticProps(){
  const data = await sanityClient.fetch(queryHome)
  return { props: { data }}
}