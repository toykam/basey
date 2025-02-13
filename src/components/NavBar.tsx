// components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import WalletButton from "./WalletButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50 shadow-2xl shadow-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Basey Logo" className="h-10" />
            <span className="font-molala text-2xl text-white ml-2">Basey</span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8">
            <Link
              href="#about"
              className="text-white hover:text-purple-300 text-lg font-semibold transition duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#tokenomics"
              className="text-white hover:text-purple-300 text-lg font-semibold transition duration-300 hover:scale-105"
            >
              Tokenomics
            </Link>
            <Link
              href="#community"
              className="text-white hover:text-purple-300 text-lg font-semibold transition duration-300 hover:scale-105"
            >
              Community
            </Link>
            <Link
              href="#roadmap"
              className="text-white hover:text-purple-300 text-lg font-semibold transition duration-300 hover:scale-105"
            >
              Roadmap
            </Link>
          </div>

          {/* Wallet Button (Desktop) */}
          {/* <div className="hidden lg:block"> */}
            {/* <WalletButton /> */}
          {/* </div> */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <Link
              href="#about"
              className="block text-white hover:text-purple-300 text-lg font-semibold py-2"
            >
              About
            </Link>
            <Link
              href="#tokenomics"
              className="block text-white hover:text-purple-300 text-lg font-semibold py-2"
            >
              Tokenomics
            </Link>
            <Link
              href="#community"
              className="block text-white hover:text-purple-300 text-lg font-semibold py-2"
            >
              Community
            </Link>
            <Link
              href="#roadmap"
              className="block text-white hover:text-purple-300 text-lg font-semibold py-2"
            >
              Roadmap
            </Link>
            {/* <div/ className="mt-4"> */}
              {/* <WalletButton /> */}
            {/* </div> */}
          </div>
        )}
      </div>
    </motion.nav>
  );
}