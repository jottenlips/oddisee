import React, { useState, useEffect } from "react";
import { Graphics, Point, Texture } from "pixi.js";

import {
  Stage,
  PixiComponent,
  Container,
  AnimatedSprite,
  useApp,
  useTick,
} from "@inlet/react-pixi";
import { useKeyPress, useKeyPressEvent } from "react-use";
const [width, height] = [500, 200];
const spritesheet = "/sprites/oddy.json";

const Oddy = () => {
  const [frames, setFrames] = useState([]);
  // const [rot, setRot] = useState(0);
  const [x, setX] = useState(0);
  const app = useApp();

  // useTick((delta) => setRot((r) => r + 0.01 * delta));

  useKeyPressEvent("ArrowRight", () => {
    setX(x + 10);
  });

  useKeyPressEvent("ArrowLeft", () => {
    setX(x + -10);
  });

  // load
  useEffect(() => {
    app.loader.add(spritesheet).load((_, resource) => {
      console.log(resource[spritesheet]);

      setFrames(
        Object.keys(resource[spritesheet].data.frames).map((frame) =>
          Texture.from(frame)
        )
      );
    });
  }, []);

  if (frames.length === 0) {
    return null;
  }

  return (
    <Container x={x} y={height / 2}>
      <AnimatedSprite
        animationSpeed={0.5}
        isPlaying={true}
        textures={frames}
        anchor={0.5}
      />
    </Container>
  );
};

const App = () => (
  <Stage width={width} height={height} options={{ backgroundColor: 0xffffff }}>
    <Oddy />
  </Stage>
);

export default App;
