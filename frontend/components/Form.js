import React from 'react'

const Form = () => {
    return (
        <form onSubmit="">
        
            <label>Nombre</label>
            <input type="text" name="name"/>

            <label>Correo Electrónico</label>
            <input type="email" name="email"/>

            <label>Asunto</label>
            <input type="text" name="subject"/>

            <label>Tu mensaje</label>
            <textarea type="text" name="message" />

            <button > Enviar </button>
            
            <style jsx>{`
            form{
                display:flex;
                flex-direction: column; 
                outline: solid thin red;
                margin: 0 auto;
            }
            `}</style>
        </form>
    )
}

export default Form
