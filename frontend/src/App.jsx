//import ChatbotIcon from "./components/ChatbotIcon"
import { BsRobot } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./components/ChatForm";
import { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (_, userMessage) => {
    console.log("Mensaje del usuario:", userMessage);

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyMTc5MjcxLCJpYXQiOjE3NDIxNzc0NzEsImp0aSI6Ijk1YjViYzg3ZjU0YjQ4NDU4Njc4Yjk0YTcwYmUxNjhmIiwidXNlcl9pZCI6MX0.V3NK9slPosZdQ2B4AmCCttAWLixlCeMFoRrmZ9OaOK4`
      },
      body: JSON.stringify({
        message: userMessage
      })
    }

    try {
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