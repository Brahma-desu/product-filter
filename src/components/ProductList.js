import React from 'react';
import { Table, Card } from 'react-bootstrap';

const ProductList = ({ products }) => {
    return (
        <>
            <h4>Product List</h4>
            {products.length === 0 ? (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Oops!</Card.Title>
                        <Card.Text>
                            Presently, there are no products available.
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>₹ {product.price}</td>
                                <td>{product.rating} stars</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </ >
    );
};

export default ProductList;
