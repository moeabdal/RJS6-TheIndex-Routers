import React from "react";
import { Link } from "react-router-dom";

function BookCard(props) {
  const book = props.book;
  const bookTitle = book.title;

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/books/${book.id}`} className="card">
        <div className="card-body">
          <h5 className="card-title">
            <span>{bookTitle}</span>
          </h5>
          <h5 className="card-title">
            <small className="card-text">{authors}</small>
          </h5>
          <h5 className="card-title">
            <small className="card-text">{book.color}</small>
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
