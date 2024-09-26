import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App