import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import Home from './pages/home/Home';
import Paises from './pages/Paises/Paises';
import Ligas from './pages/Ligas/Ligas';
import Times from './pages/Times/Times';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/paises' element={<Paises />} />
            <Route path="/ligas/:pais" element={<Ligas />} />
            <Route path="/ligas" element={<Ligas />} />
            <Route path="/times/:id" element={<Times />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
