import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";

function App() {
  return (
    <body className="bg-[#172227] font-[Inter] text-white">
      <Navbar/>
      <Hero/>
      <StudentTable/>
      <Footer/>
    </body>
  );
}

export default App;
