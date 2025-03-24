import heroBg from "@/public/images/home/hero-bg.webp";

export default function HeroNew({ hostingPackage }) {
  return (
    <div className="text-primary px-5 py-10 md:container md:mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(47, 104, 177, 0.8), rgba(49, 197, 244, 0)), url(${heroBg.src})`,
        }}
        className="mt-4 flex min-h-96 w-full flex-col justify-center gap-5 rounded-md bg-cover bg-center px-5 py-10 text-white"
      >
        <h2 className="font-urbanist text-4xl font-bold">
          {hostingPackage.heroTitle}
        </h2>
        <p className="w-full max-w-xl">{hostingPackage.heroDescription}</p>
      </div>
    </div>
  );
}
