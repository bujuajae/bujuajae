import { Home, Building2, Map, FileText, Youtube, MessageSquare } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '88부동산 소개', path: '/about' },
  { label: '추천 매물', path: '/recommend' },
  { label: '진접·오남 분석', path: '/region/jinjeop-onam' },
  { label: '왕숙지구 분석', path: '/region/wangsuk' },
  { label: '유튜브·블로그', path: '/social' },
  { label: '상담 신청', path: '/contact' },
];

export const CONTACT_INFO = {
  phone: '031-575-2482',
  address: '경기도 남양주시 진접읍 해밀예당1로 30, 109호',
  email: 'contact@88realestate.kr',
  youtubeName: '부주아재',
  blogName: '88부동산',
  registrationNumber: '제41360-2020-20010호',
  youtubeUrl: 'https://www.youtube.com/@bujuajae',
  blogUrl: 'https://blog.naver.com/88jjys111'
};

export const LEGAL_DISCLAIMER = `본 홈페이지의 모든 정보는 실제 상담 및 현장 경험을 바탕으로 한 참고 자료이며, 최종 판단과 책임은 이용자 본인에게 있습니다.`;