import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
