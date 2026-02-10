import React, { useState } from 'react';
import Section from '../components/Section';
import { Property } from '../types';
import { MapPin, Calendar, Ruler, Building, Tag, Search, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// Mock Data for Recommended Properties (2026 Scenario)
const MOCK_PROPERTIES: Property[] = [
  {
    id: 'p1',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '진접 롯데캐슬 시그니처',
    area: '110㎡ (34평형)',
    price: '6억 3,000만원',
    moveInDate: '즉시 입주 가능',
    floorInfo: '로얄층 / 28층',
    features: ['올수리', '산 조망', '풀옵션'],
    description: '주인 거주로 관리 상태 최상, 4호선 진접역 도보 5분 초역세권',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    isRecommended: true,
  },
  {
    id: 'p2',
    transactionType: '전세',
    propertyType: '아파트',
    complexName: '오남 서희스타힐스',
    area: '84㎡ (25평형)',
    price: '3억 5,000만원',
    moveInDate: '2026.04.15 이후',
    floorInfo: '중층 / 20층',
    features: ['융자없음', '전세자금대출가능', '남향'],
    description: '신혼부부 강력 추천, 단지 내 초등학교 품은 초품아 단지',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    isRecommended: true,
  },
  {
    id: 'p3',
    transactionType: '월세',
    propertyType: '오피스텔',
    complexName: '진접역 더파크뷰',
    area: '45㎡ (14평형)',
    price: '3,000 / 90만원',
    moveInDate: '협의 가능',
    floorInfo: '고층 / 15층',
    features: ['신축', '풀퍼니시드', '주차편리'],
    description: '1인 가구 최적화, 진접역 바로 앞 상업지구 인프라 이용 편리',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'p4',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '해밀마을 신안인스빌',
    area: '115㎡ (35평형)',
    price: '5억 2,000만원',
    moveInDate: '2026.05월 말',
    floorInfo: '저층 / 15층',
    features: ['필로티 2층', '아이키우기 좋음', '확장형'],
    description: '층간소음 걱정 없는 필로티 구조, 단지 조경 뷰가 예쁜 집',
    imageUrl: 'https://picsum.photos/800/600?random=4',
  },
  {
    id: 'p5',
    transactionType: '전세',
    propertyType: '빌라/다세대',
    complexName: '장현리 신축 빌라',
    area: '70㎡ (21평형)',
    price: '2억 1,000만원',
    moveInDate: '즉시 입주',
    floorInfo: '3층 / 4층',
    features: ['엘리베이터 유', '테라스', '주차 100%'],
    description: '가성비 최고의 넓은 쓰리룸, 버스정류장 도보 2분',
    imageUrl: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: 'p6',
    transactionType: '매매',
    propertyType: '아파트',
    complexName: '오남 푸르지오',
    area: '109㎡ (33평형)',
    price: '4억 1,000만원',
    moveInDate: '협의 (빠른 입주 가능)',
    floorInfo: '고층 / 25층',
    features: ['급매', '호수공원뷰', '기본형'],
    description: '시세 대비 2천만원 저렴한 급매물, 오남호수공원 영구 조망권',
    imageUrl: 'https://picsum.photos/800/600?random=6',
  }
];

const RecommendList: React.FC = () => {
  const [filterType, setFilterType] = useState<'전체' | '매매' | '전세' | '월세'>('전체');

  const filteredProperties = MOCK_PROPERTIES.filter(item => {
    if (filterType === '전체') return true;
    return item.transactionType === filterType;
  });

  return (
    <Section title="오늘의 추천 매물" subtitle="88부동산이 엄선한 검증된 실매물입니다." grayBg>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {['전체', '매매', '전세', '월세'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type as any)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-200 shadow-sm ${
              filterType === type
                ? 'bg-brand-600 text-white ring-2 ring-brand-600 ring-offset-2'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              {/* Image Section */}
              <div className="relative h-60 bg-gray-200 overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.complexName} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold shadow-sm ${
                    property.transactionType === '매매' ? 'bg-blue-600 text-white' :
                    property.transactionType === '전세' ? 'bg-green-600 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    {property.transactionType}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-lg text-xs font-bold shadow-sm">
                    {property.propertyType}
                  </span>
                </div>
                {property.isRecommended && (
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-yellow-300 text-xs font-bold flex items-center gap-1">
                       ★ 88부동산 강력 추천
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-700 transition-colors">
                    {property.complexName}
                  </h3>
                  <div className="flex items-center text-slate-500 text-sm gap-2">
                    <MapPin size={14} />
                    <span>{property.floorInfo}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <Ruler size={14} />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="text-2xl font-bold text-brand-700">
                    {property.price}
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mt-2 gap-1.5">
                    <Calendar size={14} className="text-brand-500" />
                    <span className="font-medium">입주 가능: {property.moveInDate}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {property.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                        #{feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="mt-auto w-full py-3 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  문의하기
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
             <div className="flex justify-center mb-4">
               <Search size={40} className="text-slate-300" />
             </div>
             <p className="text-lg font-medium">조건에 맞는 매물이 없습니다.</p>
             <p className="text-sm mt-2">전화 문의 주시면 아직 등록되지 않은 매물을 찾아드립니다.</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
         <p className="text-slate-500 text-sm mb-4">
           * 홈페이지에 게시된 매물 외에도 다양한 비공개 매물을 보유하고 있습니다.
         </p>
      </div>
    </Section>
  );
};

export default RecommendList;