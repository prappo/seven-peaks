import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './sections';
import {
  Home,
  Article,
  Category,
  Bookmark,
  NotFound,
  SearchResult
} from './pages';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/" element={<SearchResult />} />
          <Route exact path="/bookmarks" element={<Bookmark />} />
          <Route exact path="/article/*" element={<Article />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
