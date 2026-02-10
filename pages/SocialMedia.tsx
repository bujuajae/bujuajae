import React from 'react';
import Section from '../components/Section';
import { Youtube, PenTool } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const SocialMedia: React.FC = () => {
  return (
    <Section className="bg-white !py-[60px]">
      <div className="text-center max-w-[1100px] mx-auto mb-10">
        <h2 className="text-[2rem] font-extrabold text-slate-900 mb-2.5">
          전용성 대표의 <span className="text-[#ff0000]">현장 속으로</span>
        </h2>
        <p className="text-[#777] text-base md:text-lg mb-10">
          유튜브 '부주아재' 채널과 공식 블로그에서 가장 빠른 정보를 만나보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1100px] mx-auto">
        
        {/* YouTube Card */}
        <div className="bg-[#f8f9fa] rounded-[20px] p-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:-translate-y-[10px] transition-transform duration-300 border border-transparent flex flex-col">
          <div className="flex items-center justify-center gap-[10px] mb-[20px]">
            <Youtube className="text-[#ff0000] w-6 h-6 md:w-[1.5rem] md:h-[1.5rem]" />
            <h3 className="text-[1.3rem] font-bold text-slate-800 m-0">부주아재 유튜브</h3>
          </div>
          
          <div className="relative pb-[56.25%] h-0 rounded-[12px] overflow-hidden mb-[20px] bg-black">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=bujuajae" 
              title="YouTube video player"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <a 
            href={`${CONTACT_INFO.youtubeUrl}?sub_confirmation=1`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-auto block w-full bg-[#ff0000] text-white p-[12px] rounded-[8px] font-bold text-center hover:opacity-90 transition-opacity no-underline"
          >
            채널 구독하고 정보 받기
          </a>
        </div>

        {/* Blog Card */}
        <div className="bg-[#f8f9fa] rounded-[20px] p-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:-translate-y-[10px] transition-transform duration-300 border border-transparent flex flex-col">
          <div className="flex items-center justify-center gap-[10px] mb-[20px]">
            <PenTool className="text-[#03c75a] w-6 h-6 md:w-[1.5rem] md:h-[1.5rem]" />
            <h3 className="text-[1.3rem] font-bold text-slate-800 m-0">88부동산 공식 블로그</h3>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] mb-[20px] h-[180px] flex flex-col justify-center">
            <p className="text-[1rem] font-bold text-[#333] mb-[15px] leading-[1.4] text-center">
              왕숙지구 · 진접 · 오남<br/>
              전문가의 깊이 있는 분석 리포트
            </p>
            <ul className="space-y-2 text-[#555] text-left">
              <li>
                <a href={CONTACT_INFO.blogUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[0.95rem] hover:text-[#03c75a] hover:font-semibold transition-all">
                  <span className="text-xs">·</span>
                  <span>최근 매물 브리핑 확인하기</span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.blogUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[0.95rem] hover:text-[#03c75a] hover:font-semibold transition-all">
                  <span className="text-xs">·</span>
                  <span>남양주 부동산 정책 요약</span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.blogUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[0.95rem] hover:text-[#03c75a] hover:font-semibold transition-all">
                  <span className="text-xs">·</span>
                  <span>전용성 대표의 투자 칼럼</span>
                </a>
              </li>
            </ul>
          </div>

          <a 
            href={CONTACT_INFO.blogUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full bg-[#03c75a] text-white p-[12px] rounded-[8px] font-bold text-center hover:opacity-90 transition-opacity no-underline"
          >
            블로그에서 상세보기
          </a>
        </div>

      </div>
    </Section>
  );
};

export default SocialMedia;