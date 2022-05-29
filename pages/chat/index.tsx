import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import useUpdateEffect from "../../src/components/common/customHook/useUpdateEffect";
import styled from "@emotion/styled";

const CHATLOG = gql`
  query fetchLogs($opponentNickname: String!) {
    fetchLogs(opponentNickname: $opponentNickname) {
      id
      room
      message
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

const ChatFlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ChatReceiveDiv = styled.div`
  background: #eeeeee;
  border-radius: 10px;
  height: 1.8rem;
  padding: 2rem;
  margin-left: 1.4rem;
  margin-bottom: 1.5rem;
`;

const ChatInputBtnDiv = styled.div`
  display: flex;
`;

const ChatInput = styled.input`
  width: 41.6rem;
  height: 4.5rem;
  border: 1px solid #bebebe;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;
  border-right: none;
`;

const SubmitButton = styled.button`
  width: 10.6rem;
  height: 4.5rem;
  border: 1px solid #bebebe;
  background-color: white;
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 15px;
  border-left: none;
`;

const Chat = () => {
  const [message, setMessage] = useState();
  const [nickName, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState("");
  const [nickNameOk, setNickNameOk] = useState(false);

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
      const room = prompt("방번호를 입력해 주세요");

      socket.emit("message", room, nickname, message);

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
    const nickname = fetchUser?.fetchUser.nickname;
    socket.emit("send", room, nickname, message);
    console.log("전송때 data", data);
  }
  return (
    <div>
      <h1>{`${fetchUser?.fetchUser.nickname}님의 방`}</h1>

      <div id="chatList" ref={messageDiv}>
        {data?.fetchLogs.map((el, index) => {
          return (
            <ChatFlexDiv key={index}>
              <img src="../images/user.png" width="50"></img>
              <ChatReceiveDiv>
                <span>{`${el.message}`}</span>
              </ChatReceiveDiv>
            </ChatFlexDiv>
          );
        })}
      </div>

      <div id="sendMessage">
        <ChatInputBtnDiv>
          <ChatInput type="text" id="msg" onChange={messageHandler} placeholder="메세지 입력을 기다리고 있어요!" />
          <SubmitButton
            onClick={() => {
              msg_send(), refetch();
            }}
          >
            제출
          </SubmitButton>
        </ChatInputBtnDiv>
      </div>
    </div>
  );
};

export default Chat;
