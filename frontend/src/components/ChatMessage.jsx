import { BsRobot } from "react-icons/bs";

const ChatMessage = ({chat}) => {
    return (
        <div className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}>
            {chat.role === 'model' && <BsRobot className="bs-robot"/>}
            <p className="message-text">
                {chat.text}
            </p>
        </div>
    )
}

export default ChatMessage;