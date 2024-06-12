import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);

    if (!isChatOpen) {
      setChatHistory([
        {
          text: "Hello! How can I help you?",
          sender: "Bot",
        },
      ]);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      text: message,
      sender: "You",
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage("");
  };

  return (
    <div>
      <div onClick={toggleChat} className={`chat-icon ${isChatOpen ? "active" : ""}`}>
        <FontAwesomeIcon icon={faComment} />
      </div>

      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="close-icon" onClick={toggleChat}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="chat-content">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "You" ? "sent" : "received"
                }`}
              >
                <span className="sender">{message.sender}:</span>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleInputChange}
            />
            <div className="send-icon" onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
