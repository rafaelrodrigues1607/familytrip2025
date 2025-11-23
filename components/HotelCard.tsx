import React from 'react';
import { Hotel, Calendar, MapPin, Phone } from 'lucide-react';
import { HotelDetails } from '../types';

interface HotelCardProps {
  hotel: HotelDetails;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-4 border-l-4 border-l-teal-500">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Hotel className="w-5 h-5 text-teal-600" /> {hotel.name}
        </h3>
        {hotel.bookingCode && (
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
            Reserva: {hotel.bookingCode}
          </span>
        )}
      </div>
      
      <div className="text-sm text-slate-600 mb-4 flex items-center gap-1">
        <MapPin className="w-4 h-4" /> {hotel.address}
      </div>

      <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-lg">
        <div>
          <p className="text-xs text-slate-500 mb-1 uppercase">Check-in</p>
          <p className="font-medium text-slate-800 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {hotel.checkIn}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1 uppercase">Check-out</p>
          <p className="font-medium text-slate-800 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {hotel.checkOut}
          </p>
        </div>
      </div>
      
      {hotel.hostContact && (
        <div className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-600 flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-600" /> 
          Anfitrião: <span className="font-mono">{hotel.hostContact}</span>
        </div>
      )}
    </div>
  );
};

export default HotelCard;