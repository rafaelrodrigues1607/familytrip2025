
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { ITINERARY, WISHLIST_ITEMS } from '../constants';
import { DayPlan, WishlistItem, ActivityType } from '../types';
import { getIcon } from '../utils/iconMap';

export function useItinerary() {
    const [itinerary, setItinerary] = useState<DayPlan[]>(ITINERARY);
    const [wishlist, setWishlist] = useState<WishlistItem[]>(WISHLIST_ITEMS);
    const [loading, setLoading] = useState(true);
    const [usingSupabase, setUsingSupabase] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
                const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

                if (!supabaseUrl || !supabaseKey || !supabase) {
                    console.log('Supabase not configured, using constants');
                    setLoading(false);
                    return;
                }

                // Check connection by fetching one row
                const { error: healthCheckError } = await supabase.from('days').select('id').limit(1);
                if (healthCheckError) {
                    console.warn('Supabase connection failed or table not found:', healthCheckError.message);
                    setLoading(false);
                    return;
                }

                const { data: daysData, error: daysError } = await supabase
                    .from('days')
                    .select('*')
                    .order('date', { ascending: true });

                if (daysError) throw daysError;

                if (daysData && daysData.length > 0) {
                    const { data: itemsData, error: itemsError } = await supabase
                        .from('itinerary_items')
                        .select('*')
                        .order('created_at', { ascending: true }); // Assuming insertion order for now

                    if (itemsError) throw itemsError;

                    const days: DayPlan[] = daysData.map(day => ({
                        date: day.date,
                        dayOfWeek: day.day_of_week,
                        displayDate: day.display_date,
                        city: day.city,
                        summary: day.summary,
                        items: itemsData
                            .filter(item => item.date === day.date)
                            .map(item => ({
                                id: item.id,
                                time: item.time,
                                title: item.title,
                                description: item.description,
                                type: item.type as ActivityType,
                                location: item.location_name ? { name: item.location_name } : undefined,
                                icon: getIcon(item.icon_name),
                                details: item.details
                            }))
                    }));
                    setItinerary(days);
                    setUsingSupabase(true);
                }

                // Fetch Wishlist
                const { data: wishlistData, error: wishlistError } = await supabase
                    .from('wishlist_items')
                    .select('*')
                    .order('created_at', { ascending: true });

                if (wishlistError) throw wishlistError;

                if (wishlistData && wishlistData.length > 0) {
                    setWishlist(wishlistData);
                }

            } catch (error) {
                console.error('Error fetching data from Supabase:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { itinerary, wishlist, loading, usingSupabase };
}
