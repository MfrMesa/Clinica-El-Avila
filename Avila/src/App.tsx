import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "/src/App.css"
import LaClinica from "./pages/LaClinica";
import Revista from "./components/Revista";


export default function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laclinica" element={<LaClinica />}>
          <Route path=":revista" element={<Revista />}/>
      </Route>
      </Routes>
      <Footer/>
    </>
  )
}
