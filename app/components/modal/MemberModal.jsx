"use client";
import React from "react";
import Modal from "./Modal";
import useModalStore from "@/app/store/modalStore";

const MemberModal = () => {
  const modal = useModalStore();
  return (
    <Modal isModalOpen={modal.isOpen} open={modal.open} close={modal.close} />
  );
};

export default MemberModal;
