import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import RewriteLabs from '@/components/RewriteLabs';
import OpenSource from '@/components/OpenSource';
import Book from '@/components/Book';
import SideProjects from '@/components/SideProjects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <RewriteLabs />
      <OpenSource />
      <Book />
      <SideProjects />
      <Footer />
    </main>
  );
}
