"use client";
import { ReactNode, useEffect, useState } from "react";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Profile from "@/components/Modal/Profile";
import Experience from "@/components/Modal/Experience";
import Projects from "@/components/Modal/Projects";
import Skills from "@/components/Modal/Skills";
import Writings from "@/components/Writings";

type IModal = {
  isOpen: boolean;
  typeModal?: string;
};

// function VerifyTypeModal(useModal: any) {
//   return (
//     <>
//       {useModal.typeModal?.includes("Perfil") && }
//       {useModal.typeModal?.includes("Experiencia") && }
//     </>
//   );
// }

export default function Home() {
  const [useModal, setModal] = useState<IModal>({ isOpen: false });
  const [showContent, setShowContent] = useState(false);

  const [showWriting, setShowWriting] = useState("writingsAnimation-in");
  let [remove, setRemove] = useState(true);

  let typeCard = "";
  let typeAnimation = "";
  let element: ReactNode;

  if (useModal.typeModal?.includes("Perfil")) {
    typeCard += "max-w-[500px]";
    typeAnimation = "my-nodeleft";
    element = <Profile />;
  } else if (useModal?.typeModal?.includes("Experiencias")) {
    typeCard += "max-w-[800px] right-0";
    typeAnimation = "my-noderight";
    element = <Experience />;
  } else if (useModal?.typeModal?.includes("Habilidades")) {
    typeCard += "max-h-[300px] bottom-0";
    element = <Skills />;
  } else if (useModal?.typeModal?.includes("Projetos")) {
    typeCard += "max-h-[400px] bottom-0";
    element = <Projects />;
  }

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
        {showContent && (
          <>
            <h1 className="text-white text-6xl cardAnimation">
              Flávio Leonardo
            </h1>
            <Card setModal={setModal} />
          </>
        )}
      </main>
      <Modal
        useModal={useModal}
        setModal={setModal}
        className={{ typeCard, typeAnimation }}
      >
        {element}
      </Modal>
    </>
  );
}
