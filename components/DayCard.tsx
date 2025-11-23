import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { DayPlan, ItineraryItem, ActivityType } from '../types';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';

interface DayCardProps {
  plan: DayPlan;
}

const DayCard: React.FC<DayCardProps> = ({ plan }) => {
  return (
    <div className="mb-8">
      {/* Date Header */}
      <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur pt-4 pb-2 border-b border-slate-200 mb-4">
        <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-slate-800">{plan.dayOfWeek}</h2>
            <span className="text-lg text-slate-500 font-medium">{plan.displayDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-teal-600 font-medium mt-1">
            <MapPin className="w-4 h-4" /> {plan.city} • <span className="text-slate-500 font-normal">{plan.summary}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4 ml-4 border-l-2 border-slate-200 pl-6 relative">
        {plan.items.map((item, idx) => (
            <TimelineItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ item: ItineraryItem }> = ({ item }) => {
  const getIconColor = (type: ActivityType) => {
    switch (type) {
      case ActivityType.FLIGHT: return 'bg-blue-100 text-blue-600';
      case ActivityType.HOTEL_CHECKIN: return 'bg-purple-100 text-purple-600';
      case ActivityType.HOTEL_CHECKOUT: return 'bg-purple-100 text-purple-600';
      case ActivityType.FOOD: return 'bg-orange-100 text-orange-600';
      case ActivityType.SHOPPING: return 'bg-pink-100 text-pink-600';
      case ActivityType.SPORT: return 'bg-green-100 text-green-600';
      case ActivityType.CHURCH: return 'bg-indigo-100 text-indigo-600';
      default: return 'bg-teal-100 text-teal-600';
    }
  };

  const Icon = item.icon;

  return (
    <div className="relative group">
        {/* Dot on timeline */}
        <div className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${getIconColor(item.type).split(' ')[0].replace('100', '500')}`}></div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
            <div className="min-w-[80px] pt-1">
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-500">
                    <Clock className="w-3 h-3" /> {item.time}
                </div>
            </div>
            
            <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                    <div className={`p-1.5 rounded-md ${getIconColor(item.type)}`}>
                        <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                </div>
                
                {item.description && (
                    <p className="text-slate-600 mb-3">{item.description}</p>
                )}
                
                {/* Embedded Details (Flight/Hotel Cards) */}
                {item.type === ActivityType.FLIGHT && item.details && (
                    <FlightCard flight={item.details} />
                )}
                
                {item.type === ActivityType.HOTEL_CHECKIN && item.details && (
                    <HotelCard hotel={item.details} />
                )}
                 {item.type === ActivityType.HOTEL_CHECKOUT && item.details && (
                    <HotelCard hotel={item.details} />
                )}

                {item.location && (
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                        <MapPin className="w-3 h-3" /> {item.location.name}
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default DayCard;