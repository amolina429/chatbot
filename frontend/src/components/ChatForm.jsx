import { FaArrowUp } from "react-icons/fa";
import React, { useRef } from 'react'

const ChatForm = ({ ChatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        //Actualizamos el historial de chat con el mensaje del usuario.
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

        setTimeout(() => {
            //Añadimos un msj previo para la respuesta del bot.
            setChatHistory((history) => [...history, { role: "model", text: "Procesando..." }]);

            //Llamamos a la función para generar la respuesta del bot
            generateBotResponse(...[ChatHistory, { role: "user", text: userMessage }]);
        }, 600);

    }


    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Mensaje..." className="message-input" required />
            <button>
                <FaArrowUp />
            </button>
        </form>
    )
}

export default ChatForm;