"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Profile from "~/img/Profile.png";
export default function Home() {
  const [useModal, setModal] = useState<boolean>(false);

  const title = [
    { title: "Perfil", image: "/img/male_user.png" },
    { title: "Experiencias", image: "/img/icon_work.png" },
    { title: "habilidades", image: "/img/icon_skills.png" },
    { title: "Projetos", image: "/img/icon_projects.png" },
    { title: "Social", image: "/img/icon_linkedin.png" },
  ];

  const click = (title = ""): void => {
    setModal(!useModal);
  };

  return (
    <>
      <main className="flex flex-wrap max-w-5xl mx-auto w-full justify-center items-center gap-4 p-4 relative top-1/4">
        {title.map((prop, index) => {
          return (
            <Card
              key={prop.title}
              title={prop.title}
              image={prop.image}
              className={index > 1 ? "md:max-w-[250px]" : "md:max-w-sm"}
              click={click}
            />
          );
        })}
      </main>

      {useModal && (
        <Modal className="position fixed top-0 left-0 w-full h-screen bg-opacity-20 bg-gray-400 ">
          <div className="bg-white z-10 h-screen max-w-[660px] flex flex-col justify-center items-center p-6 scale-up-hor-left">
            <div className="w-full flex justify-end">
              <div onClick={() => click()}>X</div>
            </div>

            <div>
              <Image
                src={Profile}
                alt="imagem de perfil"
                width="200"
                height="200"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
