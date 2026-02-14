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

// Dynamic Title Updater
const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': '홈 | 88부동산',
      '/about': '소개 | 88부동산',
      '/recommend': '추천 매물 | 88부동산',
      '/region/jinjeop-onam': '진접·오남 분석 | 88부동산',
      '/region/jinjeop2': '진접2지구 분석 | 88부동산',
      '/region/wangsuk': '왕숙지구 분석 | 88부동산',
      '/social': '유튜브·블로그 | 88부동산',
      '/contact': '상담 신청 | 88부동산',
    };

    const title = titles[location.pathname] || '88부동산 | 진접·오남·왕숙지구 전문';
    document.title = title;
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <PageTitleUpdater />
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