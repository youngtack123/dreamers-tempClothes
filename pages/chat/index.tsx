import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import useUpdateEffect from "../../src/components/common/customHook/useUpdateEffect";

const CHATLOG = gql`
  query fetchLogs($opponentNickname: String!) {
    fetchLogs(opponentNickname: $opponentNickname) {
      id
      room
    }
  }
`;

const FETCH_USER = gql`
  query {
    fetchUser {
      id
      email
      phone
      gender
      style
      nickname
      userImgURL
      button
      region {
        id
        lat
        lon
      }
      deletedAt
    }
  }
`;

const Chat = () => {
  const [message, setMessage] = useState();
  const [nickName, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState("");
  const [data, setData] = useState();
  const [receive, setReceive] = useState();

  const [anotherMessage, setAnotherMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState([]);
  const [mySendMessage, setMySendMessage] = useState(null);

  const [messageArr, setMessageArr] = useState([]);
  const [dataLoding, setDataLoding] = useState(false);
  const [socketState, setSoketState] = useState(false);
  const messageDiv = useRef(null);

  const { data: fetchUser } = useQuery(FETCH_USER);

  useEffect(() => {
    const socket = io("https://team01.leo3179.shop/chat", { transports: ["websocket"], upgrade: false });
    const nickname = prompt("닉네임을 알려주세요.");
    const room = prompt("입장할 방의 코드를 적어주세요.");
    if (!(nickname && room)) {
      alert("다시 입력해주세요.");
      window.location.reload();
    }
    socket.emit("message", nickname, room, message);

    socket.on("connect", () => {
      console.log("bbbbbb");
      /* 누군가 채팅침 */
      socket.on(room, (data) => {
        console.log("누군가가 채팅침", data);
        setData(data);
      });
      console.log("cccc");
      /* 누군가 입장 */
      socket.on("receive" + room, (receive) => {
        console.log("누군가가 입장했어", receive);
        setReceive(receive);
      });
      console.log("dddd");
    });
    setRoom(room);
    setSocket(socket);
  }, []);

  const messageHandler = (e: any) => {
    setMessage(e.target.value);
  };

  function msg_send() {
    /* 메시지 전송 */
    console.log("전송?");
    socket.emit("send", room, nickName, message);
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
