import CardContainer from './Components/Cards/CardsContainer';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CardContainer />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
