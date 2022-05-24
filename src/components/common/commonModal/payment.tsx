import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
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
  const [amount, setAmount] = useRecoilState(amountState);
  const [createButton] = useMutation(CREATE_BUTTON);
  const handleOption = (e: any) => {
    setAmount(e.target.value);
  };
  const requestPay = () => {
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
            alert("정상적으로 결제가 완료되었습니다!");
            setModalOpen(false);
            console.log("결제성공!", buyPointResult);
          } catch (error: any) {
            alert(error.message);
          }
        } else {
          alert("결제에 실패하였습니다. 다시 시도해 주세요");
          setModalOpen(false);
        }
      }
    );
  };

  return (
    <div>
      <select onChange={handleOption}>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="10000">10000</option>
      </select>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
};

export default Payment;
