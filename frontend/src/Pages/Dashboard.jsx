import { BsRobot } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "../components/ChatForm";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "../components/ChatMessage";
import './dashboard.css'

const Dashboard = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const chatBodyRef = useRef();

    const generateBotResponse = async (_, userMessage) => {
        const updateHistory = (text) => {
            //Función de ayuda para actualizar el historial de chat
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Procesando..."), { role: "model", text }])
        }

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyMTg5MTM5LCJpYXQiOjE3NDIxODczMzksImp0aSI6ImQ3YWMwYmMwNDIxYTQxYTViNDE4YjAwY2NmMDhmNWU1IiwidXNlcl9pZCI6MX0.sBBVY0a22IwB6zTWk7bg0IZxtMoWvBEjXcbWl8GDPqc`
            },
            body: JSON.stringify({
                message: userMessage
            })
        }

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `Error ${response.status}`);
            }

            const apiResponseText = data.message.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);

        } catch (error) {
            console.error("Error en la petición:", error.message);
            throw error;
        }
    };

    useEffect(() => {
        //AutoScroll
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }, [chatHistory]);


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

                <div ref={chatBodyRef} className="chat-body">
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

export default Dashboard;