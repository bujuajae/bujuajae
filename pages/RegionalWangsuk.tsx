import React from 'react';
import Section from '../components/Section';
import { LEGAL_DISCLAIMER } from '../constants';
import { Map, Bus, Home } from 'lucide-react';

const RegionalWangsuk: React.FC = () => {
  return (
    <>
      <Section title="지역 분석: 왕숙지구" subtitle="수도권 동북부의 새로운 중심, 3기 신도시 왕숙지구입니다." grayBg>
        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Overview */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-lg">
                <Map size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">개발 개요 요약</h3>
            </div>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                왕숙지구는 3기 신도시 중 가장 큰 규모로 조성되는 남양주의 핵심 개발 사업입니다.
                왕숙1지구(경제중심)와 왕숙2지구(문화예술중심)로 나뉘어 개발되며,
                단순한 주거 단지를 넘어 자족 기능을 갖춘 도시를 목표로 합니다.
              </p>
              <p>
                GTX-B 노선 및 9호선 연장 등 광역 교통 대책이 함께 추진되고 있어,
                향후 서울 주요 업무 지구와의 접근성이 획기적으로 개선될 전망입니다.
              </p>
            </div>
          </div>

           {/* Infrastructure */}
           <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg">
                <Bus size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">교통 · 생활 인프라</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-lg mb-3 border-b pb-2 border-gray-100">교통망 계획</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>· GTX-B 노선 (왕숙역 예정)</li>
                    <li>· 지하철 9호선 연장 (강동~하남~남양주)</li>
                    <li>· 경춘선 역사 신설 및 BRT 연결</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-3 border-b pb-2 border-gray-100">생활 편의</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>· 판교테크노밸리 수준의 자족용지 조성</li>
                    <li>· 대규모 도시 공원 및 녹지축 연결</li>
                    <li>· 유치원, 초·중·고 도보 통학권 설계</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Subscription Structure */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                <Home size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">청약 구조 및 전략</h3>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                왕숙지구 청약은 <strong>'뉴:홈'</strong> 정책에 따라 나눔형, 선택형, 일반형으로 구분됩니다.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg text-sm space-y-2">
                <p><strong>· 나눔형:</strong> 시세 70% 이하 분양, 의무 거주 기간 이후 공공에 환매 시 차익 공유.</p>
                <p><strong>· 선택형:</strong> 6년 임대 거주 후 분양 여부 선택.</p>
                <p><strong>· 일반형:</strong> 기존 공공분양 방식, 시세 80% 수준.</p>
              </div>
              <p>
                본인의 자산 상황과 소득 요건, 그리고 미래 계획에 따라 신중하게 유형을 선택해야 합니다.
                사전 청약 및 본청약 일정은 정책에 따라 변동될 수 있으므로 지속적인 모니터링이 필요합니다.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-slate-100 rounded-lg text-sm text-slate-500 text-center">
          {LEGAL_DISCLAIMER}
        </div>
      </Section>
    </>
  );
};

export default RegionalWangsuk;