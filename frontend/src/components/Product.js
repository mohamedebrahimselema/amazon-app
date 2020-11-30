import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Prodcut.css";

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={props.product.rating}
              text={`${props.product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
