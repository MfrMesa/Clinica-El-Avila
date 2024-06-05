import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Timeline from "./components/Timeline";
import Home from "./pages/Home";
import "/src/App.css"


export default function App() {


  return (
    <>
      <Navbar/>
      {/* <Timeline/> */}
      <Home />
      <Footer/>
    </>
  )
}
