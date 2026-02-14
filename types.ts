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
  type: '매매' | '전세' | '월세';
  complexName: string;
  area: string;
  floor: number;
  price: string;
  date: string;
}

export interface ProcessedTransaction extends Transaction {
  priceValue: number;
  areaValue: number;
}

export interface Property {
  id: string;
  status: 'available' | 'reserved' | 'completed'; // 매물 상태
  transactionType: '매매' | '전세' | '월세'; // 거래 유형
  propertyType: string; // 주택의 종류
  complexName: string; // 단지명
  addressShort: string; // 짧은 주소 (예: 진접읍 금곡리)
  areaSupply: string; // 공급면적
  areaPrivate: string; // 전용면적
  price: string; // 금액
  floorInfo: string; // 층수 정보
  roomBath: string; // 방/욕실
  direction: string; // 향
  moveInDate: string; // 입주 가능일
  features: string[]; // 특징 태그
  description: string; // 상세 설명
  imageUrl: string; // 대표 이미지
  isRecommended?: boolean; // 추천 여부
}