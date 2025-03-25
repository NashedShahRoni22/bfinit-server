import Benefits from "./Benefits/Benefits";
import HeroNew from "./HeroNew/HeroNew";
import KeyFeats from "./KeyFeats/KeyFeats";
import Pricing from "./Pricing/Pricing";
import ServerCompare from "./ServerCompare/ServerCompare";
import ServerSection from "./ServerSection/ServerSection";

export default function Home() {
  return (
    <section>
      <HeroNew />
      <Pricing />
      <KeyFeats />
      <ServerCompare />
      <Benefits />
      <ServerSection />
    </section>
  );
}
