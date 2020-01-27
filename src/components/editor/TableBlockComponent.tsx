import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
import { ColumnsComponent } from "./ColumnsComponent";
import { Rolloutable } from "./display/Rolloutable";
import { ControlsButton } from "./Controls";
import * as styles from "./styles/TableBlock";

export interface TableBlockComponentProps {
  tableBlock: PartialObjects["TableBlock"];
  onChange: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
}

const emptyColumn = (): PartialObjects["Column"] => ({
  __typename: "Column",
  content: {
    __typename: "Stack",
    items: []
  }
});

const width2Power = (width: string) => parseFloat(width.slice(0, -1));

const normalizeWidths = (
  twidths: PartialObjects["WidthType"][]
): PartialObjects["WidthType"][] => {
  const powers = calculatePowers(
    twidths.map(tw => ({
      ...tw,
      S: tw.S || "*"
    }))
  );
  return calculateWidthsFromPowers(powers);
};
const calculatePowers = (twidths: PartialObjects["WidthType"][]) =>
  twidths.map(w => (w.S! === "*" ? 100 : parseFloat(w.S!.slice(0, -1))));
const calculateWidthsFromPowers = (
  powers: number[]
): PartialObjects["WidthType"][] => {
  const powerValue = powers.reduce((a, b) => a + b, 0);
  return powers.map(p => ({
    S: `${(100.0 * p) / powerValue}%`
  }));
};

export const TableBlockComponent = ({
  onChange,
  onEdit,
  tableBlock
}: TableBlockComponentProps) => {
  const widths = tableBlock
    .widths!.map(tw => ({
      ...tw,
      S: tw.S || "100%"
    }))
    .map(w => w.S);
  return (
    <Rolloutable
      title={`Table${tableBlock.style ? `-${tableBlock.style}` : ``}`}
    >
      <div>
        <div>
          {tableBlock.rows &&
            tableBlock.rows.map((i, index) => (
              <ColumnsComponent
                key={index}
                columns={i as PartialObjects["Columns"]}
                onChange={onChange}
                onEdit={onEdit}
                widths={widths}
                onDelete={() => {
                  tableBlock.rows = tableBlock.rows!.filter(
                    (row, rowIndex) => rowIndex !== index
                  );
                  onChange();
                }}
                onResize={(columnIndex, percentage) => {
                  const delta =
                    width2Power(tableBlock.widths![columnIndex].S!) -
                    percentage;
                  tableBlock.widths![columnIndex] = { S: `${percentage}%` };
                  if (columnIndex === widths.length - 1) {
                    tableBlock.widths![columnIndex - 1] = {
                      S: `${width2Power(
                        tableBlock.widths![columnIndex - 1].S!
                      ) + delta}%`
                    };
                  } else {
                    tableBlock.widths![columnIndex + 1] = {
                      S: `${width2Power(
                        tableBlock.widths![columnIndex + 1].S!
                      ) + delta}%`
                    };
                  }
                  onChange();
                }}
              />
            ))}
        </div>
        <div className={styles.ControlColumns}>
          {tableBlock.rows &&
            tableBlock.rows[0] &&
            tableBlock.rows[0].columns!.length > 1 &&
            tableBlock.rows[0].columns!.map((i, index) => (
              <div
                key={`${index}`}
                className={styles.ControlCell}
                style={{
                  flexBasis: widths[index]
                }}
              >
                <ControlsButton
                  onClick={() => {
                    tableBlock.rows = tableBlock.rows!.map(row => ({
                      ...row,
                      columns: row.columns!.filter((_, idx) => idx !== index)
                    }));
                    tableBlock.widths! = tableBlock.widths!.filter(
                      (tw, idx) => idx !== index
                    );
                    tableBlock.widths! = normalizeWidths(tableBlock.widths!);
                    onChange();
                  }}
                >
                  Delete
                </ControlsButton>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.Actions}>
        <ControlsButton
          onClick={() => {
            if (tableBlock.widths!.length === 0) {
              tableBlock.widths!.push({
                S: "*"
              });
              tableBlock.widths! = normalizeWidths(tableBlock.widths!);
            }
            tableBlock.rows!.push({
              __typename: "Row",
              columns:
                tableBlock.rows!.length > 0
                  ? tableBlock.rows![
                      tableBlock.rows!.length - 1
                    ].columns!.map(() => emptyColumn())
                  : [emptyColumn()]
            });
            onChange();
          }}
        >
          dodaj wiersz
        </ControlsButton>
        {tableBlock.rows && tableBlock.rows.length > 0 && (
          <ControlsButton
            onClick={() => {
              tableBlock.rows!.forEach(row => {
                row.columns!.push(emptyColumn());
              });
              tableBlock.widths!.push({
                S: "100%"
              });
              tableBlock.widths! = normalizeWidths(tableBlock.widths!);
              onChange();
            }}
          >
            kolumna
          </ControlsButton>
        )}
      </div>
    </Rolloutable>
  );
};
