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
import Image from "next/image";

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
        className="flex flex-col w-full h-fit mx-auto p-0"
      >
        <Image
          src={video.pictures.base_link}
          alt=""
          width={300}
          height={200}
          className="w-full object-cover object-bottom"
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
