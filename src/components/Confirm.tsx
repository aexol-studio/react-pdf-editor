import React, { useState } from "react";
import { ButtonSimple } from "./ButtonSimple";

export interface IConfirmProps {
  children: React.ReactNode;
  onConfirm: () => void;
  style?: React.CSSProperties;
}

export const Confirm = ({ children, onConfirm }: IConfirmProps) => {
  const [del, setDel] = useState(false);
  return (
    <>
      {!del && (
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
          onClick={() => setDel(true)}
        >
          {children}
        </div>
        // <ButtonSimple onClick={() => setDel(true)}>{children}</ButtonSimple>
      )}
      {del && (
        <>
          <span
            style={{
              marginTop: 5
            }}
          >
            Are you sure?
          </span>
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
