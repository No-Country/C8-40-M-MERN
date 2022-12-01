import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail';
import CreatePost from './Pages/CreatePost/CreatePost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/:categories/:category" element={<Home />}></Route>
        <Route exact path="/create-post" element={<CreatePost />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/detail" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
