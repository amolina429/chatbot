//import ChatbotIcon from "./components/ChatbotIcon"
import { BsRobot } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./components/ChatForm";
import { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = (history) => {
    console.log(history);
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