import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Mark',
      image: 'https://media.istockphoto.com/photos/mark-zuckerberg-at-g8-in-deauville-france-picture-id482954389?k=20&m=482954389&s=612x612&w=0&h=uozn7gacYP5C1SLgJDKASVJftrSilHj4FiV80oi-_Cs=',
      message: 'i am robot 🤖'
    },
    {
      name: 'Mark',
      image: 'https://media.istockphoto.com/photos/mark-zuckerberg-at-g8-in-deauville-france-picture-id482954389?k=20&m=482954389&s=612x612&w=0&h=uozn7gacYP5C1SLgJDKASVJftrSilHj4FiV80oi-_Cs=',
      message: 'aloha aloha mati ma duzego kocka'
    },
    {
      message: 'whats poppin'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Mark on 14/09/21</p>

      {messages.map((message) => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" src={message.image} alt={message.name} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      ))}

      <form onSubmit={handleSubmit} className="chatScreen__input">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message..." type="text" />
        <button className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen
