import CardContainer from './Components/Cards/CardsContainer';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className=" pt-[80px]">
        <Routes>
          <Route exact path="/" element={<CardContainer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
