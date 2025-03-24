import heroBg from "@/public/images/pricing/virtual-server-bg.png";

export default function Hero() {
  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto">
      <div
        style={{
          backgroundImage: `url(${heroBg.src})`,
        }}
        className="mt-4 flex min-h-96 w-full flex-col justify-center gap-5 rounded-md bg-cover bg-center px-5 py-10 text-white"
      >
        <h2 className="font-urbanist text-4xl font-bold">
          Virtual Servers – Performance Up, costs Down
        </h2>
        <p className="w-full max-w-xl">
          Get lightning-fast, flexible virtual servers with zero setup fees and
          no hidden costs. Enjoy top-tier performance that fits all your needs!
        </p>
      </div>
    </div>
  );
}
