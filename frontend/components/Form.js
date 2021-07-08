import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label>
          <b>Nombre</b>
        </label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>
          <b>Correo Electrónico</b>
        </label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>
          <b>Asunto</b>
        </label>
        <input type="text" name="subject" />
      </div>
      <div>
        <label>
          <b>Tu mensaje</b>
        </label>
        <textarea type="text" name="message" />
      </div>
      <div>
        <button> Enviar </button>
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
        button {
          height: 40px;
          width: 100px;
          margin: auto;
        }
      `}</style>
    </form>
  );
};

export default Form;
