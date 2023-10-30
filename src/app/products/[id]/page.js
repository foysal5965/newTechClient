
const ProductDetailsPage = async({params}) => {
    const res = await fetch(`https://new-tech-ps5d9m4p1-foysal5965.vercel.app/product/${params.id}`, {
        cache: "force-cache",
        next: {
          revalidate: 5,
        },
      })
    const product = await res.json()
    const{details}= product
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={product.image}className="object-cover h-[72vh] w-96" />
    <div className="h-[50vh]">
      <h1 className="text-xl font-semibold text-blue-400">{product.product_name}</h1>
      <div className="flex mt-2">
        <p className="bg-gray-200 w-28 text-center rounded-md"><span className="text-gray-500">Price:</span><span className="font-bold">{product.price}TK</span></p>
        <p className="bg-gray-200 w-28 mx-1 text-center rounded-md"><span className="text-gray-500">Status:</span><span className="font-bold">{product.status}</span></p>
      </div>
      <p className="font-semibold text-[18px] mt-4">Key Features</p>
      
      {
        // eslint-disable-next-line react/jsx-key
        details.map((detail)=><p className="font-semibold mt-4">- {detail}</p>)
      }
    </div>
  </div>
</div>
  )
};

export default ProductDetailsPage;
