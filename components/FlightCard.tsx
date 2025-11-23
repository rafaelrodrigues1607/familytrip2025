import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';
import { FlightDetails } from '../types';

interface FlightCardProps {
  flight: FlightDetails;
  title?: string;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-sky-100 text-sky-800 px-3 py-1 rounded-bl-lg text-xs font-bold">
        {flight.bookingCode}
      </div>
      <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-2">
        <Plane className="w-4 h-4" /> {title || "Detalhes do Voo"}
      </h4>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-bold text-slate-900">{flight.origin.split(' ')[0]}</div>
          <div className="text-sm text-slate-500">{flight.departureTime}</div>
        </div>

        <div className="hidden md:flex flex-col items-center flex-1 px-4">
          <div className="text-xs text-slate-400 mb-1">{flight.airline} • {flight.flightNumber}</div>
          <div className="w-full h-px bg-slate-300 relative flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-slate-400 bg-white px-1 absolute" />
          </div>
        </div>
        
        {/* Mobile View for Airline info */}
        <div className="md:hidden text-xs text-slate-400 my-1">
             {flight.airline} • {flight.flightNumber}
        </div>

        <div className="text-right md:text-left">
          <div className="text-2xl font-bold text-slate-900">{flight.destination.split(' ')[0]}</div>
          <div className="text-sm text-slate-500">{flight.arrivalTime}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;