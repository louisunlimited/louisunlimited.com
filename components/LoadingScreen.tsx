import { useProgress } from "@react-three/drei";

const LoadingScreen: React.FC = () => {
  const { progress } = useProgress();
  return <div>LoadingScreen</div>;
};

export default LoadingScreen;
