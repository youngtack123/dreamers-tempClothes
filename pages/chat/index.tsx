import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import useUpdateEffect from "../../src/components/common/customHook/useUpdateEffect";

const CHATLOG = gql`
  query fetchLogs($opponentNickname: String!) {
    fetchLogs(opponentNickname: $opponentNickname) {
      id
      room
      message
      user {
        nickname
      }
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
  const [nickNameOk, setNickNameOk] = useState(false);

  const [receiveMessage, setReceiveMessage] = useState([]);

  const messageDiv = useRef(null);

  const { data: fetchUser } = useQuery(FETCH_USER);
  const { data, refetch } = useQuery(CHATLOG, {
    variables: {
      opponentNickname: fetchUser?.fetchUser.nickname,
    },
  });

  useEffect(() => {
    if (fetchUser) {
      setNickNameOk(true);
    } else if (!fetchUser) {
      setNickNameOk(false);
    }
  }, [fetchUser]);

  useEffect(() => {
    if (nickNameOk) {
      const socket = io("https://team01.leo3179.shop/chat", { transports: ["websocket"], upgrade: false });
      const nickname = fetchUser?.fetchUser.nickname;
      const room = "1";

      socket.emit("message", nickname, room, message);

      socket.on("connect", () => {
        /* 누군가 채팅침 */
        socket.on(room, (data) => {
          console.log("누군가가 채팅침", data);
          refetch();
        });
        /* 누군가 입장 */
        socket.on("receive" + room, (receive) => {
          console.log("누군가가 입장했어", receive);
          refetch();
        });
      });
      setRoom(room);
      setSocket(socket);
    } else if (!nickNameOk) {
      return;
    }
  }, [nickNameOk]);

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
        <button
          onClick={() => {
            msg_send(), refetch();
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default Chat;
