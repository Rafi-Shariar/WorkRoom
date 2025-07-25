import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WorkRule from "./components/WorkRule";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto min-h-screen p-2">
        <Navbar/>
        <Banner/>
        <WorkRule/>
        <WhyChooseUs/>
        <GetStarted/>
       

      </section>
       <footer className="mt-16">
           <Footer/>
       </footer>
    </div>
  );
}
