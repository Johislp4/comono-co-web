import Link from "next/link";
import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import menuCallToActions from "../utils/menu-callToAction.";

const CallToAction = () => {

    const [isOpenCTA , setIsOpenCTA] = React.useState(false)
    const size = useWindowSize()

  return (
    <>
      <div className={isOpenCTA ? "bg-cta  active" : "bg-cta"}></div>
      <div className="menu-cta">
        <div onClick={() =>  setIsOpenCTA(!isOpenCTA)}>
         {isOpenCTA
         ? 
         <>
         <img
            className="btn btn-close"
            src="/close-icon.svg"
            alt="close-button"
          />
          <div className="container-cta">
          {menuCallToActions.filter( item => {
            if(size.width > 500 && item.title !== "Llamanos"){
              return item
            }
            
            if(size.width < 500){
              return item
            }
          }).map((item, index) => {
            
            return (
              <Link href={item.href}  key={index}>
              <a>
              <div className={`${item.className} d-flex  opt-cta`}>
                <p>{item.title}</p>
                <div className="d-flex">
                  <img src={item.icon} alt="icon" className='img-cta' />
                </div>
              </div>
              </a>
              </Link>
            );
          })}
        </div>
          </>
         :
         <img
            className="btn btn-close"
            src="/cta.svg"
            alt="cta-button"
          />
         }
        </div>
        
        
      </div>

      <style jsx>{`

        .bg-cta{
          position:fixed;
          bottom: -500px;
          right:-500px;
          background:#f9f9f9;
          z-index:10;
          width: 500px;
          height:500px;
          border-radius: 50%;
          box-shadow: 0 3px 4px 0 rgb(94 94 94 / 70%);
        }

        .active{
          position:fixed;
          bottom: -120px;
          right:-100px;
          animation: moveInLeft 0.5s ease-out; 
        }
        
        @keyframes moveInLeft{
          0%{
              opacity: 0;
        
            }
          100%{
              opacity:1;
        
            }
        }

        a{
          color: black;
        }


        .menu-cta, 
        .menu-list{
            position: fixed;
        }

        .menu-cta{
            right: 18px;
            bottom: 100px;
            z-index: 100;
            justify-content: flex-end;
            
        }

      
        .menu-list{
            justify-content: space-between;
            align-items: center;
        }

        .opt-cta{
           box-shadow: 0 3px 12px 0 rgb(0 0 0 / 12%), 0 9px 8px 0 rgb(0 0 0 / 11%);
           padding: 0.5rem 1rem;
        }

        .img-cta{
          width:35px;
          height:35px;
        }

        .menu-list > *{
            margin: 0 1rem;
        }

        .call-icon{
            bottom: 220px;
            right: 57px;
        }
        .write-icon{
            bottom: 140px;
            right: 127px;
        }
       

        .location-icon{
          bottom: 50px;
          right: 100px;    
        }

        .btn-close{
            width: 80px;
            height: 80px;
        }

        @media(max-width:500px){
          .call-icon{
            bottom: 250px;
            right: 57px;
        }
        .write-icon{
            bottom: 170px;
            right: 127px;
        }
        .ring-icon{
            bottom: 90px;
            right: 127px;
        }
        .location-icon{
            bottom: 10px;
            right: 80px
        }
        }


        
        `}</style>
    </>
  );
};

export default CallToAction;
