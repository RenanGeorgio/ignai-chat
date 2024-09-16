import './ChatMessage.css';
// import * as dayjs from 'dayjs' // estou com problema na instalacao
const ChatMessage = ({
  user,
  message,
  timestamp,
  isUser,
}: {
  user: string;
  message: string;
  timestamp: string;
  isUser: boolean;
}) => {

  return (
    <div className={`message-container ${isUser ? 'user' : 'platform'}`}>
      <div className="message-header">
        <strong>{user}</strong>
        <span className="message-time">{new Date(timestamp).toLocaleString('pt-BR')}</span>
      </div>
      <div className="message-bubble">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
