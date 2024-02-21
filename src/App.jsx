import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useState } from "react";
import BookList from "./book/BookList";
import { booksList } from "./booksList";

function App() {
  const [books, setBooks] = useState([...booksList]);

  function handleSearch(searchTerm) {
    if (searchTerm !== "") {
      const filterBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks([...filterBooks]);
    } else {
      setBooks([...booksList]);
    }
  }

  function handleSort(sortBy) {
    if (sortBy === "name_asc") {
      // const sortName_Asc = books.sort((a, b) => (a.name > b.name ? 1 : -1));
      const sortName_Asc = books.sort((a, b) => a.name > b.name);
      setBooks([...sortName_Asc]);
    } else if (sortBy === "name_desc") {
      const sortName_Desc = books.sort((a, b) => a.name < b.name);
      // const sortName_Desc = books.sort((a, b) => (a.name < b.name ? 1 : -1));

      setBooks([...sortName_Desc]);
    } else if (sortBy === "year_asc") {
      const sortAscYear = books.sort((a, b) => a.year - b.year);
      setBooks([...sortAscYear]);
    } else if (sortBy === "year_desc") {
      const sortDescYear = books.sort((a, b) => b.year - a.year);
      setBooks([...sortDescYear]);
    } else {
      setBooks([...books]);
    }
  }

  function handleFavourite(favBook) {
    const favouriteBook = books.map((book) => {
      if (book.id === favBook.id) {
        return {
          ...book,
          isFavourite: !book.isFavourite,
        };
      } else {
        return book;
      }
    });
    setBooks(favouriteBook);
  }
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header onSearch={handleSearch} onSort={handleSort} />
        <BookList books={books} onFav={handleFavourite} />
      </main>
      <Footer />
    </>
  );
}

export default App;
