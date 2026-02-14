import React, { useState } from 'react';
import Section from '../components/Section';
import { Property } from '../types';
import { MapPin, Ruler, Calendar, ArrowRight, BedDouble, Bath, Compass, Check, Search, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// High-quality mock data for display only
const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'p1',
    status: 'available',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '진접 롯데캐슬 시그니처',
    addressShort: '진접읍 금곡리',
    areaSupply: '112㎡',
    areaPrivate: '84㎡',
    price: '7억 2,000',
    floorInfo: '15층 / 28층',
    roomBath: '방 3 / 욕실 2',
    direction: '남동향',
    moveInDate: '즉시 입주 협의',
    features: ['올수리', '뻥뷰', '초품아', 'GTX호재'],
    description: '진접역 도보 5분 초역세권 단지입니다. 주인분이 직접 거주하셔서 관리가 매우 잘 되어 있으며, 최근 화장실과 주방 리모델링을 완료했습니다. 거실에서 바라보는 뷰가 막힘없이 시원합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-22b8915252d7?q=80&w=2000&auto=format&fit=crop',
    isRecommended: true
  },
  {
    id: 'p2',
    status: 'reserved',
    transactionType: '전세',
    propertyType: '아파트',
    complexName: '오남 서희스타힐스 2단지',
    addressShort: '오남읍 양지리',
    areaSupply: '79㎡',
    areaPrivate: '59㎡',
    price: '3억 5,000',
    floorInfo: '7층 / 20층',
    roomBath: '방 3 / 욕실 2',
    direction: '남향',
    moveInDate: '2026.04 이후',
    features: ['신축급', '융자없음', '시스템에어컨'],
    description: '신혼부부에게 강력 추천하는 59타입 귀한 전세입니다. 융자 없는 안전한 매물이며, 전세자금대출 100% 협조 가능합니다. 단지 내 조경이 훌륭하고 커뮤니티 시설이 잘 갖춰져 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    isRecommended: true
  },
  {
    id: 'p3',
    status: 'available',
    transactionType: '월세',
    propertyType: '오피스텔',
    complexName: '다산 킹덤타워',
    addressShort: '다산동',
    areaSupply: '45㎡',
    areaPrivate: '28㎡',
    price: '1,000 / 70',
    floorInfo: '고층',
    roomBath: '1.5룸',
    direction: '동향',
    moveInDate: '즉시 입주',
    features: ['풀옵션', '역세권', '사업자가능'],
    description: '다산역 도보 3분 거리의 풀옵션 오피스텔입니다. 냉장고, 세탁기, 에어컨 등 가전제품 일체 구비되어 있어 몸만 들어오시면 됩니다. 사업자 등록 가능하여 사무실 겸용으로도 좋습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop',
    isRecommended: false
  },
  {
    id: 'p4',
    status: 'available',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '왕숙 신안인스빌',
    addressShort: '진접읍',
    areaSupply: '110㎡',
    areaPrivate: '84㎡',
    price: '6억 1,000',
    floorInfo: '로얄층',
    roomBath: '방 3 / 욕실 2',
    direction: '남서향',
    moveInDate: '2개월 내 협의',
    features: ['급매', '확장형', '탄천뷰'],
    description: '현재 나와있는 매물 중 가장 가격 경쟁력이 뛰어난 급매물입니다. 앞뒤 베란다 확장되어 있어 실사용 면적이 매우 넓으며, 탄천을 바라보는 영구 조망권이 확보되어 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
    isRecommended: true
  },
  {
    id: 'p5',
    status: 'completed',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '센트레빌 시티',
    addressShort: '진접읍',
    areaSupply: '130㎡',
    areaPrivate: '101㎡',
    price: '거래완료',
    floorInfo: '5층',
    roomBath: '방 4 / 욕실 2',
    direction: '남향',
    moveInDate: '-',
    features: ['대형평수', '테라스', '거래완료'],
    description: '이 매물은 최근 거래가 완료되었습니다. 유사한 조건의 매물을 찾으신다면 전화 문의 부탁드립니다. 대형 평형대의 수요가 꾸준히 증가하고 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    isRecommended: false
  }
];

const RecommendList: React.FC = () => {
  const [filterType, setFilterType] = useState<'전체' | '매매' | '전세' | '월세'>('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = FEATURED_PROPERTIES.filter(item => {
    const matchesType = filterType === '전체' || item.transactionType === filterType;
    const matchesSearch = item.complexName.includes(searchTerm) || item.addressShort.includes(searchTerm) || item.features.some(f => f.includes(searchTerm));
    return matchesType && matchesSearch;
  });

  return (
    <Section title="추천 매물" subtitle="88부동산이 엄선한 진접·오남·왕숙지구 프리미엄 매물입니다." grayBg>
      
      {/* AI Partner 'Leesiljang' Integration Banner */}
      <div className="mb-12 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden group animate-fade-in">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-teal-100 mb-3 border border-white/20">
              <Sparkles size={14} className="text-yellow-300" />
              <span>AI 파트너 '이실장' 제휴</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">원하는 매물을 못 찾으셨나요?</h3>
            <p className="text-teal-50 leading-relaxed">
              <span className="font-bold text-white">AI 부동산 파트너 '이실장'</span> 서비스로<br className="hidden md:block"/>
              고객님의 조건에 딱 맞는 매물을 실시간으로 추천받으세요.
            </p>
          </div>
          <a 
            href="https://www.aipartner.com/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-white text-[#2c3e50] font-bold rounded-xl hover:bg-teal-50 transition-all shadow-lg flex items-center gap-2 hover:-translate-y-1 group-hover:shadow-2xl"
          >
            AI 추천 매물 확인하기 <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className="relative w-full max-w-md">
           <input 
             type="text" 
             placeholder="아파트명, 지역명, 특징으로 검색 (예: 롯데캐슬, GTX)" 
             className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none shadow-sm transition-all"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {['전체', '매매', '전세', '월세'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type as any)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-200 shadow-sm text-sm ${
                filterType === type
                  ? 'bg-brand-600 text-white ring-2 ring-brand-200 ring-offset-2'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Property Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative">
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.complexName} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold shadow-sm backdrop-blur-md ${
                    property.transactionType === '매매' ? 'bg-blue-600/90 text-white' :
                    property.transactionType === '전세' ? 'bg-green-600/90 text-white' :
                    'bg-orange-500/90 text-white'
                  }`}>
                    {property.transactionType}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 rounded-md text-xs font-bold shadow-sm">
                    {property.propertyType}
                  </span>
                </div>

                {/* Status Overlay if not available */}
                {property.status !== 'available' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] z-10">
                    <div className={`px-6 py-3 border-2 rounded-xl text-xl font-black uppercase tracking-widest transform -rotate-12 ${
                      property.status === 'completed' ? 'border-white text-white' : 'border-yellow-400 text-yellow-400'
                    }`}>
                      {property.status === 'completed' ? '거래완료' : '계약진행중'}
                    </div>
                  </div>
                )}

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 right-4">
                   <p className="text-white font-extrabold text-2xl drop-shadow-md">
                     {property.price}
                   </p>
                   <div className="flex items-center text-gray-200 text-sm gap-1">
                     <MapPin size={14} />
                     {property.addressShort}
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{property.complexName}</h3>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mt-3 bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Ruler size={16} className="text-brand-500"/>
                      <span>{property.areaPrivate}/{property.areaSupply}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-brand-500"/>
                      <span>{property.roomBath}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass size={16} className="text-brand-500"/>
                      <span>{property.floorInfo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-brand-500"/>
                      <span>{property.moveInDate}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {property.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs rounded-full font-medium flex items-center gap-1">
                      <Check size={10} strokeWidth={3} /> {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    to="/contact"
                    state={{ interestedProperty: `[${property.transactionType}] ${property.complexName}` }}
                    className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      property.status === 'available'
                        ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {property.status === 'available' ? '상담 문의하기' : '상담 불가'}
                    {property.status === 'available' && <ArrowRight size={18} />}
                  </Link>
                </div>
              </div>
              
              {/* Recommended Badge */}
              {property.isRecommended && (
                <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl shadow-md z-20">
                  88부동산 추천
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">조건에 맞는 매물이 없습니다.</p>
          <button 
            onClick={() => {setSearchTerm(''); setFilterType('전체');}}
            className="mt-4 text-brand-600 font-bold hover:underline"
          >
            모든 매물 보기
          </button>
        </div>
      )}

      <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
         <h3 className="text-xl font-bold text-slate-800 mb-2">원하시는 매물이 없으신가요?</h3>
         <p className="text-slate-600 mb-6">
           홈페이지에 게시되지 않은 비공개 매물도 다수 보유하고 있습니다.<br/>
           조건을 남겨주시면 딱 맞는 매물을 찾아드립니다.
         </p>
         <Link to="/contact" className="inline-block px-8 py-3 bg-white text-brand-700 border border-brand-200 font-bold rounded-lg hover:bg-brand-50 transition-colors">
            매물 찾아달라고 요청하기
         </Link>
      </div>
    </Section>
  );
};

export default RecommendList;