import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [message, setMessage] = useState();
  const [nickName, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState("");

  const [anotherMessage, setAnotherMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState([]);
  const [mySendMessage, setMySendMessage] = useState(null);

  const [messageArr, setMessageArr] = useState([]);
  const messageDiv = useRef(null);

  useEffect(() => {
    const socket = io("http://localhost:3000/chat");
    const nickname = prompt("닉네임을 알려주세요.");
    const room = prompt("입장할 방의 코드를 적어주세요.");
    if (!(nickname && room)) {
      alert("다시 입력해주세요.");
      window.location.reload();
    }
    socket.emit("message", nickname, room);
    socket.on("connect", () => {
      /* 누군가 채팅침 */
      socket.on(room, (data) => {
        console.log("data:", data);
        // setOtherSendMessage([...myOtherSendMessage, data]);
        const e = React.createElement("div", { className: "test" }, `${data[0]} : ${data[1]}`);
        setReceiveMessage([...receiveMessage, e]);
      });
      /* 누군가 입장 */
      socket.on("receive" + room, (receive) => {
        console.log("receive", receive);
        // setReceive([...Receive, receive]);
        const e = React.createElement("div", { className: "test" }, `${receive}`);
        console.log(e);
        // messageDiv.current.append(e);
        setReceiveMessage([...receiveMessage, e]);
      });
    });
    setNickName(nickName);
    setRoom(room);
    setSocket(socket);
  }, []);

  useEffect(() => {
    console.log(receiveMessage);
  }, [receiveMessage]);

  const messageHandler = (e: any) => {
    setMessage(e.target.value);
  };

  function msg_send() {
    /* 메시지 전송 */
    console.log("전송?");
    // setMySendMessage([...mySendMessage, message]);
    socket.emit("send", room, nickName, message);
    const e = React.createElement("div", { className: "test" }, `나:${message}`);
    setReceiveMessage([...receiveMessage, e]);
  }
  return (
    <div>
      <h1>
        재형이의 시크릿쥬쥬 <span id="room"></span>
      </h1>

      <div id="chatList" ref={messageDiv}>
        {receiveMessage.map((el, index) => {
          return <div key={index}>{el}</div>;
        })}
      </div>

      <div id="sendMessage">
        <input type="text" id="msg" onChange={messageHandler} />
        <button onClick={msg_send}>제출</button>
      </div>
    </div>
  );
};

export default Chat;
