import React, { useState } from 'react';
import Section from '../components/Section';
import { Property } from '../types';
import { MapPin, Calendar, Ruler, Phone, Image as ImageIcon, Plus } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const INITIAL_EMPTY_PROPERTIES: Property[] = Array(6).fill(null).map((_, i) => ({
  id: `prop-${i}`,
  transactionType: '매매',
  propertyType: '',
  complexName: '',
  area: '',
  price: '',
  moveInDate: '',
  floorInfo: '',
  features: [],
  description: '',
  imageUrl: '',
  isRecommended: false,
}));

const RecommendList: React.FC = () => {
  const [filterType, setFilterType] = useState<'전체' | '매매' | '전세' | '월세'>('전체');
  const [properties, setProperties] = useState<Property[]>(INITIAL_EMPTY_PROPERTIES);

  const handleInputChange = (id: string, field: keyof Property, value: any) => {
    setProperties(prev => prev.map(p => {
      if (p.id !== id) return p;
      
      // Handle special cases
      if (field === 'features') {
        // Assume value is a string, split by comma
        return { ...p, features: value.split(',').map((s: string) => s.trim()).filter(Boolean) };
      }
      
      return { ...p, [field]: value };
    }));
  };

  const toggleRecommended = (id: string) => {
    setProperties(prev => prev.map(p => 
      p.id === id ? { ...p, isRecommended: !p.isRecommended } : p
    ));
  };

  const filteredProperties = properties.filter(item => {
    if (filterType === '전체') return true;
    return item.transactionType === filterType;
  });

  return (
    <Section title="오늘의 추천 매물" subtitle="매물 정보를 직접 입력하여 관리할 수 있습니다." grayBg>
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
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-60 bg-gray-200 overflow-hidden group">
              {property.imageUrl ? (
                <img 
                  src={property.imageUrl} 
                  alt={property.complexName} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                  <ImageIcon size={32} />
                  <span className="text-sm">이미지 URL을 입력하세요</span>
                </div>
              )}
              
              {/* Image URL Input Overlay (Always visible for editing) */}
              <div className="absolute inset-x-0 top-0 p-2 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <input 
                  type="text"
                  placeholder="이미지 주소 (URL) 입력"
                  className="w-full text-xs bg-white/90 backdrop-blur px-2 py-1 rounded outline-none"
                  value={property.imageUrl}
                  onChange={(e) => handleInputChange(property.id, 'imageUrl', e.target.value)}
                />
              </div>

              {/* Transaction Type & Property Type Badges */}
              <div className="absolute top-12 left-4 flex gap-2">
                <select
                  className={`px-2 py-1 rounded-lg text-xs font-bold shadow-sm appearance-none outline-none cursor-pointer ${
                    property.transactionType === '매매' ? 'bg-blue-600 text-white' :
                    property.transactionType === '전세' ? 'bg-green-600 text-white' :
                    'bg-orange-500 text-white'
                  }`}
                  value={property.transactionType}
                  onChange={(e) => handleInputChange(property.id, 'transactionType', e.target.value)}
                >
                  <option value="매매">매매</option>
                  <option value="전세">전세</option>
                  <option value="월세">월세</option>
                </select>

                <input 
                  type="text"
                  className="w-20 px-2 py-1 bg-white/90 backdrop-blur-sm text-slate-800 rounded-lg text-xs font-bold shadow-sm outline-none text-center"
                  placeholder="종류(아파트)"
                  value={property.propertyType}
                  onChange={(e) => handleInputChange(property.id, 'propertyType', e.target.value)}
                />
              </div>

              {/* Recommendation Toggle */}
              <button 
                onClick={() => toggleRecommended(property.id)}
                className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent text-left outline-none"
              >
                <span className={`text-xs font-bold flex items-center gap-1 ${property.isRecommended ? 'text-yellow-300' : 'text-gray-400'}`}>
                   ★ {property.isRecommended ? '88부동산 강력 추천' : '추천 설정 (클릭)'}
                </span>
              </button>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <input 
                  type="text"
                  className="w-full text-xl font-bold text-slate-900 mb-2 border-b border-dashed border-gray-300 focus:border-brand-500 outline-none bg-transparent placeholder-gray-300"
                  placeholder="단지명 입력 (예: 롯데캐슬)"
                  value={property.complexName}
                  onChange={(e) => handleInputChange(property.id, 'complexName', e.target.value)}
                />
                
                <div className="flex items-center text-slate-500 text-sm gap-2">
                  <MapPin size={14} className="shrink-0" />
                  <input 
                    type="text"
                    className="w-full border-b border-dashed border-gray-300 focus:border-brand-500 outline-none bg-transparent placeholder-gray-300"
                    placeholder="층수 정보 (예: 15층)"
                    value={property.floorInfo}
                    onChange={(e) => handleInputChange(property.id, 'floorInfo', e.target.value)}
                  />
                  <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0"></span>
                  <Ruler size={14} className="shrink-0" />
                  <input 
                    type="text"
                    className="w-full border-b border-dashed border-gray-300 focus:border-brand-500 outline-none bg-transparent placeholder-gray-300"
                    placeholder="평수 (예: 34평)"
                    value={property.area}
                    onChange={(e) => handleInputChange(property.id, 'area', e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-100">
                <input 
                  type="text"
                  className="w-full text-2xl font-bold text-brand-700 border-b border-dashed border-gray-300 focus:border-brand-500 outline-none bg-transparent placeholder-brand-200 mb-2"
                  placeholder="금액 입력 (예: 6억 5천)"
                  value={property.price}
                  onChange={(e) => handleInputChange(property.id, 'price', e.target.value)}
                />
                <div className="flex items-center text-sm text-slate-500 gap-1.5">
                  <Calendar size={14} className="text-brand-500 shrink-0" />
                  <span className="font-medium shrink-0">입주:</span>
                  <input 
                    type="text"
                    className="w-full border-b border-dashed border-gray-300 focus:border-brand-500 outline-none bg-transparent placeholder-gray-300"
                    placeholder="입주가능일 (예: 즉시)"
                    value={property.moveInDate}
                    onChange={(e) => handleInputChange(property.id, 'moveInDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <textarea 
                  className="w-full text-slate-600 text-sm leading-relaxed border border-dashed border-gray-300 rounded p-2 focus:border-brand-500 outline-none bg-transparent placeholder-gray-300 resize-none h-20"
                  placeholder="매물 상세 설명을 입력하세요."
                  value={property.description}
                  onChange={(e) => handleInputChange(property.id, 'description', e.target.value)}
                />
                
                <div className="space-y-1">
                   <p className="text-xs text-slate-400">특징 태그 (쉼표로 구분)</p>
                   <input 
                    type="text"
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded focus:border-brand-500 outline-none"
                    placeholder="예: 올수리, 남향, 급매"
                    defaultValue={property.features.join(', ')} 
                    onChange={(e) => handleInputChange(property.id, 'features', e.target.value)}
                  />
                  {/* Visual Preview of Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                        #{feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="mt-auto w-full py-3 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-600 hover:text-white transition-all flex items-center justify-center gap-2 pointer-events-none opacity-50"
              >
                <Phone size={18} />
                문의하기 (미리보기)
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
         <p className="text-slate-500 text-sm mb-4">
           * 이 페이지는 관리자 입력 모드입니다. 내용을 입력하면 실시간으로 반영됩니다.
         </p>
      </div>
    </Section>
  );
};

export default RecommendList;