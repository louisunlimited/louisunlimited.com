import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";

import { motion } from "framer-motion-3d";
import { OrbitControls, Stars } from "@react-three/drei";
import { Room_Model } from "@/models/Room_Model";
import { stagger, useAnimate } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen";

const Room: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
      // do not track mouse position if not desktop
      if (window.innerWidth < 768) {
        setMouse({ x: 0, y: 0 });
      }
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const [showSocials, setShowSocials] = useState(false);
  const [enterRoom, setEnterRoom] = useState(false);

  return (
    <div className="h-screen w-screen">
      <Canvas
        frameloop="demand"
        camera={{ position: [-10, 2, 10], fov: 40 }}
        shadows
        gl={{ logarithmicDepthBuffer: true }}
      >
        <Suspense fallback={null}>
          {enterRoom && (
            <>
              <ambientLight intensity={0.15} />
              <directionalLight
                position={[-31, 25, -30]}
                intensity={0.2}
                castShadow
              />
              <motion.group
                position={[0, 0, 0]}
                rotation={[mouse.y / 800_0, mouse.x / 1000_0, 0]}
              >
                <ResponsiveWrapper>
                  <Room_Model setSocialOpen={setShowSocials} />
                </ResponsiveWrapper>
              </motion.group>
              <OrbitControls
                enableZoom={false}
                minAzimuthAngle={(Math.PI * 3) / 2}
                maxAzimuthAngle={Math.PI / 4 - Math.PI / 4}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                enableDamping
              />
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
            </>
          )}
        </Suspense>
      </Canvas>
      <LoadingScreen
        enterRoom={enterRoom}
        onEnterRoom={() => setEnterRoom(true)}
      />
      <SocialContainer showSocials={showSocials} />
    </div>
  );
};

export default Room;

interface SocialContainerProps {
  showSocials: boolean;
}
const SocialContainer: React.FC<SocialContainerProps> = ({ showSocials }) => {
  const scope = useMenuAnimation(showSocials);
  return (
    <div ref={scope}>
      <ul
        className={
          showSocials
            ? `flex flex-col absolute bottom-0 right-0 gap-6 text-white font-bold text-4xl p-5`
            : `hidden`
        }
      >
        <li>
          <Link href="https://github.com/louisunlimited" target="_blank">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/yu-qian-661741223/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

const ResponsiveWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { size } = useThree();
  const aspect = Math.min(size.width / 500, 1);
  return <group scale={[aspect, aspect, aspect]}>{children}</group>;
};
