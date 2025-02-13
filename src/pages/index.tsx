import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
    </>
  );
}
