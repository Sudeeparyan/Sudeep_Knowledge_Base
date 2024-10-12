import React, { useEffect, useRef } from "react";
import { ForceGraph3D } from "react-force-graph";
import * as THREE from "three";
import data from "./_graph";

const GraphComponent = () => {
  const fgRef = useRef();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400, 100);
    }
  }, []);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeAutoColorBy="group"
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={(d) => d.value * 0.001}
      nodeThreeObjectExtend={true}
      nodeThreeObject={(node) => {
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(
              generateTextTexture(node.title || node.id, 24, "white", "black")
            ),
          })
        );
        sprite.scale.set(12, 6, 1); // Increase size of the labels
        return sprite;
      }}
      linkWidth={1.5}
      nodeRelSize={8} // Increase node size
      nodeLabel="title"
      onNodeClick={(node) => {
        let path = node.id
        if (!path.startsWith("http")){
          path = "/docs/"+path
        }
        if(path.endsWith(".md")){
          path = path.slice(0,-3)
        }
        window.open(path, "_blank")
      }
      }
      enableNodeDrag={true}
      showNavInfo={true}
      autoPauseRedraw={false}
    />
  );
};

function generateTextTexture(text, fontSize, color, background) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const size = fontSize || 16;

  ctx.font = `${size}px Arial`;
  const textWidth = ctx.measureText(text).width;

  canvas.width = textWidth + 20;
  canvas.height = size + 10;
  ctx.font = `${size}px Arial`;

  // Background
  ctx.fillStyle = background || "rgba(0,0,0,0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text
  ctx.fillStyle = color || "white";
  ctx.fillText(text, 10, size);

  return canvas;
}

export default GraphComponent;
