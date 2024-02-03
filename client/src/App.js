import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import NewBlogPost from './pages/newBlog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBlog from './pages/readBlog';
import EditBlogPost from './pages/editBlog';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="light" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new' element={<NewBlogPost />} />
        <Route path='read/:id' element={<ReadBlog />} />
        <Route path='edit/:id' element={<EditBlogPost />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
