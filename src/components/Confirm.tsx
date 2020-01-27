import React, { useState } from "react";
import { ButtonSimple } from "./ButtonSimple";

export interface IConfirmProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const Confirm = ({ children, onConfirm }: IConfirmProps) => {
  const [del, setDel] = useState(false);
  return (
    <>
      {!del && (
        <ButtonSimple onClick={() => setDel(true)}>{children}</ButtonSimple>
      )}
      {del && (
        <>
          <span>Are you sure?</span>
          <div style={{ marginRight: 5 }} />
          <ButtonSimple
            onClick={() => {
              setDel(false);
              onConfirm();
            }}
          >
            Yes
          </ButtonSimple>
          <div style={{ marginRight: 5 }} />
          <ButtonSimple onClick={() => setDel(false)}>No</ButtonSimple>
        </>
      )}
    </>
  );
};
