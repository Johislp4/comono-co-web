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

        ul{
          height: 100%;
          display:flex;
          flex-direction:column;
          justify-content: space-evenly;
          color:white;
        }

        .left-side {
          grid-row: 1/2;
          grid-column: 1/2;
        }
        .contact {
          grid-row: 1/2;
          grid-column: 2/3;
        }

        .social-media {
          grid-row: 1/2;
          grid-column: 3/4;
        }

        .right-side {
          background-color: #84428c;
          grid-row: 1/2;
          grid-column: 4/5;
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
      `}</style>
    </div>
  );
};

export default Footer;
