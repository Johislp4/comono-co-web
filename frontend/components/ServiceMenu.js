import Link from 'next/link'
import React from 'react'


const ServiceMenu = () => {
    return (
        <>
        <section className="bg">
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

                <section className="  service-nav  d-flex">
                    <nav>
                        <ul className="menu-list d-flex">
                            <Link href="#web-app">
                                <a>
                                    <li className="arrow pink"><img src="/pink-arrow.svg" alt="pink-arrow" />
                                        <span>  
                                            <div>Páginas web,</div>
                                            <div>aplicaciones web y móviles</div>
                                         
                                        </span>
                                    </li>
                                </a>
                            </Link>
                            <Link href="#nube">
                                <a>
                                    <li className="arrow blue"><img src="/blue-arrow.svg" alt="pink-arrow" /><span>Soluciones en la nube</span></li>
                                </a>
                            </Link>
                            <Link href="#software">
                                <a>
                                    <li className="arrow green"><img src="/green-arrow.svg" alt="pink-arrow" /><span>Software a la medida</span></li>
                                </a>
                            </Link>
                        </ul>
                    </nav>
                </section>
            </div>   
        </section>
        <style jsx>{`

        

        .bg-black{
            background:#191919;
            height:65vh;
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
            outline: solid white;
            padding:2rem;
            
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
            font-size:7vw;
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

        @media(max-width: 540px){

            .bg-black, .bg-white{
                height: calc(50vh - 80px);
            }

            .bg-black{
                display:flex;
            }

            .service-nav{
                height: 100%;
            }

            .service-title{
                padding:1rem;
            }
            
            .service-title-h1{
                font-size:3rem;
            }

            .service-title-h2{
                font-size: 1.2rem;
            }

            .bg-banner{
                top:-56px;
                z-index: 1;
            }

           

            .menu-list{
                display:block;
               
            }
            
            a{
                width: 100%;
                display: flex;
                flex-grow: 1;
                height: calc( 100% / 3)
                
            }

            li{
                width: 100%;

            }
            .pink span{
                display:flex;
               
            }


        }
      
        
        `}</style>
        </>
    )
}

export default ServiceMenu
