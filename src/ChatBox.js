import React, { useState, useEffect } from "react";
import "./ChatBox.css";

const ChatBox = ({ passcode, socket, username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("chatMessage", handleMessage);
    return () => socket.off("chatMessage", handleMessage);
  }, [socket]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chatMessage", { 
        passcode, 
        message: `${username}: ${message}` 
      });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h3>Chat</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index} className="chat-message">{msg}</p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;