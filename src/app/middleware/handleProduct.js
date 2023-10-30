
// pages/api/handleProduct.js
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
    if (req.method === 'POST') {
      const { product } = req.body;
      // Handle the product here
      console.log('Product clicked:', product);
      // You can perform any necessary actions with the product data
  
      res.status(200).json({ message: 'Product handled successfully' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  };
