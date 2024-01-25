import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ProviderAppContext } from './context/AppContext'; 
import Favorites from './views/Favorites';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <ProviderAppContext> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </ProviderAppContext>
    </div>
  );
};

export default App;