import React, { useState } from "react";
import { PartialObjects } from "../../graphql-zeus";
import * as styles from "./styles/Image";
import { translated } from "../../models";
import { MAX_IMAGE_WIDTH } from "../../constants";
import { DeleteAndEditIconsComponent } from "./display/Rolloutable";
// import {DeleteAndEditIconsComponent} from '../../components/editor/display/Rolloutable'

const t = translated("ImageComponentTxt");

function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result! as string;
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });
}
export interface ImageComponentProps {
  image: PartialObjects["Image"];
  onChange: () => void;
}

export const ImageComponent = ({ onChange, image }: ImageComponentProps) => {
  const [imageRef, setImageRef] = useState<HTMLImageElement>();
  const [ratio, setRatio] = useState<number>(1.0);
  return (
    <div>
      <DeleteAndEditIconsComponent
      />
      <div className={styles.ImageWrap}>
        {image.url && (
          <img
            alt=""
            className={styles.ImageMain}
            src={image.url}
            ref={ref => {
              if (ref) {
                setImageRef(ref);
              }
            }}
          />
        )}
        {image.base64 && (
          <img
            alt=""
            className={styles.ImageMain}
            src={image.base64}
            onLoad={() => {
              if (!image.width || !image.height) {
                const ratio = imageRef!.naturalHeight / imageRef!.naturalWidth;
                image.width = Math.min(imageRef!.naturalWidth, MAX_IMAGE_WIDTH);
                image.height = ratio * image.width;
              }
              setRatio(image.width / image.height);
              onChange();
            }}
            ref={ref => {
              if (ref) {
                setImageRef(ref);
              }
            }}
          />
        )}
        <input
          type="file"
          onChange={e => {
            //TODO: Upload somewhere and respond with link here then setup image.url for now base64
            getBase64(e.target.files![0]!).then((value: string) => {
              image.base64 = value;
              image.width = undefined;
              image.height = undefined;
              onChange();
            });
          }}
        />
        {image.base64 && imageRef && (
          <>
            <input
              type="number"
              placeholder={t("PlaceholderWidth")}
              value={image.width}
              max={MAX_IMAGE_WIDTH}
              min={2}
              onChange={e => {
                const w = parseInt(e.target.value);
                image.width = w;
                image.height = Math.floor(w * (1 / ratio));
                onChange();
              }}
            />
            <input
              type="number"
              placeholder={t("PlaceholderHeight")}
              value={image.height}
              step={0.001}
              onChange={e => {
                const h = parseInt(e.target.value);
                image.height = h;
                image.width = Math.floor(h * ratio);
                onChange();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
