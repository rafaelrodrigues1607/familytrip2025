
import {
    Plane,
    Hotel,
    Utensils,
    ShoppingBag,
    Camera,
    Sun,
    Moon,
    MapPin,
    Church,
    Trophy,
    Bus,
    Ticket,
    Coffee,
    Anchor
} from 'lucide-react';

export const iconMap: Record<string, any> = {
    Plane,
    Hotel,
    Utensils,
    ShoppingBag,
    Camera,
    Sun,
    Moon,
    MapPin,
    Church,
    Trophy,
    Bus,
    Ticket,
    Coffee,
    Anchor
};

export const getIcon = (name: string | undefined) => {
    if (!name) return undefined;
    return iconMap[name] || MapPin; // Default to MapPin
};
