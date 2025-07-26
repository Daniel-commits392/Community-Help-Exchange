import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Requests from "./Pages/Requests";
import Offers from "./Pages/Offers";
import Newpost from "./Pages/NewPost";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/requests" element={<Requests/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/newpost" element={<Newpost/>} />
      </Routes>
    </Router>
  );
}
export default App;
