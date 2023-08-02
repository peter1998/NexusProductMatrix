import React from "react";
import Button from "react-bootstrap/Button";
import "./loadMore.css";

function LoadMore({ onLoadMore }) {
  return (
    <div className="load-more">
      <Button
        className="btn"
        variant="primary"
        size="lg"
        block
        onClick={onLoadMore}
      >
        Load More
      </Button>
    </div>
  );
}

export default LoadMore;
