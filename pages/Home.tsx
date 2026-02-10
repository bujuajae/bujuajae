import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Key, LineChart, FileText, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-brand-900/80 z-0"></div>
        {/* Placeholder for a real background image if available */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            진접·오남·왕숙지구 부동산,<br />
            <span className="text-brand-300">현장에서 직접 분석합니다.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed whitespace-pre-line">
            매매 · 전월세 · 청약 · 세금까지{"\n"}
            10년 경력 공인중개사가{"\n"}
            실제 상담 사례 기준으로 안내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg text-center"
            >
              상담 신청하기
            </Link>
            <Link 
              to="/region/wangsuk" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-bold text-lg transition-all text-center"
            >
              지역 분석 보기
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Points */}
      <div className="bg-brand-50 py-12 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm">
              <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                <HomeIcon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">실거주 상담 전문</h3>
                <p className="text-sm text-slate-600">진접·오남 지역의 실제 거주 환경을 분석하여 라이프스타일에 맞는 매물을 제안합니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm">
              <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                <LineChart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">왕숙지구 심층 분석</h3>
                <p className="text-sm text-slate-600">변화하는 왕숙지구 청약 정보와 정책을 지속적으로 모니터링하여 전달합니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm">
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