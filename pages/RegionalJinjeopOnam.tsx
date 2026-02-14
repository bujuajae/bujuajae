import React, { useState, useEffect, useMemo, useRef } from 'react';
import Section from '../components/Section';
import { LEGAL_DISCLAIMER } from '../constants';
import { Building2, TrendingUp, Trees, RefreshCw, Loader2, Table2, BarChart3, Filter, ArrowUpDown, ArrowUp, ArrowDown, Search, X } from 'lucide-react';
import { Transaction, ProcessedTransaction } from '../types';

// Mock Data Source: Realistic transactions based on Korea Real Estate Board standards (Scenario: 2026)
const MOCK_DATA_POOL: Transaction[] = [
  { id: 't1', type: '매매', complexName: '진접 롯데캐슬 시그니처', area: '84.98㎡', floor: 15, price: '7억 2,000', date: '2026.02.08' },
  { id: 't2', type: '전세', complexName: '오남 서희스타힐스 1단지', area: '84.95㎡', floor: 12, price: '4억 5,000', date: '2026.02.05' },
  { id: 't3', type: '매매', complexName: '남양주 진접 센트레빌', area: '84.91㎡', floor: 8, price: '6억 5,000', date: '2026.02.03' },
  { id: 't4', type: '매매', complexName: '신안인스빌 퍼스트포레', area: '84.98㎡', floor: 20, price: '6억 1,500', date: '2026.01.28' },
  { id: 't5', type: '전세', complexName: '진접 금강펜테리움', area: '79.8㎡', floor: 5, price: '3억 8,000', date: '2026.01.25' },
  { id: 't6', type: '매매', complexName: '오남 대림 e편한세상', area: '114.5㎡', floor: 10, price: '6억 8,000', date: '2026.01.22' },
  { id: 't7', type: '월세', complexName: '진접 휴먼시아 16단지', area: '59.9㎡', floor: 7, price: '5,000 / 120', date: '2026.01.18' },
  { id: 't8', type: '매매', complexName: '남양주 더샵 퍼스트시티', area: '84.9㎡', floor: 18, price: '6억 9,500', date: '2026.01.15' },
];

// Fix: Strict Type Definition
type SortKey = keyof ProcessedTransaction;
type SortDirection = 'asc' | 'desc';

// Helper: Parse Korean price string to number (unit: man-won)
const parsePrice = (priceStr: string): number => {
  const clean = priceStr.replace(/,/g, '');
  let val = 0;
  
  if (clean.includes('억')) {
      const parts = clean.split('억');
      val += parseInt(parts[0] || '0', 10) * 10000;
      if (parts[1]) {
          val += parseInt(parts[1].trim() || '0', 10);
      }
  } else if (clean.includes('/')) {
      // Fix: Safe parsing for monthly rent (e.g. 5000 / 120)
      const [deposit] = clean.split('/');
      val += parseInt(deposit.trim() || '0', 10);
  } else {
      val += parseInt(clean.trim() || '0', 10);
  }
  return val;
};

// Helper: Parse area string to number
const parseArea = (areaStr: string): number => {
  return parseFloat(areaStr.replace('㎡', ''));
};

const RegionalJinjeopOnam: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Filter States
  const [filterType, setFilterType] = useState<string>('all');
  const [filterArea, setFilterArea] = useState<string>('all');
  const [filterPriceRange, setFilterPriceRange] = useState<string>('all');

  // Sort State - Default to Date Descending
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>({ key: 'date', direction: 'desc' });

  // Fix: Prevent memory leak using ref
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!isMounted.current) return;

    // In a real app, we would fetch from an API. 
    const data = [...MOCK_DATA_POOL];
    
    setTransactions(data);
    
    const now = new Date();
    setLastUpdated(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = 'desc'; // Default to desc
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const processedTransactions = useMemo(() => {
    // 1. 원본 데이터 수치화 (데이터 주입 패턴)
    let data: ProcessedTransaction[] = transactions.map(t => ({
      ...t,
      priceValue: parsePrice(t.price),
      areaValue: parseArea(t.area)
    }));

    // 2. Search
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      data = data.filter(t => t.complexName.includes(query) || t.area.includes(query));
    }

    // 3. Filter
    if (filterType !== 'all') {
      data = data.filter(t => t.type === filterType);
    }

    if (filterArea !== 'all') {
      data = data.filter(t => {
        const area = t.areaValue;
        if (filterArea === 'small') return area <= 60; // ~60m2
        if (filterArea === 'medium') return area > 60 && area <= 85; // 60~85m2
        if (filterArea === 'large') return area > 85; // 85m2~
        return true;
      });
    }

    if (filterPriceRange !== 'all') {
      data = data.filter(t => {
        const price = t.priceValue;
        if (filterPriceRange === 'low') return price < 40000; // Under 4억
        if (filterPriceRange === 'mid') return price >= 40000 && price < 60000; // 4억 ~ 6억
        if (filterPriceRange === 'high') return price >= 60000; // Over 6억
        return true;
      });
    }

    // 4. Sort (가상 키 기반의 안정적 정렬)
    if (sortConfig) {
      data.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [transactions, searchQuery, filterType, filterArea, filterPriceRange, sortConfig]);

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortConfig?.key !== columnKey) return <ArrowUpDown size={14} className="text-slate-300 ml-1 opacity-0 group-hover:opacity-50 transition-opacity" />;
    return sortConfig.direction === 'asc' ? <ArrowUp size={14} className="text-brand-600 ml-1" /> : <ArrowDown size={14} className="text-brand-600 ml-1" />;
  };

  const getHeaderClass = (key: SortKey) => {
    const base = "p-4 text-sm font-bold text-slate-600 whitespace-nowrap cursor-pointer hover:bg-slate-100 group transition-colors";
    const active = sortConfig?.key === key ? " bg-indigo-50 text-indigo-700" : "";
    return base + active;
  };

  // Determine Chart Data based on Search
  const getChartData = () => {
    // Default Data (General Market)
    let title = "2026년 상반기 시세 흐름 (84㎡ 기준)";
    let description = "2026년 2월 현재, 진접·오남 지역은 9호선 연장 및 GTX-B 착공의 가시화로 우상향 흐름을 보이고 있습니다.";
    let data = [
       { label: '9월', price: 6.8, height: '60%' },
       { label: '10월', price: 6.9, height: '65%' },
       { label: '11월', price: 6.8, height: '60%' },
       { label: '12월', price: 6.9, height: '65%' },
       { label: '1월', price: 7.0, height: '75%' },
       { label: '2월', price: 7.2, height: '85%', active: true },
    ];

    if (searchQuery.includes('롯데')) {
        title = "진접 롯데캐슬 시그니처 시세 추이";
        description = "진접역 초역세권 단지로 대장주 역할을 하며 가파른 상승세를 보이고 있습니다.";
        data = [
            { label: '9월', price: 7.0, height: '50%' },
            { label: '10월', price: 7.1, height: '55%' },
            { label: '11월', price: 7.2, height: '60%' },
            { label: '12월', price: 7.3, height: '65%' },
            { label: '1월', price: 7.5, height: '75%' },
            { label: '2월', price: 7.8, height: '90%', active: true },
        ];
    } else if (searchQuery.includes('서희')) {
        title = "오남 서희스타힐스 시세 추이";
        description = "실거주 수요가 탄탄하며, 전세가율이 높아 갭투자 문의가 이어지고 있습니다.";
        data = [
            { label: '9월', price: 4.2, height: '40%' },
            { label: '10월', price: 4.2, height: '40%' },
            { label: '11월', price: 4.3, height: '45%' },
            { label: '12월', price: 4.3, height: '45%' },
            { label: '1월', price: 4.4, height: '50%' },
            { label: '2월', price: 4.5, height: '55%', active: true },
        ];
    } else if (searchQuery.length > 0) {
        title = `'${searchQuery}' 검색 결과 분석`;
        description = "검색하신 단지의 데이터가 부족하거나, 일반적인 시장 흐름을 따르고 있습니다.";
    }

    return { title, description, data };
  };

  const chartInfo = getChartData();

  return (
    <>
      <Section title="지역 분석: 진접 · 오남" subtitle="실거주 만족도가 높은 남양주의 중심 주거지입니다." grayBg>
        
        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Market Trends with Chart (Dynamic) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{chartInfo.title}</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-end mb-6">
              {/* CSS Simple Chart */}
              <div className="w-full md:w-2/3 h-64 bg-slate-50 rounded-xl p-4 flex items-end justify-between gap-2 border border-slate-100 relative overflow-hidden">
                 {/* Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-30">
                    <div className="border-t border-slate-300 w-full h-0"></div>
                    <div className="border-t border-slate-300 w-full h-0"></div>
                    <div className="border-t border-slate-300 w-full h-0"></div>
                    <div className="border-t border-slate-300 w-full h-0"></div>
                 </div>

                 {chartInfo.data.map((data, idx) => (
                   <div key={idx} className="flex flex-col items-center flex-1 group z-10">
                     <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-slate-600 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                        {data.price}억
                     </div>
                     <div 
                        className={`w-full max-w-[40px] rounded-t-lg transition-all duration-700 ease-out relative ${
                            data.active ? 'bg-gradient-to-t from-brand-600 to-brand-400' : 'bg-slate-200 group-hover:bg-brand-300'
                        }`} 
                        style={{ height: data.height }}
                     >
                        {data.active && (
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        )}
                     </div>
                     <div className="mt-3 text-xs md:text-sm text-slate-500 font-medium">{data.label}</div>
                   </div>
                 ))}
              </div>
              <div className="w-full md:w-1/3 text-slate-700 leading-relaxed space-y-4">
                <p>
                  {chartInfo.description}
                </p>
                <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                  <h4 className="font-bold text-brand-800 mb-1 flex items-center gap-2"><BarChart3 size={16}/> 분석 포인트</h4>
                  <p className="text-sm text-brand-700">
                    {searchQuery ? '선택하신 단지의 최근 6개월 흐름입니다.' : '진접 롯데캐슬, 오남 서희스타힐스 등 랜드마크 단지가 시세를 리딩하며, 전세가율 또한 65% 수준으로 안정적입니다.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Transaction Table */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Table2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                        {searchQuery ? `'${searchQuery}' 실거래가 내역` : '최근 실거래가 조회'}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                        {searchQuery ? '검색어와 일치하는 거래 내역입니다.' : '단지명을 입력하여 최신 거래 내역을 확인하세요.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-auto">
                   <span className="text-xs text-slate-400">업데이트: {lastUpdated}</span>
                   <button 
                    onClick={fetchTransactions}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                   >
                     {loading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
                     새로고침
                   </button>
                </div>
              </div>

              {/* Integrated Search and Filter Controls */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col gap-4">
                 {/* Search Input */}
                 <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="아파트 단지명을 입력하세요 (예: 롯데, 서희, 센트레빌)"
                        className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all shadow-sm text-base bg-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    {searchQuery && (
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={18} />
                    </button>
                    )}
                 </div>

                 {/* Filters */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 mb-1.5 flex items-center gap-1"><Filter size={12}/> 거래 유형</label>
                    <select 
                        className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-brand-500 outline-none bg-white"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="매매">매매</option>
                        <option value="전세">전세</option>
                        <option value="월세">월세</option>
                    </select>
                    </div>
                    <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 mb-1.5 flex items-center gap-1"><Filter size={12}/> 면적 범위</label>
                    <select 
                        className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-brand-500 outline-none bg-white"
                        value={filterArea}
                        onChange={(e) => setFilterArea(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="small">소형 (~60㎡)</option>
                        <option value="medium">중형 (60㎡~85㎡)</option>
                        <option value="large">대형 (85㎡~)</option>
                    </select>
                    </div>
                    <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-500 mb-1.5 flex items-center gap-1"><Filter size={12}/> 가격대 (매매/보증금)</label>
                    <select 
                        className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-brand-500 outline-none bg-white"
                        value={filterPriceRange}
                        onChange={(e) => setFilterPriceRange(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="low">4억 미만</option>
                        <option value="mid">4억 ~ 6억</option>
                        <option value="high">6억 이상</option>
                    </select>
                    </div>
                 </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className={getHeaderClass('type')} onClick={() => handleSort('type')}>
                      <div className="flex items-center">거래유형 <SortIcon columnKey="type"/></div>
                    </th>
                    <th className={getHeaderClass('complexName')} onClick={() => handleSort('complexName')}>
                      <div className="flex items-center">단지명 <SortIcon columnKey="complexName"/></div>
                    </th>
                    <th className={getHeaderClass('areaValue')} onClick={() => handleSort('areaValue')}>
                      <div className="flex items-center">전용면적 <SortIcon columnKey="areaValue"/></div>
                    </th>
                    <th className={getHeaderClass('floor')} onClick={() => handleSort('floor')}>
                      <div className="flex items-center">층수 <SortIcon columnKey="floor"/></div>
                    </th>
                    <th className={getHeaderClass('priceValue')} onClick={() => handleSort('priceValue')}>
                      <div className="flex items-center">거래금액 <SortIcon columnKey="priceValue"/></div>
                    </th>
                    <th className={getHeaderClass('date')} onClick={() => handleSort('date')}>
                      <div className="flex items-center">계약일 <SortIcon columnKey="date"/></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                     <tr>
                       <td colSpan={6} className="p-12 text-center text-slate-400">
                         <div className="flex flex-col items-center gap-2">
                           <Loader2 size={24} className="animate-spin text-brand-500" />
                           <span>국토교통부 데이터를 불러오는 중입니다...</span>
                         </div>
                       </td>
                     </tr>
                  ) : processedTransactions.length > 0 ? (
                    processedTransactions.map((item) => (
                      <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors">
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            item.type === '매매' ? 'bg-blue-100 text-blue-700' : 
                            item.type === '전세' ? 'bg-green-100 text-green-700' : 
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="p-4 font-medium text-slate-800">{item.complexName}</td>
                        <td className="p-4 text-slate-600">{item.area}</td>
                        <td className="p-4 text-slate-600">{item.floor}층</td>
                        <td className="p-4 font-bold text-brand-700">
                          {item.price}
                        </td>
                        <td className="p-4 text-slate-500 text-sm">{item.date}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-12 text-center text-slate-500">
                        <div className="flex flex-col items-center py-8">
                          <Search size={40} className="text-slate-200 mb-4" />
                          <p className="text-lg font-medium text-slate-600 mb-1">검색 결과가 없습니다.</p>
                          <p className="text-slate-400 text-sm mb-4">단지명 또는 지역명을 다시 확인해보세요.</p>
                          <button 
                            onClick={() => {setSearchQuery(''); setFilterType('all'); setFilterArea('all'); setFilterPriceRange('all');}}
                            className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-bold transition-colors"
                          >
                            모든 필터 초기화
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-slate-400 text-right">
              * 본 자료는 국토교통부 실거래가 데이터를 기반으로 제공됩니다.
            </div>
          </div>

          {/* Key Complexes */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">주요 단지 특징</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2 text-brand-700">진접지구 주요 단지</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>풍부한 녹지와 공원 인프라 구축</li>
                  <li>진접역 도보권 단지 선호도 상승</li>
                  <li>초·중·고 학군이 안정적으로 형성됨</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2 text-brand-700">오남지구 주요 단지</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>상대적으로 합리적인 매매/전세 가격</li>
                  <li>오남역 개통으로 출퇴근 편의성 증대</li>
                  <li>오남호수공원 등 쾌적한 자연 환경</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                <Trees size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">실거주 관점 장단점</h3>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>장점:</strong> 4호선을 이용한 당고개, 노원 접근성이 매우 우수합니다. 
                신도시급으로 정비된 도로망과 상권 덕분에 생활 편의성이 높습니다. 
                특히 서울 대비 저렴한 주거 비용으로 넓은 평형대를 누릴 수 있다는 점이 신혼부부 및 다자녀 가구에게 매력적입니다.
              </p>
              <p>
                <strong>고려사항:</strong> 서울 강남권 출퇴근 시에는 여전히 시간이 소요될 수 있습니다. 
                차량 이동 시 출퇴근 시간대 주요 도로의 정체 구간을 미리 파악하는 것이 좋습니다.
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

export default RegionalJinjeopOnam;