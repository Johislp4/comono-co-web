import React from 'react'

const Technologies = () => {
    return (
        <>
        <div className="container d-flex ">
            <div className="technologies d-flex justify-content-between align-items-center">
                <div><img src="/react.svg" alt="react"/></div>
                <div><img src="/aws.svg" alt="aws"/></div>
                <div><img src="/python.svg" alt="python"/></div>
                <div><img src="nodeJs.svg" alt="nodeJs"/></div>   
            </div>
        </div>
        <style jsx>{`
        .container{
            background-color: #fff;
            width: 100%;
            justify-content: center;
        }
        
        .technologies{
         flex-wrap:wrap;
         width: 64rem;
         margin: 2rem;
        }

        @media(max-width: 520px){
            .container{
                height: 120px;
            }

            .technologies{
                margin: 2rem;
            }
            
            img{
                height: 50px;
                width: 50px;
            }
        }
        `}</style>
        </>
    )
}

export default Technologies
