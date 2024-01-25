import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import  PhotoContextProvider  from './context/PhotoContext';
import Favorites from './views/Favorites';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <PhotoContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoContextProvider>
    </div>
  );
};

export default App;