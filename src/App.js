import React, { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import ChatBox from "./ChatBox";
import UsersList from "./UsersList";
import Footer from "./Footer";
import io from "socket.io-client";
import "./App.css";

const socket = io("https://realltimecollab.onrender.com", {
  transports: ["websocket"],
  withCredentials: true,
});

const App = () => {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isRoomJoined, setIsRoomJoined] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("userList", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    return () => {
      socket.off("userList");
    };
  }, []);

  const joinRoom = () => {
    if (username.trim() && passcode.trim()) {
      socket.emit("joinRoom", { passcode, username });
      setIsRoomJoined(true);
    } else {
      alert("Please enter both username and passcode");
    }
  };

  return (
    <div className="app-container">
      <h1>Real-Time Collaboration Platform</h1>
      {!isRoomJoined ? (
        <div className="join-room">
          <h2>Join/Create Room</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="input-field"
          />
          <input
            type="text"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Room Passcode"
            className="input-field"
          />
          <button onClick={joinRoom} className="join-button">
            Join Room
          </button>
        </div>
      ) : (
        <div className="main-container">
          <div className="sidebar">
            <UsersList users={users} />
          </div>
          <div className="editor-section">
            <CodeEditor passcode={passcode} socket={socket} />
          </div>
          <div className="chat-section">
            <ChatBox passcode={passcode} socket={socket} username={username} />
          </div>
        </div>
      )}
      {/* Conditionally render Footer */}
      {!isRoomJoined && <Footer />}
    </div>
  );
};

export default App;