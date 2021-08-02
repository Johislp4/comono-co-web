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
      <div>
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
            font-size: 1.2rem;
        }

        input {
          height: 50px;
          margin: 0.7rem 0;
          
        }

        textarea {
          height: 200px;
          margin: 1rem 0;
          border:none;
          border-left: solid thin;
          border-bottom: solid thin;
          
        }
        .formButton {
          height: 40px;
          width: 100px;
          margin: auto;
        }
      `}</style>
    </form>
  );
};

export default Form;
