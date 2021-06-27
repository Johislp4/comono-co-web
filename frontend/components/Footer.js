import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer">
      <div className="side left-side">
        <img src="/comono-footer.svg" alt="comono-icon-footer" />
      </div>

      <div className="side center">
      <div>
          <h4>Contacto</h4>
          <p>Medellin, Colombia</p>
          <p>Cra 32d # 09 - 17 </p>
          <p>+57 313 580 5122</p>
          <p>hello@comono.co</p>
      </div>

      <div>
          <h4>Siguenos en nuestras redes sociales</h4>
          <Link href="https://www.instagram.com"><a><img src="/instagram.svg"/></a></Link>
          <Link href="https://www.facebook.com"><a><img src="/Facebook-icon.svg"/></a></Link>
      </div>



      </div>

      <div className="side right-side">
        <div>
            <ul>
                <Link href="/"><a><li>Navegación</li></a></Link>
                <Link href="/"><a><li>Home</li></a></Link>
                <Link href="/"><a><li>Nosotros</li></a></Link>
                <Link href="/"><a><li>Servicios</li></a></Link>
                <Link href="/"><a><li>Blog</li></a></Link>
                <Link href="/"><a><li>Contacto</li></a></Link>
            </ul>
        </div>
      </div>

      <div className="privacy">
          <p>Políticas de privacidad - 2021 Comono</p>
      </div>

      <style jsx>{`
        .footer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 40px;
          outline: solid thin yellow;
          background-color: #F4F4F4;
        }

        .side {
          width: 300px;
          height: 100%;
          outline: solid 1px red;
        }

       

        .right-side {
          background-color: #84428c;
          grid-row: 1/2;
          grid-column: 3/4;
        }

        .center{
            grid-row: 1/2;
            grid-column: 2/3;
        }

        .left-side{
            grid-row: 1/2;
            grid-column: 1/2;
        }

        .left-side > img {
          width: 100%;
          height: 100%;
        }

        .privacy {
          grid-row: 2/3;
          grid-column: 1/4;
          align-self: center;
         
          background-color: #fff;
          color:black;
          width:100%;
          height:100%;
          display:flex;
          justify-content: center;
          align-items:center;
          
        }
      `}</style>
    </div>
  );
};

export default Footer;
