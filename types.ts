import { LucideIcon } from "lucide-react";

export enum ActivityType {
  FLIGHT = 'FLIGHT',
  HOTEL_CHECKIN = 'HOTEL_CHECKIN',
  HOTEL_CHECKOUT = 'HOTEL_CHECKOUT',
  ACTIVITY = 'ACTIVITY',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  SPORT = 'SPORT',
  CHURCH = 'CHURCH',
  DRIVE = 'DRIVE'
}

export interface Location {
  name: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
}

export interface FlightDetails {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  bookingCode: string;
}

export interface HotelDetails {
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  bookingCode?: string;
  hostContact?: string;
}

export interface ItineraryItem {
  id: string;
  time: string; // e.g., "08:00 AM"
  title: string;
  description?: string;
  type: ActivityType;
  location?: Location;
  icon?: any; // LucideIcon
  details?: any; // Flexible payload for specific details like flight info
}

export interface DayPlan {
  date: string; // e.g., "2025-11-27"
  dayOfWeek: string; // e.g., "Quinta-feira"
  displayDate: string; // e.g., "27 Nov"
  items: ItineraryItem[];
  summary: string;
  city: string;
}

export interface WishlistItem {
  id: string;
  text: string;
  category: 'Lugar' | 'Atividade' | 'Comida' | 'Compras';
  completed: boolean;
}