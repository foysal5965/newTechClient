import Link from "next/link";

const FeaturedProducts = ({ featuredProduct }) => {
  return (
    <Link href={`/product/${featuredProduct?.category}`}>
      <div className="card w-50 shadow-xl h-72">
        <figure className="px-10 pt-10">
          <img src={featuredProduct.image} alt="Shoes" className="rounded-md" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{featuredProduct.product_name}</h2>
          <p className="text-center text-orange-400 font-bold">{featuredProduct.price} TK</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProducts;
