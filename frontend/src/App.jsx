//import ChatbotIcon from "./components/ChatbotIcon"
import { BsRobot } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./components/ChatForm";
import { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history, userMessage) => {
    console.log(history);
    console.log(userMessage);

    //Formateamos el historial del chat para la solicitud de la API.
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyMTY2MTQ0LCJpYXQiOjE3NDIxNjQzNDQsImp0aSI6ImM0ZDE3NjdjNTAyZjQzYjhiYTliYmIxNTQyMmY5NjdhIiwidXNlcl9pZCI6MX0.ll70hm-jtr11nuWQaC0_mWkmjFBPPOHbqQQ_25EpvVU`
      },
      body: JSON.stringify({
        message: userMessage
      })
    }

    try {
      //Realizamos la llamada a la API para obtener la respuesta del bot.
      const response = await fetch("http://127.0.0.1:8000/api/chat/", requestOptions);
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `Error ${response.status}`);
      }
      
      console.log("Respuesta del servidor:", data);
      return data;

    } catch (error) {
      console.error("Error en la petición:", error.message);
      throw error;
    }
  }

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <BsRobot className="bs-robot" />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <BsRobot className="bs-robot" />
            <p className="message-text">
              ¡Hey, que tal 👋!<br />¿Cómo puedo ayudarte hoy?
            </p>
          </div>

          {/* Muestra el historial de chat de forma dinámica */}
          {chatHistory.map((chat, i) => (
            <ChatMessage key={i} chat={chat} />
          ))}

        </div>

        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>

      </div>
    </div>
  )
}

export default App