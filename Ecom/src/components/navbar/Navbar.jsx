import { AppBar, TextField, Toolbar, Typography, Button } from "@mui/material";
import React, { useState } from "react";

function Navbar({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        if (!response.ok) throw new Error("Failed to fetch data");
  
        const data = await response.json();
        console.log("API Response:", data); // To check the API response
  
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
    <AppBar position="static" sx={{ backgroundColor: "lightblue", padding: "10px" }}>
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
            backgroundColor: "white",
            borderRadius: "5px",
            width: "248px",
          }}
        />
        <div>
          <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}>
            Log in
          </Button>
          <Button variant="contained" color="secondary">Sign up</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
