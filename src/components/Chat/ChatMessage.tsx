import './ChatMessage.css';
// import * as dayjs from 'dayjs' // estou com problema na instalacao
const ChatMessage = ({
  userName,
  clientName,
  message,
  timestamp,
  isUser,
}: {
  userName: string;
  clientName: string;
  message: string;
  timestamp: string;
  isUser: boolean;
}) => {
  console.log(clientName);
  return (
    <div className={`message-container ${isUser ? 'user' : 'platform'}`}>
      <div className="message-header">
        <strong>{isUser ? userName : clientName}</strong>
        <span className="message-time">
          {new Date(timestamp).toLocaleString('pt-BR')}
        </span>
      </div>
      <div className="message-bubble">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
