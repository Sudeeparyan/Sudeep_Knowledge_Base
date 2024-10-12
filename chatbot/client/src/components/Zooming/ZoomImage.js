import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ZoomImage = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img
          src="/Rag360/RAG 360.png"
          alt="RAG360"
          width="100%"
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomImage;
