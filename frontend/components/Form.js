import React from 'react'

const Form = () => {
    return (
        <form >
        
            <label><b>Nombre</b></label>
            <input type="text" name="name"/>

            <label><b>Correo Electrónico</b></label>
            <input type="email" name="email"/>

            <label><b>Asunto</b></label>
            <input type="text" name="subject"/>

            <label><b>Tu mensaje</b></label>
            <textarea type="text" name="message" />

            <button > Enviar </button>
            
            <style jsx>{`

            form{
                display:flex;
                flex-direction: column; 
                margin: 0 auto;
            }

            input{
                height:40px;
                margin: 0.7rem 0;
            }

            textarea{
                height: 100px;
                margin: 1rem 0;
            }
            button{
                height:40px;
                width: 100px;
                margin:auto
            }

            `}</style>
        </form>
    )
}

export default Form
