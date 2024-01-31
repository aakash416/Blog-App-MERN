import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './signup';
import Login from './login';
import Home from './home';
import NewBlogPost from './newBlogPost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogById from './blogById';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="light" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newblogpost' element={<NewBlogPost />} />
        <Route path='/:id' element={<BlogById />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
