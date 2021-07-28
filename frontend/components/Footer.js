import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <img src="/comono-footer.svg" alt="comono-icon-footer" />
      </div>

      <div className="side contact">
        <div>
          <h4>Contacto</h4>
          <p>Medellin, Colombia</p>
          <p>Cra 32d # 09 - 17 </p>
          <p>+57 313 580 5122</p>
          <p>hello@comono.co</p>
        </div>
      </div>

      <div className="side social-media">
        <div>
          <h4>Siguenos en nuestras redes sociales</h4>
          <div className='icons'>
            <Link href="https://www.instagram.com">
              <a>
                <img src="/instagram.svg" />
              </a>
            </Link>
            <Link href="https://www.facebook.com">
              <a>
                <img src="/Facebook-icon.svg" />
              </a>
            </Link>
            <p>comono.co</p>
          </div>
        </div>
      </div>

      <div className="side right-side">
        <div>
          <ul>
            <Link href="/">
              <a>
                <li>Navegación</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Nosotros</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Servicios</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Blog</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Contacto</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>

      <div className="privacy">
        <p>Políticas de privacidad - 2021 Comono</p>
      </div>

      <style jsx>{`
        .footer {
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

        .right-side >div{
          padding: 2rem 1rem;
        }

        .side a li{
          color:#ffffff;
          margin-bottom:0.3rem
        }

        ul{
          height: 100%;
          display:flex;
          flex-direction:column;
          justify-content: space-evenly;
          color:white;
        }

        .social-media > div .icons{
          display:flex;
          width:60%;
          justify-content:space-between;        
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
        }

        @media (max-width: 540px) {
          .footer {
            display:flex;
            flex-direction:column;
          }

          .side {
            font-size: 2rem;
            width:90%;
            margin: 0 auto;
          }

          .side.contact,.side.social-media {
            margin-top:2rem;
          }

          .right-side {
            width:100%;
            margin-top:2rem;
          }

          .side a li{
            margin-bottom:1rem
          }

          .privacy {
            padding:2rem 0;
            font-size:1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Footer;
