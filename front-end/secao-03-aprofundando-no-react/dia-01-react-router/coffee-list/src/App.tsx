import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
    </Routes>
  )
}

export default App;