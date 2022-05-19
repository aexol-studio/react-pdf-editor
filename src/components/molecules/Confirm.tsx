import React, { useState } from "react";
import { ButtonSimple } from "@components/atoms";
import { translated } from "@/models";

export interface IConfirmProps {
  children: React.ReactNode;
  onConfirm: () => void;
  style?: React.CSSProperties;
}

export const Confirm = ({ children, onConfirm }: IConfirmProps) => {
  const [del, setDel] = useState(false);
  const t = translated("ConfirmTxt");
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
      )}
      {del && (
        <>
          <span
            style={{
              marginTop: 5
            }}
          >
            {t("AreYouSure")}
          </span>
          <div style={{ marginRight: 5 }} />
          <ButtonSimple
            onClick={() => {
              setDel(false);
              onConfirm();
            }}
          >
            {t("Yes")}
          </ButtonSimple>
          <div style={{ marginRight: 5 }} />
          <ButtonSimple onClick={() => setDel(false)}>{t("No")}</ButtonSimple>
        </>
      )}
    </>
  );
};
