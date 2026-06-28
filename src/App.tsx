import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ServicesPage, ContactPage } from './pages';
import './globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
