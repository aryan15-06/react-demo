import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

//  Type for Product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Props Type
interface ProductsProps {
  searchResults: Product[];
}

const Products: React.FC<ProductsProps> = ({ searchResults = []}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredProducts(searchResults);
    } else {
      setFilteredProducts(products);
    }
  }, [searchResults, products]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Products List
      </Typography>

      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.thumbnail}
                  alt={product.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#d81b60", margin: 2 }}
                  onClick={() => navigate(`/product/${product.id}`)}
                 
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ margin: 3 }}>
            Loading products...
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default Products;
