import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookCategories from './components/Book-Catagories';
import NavBar from './components/Nav';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<BookCategories />} />
      </Routes>
    </div>
  );
}

export default App;
