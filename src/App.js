import Home from "./pages/Home1";
import Service from "./pages/Service1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Aboutus from "./pages/aboutus";





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
