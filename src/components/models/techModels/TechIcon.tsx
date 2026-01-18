import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface TechIconProps {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: number[];
  };
}

const TechIcon = ({ model }: TechIconProps) => {
  return (
    <Canvas>

    </Canvas>
  );
};

export default TechIcon;
