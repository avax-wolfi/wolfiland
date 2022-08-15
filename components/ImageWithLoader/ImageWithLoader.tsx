import React, { useState } from "react";
import styles from "./ImageWithLoader.module.css";

export interface ImageProps {
  src: string;
  className: any;
  forceRemount: () => void;
}

export default React.memo<ImageProps>(function ImageWithLoader({
  src,
  className,
  forceRemount,
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p className={styles["loading-placeholder"]}>loading...</p>}
      <a target="_blank" href={src} rel="noopener noreferrer">
        <img
          src={src}
          className={`${className} ${loading ? styles["loading"] : ""}`}
          onLoad={() => setLoading(false)}
          onError={forceRemount}
        />
      </a>
    </>
  );
});
