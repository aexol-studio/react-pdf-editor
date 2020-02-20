import React from "react";
import { Document, Page, View, StyleSheet, Font } from "@react-pdf/renderer";
import { FeatureComponent } from "./livecomponents/editor";
import { FrontendTypes } from "../frontend-types";
import { DefaultValues } from "../constants";
export interface PDFDocumentProps {
  machine: FrontendTypes["MachineTemplate"];
  onRender: () => void;
}

export const PDFDocument = (props: PDFDocumentProps) => {
  const pages =
    (props.machine.template && props.machine.template.documents) || [];
  const v = props.machine.version || new Date().toISOString();
  const version = `${v.slice(0, 10)}`;
  return (
    <Document onRender={props.onRender}>
      {pages.map((page, pagind) => (
        <Page style={styles.body} key={`${pagind}`}>
          <View fixed>
            {props.machine.template!.header && (
              <FeatureComponent
                version={version}
                feature={props.machine.template!.header}
              />
            )}
          </View>
          {page.features &&
            page.features.items &&
            page.features.items.map((item, index) => (
              <FeatureComponent
                version={version}
                key={`${index}`}
                feature={item}
              />
            ))}
          <View
            fixed
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            {props.machine.template!.footer && (
              <FeatureComponent
                version={version}
                feature={props.machine.template!.footer}
              />
            )}
          </View>
        </Page>
      ))}
    </Document>
  );
};
// Frontend Fonts


export const fonts = [
  {
    family: "Fira Sans",
    fonts: [
      {
        src: require("./fonts/FiraSans-Regular.ttf"),
        fontStyle: "normal",
        fontWeight: "normal"
      },
      {
        src: require("./fonts/FiraSans-Bold.ttf"),
        fontStyle: "normal",
        fontWeight: "bold"
      }
    ]
  }
]
fonts.forEach(f => Font.register(f));
// const availableFonts = fonts.map(f => f.family)

// ta mapa do dropdown listy


const styles = StyleSheet.create({
  body: {
    paddingTop: 42,
    paddingBottom: 30,
    paddingHorizontal: 37,
    letterSpacing: 0,
    fontSize: DefaultValues.fontSize,
    fontFamily: "Fira Sans"
  },
  title: {
    textAlign: "center"
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12
  },
  text: {
    margin: 12,
    textAlign: "justify"
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  }
});
