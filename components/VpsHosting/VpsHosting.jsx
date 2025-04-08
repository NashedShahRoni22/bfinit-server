import ProductHero from "../ProductHero/ProductHero";
import Pricing from "./Pricing";

export default function VpsHosting() {
  return (
    <section>
      <ProductHero
        title="Your VPS Hosting Needs? Covered!"
        subTitle="If you're looking for a fast, flexible and affordable solution, our VPS
        Hosting are ready to meet your demands!"
      />
      <Pricing />
    </section>
  );
}
