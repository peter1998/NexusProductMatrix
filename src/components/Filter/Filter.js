import React from "react";
import { Form } from "react-bootstrap";
import "./filter.css";

function Filter({ onFilterChange }) {
  return (
    <Form className="filter">
      <Form.Group controlId="formGridState">
        <Form.Label>Category</Form.Label>
        <Form.Select
          defaultValue="all"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Smart Speakers">Smart Speakers</option>
          <option value="Smart Lighting">Smart Lighting</option>
          <option value="Smart Appliances">Smart Appliances</option>
          <option value="Home Security">Home Security</option>
          <option value="Home Automation">Home Automation</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Filter;
