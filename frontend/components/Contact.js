import React from 'react'
import Form from '../components/Form'

const Contact = () => {
    return (
    <>
      <div className="container">
      <h1>Contáctanos</h1>

      <section className="container-form">
        <div className="left-form">
          <div className="message-one">
            <h1>Gracias por llegar hasta aquí</h1>
          </div>

          <div className="message-two">
            Déjanos tus datos y nos pondremos en contacto contigo
          </div>
        </div>

            <div className="right-form">
            <Form />
            </div>
      </section>
    </div>

    
    <style jsx>{`
        .container{
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
        }

        .container > h1 {
           text-align:center;
           font-size:5rem;
           margin-bottom: 2rem;
        }
        

        .container-form{
          display:flex;
          height: inherit;
          
          border: solid thin gray;
          border-radius: 12px;
          width: 70%;
          margin:auto;
          margin-bottom: 5rem;
        }

        .left-form{
            display:flex;
            flex-direction: column;
            margin:auto;
            padding-left: 4rem;
            width:50%;
          
        }

        .right-form{
          width:50%;
          height:100%;
        }

        .message-one{
        
          margin-bottom:0;
          display:flex;
          flex-wrap:wrap;
          
        }

        .message-one > h1 {
          font-size: 4.5rem;
          position: relative;
          text-align: left;
          
        }

        .message-one > h1::after {
            content: "";
            height: 1px;
            width: 100%;
            background-color: black;
            position: absolute;
            left: -100px;
            bottom: 0;

        }

        .message-two{
            font-size: 1.5rem;
            margin: 2rem 0;
            padding-right: 1rem;
          
        }
      
      `}</style>

    </>
    )
}

export default Contact
