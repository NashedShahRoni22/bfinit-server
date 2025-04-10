import VpsFeat from "@/components/CustomVps/VpsFeat";
import VpsOrderForm from "@/components/CustomVps/VpsOrderForm";
import ProductHero from "@/components/ProductHero/ProductHero";

export default function Page() {
  

  return (
    <section>
      <ProductHero
        title="Build your own vps"
        subTitle="If you're looking for a fast, flexible, and affordable solution & your personal configuration then submit your preference!"
      />
      <VpsOrderForm/>
      <VpsFeat/>
    </section>
  );
}
