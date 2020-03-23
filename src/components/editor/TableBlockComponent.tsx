import * as React from "react";
import { PartialObjects } from "../../graphql-zeus";
// import * as Icons from "react-feather";
// import cx from "classnames";
// import * as styles1 from "./styles/Feature";
import { translated } from "../../models";
import { TopMenu } from "../../topmenu/index";
import { ColumnsComponent } from "./ColumnsComponent";
import { DeleteAndEditIconsComponentProps, DeleteAndEditIconsComponent } from "./display/DeleteAndEdit";
import { Rolloutable } from "./display/Rolloutable";
import * as styles from "./styles/TableBlock";

export interface TableBlockComponentProps
  extends DeleteAndEditIconsComponentProps {
  tableBlock: PartialObjects["TableBlock"];
  onChange: () => void;
  // onMoveDown: () => void;
  // onMoveUp: () => void;
  onEdit: (feature: PartialObjects["Feature"]) => void;
  components?: PartialObjects["TemplateComponent"][];
}

const emptyColumn = (): PartialObjects["Column"] => ({
  __typename: "Column",
  content: {
    __typename: "Stack",
    items: []
  }
});

const t = translated("TableBlockComponentTxt");

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

export const TableBlockComponent = (props: TableBlockComponentProps) => {
  const { onChange, onEdit, tableBlock } = props;
  const widths = tableBlock
    .widths!.map(tw => ({
      ...tw,
      S: tw.S || "100%"
    }))
    .map(w => w.S);
  return (
    <Rolloutable
      withoutDeleteIcons={false}
      title={`${t("TableTitle")}${
        tableBlock.style ? `-${tableBlock.style}` : ``
      }`}
      {...props}
    >
      <div className={styles.TableBlockMenuHolder}> 
        <DeleteAndEditIconsComponent
          style={{
            flex: 1
          }}
          {...props}
        />
        <TopMenu
          style={{ flex: "max-content" }}
          editedFeature={tableBlock}
          onChange={onChange}
        />
      </div>

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
                // onMoveDown={onMoveDown}
                // onMoveUp={onMoveUp}
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
                {/* poprawić paddingi */}

                {/* tutaj delete */}

                {/* <Icons.Trash
                  size={15}
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
                  className={cx(styles1.MiniIcon, styles1.Delete)}
                /> */}

                {/* tutaj delete */}

                {/* {t("ControleButtonDelete")} */}
                {/* <ControlsButton
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
                  {TableBlockComponentTxt.ControleButtonDelete}
                </ControlsButton> */}
              </div>
            ))}
        </div>
      </div>
      <div className={styles.Actions}>
        <div className={styles.TableBlockSvg}>
          <svg
            className={styles.ControlAddRow}
            focusable={"false"}
            viewBox={"0 0 24 24"}
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
            <path d="M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z"></path>
          </svg>
        </div>
        {tableBlock.rows && tableBlock.rows.length > 0 && (
          <div className={styles.TableBlockSvg}>
            <svg
              className={styles.ControlAddColumn}
              focusable={"false"}
              viewBox={"0 0 24 24"}
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
              <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z"></path>
            </svg>
          </div>
        )}
      </div>
    </Rolloutable>
  );
};
