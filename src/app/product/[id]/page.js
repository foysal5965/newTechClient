import FeaturedProductsDetailsCard from "@/components/UI/FeaturedProductsDetailsCard";

const FeaturedProductsDetailsPage = async ({ params }) => {
  const res = await fetch(`https://new-tech-ps5d9m4p1-foysal5965.vercel.app/featured-products-details/${params.id}`, {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8
    p-10 w-[70%] h-[h-screen] mx-auto"
    >
      {products.map((product) => (
        <FeaturedProductsDetailsCard
          key={product._id}
          product={product}
        ></FeaturedProductsDetailsCard>
      ))}
    </div>
  );
};

export default FeaturedProductsDetailsPage;
