// components/BackgroundImages.jsx
import { motion } from "framer-motion";

export default function BackgroundImages() {
  const images = [
    "/images/image1.png",
    "/logo.png",
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt="Background"
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0], // Random vertical movement
              x: [0, Math.random() * 20 - 10, 0], // Random horizontal movement
              rotate: [0, Math.random() * 360], // Random rotation
            }}
            transition={{
              duration: Math.random() * 10 + 5, // Random duration
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>
    </>
  );
}