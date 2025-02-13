// pages/roadmap.js
import Navbar from "@/components/NavBar";
import { motion } from "framer-motion";

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Foundation (Completed)",
      status: "completed",
      milestones: [
        "Bond at Uni – $69K MC",
        "All-Time High – $124K MC",
        "500+ Telegram members milestone reached",
        "First wave of BASEY’s Basement sessions",
        "Core community built, removing bad actors",
      ],
    },
    {
      title: "Phase 2: Growth & Expansion (In Progress)",
      status: "in-progress",
      milestones: [
        "Bolide fast-track listing at $150K MC",
        "Coinbase fast-track listing at $500K MC",
        "Website revamp (90% done by paid web dev)",
        "Basey Bot development confirmed",
      ],
    },
    {
      title: "Phase 3: Ecosystem & Mass Adoption (Future)",
      status: "future",
      milestones: [
        "NFT Collection w/ Doodle on Base (emoji-themed BASEY characters)",
        "Scaling BASEY’s Basement (bigger events, more collaborations)",
        "Expanding beyond DEX → Targeted CEX listings",
        "Potential DeFi integrations & more surprises",
      ],
    },
  ];

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white py-40 px-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="font-meme text-4xl md:text-6xl text-center mb-8">
            📜 BASEY Roadmap
            </h1>
            <p className="font-meme text-xl md:text-2xl text-center mb-12">
            Community Takeover in Motion 🔵🔥
            </p>

            {/* Timeline */}
            <div className="space-y-8">
            {phases.map((phase, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg shadow-purple-500/20"
                >
                <h2 className="font-meme text-2xl mb-4">{phase.title}</h2>
                <ul className="list-disc list-inside space-y-2">
                    {phase.milestones.map((milestone, i) => (
                    <li key={i} className="font-mono text-sm md:text-base">
                        {milestone}
                    </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        phase.status === "completed"
                        ? "bg-green-500"
                        : phase.status === "in-progress"
                        ? "bg-yellow-500"
                        : "bg-purple-500"
                    }`}
                    >
                    {phase.status === "completed"
                        ? "Completed"
                        : phase.status === "in-progress"
                        ? "In Progress"
                        : "Future"}
                    </span>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </div>
    </>
  );
}