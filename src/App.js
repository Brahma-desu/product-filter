import React, { useState } from "react";
import { products_data } from "./data/ProductsData";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  const [filterValues, setFilterValue] = useState({
    category: '',
    price: '',
    rating: '',
  });

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
