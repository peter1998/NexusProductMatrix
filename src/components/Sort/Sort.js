import React from "react";
import { Form } from "react-bootstrap";
import "./sort.css";

function Sort({ onSortChange }) {
  return (
    <Form className="sort">
      <Form.Group controlId="formGridState">
        <Form.Label>Sort by</Form.Label>
        <Form.Select
          defaultValue="name-asc"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name-asc">Alphabetical a-z</option>
          <option value="name-desc">Alphabetical z-a</option>
          <option value="price-asc">Price ascending</option>
          <option value="price-desc">Price descending</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Sort;
