import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import SearchList from "./Pages/SearchList/SearchList";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Navigation from "./Pages/Shared/Navigation";
import Notfound from "./Pages/Notfound/Notfound";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchItem" exact element={<SearchList />} />
        <Route path="/movie/:id" exact element={<MovieDetails />} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
