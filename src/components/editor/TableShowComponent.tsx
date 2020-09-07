import React from "react";
import { Resizable } from "react-resizable";
import Table from "rc-table";
import { ColumnType } from "rc-table/lib/interface";
import "react-resizable/css/styles.css";
import "./styles/TableStyle.less";
import * as styles from "./styles/TableBlock";

const ResizableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

interface RecordType {
  a: string;
  b?: string;
  c?: string;
  d?: number;
  key: string;
}

interface DemoState {
  columns: ColumnType<RecordType>[];
}

class Demo extends React.Component<{}, DemoState> {
  state: DemoState = {
    columns: [
      {
        dataIndex: "a",
        key: "a",
        width: 150,
        render() {
          return <input width="100%" type="text"></input>;
        },
      },
      {
        dataIndex: "b",
        key: "b",
        width: 150,
        render() {
          return <input style={{ width: "100%" }} type="text"></input>;
        },
      },
      {
        dataIndex: "c",
        key: "c",
        width: 150,
        render() {
          return <input style={{ width: "100%" }} type="text"></input>;
        },
      },
      {
        dataIndex: "",
        key: "d",
        width: 150,
        render() {
          return (
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="type here"
            ></input>
          );
        },
      },

      // tutaj jest dodawanie kolumny (pusty obiekt do tablicy)
      {
        dataIndex: "",
        key: "d",
        width: 150,
        render() {
          return (
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="type here"
            ></input>
          );
        },
      },
    ],
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    { a: "123", key: "1" },
    { a: "cdd", b: "edd", key: "2" },
    { a: "1333", c: "eee", d: 2, key: "3" },
  ];
  //
  // { "size":{width: 1}}
  //
  handleResize = (index: any) => (
    e: any,
    { size }: { size: { width: string | number } }
  ) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: ColumnType<RecordType>) =>
        ({
          width: column.width,
          onResize: this.handleResize(index),
        } as any),
    }));

    return (
      <div>
        <Table
          components={this.components}
          columns={columns}
          data={this.data}
        />

        <div className={styles.Actions}>
          <div className={styles.TableBlockSvg}>
            <svg
              className={styles.ControlAddRow}
              focusable={"false"}
              viewBox={"0 0 24 24"}
              // onClick={() => {
              //   if (tableBlock.widths!.length === 0) {
              //     tableBlock.widths!.push({
              //       S: "*",
              //     });
              //     tableBlock.widths! = normalizeWidths(tableBlock.widths!);
              //   }
              //   tableBlock.rows!.push({
              //     __typename: "Row",
              //     columns:
              //       tableBlock.rows!.length > 0
              //         ? tableBlock.rows![
              //             tableBlock.rows!.length - 1
              //           ].columns!.map(() => emptyColumn())
              //         : [emptyColumn()],
              //   });
              //   onChange();
              // }}
            >
              <path d="M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z"></path>
            </svg>
          </div>
          {/* {tableBlock.rows && tableBlock.rows.length > 0 && ( */}
          <div className={styles.TableBlockSvg}>
            <svg
              className={styles.ControlAddColumn}
              focusable={"false"}
              viewBox={"0 0 24 24"}
              // onClick={() => {
              //   tableBlock.rows!.forEach((row) => {
              //     row.columns!.push(emptyColumn());
              //   });
              //   tableBlock.widths!.push({
              //     S: "100%",
              //   });
              //   tableBlock.widths! = normalizeWidths(tableBlock.widths!);
              //   onChange();
              // }}
            >
              <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z"></path>
            </svg>
          </div>
          {/* )} */}
        </div>
      </div>
    );
  }
}

export default Demo;
