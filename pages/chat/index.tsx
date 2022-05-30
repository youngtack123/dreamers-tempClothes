import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { jsx, keyframes } from "@emotion/react";
import { toast } from "react-toastify";
import useUpdateEffect from "../../src/components/common/customHook/useUpdateEffect";
import { useCallback } from "react";

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

const CREATE_ROOM = gql`
  mutation createRoom($opponentNickname: String!) {
    createRoom(opponentNickname: $opponentNickname)
  }
`;

const Hop = keyframes`
   0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

const ChatFlexDiv = styled.div`
  display: flex;
  align-items: center;
  animation: ${Hop} 1s;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ChatReceiveDiv = styled.div`
  border-radius: 10px;
  height: 1.8rem;
  padding: 2rem;
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  background: #eeeeee;
`;

const ChatSendFlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ChatSendDiv = styled.div`
  background: #b7e576;
  border-radius: 10px;
  height: 1.8rem;
  padding: 2rem;
  margin-left: 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const ChatInputBtnDiv = styled.div`
  display: flex;
  border: 1px solid #bebebe;
  border-radius: 30px;
`;

const ChatInput = styled.input`
  width: 41.6rem;
  height: 4.5rem;
  border: none;
  background-color: white;
  border-radius: 30px;
`;

const SubmitButton = styled.button`
  width: 6.6rem;
  height: 4.5rem;
  border: 1px solid #bebebe;
  border-radius: 30px;
  background-color: white;
  border-left: none;
`;

const ChatInputDiv = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [nickName, setNickName] = useState("");
  const [socket, setSocket] = useState("");
  const [nickNameOk, setNickNameOk] = useState(false);
  const [CreateRoom, setCreateRoom] = useState<any>();
  const { closeChatModal, another } = props;

  const { data: fetchUser } = useQuery(FETCH_USER);
  const { data, refetch } = useQuery(CHATLOG, {
    variables: {
      opponentNickname: fetchUser?.fetchUser.nickname,
    },
  });

  const [createRoom] = useMutation(CREATE_ROOM);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [data]);

  useEffect(() => {
    if (fetchUser) {
      setNickNameOk(true);
    } else if (!fetchUser) {
      setNickNameOk(false);
    }
  }, [fetchUser]);

  useEffect(() => {
    alert("채팅은 500원이 차감됩니다!");
    payChatFunc();
  }, []);

  useEffect(() => {
    if (nickNameOk) {
      const socket = io("https://team01.leo3179.shop/chat", { transports: ["websocket"], upgrade: false });
      const nickname = fetchUser?.fetchUser.nickname;
      socket.emit("message", CreateRoom, nickname, message);
      socket.on("connect", () => {
        /* 누군가 채팅침 */

        socket.on(CreateRoom, (data) => {
          console.log("누군가가 채팅침", data);
          refetch();
        });
        /* 누군가 입장 */
        socket.on("receive" + CreateRoom, (receive) => {
          console.log("누군가가 입장했어", receive);
          refetch();
        });
      });
      setSocket(socket);
    } else if (!nickNameOk) {
      return;
    }
  }, [nickNameOk]);

  const payChatFunc = async () => {
    try {
      const createRoomResult = await createRoom({
        variables: {
          opponentNickname: another,
        },
      });
      setCreateRoom(createRoomResult?.data.createRoom);
    } catch (error) {
      alert(error.message);
      closeChatModal(true);
    }
  };

  const messageHandler = (e: any) => {
    setMessage(e.target.value);
  };

  function msg_send() {
    /* 메시지 전송 */
    const nickname = fetchUser?.fetchUser.nickname;
    console.log(CreateRoom, nickname, message);
    // console.log("전송", room, nickname, message);
    socket.emit("send", CreateRoom, nickname, message);
    inputRef.current.value = "";
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      msg_send();
      refetch();
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: "1rem", marginTop: "1rem" }}>{`${fetchUser?.fetchUser.nickname}님 반갑습니다`}</h1>
      <div>
        {data?.fetchLogs.map((el, index) => {
          if (fetchUser?.fetchUser.nickname === el?.user.nickname) {
            return (
              <ChatFlexDiv key={index}>
                <ChatSendFlexDiv>
                  <ChatSendDiv>
                    <span>{`${el.message}`}</span>
                  </ChatSendDiv>
                </ChatSendFlexDiv>
              </ChatFlexDiv>
            );
          } else if (fetchUser?.fetchUser.nickname !== el?.user.nickname) {
            return (
              <ChatFlexDiv key={index}>
                <img src="../images/user.png" width="50"></img>
                <ChatReceiveDiv>
                  <span>{`${el.message}`}</span>
                </ChatReceiveDiv>
              </ChatFlexDiv>
            );
          }
        })}
      </div>
      <ChatInputDiv>
        <ChatInputBtnDiv>
          <ChatInput type="text" id="msg" onChange={messageHandler} placeholder="메세지 입력을 기다리고 있어요!" onKeyPress={handleKeyPress} ref={inputRef} />
          <SubmitButton
            onClick={() => {
              msg_send(), refetch();
            }}
            ref={scrollRef}
          >
            제출
          </SubmitButton>
        </ChatInputBtnDiv>
      </ChatInputDiv>
    </div>
  );
};

export default Chat;
