import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    let books = [];
    let color = this.props.match.params.bookColor;
    console.log(color);
    if (color) {
      let coloredBooks = this.state.filteredBooks.filter(
        book => book.color === color.toLowerCase()
      );
      books = <BookTable books={coloredBooks} />;
    } else {
      books = <BookTable books={this.state.filteredBooks} />;
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <div>{books}</div>
      </div>
    );
  }
}

export default BookList;
