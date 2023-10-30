"use client";
import PcBuilderPageCard from "@/components/UI/PcBuilderPageCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const PcBuilderPage = async () => {
  const res = await fetch("https://new-tech-ps5d9m4p1-foysal5965.vercel.app/featured-products", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const featuredProducts = await res.json();
  return (
    <div className="">
      <div className="border-solid border-2 border-gray-300 p-8 mx-40 mt-12">
      <div className="flex justify-between">
        <h1 className="text-blue-500 font-bold">PC Builder - Build Your Own Computer - NewTech</h1>
        <div className="bg-blue-500 w-[80px] p-3 rounded-md text-center text-white font-bold">
        <p>0TK</p> 
        <p className="text-sm">0 Items</p>
        </div>
      </div>
      <div className="bg-gray-400 text-white font-bold p-2 text-sm mt-3">Core Components</div>
      {featuredProducts.map((featuredProduct) => (
        <PcBuilderPageCard
          key={featuredProduct._id}
          featuredProduct={featuredProduct}
        ></PcBuilderPageCard>
      ))}
    </div>
    </div>
  );
};
const PcBuilder = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/protected/pcBuilder");
    },
  });

  return (
    <div className="h-full">
      <PcBuilderPage />
    </div>
  );
};

export default PcBuilder;
