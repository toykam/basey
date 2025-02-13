// components/Hero.jsx
import { motion } from "framer-motion";
import ContractAddress from "./ContractAddress";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-center px-4">
      {/* Basey Mascot */}
      <motion.img
        src="/fire-art.png"
        alt="Basey"
        className="mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Title */}
      <h1
        className="font-molala text-4xl md:text-8xl mb-4"
      >
        Basey
      </h1>

      {/* Tagline */}
      <p
        className="font-meme text-xl md:text-2xl mb-8"
      >
        Your Base Buddy for Memes, Scalability, and Fun!
      </p>

      {/* Call-to-Action Button */}
      <button className="bg-white text-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 hover:scale-105 mb-8">
        Join the Basey Squad
      </button>

      {/* Contract Address Section */}
      <div className="mt-8 w-full max-w-md">
        <ContractAddress />
      </div>
    </div>
  );
}