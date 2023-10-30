import FeaturedProducts from "@/components/UI/FeaturedProducts";
import { FaBars } from 'react-icons/fa';
const HomePage = async () => {
  const res = await fetch("https://new-tech-ps5d9m4p1-foysal5965.vercel.app/featured-products", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const featuredProducts = await res.json();
  return (
    <>
      <div className="mt-8">
        <h1 className="text-center font-extrabold">Featured Category</h1>
        <p className="text-center font-semibold">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8
     p-10 w-[70%] mx-auto"
      >
        {featuredProducts.map((featuredProduct) => (
          <FeaturedProducts
            key={featuredProduct._id}
            featuredProduct={featuredProduct}
          ></FeaturedProducts>
        ))}
      </div>
    </>
  );
};

export default HomePage;
