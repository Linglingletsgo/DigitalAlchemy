import Navbar from "@/components/Navbar";
import Invocation from "@/components/Invocation";
import Footer from "@/components/Footer";

export default function InvocationPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Invocation />
      <Footer />
    </main>
  );
}
