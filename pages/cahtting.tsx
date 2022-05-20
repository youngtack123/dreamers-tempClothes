import React, { useState } from "react";
import Script from "next/script";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("http://localhost:3000"); //소켓 연결
const TestChatting = () => {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    //소켓 연결
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    //메세지 전송
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  const renderChat = () => {
    //채팅 렌더링
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}:<span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Message</h1>
        <div className="name-field">
          <input name="name" onChange={(e) => onTextChange(e)} value={state.name} />
        </div>
        <div>
          <input name="message" onChange={(e) => onTextChange(e)} value={state.message} id="outlined-multiline-static" />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat log</h1>
        {renderChat()}
      </div>
    </div>
  );
};

export default TestChatting;
