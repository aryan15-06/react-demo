import { AppBar, TextField, Toolbar, Typography, Button } from "@mui/material";
import React, { useState } from "react";

// Define interface for props
interface NavbarProps {
  onSearchResults: (results: Product[]) => void; // Function accepting an array of products
}

// Define a type for the product structure
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Navbar component with typed props
const Navbar: React.FC<NavbarProps> = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Type for event handler
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data: { products: Product[] } = await response.json(); // Type API response

        // Filter results based on the query (case-insensitive)
        const filteredResults = data.products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        onSearchResults(filteredResults); // Pass filtered results to parent component
      } catch (error) {
        console.error("Search API Error:", error);
      }
    } else {
      console.log("Query too short, clearing results"); // To check short query
      onSearchResults([]); // Clearing results if query is too short
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#e91e63", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          My Website
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search products"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            backgroundColor: "#fce4ec",
            borderRadius: "5px",
            width: "248px",
          }}
        />
        <div>
          <Button variant="contained"  sx={{ backgroundColor:"#f8bbd0", marginRight: "10px" }}>
            Log in
          </Button>
          <Button variant="contained" sx={{backgroundColor: "#ad1457"}}>Sign up</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
