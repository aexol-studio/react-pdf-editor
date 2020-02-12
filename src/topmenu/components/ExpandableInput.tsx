import React, { useState } from "react";
import ReactPDF from "@react-pdf/renderer";
import * as Icons from "react-feather";
import { SmallInput } from "./SmallInput";
import { TopIcon } from "./TopIcon";
export const ExpandableInput = ({
    v,
    values,
    applyStyle
  }: {
    v: {
      tooltip: string;
      icon: keyof typeof Icons;
    };
    values: Array<{
      name: keyof ReactPDF.Style;
      tooltip: string;
      icon: keyof typeof Icons;
      v: string;
    }>;
    applyStyle: (css: ReactPDF.Style) => void;
  }) => {
    const allSame = [...new Set(values.map(v => v.v))];
    const canBeShrinked = allSame.length === 1;
    const [expanded, setExpanded] = useState(false);
    if (!expanded && canBeShrinked) {
      return (
        <>
          <TopIcon
            tooltip="Expand"
            icon="ChevronRight"
            onClick={() => {
              setExpanded(true);
            }}
          />
          <TopIcon tooltip={v.tooltip} icon={v.icon} onClick={() => {}} />
          <SmallInput
            value={allSame[0]}
            onChange={e => {
              applyStyle(
                values.reduce<ReactPDF.Style>((a, b) => {
                  a[b.name] = e;
                  return a;
                }, {})
              );
            }}
          />
        </>
      );
    }
    return (
      <>
        {canBeShrinked && (
          <TopIcon
            tooltip="Collapse"
            icon="ChevronLeft"
            onClick={() => {
              setExpanded(false);
            }}
          />
        )}
        {values.map(v => (
          <>
            <TopIcon tooltip={v.tooltip} icon={v.icon} onClick={() => {}} />
            <SmallInput
              value={v.v}
              onChange={e => {
                applyStyle({
                  [v.name]: e
                });
              }}
            />
          </>
        ))}
      </>
    );
  };