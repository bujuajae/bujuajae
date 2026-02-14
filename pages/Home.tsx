import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Key, LineChart, FileText, CheckCircle2, Map, Train, Building2, Youtube } from 'lucide-react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* New Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white font-sans">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')" }}
        ></div>
        
        {/* Dark Overlay (Gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-5 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
          <div className="inline-block mb-6">
            <p className="bg-brand-900/50 border border-brand-400/50 rounded-full px-5 py-2 font-semibold text-sm md:text-base tracking-wider uppercase backdrop-blur-md text-brand-100 shadow-xl">
              진접 · 오남 · 왕숙지구 전문 파트너
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 break-keep drop-shadow-2xl tracking-tight">
            남양주의 미래, 왕숙의 가치.<br className="hidden md:block" />
            <span className="text-brand-500">88부동산</span>이 확신으로 답합니다.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto break-keep font-light">
            데이터에 기반한 철저한 입지 분석과 10년 현장 경험.<br className="hidden md:block" />
            고객님의 소중한 자산, 가장 확실한 선택을 돕겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link 
              to="/recommend" 
              className="px-10 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center sm:min-w-[200px]"
            >
              추천 매물 보기
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-4 border-2 border-white/30 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center backdrop-blur-sm sm:min-w-[200px]"
            >
              상담 예약하기
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Region Access (New Section) */}
      <section className="py-20 bg-white relative -mt-10 z-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">지역별 심층 분석</h2>
            <p className="text-slate-600">관심 있는 지역을 선택하시면 상세한 분석 정보를 확인하실 수 있습니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/region/jinjeop-onam" className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628624747186-a941910207ef?q=80&w=2070')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={20} className="text-brand-400"/>
                  <span className="font-bold text-brand-100 uppercase text-sm tracking-wider">안정적인 주거지</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-400 transition-colors">진접·오남 지구</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  실거주 만족도 최상, 4호선 개통 호재 및 시세 분석
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/region/jinjeop2" className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545156526-9054746654e0?q=80&w=1000')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Train size={20} className="text-yellow-400"/>
                  <span className="font-bold text-yellow-100 uppercase text-sm tracking-wider">트리플 역세권 예정</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">진접 2지구</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  4호선·9호선·GTX 연결의 중심, 풍양역 역세권 가치
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/region/wangsuk" className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Map size={20} className="text-purple-400"/>
                  <span className="font-bold text-purple-100 uppercase text-sm tracking-wider">3기 신도시 최대 규모</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">왕숙 1·2지구</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  판교 2배 규모의 일자리, GTX-B가 가져올 미래
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <div className="bg-brand-50 py-16 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-4 rounded-full text-brand-700 mb-4">
                <HomeIcon size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-800">10년의 현장 경험</h3>
              <p className="text-slate-600 leading-relaxed">
                진접·오남 지역의 변화를 가장 가까이서 지켜봤습니다.<br/>
                실거주 환경을 고려한 최적의 매물을 제안합니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-4 rounded-full text-brand-700 mb-4">
                <LineChart size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-800">철저한 권리 분석</h3>
              <p className="text-slate-600 leading-relaxed">
                등기부등본, 건축물대장 등 공부 서류를<br/>
                꼼꼼하게 확인하여 안전한 거래를 약속합니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-100 p-4 rounded-full text-brand-700 mb-4">
                <FileText size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-800">투명한 중개 서비스</h3>
              <p className="text-slate-600 leading-relaxed">
                과장된 브리핑 없이 객관적인 데이터와<br/>
                사실만을 전달하며 고객의 이익을 최우선합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="property-section">
        <Section title="주요 서비스" subtitle="고객님의 상황에 맞는 맞춤형 부동산 솔루션을 제공합니다.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
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
                  <span>매도·매수 적기 타이밍 제안</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Key size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">전·월세 상담</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>보증금 안전 장치(보증보험 등) 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>라이프스타일 맞춤 단지 추천</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <LineChart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">청약·분양권</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>왕숙지구 사전/본청약 전략</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>가점 분석 및 당첨 확률 진단</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">세무·법률 자문</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>1가구 2주택 비과세 요건</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                  <span>제휴 세무사/법무사 연계 서비스</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-900 transition-colors"
              >
                상담 예약 바로가기 <ChevronRight size={20} />
              </Link>
          </div>
        </Section>
      </div>

      {/* Latest Media Preview */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 md:mb-0">88부동산 미디어</h2>
              <Link to="/social" className="text-brand-600 font-bold hover:underline flex items-center gap-1">
                전체보기 <ChevronRight size={20} />
              </Link>
           </div>
           
           <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg relative group">
                 <div className="aspect-video bg-gray-100 relative">
                   <iframe 
                    src="https://www.youtube.com/embed?listType=user_uploads&list=bujuajae"
                    title="Latest YouTube"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    frameBorder="0"
                   ></iframe>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                 <div className="flex items-center gap-2 mb-4 text-red-600 font-bold">
                    <Youtube size={24} />
                    <span>부주아재 유튜브</span>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-4">
                   남양주 부동산의 모든 것, <br/>
                   영상으로 쉽고 빠르게 확인하세요.
                 </h3>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   왕숙지구 청약 전략부터 진접·오남 시세 분석까지.<br/>
                   전용성 대표가 직접 발로 뛰며 취재한 생생한 현장 정보를 유튜브에서 만나보실 수 있습니다.
                 </p>
                 <a 
                   href="https://www.youtube.com/@bujuajae?sub_confirmation=1" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block px-6 py-3 bg-[#ff0000] text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                 >
                   채널 구독하기
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">부동산 고민, 혼자 하지 마세요.</h2>
          <p className="text-lg text-brand-100 mb-8 leading-relaxed">
            인터넷 정보만으로는 해결되지 않는 궁금증,<br className="hidden md:block"/>
            현장 전문가와 이야기 나누면 명쾌한 답이 보입니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-900 px-10 py-4 rounded-lg font-bold hover:bg-brand-50 transition-colors shadow-lg"
          >
            무료 상담 예약하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;