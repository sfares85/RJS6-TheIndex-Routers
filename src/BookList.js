import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = { filteredBooks: this.props.books };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };
  render() {
    let books = [];
    if (this.props.match.params.bookCOLOR) {
      const bookCOLOR = this.props.match.params.bookCOLOR.toLowerCase();
      let coloredBooks = this.state.filteredBooks.filter(
        book => book.color === bookCOLOR
      );
      books = <BookTable books={coloredBooks} />;
    } else {
      books = <BookTable books={this.state.filteredBooks} />;
    }
    return (
      <div>
        <h1>Search Books</h1>
        <SearchBar onChange={this.filterBooks} />
        <div className="row">{books}</div>
      </div>
    );
  }
}

export default BookList;
