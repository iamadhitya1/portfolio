import Hero from "@/components/Hero";
import About from "@/components/About";
import RewriteLabs from "@/components/RewriteLabs";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <Hero />
      <About />
      <RewriteLabs />
      <OpenSource />
      <Footer />
    </main>
  );
}
