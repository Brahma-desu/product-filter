import React, { useState, useEffect } from "react";
import { products_data } from "./data/ProductsData";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  const [filterValues, setFilterValue] = useState({
    category: '',
    price: '',
    rating: '',
  });

  // Load filter values from localStorage on component mount
  useEffect(() => {
    const storedCategory = localStorage.getItem('category');
    const storedPrice = localStorage.getItem('price');
    const storedRating = localStorage.getItem('rating');

    if (storedCategory || storedPrice || storedRating) {
      setFilterValue({
        category: storedCategory || '',
        price: storedPrice || '',
        rating: storedRating || '',
      });
    }
  }, []);

  // Update localStorage whenever filterValues change
  useEffect(() => {
    if (filterValues.category) {
      localStorage.setItem('category', filterValues.category);
    }
    if (filterValues.category == '') {
      localStorage.removeItem('category');
    }
    if (filterValues.price) {
      localStorage.setItem('price', filterValues.price);
    }
    if (filterValues.price == '') {
      localStorage.removeItem('price');
    }
    if (filterValues.rating) {
      localStorage.setItem('rating', filterValues.rating);
    }
    if (filterValues.rating == '') {
      localStorage.removeItem('rating');
    }
  }, [filterValues]);

  const filteredProductsList = products_data.filter(product => {
    return (
      (!filterValues.category || product.category === filterValues.category) &&
      (!filterValues.price || product.price <= parseInt(filterValues.price)) &&
      (!filterValues.rating || product.rating >= parseInt(filterValues.rating))
    );
  });

  return (
    <>
      <Filter filters={filterValues} setFilters={setFilterValue} />
      <ProductList products={filteredProductsList} />
    </>
  );
}

export default App;
