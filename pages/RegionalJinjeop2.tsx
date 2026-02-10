import React from 'react';
import Section from '../components/Section';
import { LEGAL_DISCLAIMER } from '../constants';
import { Train, Megaphone, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';

const RegionalJinjeop2: React.FC = () => {
  return (
    <>
      <Section title="지역 분석: 진접2지구" subtitle="왕숙지구와 진접지구를 잇는 핵심 연결 고리,\n4호선·9호선 더블 역세권의 미래 가치를 분석합니다." grayBg>
        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Executive Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-600">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">💡 88부동산 핵심 요약</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              진접2지구는 약 1만 세대 규모로 조성되는 공공주택지구입니다. 
              단순한 베드타운이 아니라, <strong>기존 진접지구(1지구)의 인프라</strong>와 
              <strong>미래 왕숙지구의 자족 기능</strong>을 연결하는 교두보 역할을 합니다. 
              가장 큰 핵심은 <strong>풍양역(가칭)</strong> 신설을 통한 강남 접근성 혁명입니다.
            </p>
          </div>

          {/* Deep Research: Transportation */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                <Train size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">교통 심층 분석: 풍양역의 가치</h3>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-2 text-slate-900 flex items-center gap-2">
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">4호선</span>
                      진접선 (운행 중)
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      현재 운행 중인 4호선을 통해 서울역, 사당 등 서울 강북권 주요 도심으로 환승 없이 이동 가능합니다. 
                      진접2지구 중심부에서 도보 이용권에 위치합니다.
                    </p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-lg mb-2 text-slate-900 flex items-center gap-2">
                      <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">9호선</span>
                      강동하남남양주선 (예정)
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <strong>게임 체인저.</strong> 풍양역(가칭)에서 9호선을 탑승하면 강남(신논현, 강남역)까지 
                      45분 내외 진입이 가능해집니다. 이는 남양주 북부의 약점이었던 '강남 접근성'을 완벽하게 해소합니다.
                    </p>
                 </div>
              </div>
              <p className="text-sm text-slate-500 bg-gray-50 p-4 rounded-lg">
                * 2026년 이후 본격적인 착공이 예상되며, 입주 시점과 개통 시점 사이의 갭(Gap)을 고려한 자금 계획 및 실거주 전략이 필요합니다.
              </p>
            </div>
          </div>

          {/* Deep Research: Hot Issues & News */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                <Megaphone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">최신 뉴스 및 핫이슈 (Deep Research)</h3>
            </div>
            
            <div className="space-y-6 divide-y divide-gray-100">
              {/* Issue 1 */}
              <div className="pt-4 first:pt-0">
                <div className="flex items-start gap-3">
                   <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">HOT</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">본청약 지연과 분양가 상승 우려</h4>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        최근 공사비 상승으로 인해 3기 신도시 및 진접2지구 사전청약 당첨자들의 본청약 일정이 
                        당초 계획보다 지연되고 있습니다. 가장 큰 우려는 <strong>'추정 분양가 대비 확정 분양가 상승'</strong>입니다.
                        다만, 진접2지구는 공공택지 분양가 상한제가 적용되어 여전히 주변 시세 대비 가격 경쟁력은 
                        유지할 것으로 분석됩니다.
                      </p>
                      <div className="flex items-center text-sm text-slate-500 gap-2">
                        <TrendingUp size={16} className="text-red-500" />
                        <span>전략: 자금 조달 계획을 보수적으로(기존 대비 10~15% 여유 있게) 수립 필요</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="pt-6">
                 <div className="flex items-start gap-3">
                   <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">INFO</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">토지이용계획 변경 및 자족 기능 강화</h4>
                      <p className="text-slate-600 leading-relaxed">
                        초기 계획 대비 상업 시설 및 자족 용지 배치가 일부 조정되었습니다. 
                        이는 단순 주거 단지가 아닌 풍양역 주변 역세권 개발을 활성화하려는 의도로 해석됩니다. 
                        특히 왕숙지구와 연계된 <strong>도시지원시설용지</strong> 확보는 향후 지역 내 일자리 창출과 직결됩니다.
                      </p>
                   </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="pt-6">
                 <div className="flex items-start gap-3">
                   <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">TIP</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">왕숙지구 vs 진접2지구 선택 가이드</h4>
                      <p className="text-slate-600 leading-relaxed">
                        많은 분들이 왕숙지구와 진접2지구를 두고 고민하십니다.
                      </p>
                      <ul className="mt-2 space-y-1 text-slate-600 text-sm bg-gray-50 p-3 rounded-lg">
                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-500"/> <strong>왕숙지구:</strong> 더 큰 규모, GTX-B, 상징성, 높은 분양가 예상</li>
                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand-500"/> <strong>진접2지구:</strong> 4·9호선 실속 교통, 기존 진접 인프라 즉시 이용, 가성비 우수</li>
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caution Section */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-start gap-4">
             <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={24} />
             <div>
               <h4 className="font-bold text-yellow-800 mb-2">청약 주의사항 (사전청약 취소 이슈 관련)</h4>
               <p className="text-sm text-yellow-800 leading-relaxed">
                 최근 민간 사전청약 사업지에서 사업 취소 사례가 발생하고 있으나, 진접2지구는 LH가 주관하는 
                 <strong>공공택지 사업</strong>이므로 사업 무산 가능성은 극히 낮습니다. 
                 다만, 입주 시기가 지연될 수 있으므로 전월세 만기 일정을 너무 타이트하게 잡지 않는 것이 좋습니다.
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

export default RegionalJinjeop2;