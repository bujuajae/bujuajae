import React, { useState } from 'react';
import Section from '../components/Section';
import { ConsultationType } from '../types';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: ConsultationType.SALE,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or email service
    alert('상담 신청이 완료되었습니다. 검토 후 빠르게 연락드리겠습니다.\n(현재 데모 버전입니다)');
    setFormData({
      name: '',
      phone: '',
      type: ConsultationType.SALE,
      message: ''
    });
  };

  return (
    <Section title="상담 신청 및 오시는 길" subtitle="편안하게 문의주시면 친절하고 정확하게 안내해드립니다.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">상담 신청</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                placeholder="010-0000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">상담 유형</label>
              <select
                id="type"
                name="type"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                value={formData.type}
                onChange={handleChange}
              >
                {Object.values(ConsultationType).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">문의 내용</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                placeholder="간단한 문의 내용을 적어주세요."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="bg-brand-50 p-4 rounded-lg text-sm text-brand-800">
              상담은 무료이며, 개인 상황에 따라 결과는 달라질 수 있습니다.
            </div>

            <button
              type="submit"
              className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors shadow-md"
            >
              신청하기
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">오시는 길 / 연락처</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">주소</h4>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">전화</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 hover:text-brand-600 text-lg font-medium">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">운영 시간</h4>
                  <p className="text-slate-600">평일 10:00 - 19:00</p>
                  <p className="text-slate-600">토요일 10:00 - 17:00</p>
                  <p className="text-sm text-slate-500 mt-1">(일요일 및 공휴일 휴무 / 예약 상담 가능)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 w-full h-64 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400')] bg-cover bg-center opacity-50"></div>
             <span className="relative z-10 bg-white/80 px-4 py-2 rounded-lg font-bold">지도 영역 (카카오맵/네이버맵 연동)</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;