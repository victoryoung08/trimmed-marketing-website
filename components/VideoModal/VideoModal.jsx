"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App({ video }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackDrop] = React.useState("opaque");
  const handleOpen = (backdrop) => {
    setBackDrop(backdrop);
    onOpen();
  };
  return (
    <div className="w-full">
      <Button
        onPress={() => handleOpen("blur")}
        className="flex flex-col w-fit h-full mx-auto"
      >
        <img
          src={video.pictures.base_link}
          alt=""
          className="overflow-hidden object-cover object-top-[25%]"
        />
        {/* <span className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 ">
          {video.name}
        </span> */}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={backdrop}>
        <ModalContent>
          {(onClose) => (
            <>
              <iframe
                src={video.player_embed_url}
                style={{ width: "auto", height: "70vh", maxWidth: "100%" }}
                allowFullScreen
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
