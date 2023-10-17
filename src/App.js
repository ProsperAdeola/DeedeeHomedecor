import Home from "./pages/Home1";
import Service from "./pages/Service1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Aboutus from "./pages/aboutus";
import Spin from "./components/loader";
import React, {useState} from 'react';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="App">
      {isLoading ? <Spin/> :
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
