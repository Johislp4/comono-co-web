import React from "react";
import Link from "next/link";
import menuItems from "../utils/menuItems";


const Footer = ({data}) => {

  return (
    data  ?
    <>
      <div className="footer">
        <div className="left-side">
          <img src="/comono-footer.svg" alt="comono-icon-footer" />
        </div>

        <div className="side contact">
          <div>
            <h4>Contacto</h4>
            <p>{data[0]?.city, data[0]?.country}</p>
            <p>{data[0]?.address}</p>
            <p>{data[0]?.phone}</p>
            <p>{data[0]?.email}</p>
          </div>
        </div>

        <div className="side social-media">
          <div>
            <h4>Siguenos en nuestras redes sociales</h4>
            <div className="icons">
                <a href={data[0]?.socialmedia.instagram} target="_blank">
                  <img src="/instagram-icon.svg" />
                </a>
    
                <a href={data[0]?.socialmedia.facebook} target="_blank">
                  <img src="/Facebook-icon.svg" />
                </a>
            
                <a href={data[0]?.socialmedia.twitter} target="_blank">
                  <img src="/twitter-icon.svg" />
                </a>
        
              <p>{data[0]?.name}</p>
            </div>
          </div>
        </div>

        <div className="side right-side">
          <div>
          <ul className="menu-list d-flex">
            {menuItems.map((item) => {
              return (
                <li className={item.className} key={item.id}>
                  <Link href={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>
        </div>

        <div className="privacy">
          <p>Políticas de privacidad - 2021 Comono</p>
        </div>
      </div>

      <style jsx>{`
    
        .footer{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 1fr 80px;
          background-color: #f4f4f4;
        }

        .side {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .side > div {
          height: 50%;
          display:flex;
          flex-direction:column;
          justify-content: space-between;
        }

        .side h4{
          margin-bottom:1rem;
        }

        .right-side{
          background-color: #84428c;
          display:flex;
          justify-content: flex-start;
          padding: 1rem;
        }

        .right-side > div{
          padding: 2rem 1rem;
        }

        .side a li{
          color:#ffffff;
          margin-bottom:0.3rem;
        }

        ul{
          height: 100%;
          display:flex;
          flex-direction:column;
          justify-content: space-evenly;
          color:white;
        }

        a{
          color: white;
        }

        .social-media > div .icons{
          display:flex;
          width:60%;
          justify-content:space-between;
        }

        .icons img{
          width:35px;
          height:35px;
          margin-right:0.5rem;
        }

        .left-side > img {
          width: 100%;
          height: 100%;
        }

        .privacy {
          grid-row: 2/3;
          grid-column: 2/4;
          align-self: center;  
          color: black;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:0.8rem;
        }

        @media(max-width: 540px){

          .footer {
            display:flex;
            flex-direction:column;
          }

          .side {
            font-size: 1rem;
            width:90%;
            margin: 0 auto;
          }

          .side.contact,.side.social-media{
            margin-top:2rem;
          }

          .right-side {
            width:100%;
            margin-top:2rem;
          }

          .side a li{
            margin-bottom:1rem;
          }

          .privacy {
            padding:2rem 0;
            font-size:0.7rem;
          }
        }
    `}</style>
    </>
    : 
    null
  );
};

export default Footer;


