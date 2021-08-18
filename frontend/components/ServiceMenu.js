import Link from 'next/link'
import React from 'react'


const ServiceMenu = () => {
    return (
        <>
        <div className="bg">
            <div className="bg-black">
                <section className="service-container">   
                    <div className="service-title d-flex">
                        <h1 className="service-title-h1">Servicios</h1>
                        <h2 className="service-title-h2">de transformación digital</h2>
                    </div>
                </section>
            </div>
            <div className="bg-white">
            <div className="bg-banner"></div>

                <section className="service-container   service-nav  d-flex">
                    <nav>
                        <ul className="d-flex">
                            <Link href="/">
                                <a>
                                    <li className="arrow pink"><img src="/pink-arrow.svg" alt="pink-arrow" />
                                        <span>  
                                            <div>Páginas web,</div>
                                            <div>aplicaciones web y móviles</div>
                                         
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <li className="arrow blue"><img src="/blue-arrow.svg" alt="pink-arrow" /><span>Soluciones en la nube</span></li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <li className="arrow green"><img src="/green-arrow.svg" alt="pink-arrow" /><span>Software a la medida</span></li>
                                </a>
                            </Link>
                        </ul>
                    </nav>
                </section>
            </div>   
        </div>
        <style jsx>{`

        .bg-black{
            background:#191919;
            height:60vh;
        }

        .bg-white{
            position:relative;
        }

        .bg-banner{
            position:absolute;
            background-image: url('/bg-shapes-geometrics.svg');
            background-size: cover;
            background-position:center;
            height: 85px;
            top:-40px;
            width: 100%;
            z-index: 2;

        }

        .service-container{
            max-width:64rem;
            margin:auto;
            height:100%;
        }

        .service-title{
            font-family:'Lexend Exa', sans-serif;
            color:white;
            flex-direction: column;
            justify-content:center;
            height:inherit;
          
        }

        .service-title-h1{
            font-weight:200;
            font-size:7rem;
        }

        .service-title-h2{
            text-align: right;
            font-size:2.5rem;
            font-weight:200;
        }

        .service-nav{
            height: calc(40vh - 100px);
            
        }

        nav{
            width:100%;
            
        }

        ul{
           
            height: 100%;
            position: relative;
            
            
        }
        a{
            width:calc(100% / 3);
            display:flex;
          
            position:relative;
           
        }

        li{
            display:flex;
            flex:1;
            justify-content:center;
            align-items:center;
            position:relative;
            font-family: 'Roboto', sans-serif;
            font-weight:700;
            color: black;
            
           
        }

        .arrow img{
            width:30px;
            margin-right: 1rem;
            

        }

       

        .pink{
            background: #F7EDF9;
        }
        .blue{
            background: #EBF6F7;
        }
        .green{
            background: #F3F9E4;
        }
      
        
        `}</style>
        </>
    )
}

export default ServiceMenu
