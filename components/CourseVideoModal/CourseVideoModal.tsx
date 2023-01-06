import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

type ModalType = {
  close: () => void;
  open: boolean;
  videoUrl: string;
};

const CourseVideoModal = ({ close, open, videoUrl }: ModalType) => (
  <Modal onClose={close} size={"xl"} isOpen={open}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader m={1}></ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VideoPlayer url={videoUrl} />
      </ModalBody>
      <ModalFooter >
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default CourseVideoModal;
