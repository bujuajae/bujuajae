import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string[];
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialPost {
  title: string;
  date: string;
  summary: string;
  url: string;
  thumbnail?: string; // Optional image
  type: 'youtube' | 'blog';
}

export enum ConsultationType {
  SALE = "매매 상담",
  RENT = "전월세 상담",
  SUBSCRIPTION = "청약 상담",
  TAX = "세금 상담",
  OTHER = "기타 문의"
}

export interface Transaction {
  id: string;
  complexName: string;
  area: string;
  floor: number;
  price: string;
  date: string;
  type: '매매' | '전세' | '월세';
}

export interface Property {
  id: string;
  transactionType: '매매' | '전세' | '월세'; // 거래 유형
  propertyType: string; // 주택의 종류 (아파트, 오피스텔 등)
  complexName: string; // 단지명
  area: string; // 평수 (공급/전용)
  price: string; // 금액
  moveInDate: string; // 입주 가능일
  floorInfo: string; // 층수 정보
  features: string[]; // 특징 태그
  description: string; // 한줄 설명
  imageUrl: string; // 대표 이미지
  isRecommended?: boolean; // 추천 여부
}