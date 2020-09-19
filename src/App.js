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
import { set } from "ramda";
const [width, height] = [500, 200];
const spritesheet = window.location.href.includes("local")
  ? "/sprites/oddy.json"
  : "oddisee/sprites/oddy.json";

const Oddy = () => {
  const [frames, setFrames] = useState([]);
  // const [rot, setRot] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [walking, setWalking] = useState(false);
  const app = useApp();

  const [rightPressed] = useKeyPress("ArrowRight");
  const [leftPressed] = useKeyPress("ArrowLeft");
  const [downPressed] = useKeyPress("ArrowDown");
  const [upPressed] = useKeyPress("ArrowUp");

  useTick(() => {
    if (leftPressed) {
      setX(x - 1);
    }
    if (rightPressed) {
      setX(x + 1);
    }
    if (downPressed) {
      setY(y + 1);
    }
    if (upPressed) {
      setY(y - 1);
    }
    setWalking(rightPressed || leftPressed || downPressed || upPressed);
  });

  // load
  useEffect(() => {
    app.loader.add(spritesheet).load((_, resource) => {
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
    <Container x={x} y={y}>
      <AnimatedSprite
        animationSpeed={0.5}
        isPlaying={walking}
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
