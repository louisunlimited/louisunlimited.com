import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { motion } from "framer-motion";
interface LoadingScreenProps {
  enterRoom: boolean;
  onEnterRoom: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  enterRoom,
  onEnterRoom,
}) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onEnterRoom();
    }
  }, [progress, onEnterRoom]);

  return (
    <motion.div
      animate={{
        opacity: enterRoom ? 0 : 1,
        transitionEnd: { display: "none" },
        dur: 1,
      }}
      className={
        "absolute top-0 inset-0 flex flex-col items-center justify-center gap-4 w-screen h-screen bg-gray-900"
      }
    >
      <div className="text-white font-bold text-xl">Loading...</div>
      <div className="w-44 h-1 bg-gray-800">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress.toFixed(2)}%` }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
