import HostingDetails from "@/components/HostingDetails/HostingDetails";

export default async function page({ params }) {
  const { slug } = await params;

  return (
    <>
      <HostingDetails slug={slug} />
    </>
  );
}
