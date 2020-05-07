import React from "react";

type Props = {
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }: Props) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
