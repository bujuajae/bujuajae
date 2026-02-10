import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import RegionalJinjeopOnam from './pages/RegionalJinjeopOnam';
import RegionalJinjeop2 from './pages/RegionalJinjeop2';
import RegionalWangsuk from './pages/RegionalWangsuk';
import SocialMedia from './pages/SocialMedia';
import Contact from './pages/Contact';
import RecommendList from './pages/RecommendList';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<RecommendList />} />
          <Route path="/region/jinjeop-onam" element={<RegionalJinjeopOnam />} />
          <Route path="/region/jinjeop2" element={<RegionalJinjeop2 />} />
          <Route path="/region/wangsuk" element={<RegionalWangsuk />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;