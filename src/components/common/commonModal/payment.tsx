import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Script from "next/script";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { amountState } from "../store";

const CREATE_BUTTON = gql`
  mutation createButton($imp_uid: String!, $amount: Float!) {
    createButton(imp_uid: $imp_uid, amount: $amount) {
      id
      imp_uid
      amount
    }
  }
`;

const PaymentH1 = styled.h1`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  margin-right: 17.1rem;
  margin-left: 17.1rem;
`;

const PaymentWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentButtonDiv = styled.div`
  background: rgba(238, 238, 238, 0.5);
  border-radius: 10px;
`;

const PaymenetSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin: 4px, 9px;
`;

const PaymentButtonLineDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentListSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 1rem;
`;

const PaymentListButton = styled.button`
  width: 7rem;
  height: 3rem;
  background: #fff2b2;
  border-radius: 7px;
  margin-bottom: 1rem;
`;

const PaymentColumnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 2rem;
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
declare const window: typeof globalThis & {
  IMP: any;
};

const Payment = (props) => {
  const { setModalOpen } = props;
  const [createButton] = useMutation(CREATE_BUTTON);
  const { data } = useQuery(FETCH_USER);
  console.log(data);

  const requestPay = (amount) => {
    const IMP = window.IMP;
    IMP.init("imp47402041"); // 가맹점 식별코드
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 주석을 해주게 되면 랜덤으로 생성
        // merchant_uid: "ORD20180131-0000011",
        name: "온도의 포인트 충전",
        amount: Number(amount),
        buyer_email: "alsqjarlwkd@gmail.com",
        buyer_name: "민범기",
        buyer_tel: "010-4699-6819",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/secondhandmarket",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            const buyPointResult = await createButton({
              variables: {
                imp_uid: String(rsp.imp_uid),
                amount: Number(amount),
              },
              refetchQueries: [
                {
                  query: FETCH_USER,
                },
              ],
            });
            toast.success("결제 성공!", {
              icon: "😊",
            });
            setModalOpen(false);
            console.log("결제성공!", buyPointResult);
          } catch (error: any) {
            toast.error(error.message, {
              icon: "🤔",
            });
          }
        } else {
          toast.error("결제가 실패했어요!", {
            icon: "🤔",
          });
          toast.error("다시 시도해주세요", {
            icon: "🤔",
          });
          setModalOpen(false);
        }
      }
    );
  };

  return (
    <PaymentWrapperDiv>
      <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
      <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>
      <PaymentH1>단추를 꿰어주세요</PaymentH1>
      <PaymentButtonDiv>
        <PaymenetSpan>{`보유한 단추 ${data?.fetchUser.button}개`}</PaymenetSpan>
      </PaymentButtonDiv>
      <PaymentButtonLineDiv>
        <PaymentColumnDiv>
          <PaymentListSpan>단추 10개</PaymentListSpan>
          <PaymentListButton onClick={() => requestPay(1000)}>1000원</PaymentListButton>
        </PaymentColumnDiv>
        <PaymentColumnDiv>
          <PaymentListSpan>단추 30개</PaymentListSpan>
          <PaymentListButton onClick={() => requestPay(3000)}>3000원</PaymentListButton>
        </PaymentColumnDiv>
        <PaymentColumnDiv>
          <PaymentListSpan>단추 50개</PaymentListSpan>
          <PaymentListButton onClick={() => requestPay(5000)}>5000원</PaymentListButton>
        </PaymentColumnDiv>
        <PaymentColumnDiv>
          <PaymentListSpan>단추 100개</PaymentListSpan>
          <PaymentListButton onClick={() => requestPay(10000)}>10000원</PaymentListButton>
        </PaymentColumnDiv>
        <PaymentColumnDiv>
          <PaymentListSpan>단추 150개</PaymentListSpan>
          <PaymentListButton onClick={() => requestPay(15000)}>15000원</PaymentListButton>
        </PaymentColumnDiv>
      </PaymentButtonLineDiv>
    </PaymentWrapperDiv>
  );
};

export default Payment;
