import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Key, LineChart, FileText, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* New Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
        {/* Background Image with Parallax-like effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }}
        ></div>
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-5 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
          <p className="text-[#ffce00] font-bold text-lg md:text-xl mb-6 tracking-widest uppercase">
            진접 · 오남 · 왕숙지구 전문
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 break-keep shadow-sm">
            남양주의 미래, 왕숙의 가치.<br className="hidden md:block" />
            <span className="text-[#ffce00]">88부동산</span>이 가장 잘 압니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto break-keep opacity-90">
            정밀한 데이터 분석과 현장 발로 뛰는 정보로<br className="hidden md:block" />
            당신의 성공적인 자산 관리를 위한 파트너가 되어 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            <Link 
              to="/recommend" 
              className="px-10 py-4 bg-[#ffce00] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center"
            >
              추천 매물 보기
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center"
            >
              투자 상담 예약
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <div className="bg-brand-50 py-12 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                <HomeIcon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">실거주 상담 전문</h3>
                <p className="text-sm text-slate-600">진접·오남 지역의 실제 거주 환경을 분석하여 라이프스타일에 맞는 매물을 제안합니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                <LineChart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">왕숙지구 심층 분석</h3>
                <p className="text-sm text-slate-600">변화하는 왕숙지구 청약 정보와 정책을 지속적으로 모니터링하여 전달합니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">투명한 정보 공개</h3>
                <p className="text-sm text-slate-600">유튜브 '부주아재'와 블로그를 통해 과장 없는 객관적인 정보를 공유합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section title="주요 서비스" subtitle="고객님의 상황에 맞는 맞춤형 부동산 솔루션을 제공합니다.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <HomeIcon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">매매 상담</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>실거래가 기준 시세 분석</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>매도·매수 시 유의사항 설명</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Key size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">전·월세 상담</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>조건별 최적 매물 추천</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>계약 전 필수 체크리스트 안내</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <LineChart size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">청약·정책 상담</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>왕숙지구 공공분양 구조 설명</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>나눔형·일반형 차이점 정리</span>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">부동산 세금</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>양도세·취득세 기본 구조</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                <span>개인 상황별 주의사항 안내</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <Link 
              to="/contact" 
              className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              자세한 상담 신청하기 <ChevronRight size={20} />
            </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">아직 고민이 많으신가요?</h2>
          <p className="text-lg text-brand-100 mb-8 leading-relaxed">
            인터넷 정보만으로는 해결되지 않는 궁금증,<br className="hidden md:block"/>
            현장 전문가와 이야기 나누면 길이 보입니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-50 transition-colors shadow-lg"
          >
            무료 상담 예약하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;