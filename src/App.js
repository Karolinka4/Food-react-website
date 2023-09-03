import {HashRouter as BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './components/login/Login';
import Rezerwacje from './pages/rezerwacje/Rezerwacje';
import Dostawy from './pages/dostawy/Dostawy';
import Kontakt from './pages/kontakt/Kontakt';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/"             element={< Home/>} />
            <Route path="/login"        element={< Login/> } />
            <Route path="/rezerwacje"   element={< Rezerwacje/> } />
            <Route path="/dostawy"      element={< Dostawy/> } />
            <Route path="/kontakt"      element={< Kontakt/> } />
        </Routes>
      </BrowserRouter>
  )

}
export default App;