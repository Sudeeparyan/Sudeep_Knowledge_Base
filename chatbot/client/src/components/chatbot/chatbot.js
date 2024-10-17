import React, { useState,useEffect,useRef } from 'react';
import bot from './bot.gif'
import './chatbot.css'
import Profile from './Profile.gif'
import chatboxlogo from "./chatbot.png";
import sendIcon from "./sendicon.png";
import ReactMarkdown from 'react-markdown'
const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
//   const [chatResponse, setChatResponse] = useState('');

const chatContainerRef = useRef(null);
  const [showChatBot, setShowChatBot] = useState(false);
  const [message, setMessage] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputValue('');
    try {
      const response = await fetch('https://sudeep-knowledge-base.onrender.com/v1/knowledge-base/get-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question:inputValue })
      });

      if (response.ok) {
        // Request succeeded
        const data = await response.json();
        console.log(data);
        setMessage((message)=>[...message, {bot: data["answer"]}] )
      } else {
        // Request failed
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [message]);

  function handleFormSubmit(e){
    console.log("formval",e)
    setMessage((message)=> [...message, {user: inputValue}]); 
  }

  return (
    <div className="chatbot">

      <div className="chatlines"></div>
      {!showChatBot && (
        <img
          className="chatimg"
          onClick={() => setShowChatBot(!showChatBot)}
          src={bot}
          alt="bot"
        />
      )}
      {showChatBot && (
        <div className="chatboxform">
          <div className="chatboxheader">
            
            <span className="chatboxheading">Knowledge Base Bot</span>
            {/* <div>
              <img
                className="chatbotheaderlogo"
                src={chatboxlogo}
                alt="chatbot logo"
              />
            </div> */}
            <div
              className="closebutton"
              onClick={() => setShowChatBot(!showChatBot)}
            >
              X
            </div>
          </div>
          <div className="chatmessages" ref={chatContainerRef}>
            {message.map((curr) => {
              if (curr.bot) {
                return (
                  <div className="bot">
                    <div>
                      <img className="botimg" src={bot} alt="bot" />
                    </div>
                    <span className="bot-message"> {curr.bot}</span>
                  </div>
                );
              } else {
                return (
                  <div className="user">
                    <span className="message">{curr.user}</span>
                    <div>
                      <img className="profimg" src={Profile} alt="Profile" />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <form onSubmit={handleSubmit} className="send-message" id="inputbox">
            <input
              className="inputMessage"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything.."
            />
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="submitbutton"
            >
              <img src={sendIcon} className="sendicon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;