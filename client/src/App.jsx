import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Detail from './Pages/Detail';
import CreatePost from './Pages/CreatePost/CreatePost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/:category" element={<Categories />}></Route>       
        <Route exact path="/create-post" element={<CreatePost />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
