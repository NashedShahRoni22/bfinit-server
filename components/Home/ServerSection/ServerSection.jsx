import reliableBg from "@/public/images/home/reliable-bg.jpg";
import Image from "next/image";

export default function ServerSection() {
  return (
    <div className="grid grid-cols-1 gap-8 px-5 py-10 md:container md:mx-auto md:grid-cols-2 md:px-0 md:py-20">
      <div className="relative min-h-96">
        <Image src={reliableBg} fill alt="relaible" className="object-cover" />
      </div>
      <div>
        <h2 className="font-urbanist text-4xl font-bold">
          Dedicated & Virtual Servers You Can Rely On
        </h2>
        <p className="mt-4 text-lg">
          At SERVER4YOU, we specialize in providing high-performance dedicated
          and virtual servers designed for reliability and scalability. Whether
          you’re running a small project or a large-scale operation, we offer
          customizable server options with powerful hardware, advanced security,
          and full OS control. Choose from a variety of configurations to meet
          your needs, backed by our experienced support team to ensure your
          server is always running at peak performance.
        </p>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <button className="mt-4 w-full rounded-full border px-5 py-2 font-medium transition hover:bg-gray-200 md:w-fit">
            Browse Virtual Servers
          </button>
          <button className="mt-4 w-full rounded-full border px-5 py-2 font-medium transition hover:bg-gray-200 md:w-fit">
            Browse Dedicated Servers
          </button>
        </div>
      </div>
    </div>
  );
}
