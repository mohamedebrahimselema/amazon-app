import { useParams } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import axios from "axios";

const EditProduct = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setRating] = useState();
  const [numReviews, setNumReviews] = useState();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const addHandler = useCallback(() => {
    console.log(id);
    axios.put(`/api/products/${id}`, product).then((res) => {
      console.log(res.status);
      console.log(res.data);
    });
  }, [product]);

  const onAddProduct = () => {
    const form_product = {
      name: name,
      image: "/images/airpods.jpg",
      description: description,
      brand: brand,
      category: category,
      price: parseInt(price),
      countInStock: parseInt(countInStock),
      rating: parseInt(rating),
      numReviews: parseInt(numReviews),
      user: "5fc628f8f2f2a645304ae887",
    };

    setProduct(form_product);
    addHandler();
  };

  return (
    <>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Brand
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Count in stock
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            rating
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            num Reviews
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="numReviews"
              value={numReviews}
              onChange={(e) => setNumReviews(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Button variant="outline-info" onClick={onAddProduct}>
            {" "}
            Add Product
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default EditProduct;
