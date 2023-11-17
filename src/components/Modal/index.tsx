import { ReactNode, useContext, useRef } from "react";
import { Context, OpenModal } from "@/utils/context";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import icon_close from "~/img/icon_close.svg";
import Profile from "./Contents/Profile";
import Experience from "./Contents/Experience";
import Skills from "./Contents/Skills";
import Projects from "./Contents/Projects";

type PropsContent = {
  modalContext: OpenModal;
  className: {
    typeCard: string;
    typeAnimation: string;
  };
  children: ReactNode;
};

const Content = ({ modalContext, className, children }: PropsContent) => {
  const nodeRef = useRef(null);
  const _typeCard = `bg-white absolute md:p-8 p-2 w-full h-full ${className.typeCard}`;
  const click = () =>
    modalContext?.setContext({
      isOpen: false,
      typeModal: modalContext?.modalContext?.typeModal,
    });

  return (
    <>
      <CSSTransition
        in={modalContext?.modalContext?.isOpen}
        timeout={600}
        classNames={`${className.typeAnimation}`}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="fixed top-0 left-0 bottom-0 right-0 show-backdrop-blur p-4">
          <section className="relative h-full w-full">
            <div className={_typeCard} ref={nodeRef}>
              <nav className="absolute top-4 right-4">
                <button onClick={click}>
                  <Image
                    src={icon_close}
                    alt="Fechar modal"
                    className="cursor-pointer"
                  />
                </button>
              </nav>

              {children}
            </div>
          </section>
        </div>
      </CSSTransition>
    </>
  );
};

export default function Modal() {
  const modalContext = useContext<OpenModal>(Context);

  const getSkills = (title: string): boolean =>
    typeof modalContext?.modalContext.typeModal != "undefined" && modalContext
      ? modalContext.modalContext.typeModal.includes(title)
      : false;

  const className = {
    typeCard: "",
    typeAnimation: "",
  };

  let element: ReactNode;

  if (getSkills("Perfil")) {
    className.typeCard += "max-w-[500px]";
    className.typeAnimation = "my-nodeleft";
    element = <Profile />;
  } else if (getSkills("Experiencias")) {
    className.typeCard += "max-w-[800px] right-0";
    className.typeAnimation = "my-noderight";
    element = <Experience />;
  } else if (getSkills("Habilidades")) {
    className.typeCard += "max-h-[300px] bottom-0";
    element = <Skills />;
  } else if (getSkills("Projetos")) {
    className.typeCard += "max-h-[400px] bottom-0";
    element = <Projects />;
  }

  return (
    <Content modalContext={modalContext} className={className}>
      {element}
    </Content>
  );
}
