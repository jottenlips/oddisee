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

const Oddy = () => {
  const spritesheet = "sprites/oddy.json";
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
  frames.length === 0 &&
    !app.loader.loading &&
    app.loader.add(spritesheet).load((_, resource) => {
      setFrames(
        Object.keys(resource[spritesheet].data.frames).map((frame) =>
          Texture.from(frame)
        )
      );
    });

  console.log(app);

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

const EvilBot = () => {
  const spritesheet = "sprites/evilbot.json";
  const [frames, setFrames] = useState([]);
  // const [rot, setRot] = useState(0);
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [walking, setWalking] = useState(false);
  const app = useApp();

  const [rightPressed] = useKeyPress("d");
  const [leftPressed] = useKeyPress("a");
  const [downPressed] = useKeyPress("s");
  const [upPressed] = useKeyPress("w");

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
  frames.length === 0 &&
    !app.loader.loading &&
    app.loader.add(spritesheet).load((_, resource) => {
      setFrames(
        Object.keys(resource[spritesheet].data.frames).map((frame) =>
          Texture.from(frame)
        )
      );
    });

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
    <EvilBot />
  </Stage>
);

export default App;
