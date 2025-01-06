import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className="scroll-smooth">
      <Analytics />
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App