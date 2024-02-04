import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import CreateNewBlogPost from './pages/CreateNewBlogPost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBlog from './pages/readBlog';
import EditBlogPost from './pages/editBlog';
import Header from './components/Header';
import MyBlog from './pages/MyBlog';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="light" />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-blog' element={<MyBlog />} />
        <Route path='/new' element={<CreateNewBlogPost />} />
        <Route path='read/:id' element={<ReadBlog />} />
        <Route path='edit/:id' element={<EditBlogPost />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
