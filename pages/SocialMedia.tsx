import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import { Youtube, FileText, ExternalLink, Loader2 } from 'lucide-react';
import { SocialPost } from '../types';
import { CONTACT_INFO } from '../constants';

// --- Configuration ---
// Note: To enable dynamic YouTube fetching, you must find the Channel ID (starts with UC)
// for @bujuajae.
const YOUTUBE_CHANNEL_ID = 'UCEGqYUqJAGKteh0X6eqLzzA'; 
const NAVER_BLOG_ID = '88jjys111';
const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';

// --- Fallback/Initial Data (Used while loading or if fetch fails) ---
const INITIAL_YOUTUBE_VIDEOS: SocialPost[] = [
  {
    title: "9호선 남양주 연장(강동하남남양주선) 기본계획 확정! 노선도 완벽 분석",
    date: "2024.03.15",
    summary: "드디어 구체화된 9호선 연장안, 왕숙지구와 진접에 미칠 영향은?",
    url: CONTACT_INFO.youtubeUrl,
    type: 'youtube',
    thumbnail: "https://picsum.photos/400/225?random=10"
  },
  {
    title: "진접선(4호선) 개통 2년, 역세권 아파트 실거래가 긴급 점검",
    date: "2024.02.28",
    summary: "개통 효과는 끝났다? 현재 시장 가격과 바닥 다지기 신호 분석.",
    url: CONTACT_INFO.youtubeUrl,
    type: 'youtube',
    thumbnail: "https://picsum.photos/400/225?random=11"
  },
  {
    title: "왕숙신도시 뉴:홈 사전청약, 나눔형 vs 일반형 당첨 전략",
    date: "2024.01.10",
    summary: "내 소득과 자산에 맞는 청약 유형 선택 가이드.",
    url: CONTACT_INFO.youtubeUrl,
    type: 'youtube',
    thumbnail: "https://picsum.photos/400/225?random=12"
  },
  {
    title: "오남역 서희스타힐스 입주장 분위기 및 전월세 시세 리포트",
    date: "2023.12.05",
    summary: "대단지 입주시작, 전세 구하기 가장 좋은 타이밍은 언제일까?",
    url: CONTACT_INFO.youtubeUrl,
    type: 'youtube',
    thumbnail: "https://picsum.photos/400/225?random=13"
  }
];

const INITIAL_BLOG_POSTS: SocialPost[] = [
  {
    title: "2024년 신생아 특례대출, 진접·오남 9억 이하 아파트 추천 리스트",
    date: "2024.03.20",
    summary: "1%대 저금리로 내 집 마련 가능한 지역 내 알짜 단지를 소개합니다.",
    url: CONTACT_INFO.blogUrl,
    type: 'blog'
  },
  {
    title: "왕숙지구 GTX-B 착공식 현장 스케치 및 향후 공사 일정",
    date: "2024.03.08",
    summary: "서울역까지 15분, GTX 시대가 가져올 남양주의 변화.",
    url: CONTACT_INFO.blogUrl,
    type: 'blog'
  },
  {
    title: "[임장기] 진접2지구 조성 공사 현황 및 토지이용계획 분석",
    date: "2024.02.15",
    summary: "왕숙지구와 시너지를 낼 진접2지구, 현장에서 직접 확인했습니다.",
    url: CONTACT_INFO.blogUrl,
    type: 'blog'
  },
  {
    title: "전세보증금 반환보증 가입 조건 강화, 집주인과 세입자 대응법",
    date: "2024.01.25",
    summary: "공시가 126% 룰 적용에 따른 빌라·아파트 전세 계약 시 주의사항.",
    url: CONTACT_INFO.blogUrl,
    type: 'blog'
  }
];

const SocialMedia: React.FC = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<SocialPost[]>(INITIAL_YOUTUBE_VIDEOS);
  const [blogPosts, setBlogPosts] = useState<SocialPost[]>(INITIAL_BLOG_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        // 1. Fetch Naver Blog RSS
        // Naver Blog RSS URL: https://rss.blog.naver.com/{ID}
        const blogFeedUrl = `https://rss.blog.naver.com/${NAVER_BLOG_ID}.xml`;
        const blogRes = await fetch(`${RSS2JSON_BASE}${encodeURIComponent(blogFeedUrl)}`);
        const blogData = await blogRes.json();

        if (blogData.status === 'ok' && blogData.items) {
          const fetchedBlogPosts: SocialPost[] = blogData.items.slice(0, 4).map((item: any) => {
            // Extract first image from content if possible
            const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : undefined;
            
            // Clean up description (remove HTML tags) for summary
            const cleanSummary = item.description?.replace(/<[^>]+>/g, '').substring(0, 100) + '...';

            return {
              title: item.title,
              date: item.pubDate.split(' ')[0], // simple date formatting
              summary: cleanSummary || "블로그에서 자세한 내용을 확인하세요.",
              url: item.link,
              type: 'blog',
              thumbnail: thumbnail
            };
          });
          setBlogPosts(fetchedBlogPosts);
        }

        // 2. Fetch YouTube RSS (Only if ID is provided)
        if (YOUTUBE_CHANNEL_ID) {
          const youtubeFeedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
          const ytRes = await fetch(`${RSS2JSON_BASE}${encodeURIComponent(youtubeFeedUrl)}`);
          const ytData = await ytRes.json();

          if (ytData.status === 'ok' && ytData.items) {
            const fetchedVideos: SocialPost[] = ytData.items.slice(0, 4).map((item: any) => ({
              title: item.title,
              date: item.pubDate.split(' ')[0],
              summary: "유튜브에서 영상을 확인하세요.",
              url: item.link,
              type: 'youtube',
              // rss2json usually puts the max res thumbnail in the 'thumbnail' field for YT
              thumbnail: item.thumbnail || "https://picsum.photos/400/225?random=99" 
            }));
            setYoutubeVideos(fetchedVideos);
          }
        }
      } catch (error) {
        console.error("Failed to fetch social feeds:", error);
        // Silently fail and keep using initial data
      } finally {
        setLoading(false);
      }
    };

    fetchSocialData();
  }, []);

  return (
    <Section title="유튜브 · 블로그" subtitle="88부동산의 생생한 현장 이야기와 정보를 만나보세요.">
      
      {/* YouTube Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 border-b pb-4 border-gray-200">
          <div className="flex items-center gap-3">
            <Youtube className="text-red-600" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">유튜브 [부주아재]</h3>
              <p className="text-slate-600 text-sm mt-1">현장에서 느낀 부동산 이야기를 쉽게 풀어 설명합니다.</p>
            </div>
          </div>
          <a 
            href={CONTACT_INFO.youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-red-600 font-bold hover:text-red-700 hover:underline"
          >
            <span className="hidden sm:inline">채널 바로가기</span>
            <ExternalLink size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video, index) => (
            <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="group block h-full flex flex-col">
              <div className="rounded-xl overflow-hidden shadow-sm mb-3 relative aspect-video bg-gray-200">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Youtube
                </div>
              </div>
              <h4 className="font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                {video.title}
              </h4>
              <p className="text-sm text-slate-500 line-clamp-2 mt-auto">
                {video.summary}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div>
        <div className="flex items-center justify-between mb-8 border-b pb-4 border-gray-200">
          <div className="flex items-center gap-3">
            <FileText className="text-green-600" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">네이버 블로그 [88부동산]</h3>
              <p className="text-slate-600 text-sm mt-1">상담 중 가장 많이 받는 질문을 글로 정리했습니다.</p>
            </div>
          </div>
          <a 
            href={CONTACT_INFO.blogUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-green-600 font-bold hover:text-green-700 hover:underline"
          >
             <span className="hidden sm:inline">블로그 바로가기</span>
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <a 
              key={index} 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">BLOG</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <div className="flex gap-4 mb-3">
                {/* Show thumbnail if available for blog posts (fetched via RSS) */}
                {post.thumbnail && (
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                     <img src={post.thumbnail} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <h4 className="text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </div>
              
              <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                {post.summary}
              </p>
              <div className="flex items-center text-sm text-slate-400 font-medium group-hover:text-green-600 mt-auto">
                더 읽어보기 <ExternalLink size={14} className="ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mt-12 text-slate-400 text-sm gap-2">
          <Loader2 className="animate-spin" size={16} />
          <span>최신 데이터를 확인하는 중...</span>
        </div>
      )}

    </Section>
  );
};

export default SocialMedia;