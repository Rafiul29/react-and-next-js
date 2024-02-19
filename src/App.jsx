import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import BookList from "./book/BookList";

function App() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header/>
        <BookList/>
      </main>
      <Footer />
    </>
  );
}

export default App;
