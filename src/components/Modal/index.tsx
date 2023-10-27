import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  className: string;
};

export default function Modal({ children, className }: IProps) {
  return <section className={className}>{children}</section>;
}
