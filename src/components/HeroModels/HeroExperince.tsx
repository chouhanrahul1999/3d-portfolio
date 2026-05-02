import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import Particles from "./Particals";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import * as THREE from "three";

const HeroExperince = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const screensRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas frameloop="demand" performance={{ min: 0.5 }} camera={{ position: isMobile ? [0, 2, 18] : [0, 2, 15], fov: 43 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        minPolarAngle={isMobile ? Math.PI / 2 : Math.PI / 5}
        maxPolarAngle={isMobile ? Math.PI / 2 : Math.PI / 2}
        maxDistance={20}
        minDistance={5}
      />
      <HeroLight />

      <Particles count={50} />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room screensRef={screensRef} />
      </group>

      <EffectComposer>
        <SelectiveBloom
          selection={[screensRef] as any}
          intensity={1}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroExperince;
