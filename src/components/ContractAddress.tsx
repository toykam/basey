// components/ContractAddress.jsx
import { contractAddress } from "@/data";
import { useState } from "react";

export default function ContractAddress() {
  const [isCopied, setIsCopied] = useState(false);

//   const contractAddress = "0xYourContractAddressHere"; // Replace with actual contract address

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center shadow-lg shadow-purple-500/20">
      <h2 className="font-meme text-2xl mb-4">Contract Address</h2>
      <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
        <p className="font-mono text-sm truncate">{contractAddress}</p>
        <button
          onClick={handleCopy}
          className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300 ml-4"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}