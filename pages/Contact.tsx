import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/Section';
import { ConsultationType } from '../types';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Clock, Info, Calendar, CheckCircle2, MessageSquare, User, AlertCircle, ChevronRight, ExternalLink } from 'lucide-react';

// Available time slots configuration
const TIME_SLOTS = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const Contact: React.FC = () => {
  const location = useLocation();
  const interestedProperty = location.state?.interestedProperty;
  
  // Tab State: 'inquiry' (Simple Message) or 'booking' (Appointment)
  const [activeTab, setActiveTab] = useState<'inquiry' | 'booking'>('inquiry');

  // --- Inquiry Form State ---
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    type: ConsultationType.SALE,
    message: ''
  });

  // --- Booking System State ---
  const [bookingDate, setBookingDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookedSlots, setBookedSlots] = useState<string[]>([]); // Simulate taken slots
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    type: ConsultationType.SALE
  });
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [reservationId, setReservationId] = useState('');

  // Auto-fill message if coming from a property
  useEffect(() => {
    if (interestedProperty) {
      setInquiryForm(prev => ({
        ...prev,
        type: interestedProperty.includes('전세') || interestedProperty.includes('월세') ? ConsultationType.RENT : ConsultationType.SALE,
        message: `[문의 매물: ${interestedProperty}]\n\n위 매물에 대해 상담받고 싶습니다. 입주 가능일과 구체적인 조건을 알고 싶어요.`
      }));
      // Also prepopulate booking type
      setBookingForm(prev => ({
        ...prev,
        type: interestedProperty.includes('전세') || interestedProperty.includes('월세') ? ConsultationType.RENT : ConsultationType.SALE,
      }));
    }
  }, [interestedProperty]);

  // Simulate fetching available slots when date changes
  useEffect(() => {
    if (bookingDate) {
      // Randomly disable 1-2 slots to simulate real-world availability
      const randombooked = TIME_SLOTS.filter(() => Math.random() < 0.2); 
      setBookedSlots(randombooked);
      setSelectedTime(''); // Reset time selection
    }
  }, [bookingDate]);

  // --- Handlers ---

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm({ ...inquiryForm, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`상담 신청이 완료되었습니다.\n\n이름: ${inquiryForm.name}\n연락처: ${inquiryForm.phone}\n내용: ${inquiryForm.message.substring(0, 20)}...\n\n검토 후 빠르게 연락드리겠습니다.`);
    setInquiryForm({ name: '', phone: '', type: ConsultationType.SALE, message: '' });
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !selectedTime) {
      alert("날짜와 시간을 선택해주세요.");
      return;
    }

    setBookingStatus('loading');

    // Simulate API Call
    setTimeout(() => {
      const randomId = Math.random().toString(36).substr(2, 8).toUpperCase();
      setReservationId(randomId);
      setBookingStatus('success');
    }, 1500);
  };

  // Helper to get today's date string for min date
  const getTodayString = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getMaxDateString = () => {
    const d = new Date();
    d.setMonth(d.getMonth() + 2);
    return d.toISOString().split('T')[0];
  };

  return (
    <Section title="상담 및 예약" subtitle="원하시는 방법으로 88부동산 전문가를 만나보세요.">
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1.5 rounded-full inline-flex">
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'inquiry' 
                ? 'bg-white text-brand-700 shadow-md ring-1 ring-black/5' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <MessageSquare size={18} />
            간편 상담 신청
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'booking' 
                ? 'bg-white text-brand-700 shadow-md ring-1 ring-black/5' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar size={18} />
            방문 예약 시스템
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Form Area */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden min-h-[600px]">
          
          {activeTab === 'inquiry' ? (
            /* --- Inquiry Form --- */
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MessageSquare className="text-brand-600" /> 간편 상담 신청
              </h3>
              
              {interestedProperty && (
                <div className="mb-6 bg-brand-50 border border-brand-200 rounded-lg p-4 flex items-start gap-3">
                  <Info className="text-brand-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-bold text-brand-800">선택하신 매물에 대한 문의입니다.</p>
                    <p className="text-sm text-brand-600 mt-1">{interestedProperty}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1">이름</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    placeholder="홍길동"
                    value={inquiryForm.name}
                    onChange={handleInquiryChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-phone" className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    placeholder="010-0000-0000"
                    value={inquiryForm.phone}
                    onChange={handleInquiryChange}
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-slate-700 mb-1">상담 유형</label>
                  <select
                    id="inquiry-type"
                    name="type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white"
                    value={inquiryForm.type}
                    onChange={handleInquiryChange}
                  >
                    {Object.values(ConsultationType).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1">문의 내용</label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                    placeholder="궁금하신 내용을 자유롭게 적어주세요."
                    value={inquiryForm.message}
                    onChange={handleInquiryChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-all shadow-md mt-2"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          ) : (
            /* --- Booking System --- */
            <div className="animate-fade-in h-full flex flex-col">
               {bookingStatus === 'success' ? (
                 <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-fade-in-up">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">예약이 확정되었습니다!</h3>
                   <p className="text-slate-600 mb-8">
                     고객님의 연락처로 예약 확정 문자(SMS)를 발송했습니다.<br/>
                     예약하신 시간에 뵙겠습니다.
                   </p>
                   
                   <div className="bg-gray-50 p-6 rounded-xl w-full text-left border border-gray-200 mb-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-20 h-20 bg-brand-100 rounded-bl-full opacity-50"></div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Reservation Ticket</p>
                     <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">예약번호</span>
                          <span className="font-mono font-bold text-slate-900">{reservationId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">방문일시</span>
                          <span className="font-bold text-brand-700">{bookingDate} / {selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">상담유형</span>
                          <span className="font-bold text-slate-900">{bookingForm.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">예약자명</span>
                          <span className="font-bold text-slate-900">{bookingForm.name}</span>
                        </div>
                     </div>
                   </div>

                   <button 
                     onClick={() => {
                       setBookingStatus('idle');
                       setBookingDate('');
                       setSelectedTime('');
                     }}
                     className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
                   >
                     다른 예약하기
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleBookingSubmit} className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Calendar className="text-brand-600" /> 방문 상담 예약
                    </h3>

                    {/* Step 1: Date & Time */}
                    <div className="mb-8">
                      <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs">1</span>
                        날짜 및 시간 선택
                      </label>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="date"
                          required
                          min={getTodayString()}
                          max={getMaxDateString()}
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none bg-gray-50"
                        />
                        <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-4 rounded-lg border border-gray-200">
                          {bookingDate ? (
                             <span className="text-brand-600 font-medium">시간을 선택해주세요 👇</span>
                          ) : (
                             <span>날짜를 먼저 선택해주세요</span>
                          )}
                        </div>
                      </div>

                      {bookingDate && (
                        <div className="grid grid-cols-4 gap-2 animate-fade-in">
                          {TIME_SLOTS.map((time) => {
                            const isBooked = bookedSlots.includes(time);
                            return (
                              <button
                                key={time}
                                type="button"
                                disabled={isBooked}
                                onClick={() => setSelectedTime(time)}
                                className={`py-2 rounded-lg text-sm font-bold border transition-all ${
                                  isBooked 
                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through decoration-gray-400' 
                                    : selectedTime === time
                                      ? 'bg-brand-600 text-white border-brand-600 shadow-md transform scale-105'
                                      : 'bg-white text-slate-600 border-gray-200 hover:border-brand-400 hover:text-brand-600'
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Step 2: Info */}
                    <div className="mb-8">
                      <label className="block text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs">2</span>
                        예약자 정보
                      </label>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="성함"
                              value={bookingForm.name}
                              onChange={handleBookingChange}
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                            />
                          </div>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="연락처"
                              value={bookingForm.phone}
                              onChange={handleBookingChange}
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                            />
                          </div>
                        </div>
                        <select
                          name="type"
                          value={bookingForm.type}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none bg-white"
                        >
                          {Object.values(ConsultationType).map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-auto">
                       <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3 mb-4">
                          <AlertCircle size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                          <p className="text-xs text-yellow-700 leading-relaxed">
                            예약 확정 시 입력하신 연락처로 안내 문자가 발송됩니다. 
                            노쇼(No-Show) 방지를 위해 방문이 어려우실 경우 미리 연락 부탁드립니다.
                          </p>
                       </div>
                       <button
                        type="submit"
                        disabled={bookingStatus === 'loading'}
                        className={`w-full bg-slate-900 text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                          bookingStatus === 'loading' ? 'opacity-70 cursor-wait' : 'hover:bg-slate-800 hover:-translate-y-1'
                        }`}
                      >
                        {bookingStatus === 'loading' ? '예약 처리 중...' : '방문 예약 확정하기'}
                        {bookingStatus !== 'loading' && <ChevronRight size={18} />}
                      </button>
                    </div>
                 </form>
               )}
            </div>
          )}
        </div>

        {/* Right Column: Info & Map */}
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

          {/* Map Integration */}
          <div>
            <div className="bg-gray-200 w-full h-80 rounded-2xl overflow-hidden relative shadow-inner border border-gray-300">
              <iframe 
                src="https://maps.google.com/maps?q=경기도%20남양주시%20진접읍%20해밀예당1로%2030&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="88부동산 위치"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="mt-3 flex justify-end">
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=경기도+남양주시+진접읍+해밀예당1로+30" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-sm text-brand-600 font-bold hover:underline flex items-center gap-1 transition-colors hover:text-brand-800"
               >
                 <ExternalLink size={16} /> 구글 맵에서 크게 보기
               </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;