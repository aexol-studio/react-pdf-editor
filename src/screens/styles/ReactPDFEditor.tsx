import { style, fontFace } from "typestyle";
import { Colors } from "../../Colors";
import { TOPHEIGHT } from "../../constants";

fontFace({
  fontFamily: "Fira Sans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');`
}),
  fontFace({
    fontFamily: "Fira Sans",
    fontStyle: "bold",
    fontWeight: 700,
    src: `local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');`
  });

fontFace({
  fontFamily: "Fira Sans",
  fontStyle: "light",
  fontWeight: 300,
  src: `local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6Xl7Glw.woff2) format('woff2');`
});

fontFace({
  fontFamily: "Fira Sans",
  fontStyle: "medium",
  fontWeight: 500,
  src: `local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');`
});

export const Actions = style({
  display: "flex"
});
export const SplitScreen = style({
  $debugName: "SplitScreen",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "stretch",
  height: `calc( 100% - ${TOPHEIGHT}px )`
});

export const Left = style({
  $debugName: "Left",
  flex: 1,
  padding: `${TOPHEIGHT}px 30px`,
  background: `#f9f9f9`,
  overflowY: "auto",
  height: "100%",
  $nest: {
    "*": {
      maxWidth: "100%"
    }
  }
});

export const Right = style({
  $debugName: "Right",
  width: "50%",
  height: "100%",
  overflowY: "hidden",
  background: `#f9f9f9`,
  padding: `${TOPHEIGHT}px 30px`,
  $nest: {
    "*": {
      maxWidth: "100%"
    }
  }
});

export const SectionTitle = style({
  $debugName: "SectionTitle",
  fontFamily: "Fira Sans",
  fontSize: 16,
  paddingBottom: 5,
  borderBottom: `1px dashed ${Colors["Ancient Stone"]}`
});

export const EyePlacement = style({
  $debugName: "EyePlacement",
  position: "absolute",
  right: 30,
  top: 0,
  height: TOPHEIGHT,
  display: "flex",
  alignItems: "center"
});
