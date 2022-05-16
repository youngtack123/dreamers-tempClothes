import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "../src/components/common/commonModal";
import styles from "../styles/Home.module.css";

const TEST_API = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      title
      writer
      createdAt
    }
  }
`;

export default function Home() {
  const { data } = useQuery(TEST_API, {
    variables: {
      page: 1,
    },
  });
  console.log("data 환경 세팅?", data);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* 모달 사용법 */}
      <button onClick={openModal}>모달 팝업</button>
      <Modal open={modalOpen} close={closeModal} header="결제">
        결제 관련된 컴포넌트
      </Modal>
    </div>
  );
}
