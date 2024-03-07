import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from './components/PageNotFound';
import SearchPage from './page/SearchPage';
import Home from './page/Home';
import Header from './components/Header';
import About from './page/About';
import Movie from './page/Movie';
import Navbar from './components/NavBar';
import TopRated from './page/TopRated';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
