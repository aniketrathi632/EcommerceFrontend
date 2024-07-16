import Navbar from "./Navbar";
import './index.css';
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
