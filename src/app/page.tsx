"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  Modal,
  Profile,
  Experience,
  Projects,
  Skills,
  Writings,
  Card,
} from "@/components/export";
import ContextProviderModal from "@/utils/context";

type IModal = {
  isOpen: boolean;
  typeModal?: string;
};

export default function Home() {
  const [useModal, setModal] = useState<boolean>(false);
  const [showContent, setShowContent] = useState(false);

  const [showWriting, setShowWriting] = useState("writingsAnimation-in");
  let [remove, setRemove] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowWriting("writingsAnimation-out"), 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => setRemove(false), 3000);
  }, []);

  return (
    <>
      {remove && <Writings showWriting={showWriting} />}
      <main className="top-1/4 relative flex flex-col items-center">
        <ContextProviderModal>
          <>
            {showContent && (
              <>
                <h1 className="text-white text-6xl cardAnimation">
                  Flávio Leonardo
                </h1>
                <Card />
              </>
            )}
            <Modal />
          </>
        </ContextProviderModal>
      </main>
    </>
  );
}
