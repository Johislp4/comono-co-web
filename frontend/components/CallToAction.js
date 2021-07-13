import React from "react";
import menuCallToActions from "../utils/menu-callToAction.";

const CallToAction = () => {

    const [isOpenCTA , setIsOpenCTA] = React.useState(false)

  return (
    <>
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
          {menuCallToActions.map((item, index) => {
            return (
              <div className={`${item.className} d-flex`} key={index}>
                <p>{item.title}</p>
                <div className="d-flex">
                  <img src={item.icon} alt="icon" />
                </div>
              </div>
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

        .menu-cta, 
        .menu-list{
            position: fixed;
        }

        .menu-cta{
            right: 18px;
            bottom: 120px;
            z-index: 100;
            justify-content: flex-end;
        }

      
        .menu-list{
            background: pink;
            justify-content: space-between;
            align-items: center;
        }

        .menu-list > *{
            margin: 0 1rem;
        }

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
        }
        .location-icon{
            bottom: 10px;
            right: 80px
        }

        

        .btn-close{
            width: 70px;
            height: 70px;
        }


        
        `}</style>
    </>
  );
};

export default CallToAction;
