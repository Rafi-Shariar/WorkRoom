import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto min-h-screen">
        <Navbar/>
        <Banner/>

      </section>
    </div>
  );
}
