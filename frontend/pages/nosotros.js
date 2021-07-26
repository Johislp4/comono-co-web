import React from "react";
import CardEmployee from "../components/CardEmployee";
import { PortableText, sanityClient, urlFor } from "../lib/sanity";

export default function Nosotros({ data }) {

  const [backgroundSlider , setBackgroundSlider] = React.useState(data[0].colorBackground)




  return (
    <>

    <div className="bg" style={{background: `#${backgroundSlider}`}}>
      <main className="container" style={{background: `#${backgroundSlider}`}}>
        <div className="arrow-left">
          <img src="/arrow-left-slides.svg"/>
        </div>

        <section className="container-slides">
          <div className="slider">
        {
          data.map((employee, index) => {
            if( index % 2 === 0 ){
              return  <CardEmployee employee={employee} orderFlex={'1'} />
              
            }else{
              return <CardEmployee employee={employee} orderFlex={'0'}/>
            }
          })
        }
        </div>
         </section>
        <div className="arrow-right">
          <img src="/arrow-right-slides.svg"/>
        </div>
        <div className="points-slides"> points </div>
      </main>

    </div>

    <style jsx>{`
    .bg{
      width: 100%;
      height: calc(100vh - 2rem);
    }

    .container{
      max-width: 80rem;
      padding: 1rem;
      margin:  auto;
      display: grid;
      grid-template-columns: 100px 1fr 100px;
      grid-template-rows: 1fr 30px;
      grid-column-gap: 1rem;
     }

     .arrow-left , 
     .arrow-right {
       display: flex;
       justify-content: center;
       align-items:center;
     }

     .arrow-left{
       grid-column: 1/2;
       grid-row: 1/2;
     }

     .arrow-right{
       grid-column: 3/4;
       grid-row: 1/2;
     }

     img{
       height: 70px;
     }

     .points-slides{
       grid-column: 2/3;
       grid-row: 2/3;
       align-self: center;
       justify-self:center;
     }

     .container-slides{
       display: block;
       width: 100%;
       max-width:70rem;
       overflow-x: hidden;
       overflow-y:hidden;
     }

     .slider{
       overflow-y: hidden;
       overflow-x: scroll;
       display:flex;
       width: auto;
       height: inherit;
     }
    `}</style>

    </>

    
  );
}

const queryOurTeam = `
*[_type == 'ourTeam']{
_id,
href,
'imageURL': image.asset._ref,
  name,
  colorFont,
  colorBackground,
  profile,
skill
}`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(queryOurTeam);
  console.log(data);
  return { props: { data }, revalidate: 10 };
}
