"use client";
import Image from "next/image";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import icon_close from "~/img/icon_close.svg";

type IModal = {
  isOpen: boolean;
  typeModal?: string;
};

type IProps = {
  children: ReactNode;
  useModal: IModal;
  setModal: Dispatch<SetStateAction<IModal>>;
  className: { typeCard: string; typeAnimation: string };
};

export default function Modal({
  useModal,
  setModal,
  children,
  className,
}: IProps) {
  console.log(useModal);
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={useModal.isOpen}
        timeout={600}
        classNames={`${className.typeAnimation}`}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="fixed top-0 left-0 bottom-0 right-0 show-backdrop-blur p-4">
          <section className="relative h-full w-full">
            <div
              className={`bg-white absolute md:p-8 p-2 w-full h-full ${className.typeCard}`}
              ref={nodeRef}
            >
              <nav className="absolute top-4 right-4">
                <button
                  onClick={() =>
                    setModal({
                      isOpen: false,
                      typeModal: useModal?.typeModal,
                    })
                  }
                >
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
}
