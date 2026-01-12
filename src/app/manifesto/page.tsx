import Navbar from "@/components/Navbar";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function ManifestoPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Manifesto />
      <Footer />
    </main>
  );
}
