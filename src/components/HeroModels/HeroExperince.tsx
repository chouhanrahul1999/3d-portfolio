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
  const isMobile = useMediaQuery({ query: "(max-width: 768px" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024x" });
  const screensRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLight />

      <Particles count={100} />
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
