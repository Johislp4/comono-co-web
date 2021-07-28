import React from "react";
import { sanityClient } from "../lib/sanity";
import Slider from "../components/Slider";

export default function Nosotros({ data }) {
  return ( <Slider Slides={data} />)
}

const queryOurTeam = `
*[_type == 'ourTeam']{
_id,
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
  console.log(data);
  return { props: { data }, revalidate: 10 };
}