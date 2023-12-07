import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import Blogs from './components/BlogPage/Blogs'
import Blog from './components/BlogPage/Blog'
import MyWork from './components/MyWorkPage/MyWork'
import Resume from './components/Resume'

function App() {
  return (
    <Router>
      <div className="bg-primary text-secondary tb:px-0">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/blogs/*' element={<Blogs />} />
          <Route path='/blogs/:title' element={<Blog />} />
          <Route path='/My work' element={<MyWork />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
