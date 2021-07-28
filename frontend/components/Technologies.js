import React from 'react'

const Technologies = () => {
  return (
    <>
      <div className="container d-flex">
        <div className="technologies d-flex justify-content-between align-items-center">
          <img src="/react.svg" alt="react" />
          <img src="/aws.svg" alt="aws" />
          <img src="/python.svg" alt="python" />
          <img src="nodeJs.svg" alt="nodeJs" />
        </div>
      </div>
      <style jsx>{`
        .container{
          width: 100%;
          justify-content: center;
        }
        
        .technologies {
          flex-wrap: wrap;
          width: 64rem;
          margin: 2rem;
        }

        @media(max-width: 540px){
            img{
                height: 60px;
                width: 60px;
            }
        }
        `}</style>
    </>
  )
}

export default Technologies
