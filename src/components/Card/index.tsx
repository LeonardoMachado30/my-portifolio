import Image from "next/image";
import { createRef, useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type IProps = {
  setModal: any;
};

export default function Card({ setModal }: IProps) {
  const [items, setItems] = useState(() => [
    {
      title: "Perfil",
      image: "/img/male_user.png",
    },
    {
      title: "Experiencias",
      image: "/img/icon_work.png",
    },
    {
      title: "Habilidades",
      image: "/img/icon_skills.png",
    },
    {
      title: "Projetos",
      image: "/img/icon_projects.png",
    },
    {
      title: "Social",
      image: "/img/icon_linkedin.png",
    },
  ]);

  return (
    <div className="flex flex-wrap max-w-5xl mx-auto w-full justify-center items-center gap-4 p-4 relative cardAnimation">
      {items.map(({ title, image }, index) => {
        const className = index > 1 ? "md:max-w-[250px]" : "md:max-w-sm";

        return (
          <section
            key={index}
            className={`${className} max-w-full bg-white p-4 w-full h-60 flex flex-col justify-center items-center --show-title cursor-pointer`}
            onClick={() =>
              setModal({
                isOpen: true,
                typeModal: title,
              })
            }
          >
            <Image src={image} alt={title} width="100" height="100" />
            <h2 className="font-bold text-2xl">{title}</h2>
          </section>
        );
      })}
    </div>
  );
}
