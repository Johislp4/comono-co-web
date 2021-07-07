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
            height: 200px;
            width: 100%;
        }
        
        .technologies{
         flex-wrap:wrap;
         width: 64rem;
         margin:auto;
        }
        `}</style>
        </>
    )
}

export default Technologies
