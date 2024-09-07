import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Filter({ filters, setFilters }) {

    const handleCategoryChange = (e) => {
        setFilters({ ...filters, category: e.target.value });
    };

    const handlePriceChange = (e) => {
        setFilters({ ...filters, price: e.target.value });
    };

    const handleRatingChange = (e) => {
        setFilters({ ...filters, rating: e.target.value });
    };

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <h3>E-commerce Product Filter</h3>
                </Navbar.Brand>
                <Navbar.Toggle />
                <div>
                    <label>Category:</label>
                    <select onChange={handleCategoryChange} value={filters.category}>
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Sofa sets">Sofa sets</option>
                    </select>
                </div>
                <div>
                    <label>Price Range:</label>
                    <input type="number" onChange={handlePriceChange} value={filters.price} />
                </div>
                <div>
                    <label>Rating:</label>
                    <select onChange={handleRatingChange} value={filters.rating}>
                        <option value="">All</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="4">5+</option>
                    </select>
                </div>
            </Container>
        </Navbar>
    )
}

export default Filter;