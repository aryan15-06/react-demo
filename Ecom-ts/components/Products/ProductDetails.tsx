import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define Type for Product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Explicitly define type
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product details
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data: Product = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // Fetch data when component mounts or id changes
  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Show loading message while fetching data
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, boxShadow: 3, }}>
      <CardMedia
        component="img"
        image={product?.thumbnail}
        alt={product?.title}
        sx={{ height: 200, objectFit: "cover" }} // Added styling
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product?.description}
        </Typography>
        <Typography variant="h6" color="primary" mt={2}>
          Price: ${product?.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
