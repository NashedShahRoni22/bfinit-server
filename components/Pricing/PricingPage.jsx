import ServerCompare from "../Home/ServerCompare/ServerCompare";
import DedicatedServerDetails from "./DedicatedServerDetails/DedicatedServerDetails";
import Hero from "./Hero/Hero";
import PackagesPricing from "./PackagesPricing/PackagesPricing";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PackagesPricing />
      <DedicatedServerDetails />
      <ServerCompare />
    </>
  );
}
