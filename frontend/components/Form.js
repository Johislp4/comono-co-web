import React, { useState } from "react"

const Form = () => {

  const initialContactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [contactData, setContactData] = useState(initialContactData)

  const handleInputChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log('estoy entrando')
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setContactData(initialContactData)
      }
    })
  }

  return (
    <form>
      <div>
        <label>
          <b>Nombre</b>
        </label>
        <input
          type="text"
          name="name"
          value={contactData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <b>Correo Electrónico</b>
        </label>
        <input
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <b>Asunto</b>
        </label>
        <input
          type="text"
          name="subject"
          value={contactData.subject}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <b>Tu mensaje</b>
        </label>
        <textarea
          type="text"
          name="message"
          value={contactData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className="btn">
        {/* <button>Enviar</button> */}
        <input
          className='formButton'
          type="submit"
          name="subject"
          onClick={handleSubmmit}
        />
      </div>

      <style jsx>{`
        form {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 2rem;
        }

        form > div {
            display: flex;
            flex-direction: column;
        }

        label{
            font-size: 0.875rem;
        }

        input {
          height: 2rem;
          margin: 0.7rem 0;
          padding:  0.625rem;
          
        }

        textarea {
          height: 5.5rem;
          margin: 1rem 0;
          border:none;
          border-left: solid thin;
          border-bottom: solid thin;
          padding:  0.625rem;
          
        }

        .btn{
          align-items: flex-end;
        }
      
        .formButton {
         
          padding: 0 2.5rem;
          background: #59b7f7;
          border-radius: .5rem;
          border:none;
          color:white;
        }
        .formButton:hover{
          cursor: pointer;
          
        }
      `}</style>
    </form>
  );
};

export default Form;
