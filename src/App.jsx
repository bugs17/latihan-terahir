
import { Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFoudPage from './pages/NotFoudPage'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <div className='app'>
      <div className='brand'>Website Bugs</div>

    {/* navbar link.. kalau project betulan nanti ini di buat terpisah jadi sebuah component navbar */}
    <nav className='nav'>
      
        <Link to='/' className='nav-tem'>Home</Link>
        <Link to='/profile' className='nav-tem'>Profile</Link>
        <Link to='/blog' className='nav-tem'>Blog</Link>
        <Link to='/contact' className='nav-tem'>Contact</Link>
        <Link to='/about' className='nav-tem'>About</Link>
      
    </nav>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='blog/:id' element={<BlogDetails/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='about' element={<About/>}/>

    {/* halaman 404 */}
    <Route path='*' element={<NotFoudPage/>}/>

    </Routes>
    </div>
  );
}

export default App;
