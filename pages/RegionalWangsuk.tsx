import React from 'react';
import Section from '../components/Section';
import { LEGAL_DISCLAIMER } from '../constants';
import { Map, Train, Megaphone, AlertTriangle, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

const RegionalWangsuk: React.FC = () => {
  return (
    <>
      <Section title="지역 분석: 왕숙지구 (3기 신도시)" subtitle="수도권 동북부 최대 규모(6만 6천호)의 경제 중심지,\n왕숙 1·2지구의 미래 가치와 청약 전략을 심층 분석합니다." grayBg>
        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Executive Summary */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-600">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">💡 88부동산 핵심 요약</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              왕숙지구는 3기 신도시 중 <strong>가장 큰 규모</strong>를 자랑하며, 남양주의 지도를 완전히 바꿀 프로젝트입니다.
              핵심은 <strong>'일자리(판교 테크노밸리 2배)'</strong>와 <strong>'광역 교통(GTX-B)'</strong>입니다. 
              단순 베드타운이 아닌 자족 도시로 설계되었으며, 왕숙1지구(경제 중심)와 왕숙2지구(문화·예술 중심)의 성격이 
              명확히 다르므로 라이프스타일에 따른 선택이 필수적입니다.
            </p>
          </div>

          {/* Deep Research: Wangsuk 1 vs 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Map size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">지구별 심층 비교: 어디를 청약할까?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-slate-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-xl mb-3 text-slate-900 flex items-center gap-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">왕숙 1지구</span>
                    경제 중심 (진접·진건)
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/>
                      <span><strong>규모:</strong> 약 5만 4천호 (매머드급)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/>
                      <span><strong>교통:</strong> GTX-B 왕숙역(신설), 9호선 연장선</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/>
                      <span><strong>특징:</strong> 도시첨단산업단지 조성, 일자리 풍부, 판교형 모델 지향.</span>
                    </li>
                  </ul>
               </div>
               <div className="bg-slate-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-xl mb-3 text-slate-900 flex items-center gap-2">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">왕숙 2지구</span>
                    문화·예술 (일패·이패)
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/>
                      <span><strong>규모:</strong> 약 1만 4천호 (다산신도시 연계)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/>
                      <span><strong>교통:</strong> 9호선 신설역(예정), 경의중앙선</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/>
                      <span><strong>특징:</strong> 문화예술마을 조성, 다산신도시 및 양정역세권과 생활권 공유. 서울(강동) 접근성 우수.</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Deep Research: Transportation */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                <Train size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">교통 혁명: 서울까지 얼마나 걸릴까?</h3>
            </div>
            <div className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <h4 className="font-bold text-lg text-slate-900 mb-2">🚄 GTX-B (송도~마석)</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     왕숙지구의 심장입니다. 왕숙역(가칭)에서 <strong>서울역까지 약 15분, 청량리역까지 약 10분</strong>대 이동이 가능해집니다. 
                     2030년 개통을 목표로 추진 중이며, 왕숙1지구의 핵심 앵커 시설입니다.
                   </p>
                 </div>
                 <div>
                   <h4 className="font-bold text-lg text-slate-900 mb-2">🚇 9호선 연장 (강동하남남양주선)</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     강남 접근성의 키(Key)입니다. 왕숙1지구와 2지구를 모두 관통하며, 
                     강남(신논현)까지 40~50분대 진입이 가능해져 남양주의 고질적인 강남 출퇴근 문제를 해결합니다.
                   </p>
                 </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-lg">
                 <p className="text-sm text-slate-500">
                   * 이 외에도 수석대교(한강 교량) 신설, 올림픽대로 확장 등을 통해 도로 교통 체증 완화 대책도 함께 진행되고 있습니다.
                 </p>
               </div>
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
                   <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">CRITICAL</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">뉴:홈 청약, '나눔형' vs '일반형' 승자는?</h4>
                      <p className="text-slate-600 leading-relaxed mb-2">
                        왕숙지구 사전청약 결과, 시세의 70% 수준인 <strong>나눔형(이익공유형)</strong>의 경쟁률이 
                        상당히 높게 나타났습니다. 특히 청년 특공 경쟁률이 치열했습니다.
                      </p>
                      <ul className="bg-slate-50 p-3 rounded text-sm text-slate-600 space-y-1">
                        <li>· <strong>나눔형:</strong> 저렴한 분양가, 저금리 대출 지원 (초기 자금 부족한 신혼부부/청년 유리)</li>
                        <li>· <strong>일반형:</strong> 시세 80% 수준, 추후 매도 시 수익 100% 귀속 (자금 여력 있는 수요자 유리)</li>
                      </ul>
                   </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="pt-6">
                 <div className="flex items-start gap-3">
                   <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">DELAY</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">본청약 및 입주 지연 이슈</h4>
                      <p className="text-slate-600 leading-relaxed">
                        문화재 발굴, 토지 보상 마무리 단계, 공사비 인상 등의 이슈로 인해 
                        당초 계획보다 본청약 일정이 1~2년가량 밀리고 있습니다. 
                        <strong>왕숙1지구는 2027년 이후, 왕숙2지구는 2026년 말 이후</strong>로 최초 입주가 예상됩니다.
                        사전청약 당첨자들은 자금 계획을 더 보수적으로 잡아야 합니다.
                      </p>
                   </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="pt-6">
                 <div className="flex items-start gap-3">
                   <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded mt-1 shrink-0">FUTURE</span>
                   <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">기업 유치가 성공의 열쇠</h4>
                      <p className="text-slate-600 leading-relaxed">
                        왕숙지구가 단순 베드타운이 되지 않으려면 '도시첨단산업단지'에 양질의 기업이 들어와야 합니다. 
                        남양주시는 세제 혜택 등을 통해 반도체, 바이오, IT 기업 유치에 사활을 걸고 있습니다. 
                        기업 입주 현황이 향후 왕숙지구 집값의 <strong>'천장(Ceiling)'</strong>을 결정할 것입니다.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caution Section */}
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-start gap-4">
             <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={24} />
             <div>
               <h4 className="font-bold text-yellow-800 mb-2">청약 대기자 필독</h4>
               <p className="text-sm text-yellow-800 leading-relaxed">
                 왕숙지구는 <strong>'지역 우선 공급 제도'</strong>가 적용됩니다. 
                 남양주시 1년 이상 거주자에게 30%, 경기도 6개월 이상 20%, 수도권 50% 순으로 배정됩니다. 
                 당첨 확률을 높이려면 남양주시로 거주지를 미리 옮겨두는 전략(거주 요건 충족)이 가장 확실합니다.
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