
import Banner from "./components/Banner";
import WorkRule from "./components/WorkRule";

import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <div>
      <section className="p-2">
        <Banner/>
        <WorkRule/>
        <WhyChooseUs/>
        <GetStarted/>
       

      </section>
      
    </div>
  );
}
