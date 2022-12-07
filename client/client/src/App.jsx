import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import Detail from './Pages/Detail';
import CreatePost from './Pages/CreatePost/CreatePost';
import Searched from './Pages/Searched/Searched';
import Lenguajes from './Pages/Lenguajes/Lenguajes';
import Tecnologias from './Pages/Tecnologias/Tecnologias';

function App() {
  const { searchFocus } = useSelector((state) => state.searchFocus);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/categorias/:category" element={<Categories />}></Route>
        <Route exact path="/categorias/:programmingL/:technology" element={<Tecnologias />}></Route>
        <Route exact path="/lenguajes/:programmingL" element={<Lenguajes />}></Route>
        <Route exact path="/create-post" element={<CreatePost />}></Route>
        <Route exact path="/auth/register" element={<Register />}></Route>
        <Route exact path="/auth/login" element={<Login />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/:category/detail/:id" element={<Detail />}></Route>
      </Routes>
      {searchFocus ? <Searched /> : null}
    </>
  );
}

export default App;
