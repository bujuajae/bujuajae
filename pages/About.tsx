import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section title="88부동산 소개" subtitle="정직과 신뢰를 바탕으로, 고객님의 자산을 소중히 여깁니다.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
           <img 
            src="https://picsum.photos/600/800" 
            alt="공인중개사 집무실 전경" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-brand-600">
            <h3 className="text-xl font-bold text-brand-800 mb-2">10년의 현장 경험</h3>
            <p className="text-slate-700 leading-relaxed">
              남양주 진접·오남 지역에서 10년 이상 현장을 지켜왔습니다. 
              단순히 매물을 중개하는 것을 넘어, 고객님의 상황에 맞는 
              최적의 주거 계획을 함께 고민합니다.
            </p>
          </div>

          <div className="prose prose-slate text-slate-600 leading-loose">
            <p>
              안녕하세요, 88부동산입니다.
            </p>
            <p>
              부동산 시장은 매일 변합니다. 정책은 복잡해지고, 정보는 넘쳐납니다.
              이런 상황일수록 <strong>'기본'</strong>이 중요하다고 생각합니다.
            </p>
            <p>
              저희는 "무조건 오른다", "지금이 기회다"라는 무책임한 말보다,
              <strong>실거래 데이터와 객관적인 현장 상황</strong>을 있는 그대로 말씀드립니다.
            </p>
            <p>
              유튜브 채널 '부주아재'와 블로그를 통해 지역 소식을 꾸준히 전하는 이유도
              투명한 정보 공유가 신뢰의 시작이라고 믿기 때문입니다.
            </p>
            <p>
              진접, 오남, 그리고 왕숙지구까지.
              가장 믿음직한 동네 공인중개사가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;