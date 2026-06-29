import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Cursor from "@/components/cursor/Cursor";
import SmoothScroll from "@/components/animations/SmoothScroll";

import Companies from "@/components/sections/Companies";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import StickyCards from "@/components/sections/StickyCards";
import Footer from "@/components/footer/Footer";
import Particles from "@/components/three/Particles";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <Particles />

      <Hero />
      <Companies />
      <Features />
      <Stats />
      <StickyCards />
      <Footer />
    </>
  );
}