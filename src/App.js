import './App.css';
import { Route, Routes } from 'react-router-dom';


import Home from './components/home';
import Beers from './pages/ListBeers';
import BeerDetail from './pages/beerDetail';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {



  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beer/:idBeer" element={<BeerDetail />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />

      </Routes>



    </div>
  );
}

export default App;
