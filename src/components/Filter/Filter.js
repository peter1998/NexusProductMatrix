import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./filter.css";

function Filter({ onFilterChange }) {
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const handleCheckboxChange = () => {
    setIsPriceFilterActive(!isPriceFilterActive);
  };

  return (
    <Form className="filter">
      <Form.Group controlId="formGridState">
        <Form.Label>Category</Form.Label>
        <Form.Select
          defaultValue="all"
          onChange={(e) => onFilterChange("category", e.target.value)}
        >
          <option value="all">All</option>
          <option value="Smart Speakers">Smart Speakers</option>
          <option value="Smart Lighting">Smart Lighting</option>
          <option value="Smart Appliances">Smart Appliances</option>
          <option value="Home Security">Home Security</option>
          <option value="Home Automation">Home Automation</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formGridPriceFilter">
        <Form.Check
          type="checkbox"
          label="Price Filter"
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      {isPriceFilterActive && (
        <Form.Group controlId="formGridPrice">
          <Form.Label>Max Price</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="1000"
            step="1"
            onChange={(e) => onFilterChange("price", e.target.value)}
          />
        </Form.Group>
      )}
    </Form>
  );
}

export default Filter;
