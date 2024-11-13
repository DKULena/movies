import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Tv from "./pages/Tv";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;