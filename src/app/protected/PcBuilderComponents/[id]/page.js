import PcBuilderComponentsCard from "@/components/PcBuilderComponentCard";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

const PcBuilderComponents = async ({ params }) => {
  const res = await fetch(
    `https://new-tech-ps5d9m4p1-foysal5965.vercel.app/featured-products-details/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  return (
    <div>
      {products.map((product) => (
        <PcBuilderComponentsCard
          key={product._id}
          product={product}
        ></PcBuilderComponentsCard>
      ))}
    </div>
  );
};

export default PcBuilderComponents;
