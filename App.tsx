import React, { useState } from 'react';
import { CalendarDays, FileText, ListChecks, Palmtree, Plane, Database } from 'lucide-react';
import DayCard from './components/DayCard';
import { INBOUND_FLIGHT_1, INBOUND_FLIGHT_2, OUTBOUND_FLIGHT, HOTEL_MIAMI_1, AIRBNB_MIAMI, HOTEL_ORLANDO } from './constants';
import FlightCard from './components/FlightCard';
import HotelCard from './components/HotelCard';
import { useItinerary } from './hooks/useItinerary';

function App() {
    const [activeTab, setActiveTab] = useState<'itinerary' | 'docs' | 'wishlist'>('itinerary');
    const { itinerary, wishlist, loading, usingSupabase } = useItinerary();

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 max-w-3xl mx-auto shadow-xl shadow-slate-200 border-x border-slate-100">

            {/* Header */}
            <header className="bg-teal-600 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Palmtree size={120} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-teal-100 text-sm font-medium mb-2 uppercase tracking-wider">
                        <Plane className="w-4 h-4" /> Viagem Flórida 2025
                        {usingSupabase && (
                            <span className="ml-auto flex items-center gap-1 text-[10px] bg-teal-800/50 px-2 py-0.5 rounded-full border border-teal-500/30">
                                <Database className="w-3 h-3" /> Supabase
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl font-bold mb-1">Férias Família Rodrigues</h1>
                    <p className="text-teal-100 opacity-90">Miami • Orlando • St. Augustine</p>
                    <div className="mt-4 inline-flex bg-teal-700/50 px-3 py-1 rounded-full text-xs border border-teal-500">
                        26 Nov - 06 Dez, 2025
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <div className="flex justify-center -mt-6 mb-6 relative z-20 px-4">
                <div className="bg-white p-1.5 rounded-full shadow-lg border border-slate-100 flex gap-1">
                    <button
                        onClick={() => setActiveTab('itinerary')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'itinerary' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <CalendarDays className="w-4 h-4" /> Roteiro
                    </button>
                    <button
                        onClick={() => setActiveTab('docs')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'docs' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <FileText className="w-4 h-4" /> Documentos
                    </button>
                    <button
                        onClick={() => setActiveTab('wishlist')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'wishlist' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        <ListChecks className="w-4 h-4" /> Lista
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="px-6 pb-12">

                {/* Itinerary View */}
                {activeTab === 'itinerary' && (
                    <div className="space-y-2 animate-fade-in">
                        {itinerary.map((day, index) => (
                            <DayCard key={index} plan={day} />
                        ))}
                        <div className="text-center text-slate-400 text-sm pt-8 pb-4">
                            Fim do Roteiro
                        </div>
                    </div>
                )}

                {/* Documents View */}
                {activeTab === 'docs' && (
                    <div className="space-y-8 animate-fade-in">
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Plane className="w-5 h-5 text-blue-500" /> Voos
                            </h2>
                            <FlightCard flight={INBOUND_FLIGHT_1} title="Ida - Trecho 1" />
                            <FlightCard flight={INBOUND_FLIGHT_2} title="Ida - Trecho 2" />
                            <FlightCard flight={OUTBOUND_FLIGHT} title="Voo de Volta" />
                        </section>

                        <hr className="border-slate-200" />

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Palmtree className="w-5 h-5 text-teal-500" /> Hospedagem
                            </h2>
                            <h3 className="text-sm font-bold text-slate-400 uppercase mb-2 tracking-wider">Miami (Parte 1)</h3>
                            <HotelCard hotel={HOTEL_MIAMI_1} />

                            <h3 className="text-sm font-bold text-slate-400 uppercase mb-2 mt-6 tracking-wider">Miami (Parte 2)</h3>
                            <HotelCard hotel={AIRBNB_MIAMI} />

                            <h3 className="text-sm font-bold text-slate-400 uppercase mb-2 mt-6 tracking-wider">Orlando / Kissimmee</h3>
                            <HotelCard hotel={HOTEL_ORLANDO} />
                        </section>
                    </div>
                )}

                {/* Wishlist View */}
                {activeTab === 'wishlist' && (
                    <div className="animate-fade-in">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 bg-slate-50 border-b border-slate-100">
                                <h2 className="font-bold text-slate-800">Lugares e Atividades</h2>
                                <p className="text-xs text-slate-500">Tudo incluso no roteiro</p>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {wishlist.map((item) => (
                                    <div key={item.id} className="p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.completed ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-300'}`}>
                                            {item.completed && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <div className="flex-1">
                                            <span className={`text-sm font-medium ${item.completed ? 'text-slate-700' : 'text-slate-400'}`}>
                                                {item.text}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                                            {item.category}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default App;