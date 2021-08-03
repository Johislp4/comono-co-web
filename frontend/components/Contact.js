import React from 'react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 id="form">Contáctanos</h1>

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
          display: flex;
          flex-direction: column;
          background-image: url('/bg-form.svg');
          background-size: cover;
          background-position: 0%;
          background-repeat: no-repeat;
         

        }

        .container > h1 {
           text-align:center;
           font-size:2rem;
           margin: 2rem;
        }
        

        .container-form{
          display:flex;
          height: inherit;
          border-radius: 12px;
          max-width:50rem;
          width: 100%;
          margin:auto;
          margin-bottom: 5rem;
          background: white;
          box-shadow: 0px 5px 20px 1px;
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

        .message-one {
          display:flex;
          flex-wrap:wrap;
        }

        .message-one > h1 {
          font-size: 2.5rem;
          position: relative;
          text-align: left;  
          padding-bottom:1rem;
        }

        .message-one > h1::after {
            content: "";
            height: 3px;
            width: 80%;
            background-color:  #59b7f7;
            position: absolute;
            left: 0px;
            bottom: 0;

        }

        .message-two{
            font-size: 1rem;
            margin: 1rem 0;
            padding-right: 1rem;
          
        }

        @media (max-width: 768px) {
          .container-form {   
            width: 80%;
          }
          .message-one > h1 {
            font-size:4rem
          }
        }

        @media (max-width: 540px) {
          .container-form {  
            flex-direction:column-reverse;
            width: 90%;
          }
          .left-form, .right-form {
            width: 100%;
            padding: 1rem;
            margin: 0;
          }
          .container > h1 {
            font-size: 3.5rem;
          }
          .message-one > h1 {
            font-size:2.5rem
          }
        }
      
      `}</style>

    </>
  )
}

export default Contact
