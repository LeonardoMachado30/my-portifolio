"use client";
import { ReactNode, ReactPortal, createContext, useState } from "react";

type IModal = {
  isOpen: boolean;
  typeModal?: string;
};

export type OpenModal = null | {
  modalContext: IModal;
  setContext: (useContext: IModal) => void;
};

export const Context = createContext<OpenModal>(null);
type Props = {
  children: ReactNode;
};

const ContextProviderModal = ({ children }: Props) => {
  const [stateModal, setStateModal] = useState<IModal>({ isOpen: false });

  return (
    <Context.Provider
      value={{
        modalContext: stateModal,
        setContext: setStateModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProviderModal;
