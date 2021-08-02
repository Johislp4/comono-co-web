import React from "react";
import { sanityClient } from "../lib/sanity";
import Slider from "../components/Slider";

export default function Nosotros({ data }) {

  
  return ( <Slider Slides={data} />)
}

const queryOurTeam = `
*[_type == 'ourTeam']{
_id,
order,
href,
'imageURL': image.asset._ref,
  name,
  fontColor,
  backgroundColor,
  profile,
skill
}`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(queryOurTeam);
<<<<<<< HEAD
  console.log(data, 'this is data');
=======
>>>>>>> e03f13a843464456968a54c5d7cc2d31395681be
  return { props: { data }, revalidate: 10 };
}
