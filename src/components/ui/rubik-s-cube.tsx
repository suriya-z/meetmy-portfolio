
import { Canvas } from "@react-three/fiber";
import React, { useRef, useMemo, useCallback, useState } from "react";
import * as THREE from "three";
import { RoundedBox } from '@react-three/drei';
import { Vector3, Matrix4, Quaternion } from "three";

type RubiksCubeModelProps = {
  position?: [number, number, number];
  scale?: number;
};

const RubiksCubeModel = (props: RubiksCubeModelProps) => {
  const ANIMATION_DURATION = 1.2;
  const GAP = 0.01;
  const RADIUS = 0.075;
  const size = 0.8;

  // Internal cube state simplified for demo
  const cubes = useMemo(() => {
    const arr = [];
    const positions = [-1, 0, 1];
    for (let x of positions) {
      for (let y of positions) {
        for (let z of positions) {
          arr.push({
            position: new Vector3(x, y, z),
            id: `cube-${x}-${y}-${z}`,
            rotationMatrix: new Matrix4(),
          });
        }
      }
    }
    return arr;
  }, []);

  return (
    <group
      position={props.position ?? [0, 0, 0]}
      scale={props.scale ?? 1}
    >
      {cubes.map((cube) => (
        <group
          key={cube.id}
          position={[
            cube.position.x * (size + GAP),
            cube.position.y * (size + GAP),
            cube.position.z * (size + GAP),
          ]}
        >
          <RoundedBox
            args={[size, size, size]}
            radius={RADIUS}
          >
            <meshStandardMaterial color="#000000" />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
};

RubiksCubeModel.displayName = "RubiksCubeModel";

// Stripped-down scene: no lights, no cameras, no useDepthBuffer, just plain Canvas and cube
export function Scene() {
  return (
    <div className="h-svh w-screen relative bg-black">
      <Canvas>
        <RubiksCubeModel position={[0, 0, 0]} scale={1} />
      </Canvas>
    </div>
  );
}
