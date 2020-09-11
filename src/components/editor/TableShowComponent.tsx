import React from "react";
import { Resizable } from "react-resizable";
import Table from "rc-table";
// import { ColumnType } from "rc-table/lib/interface";
import "react-resizable/css/styles.css";
import "./styles/TableStyle.less";
import * as styles from "./styles/TableBlock";
import { ColumnType } from "rc-table/lib/interface";

const ResizableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props;

  let width1 = width;
  if (!width1) {
    return (
      <td
        style={{
          width: "100%",
        }}
        {...restProps}
      />
    );
  }

  // console.log(width);
  return (
    <Resizable width={width1} height={0} onResize={onResize}>
      <td
        style={{
          width: "100%",
        }}
        {...restProps}
      />
    </Resizable>
  );
};

interface Cell {
  text: string;
}

interface DemoState {
  data: Cell[][];
  columns: number[];
  // width: string
  // data jest to tablica tablic o typie string
}

class Demo extends React.Component<{}, DemoState> {
  state: DemoState = {
    data: [
      [
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
        {
          text: "",
        },
      ],
    ],
    columns: [100, 100, 100, 100],
  };

  handleResize = (index: any) => (e: any, ddd: { size: { width: number } }) => {
    // console.log("E" + e);
    // console.log(ddd);
    const columns = [...this.state.columns];
    columns[index] = ddd.size.width;
    this.setState({
      ...this.state,
      columns,
    });
  };
  cellRender = (cIdx: number) => (o: object, raw: object, index: number) => (
    <input
      style={{
        width: "100%",
      }}
      placeholder={this.state.data[index][cIdx].text}
      type={"text"}
    ></input>
  );

  render() {
    const columnsData: ColumnType<Cell[]>[] = [];
    for (let i = 0; i < this.state.columns.length; i++) {
      columnsData.push({
        width: this.state.columns[i],
        render: this.cellRender(i),
        onCell: (data: Cell[], index?: number) => {
          // console.log(data);
          // console.log(index);
          return {
            width: this.state.columns[i],
            onResize: this.handleResize(i),
          } as any;
        },
      });
    }

    // const headerFunc = (col: any, index: number) => ({
    //   ...col,
    //   onHeaderCell: (data: string[][]) =>
    //     ({
    //       width: data.width,
    //       onResize: this.handleResize(index),
    //     } as any),
    // });
    // const columnsInnerData = this.state.data.map((col, index) =>
    //   headerFunc(col, index)
    // );

    const components = {
      body: {
        // cell: this.handleResize,1w
        //
        cell: ResizableTitle,
      },
    };
    return (
      <div>
        <Table
          components={components}
          // components to tablica stringów

          columns={columnsData}
          data={this.state.data}
          showHeader={false}
        />

        <div className={styles.Actions}>
          <div className={styles.TableBlockSvg}>
            <svg
              className={styles.ControlAddRow}
              focusable={"false"}
              viewBox={"0 0 24 24"}
              onClick={() => {
                // if (tableBlock.widths!.length === 0) {
                //   tableBlock.widths!.push({
                //     S: "*",
                //   });
                //   tableBlock.widths! = normalizeWidths(tableBlock.widths!);
                // }
                // tableBlock.rows!.push({
                //   __typename: "Row",
                //   columns:
                //     tableBlock.rows!.length > 0
                //       ? tableBlock.rows![
                //           tableBlock.rows!.length - 1
                //         ].columns!.map(() => emptyColumn())
                //       : [emptyColumn()],
                // });
                // onChange();
                console.log("add row");
              }}
            >
              <path d="M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z"></path>
            </svg>
          </div>
          <div className={styles.TableBlockSvg}>
            <svg
              className={styles.ControlAddColumn}
              focusable={"false"}
              viewBox={"0 0 24 24"}
              onClick={() =>
                this.setState({
                  ...this.state,
                  // pobrany state
                  data: this.state.data.map((v) => [
                    ...v,
                    {
                      text: "",
                    },
                  ]),
                  columns: [...this.state.columns, 100],
                  // nadpisanie stanu
                  // mapowanie jako przejechanie po kazdym elemencie czyli tutaj dwóch tablicach i dodanie do kazdej z nich  pustego stringa?
                  //
                })
              }
              //{
            >
              <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
