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
import { ActivityType, DayPlan, WishlistItem } from './types';

// Flight Data
export const INBOUND_FLIGHT_1 = {
  airline: "American Airlines (Op por GOL)",
  flightNumber: "7702",
  origin: "Brasília (BSB)",
  destination: "São Paulo (GRU)",
  departureTime: "19:25 - 26 Nov",
  arrivalTime: "21:15 - 26 Nov",
  bookingCode: "LOABAS"
};

export const INBOUND_FLIGHT_2 = {
  airline: "American Airlines",
  flightNumber: "930",
  origin: "São Paulo (GRU)",
  destination: "Miami (MIA)",
  departureTime: "23:10 - 26 Nov",
  arrivalTime: "05:35 - 27 Nov",
  bookingCode: "LOABAS"
};

export const OUTBOUND_FLIGHT = {
  airline: "GOL",
  flightNumber: "G3 7749",
  origin: "Miami (MIA)",
  destination: "Brasília (BSB)",
  departureTime: "21:30 - 05 Dez",
  arrivalTime: "07:15 - 06 Dez",
  bookingCode: "LOMVXE"
};

// Hotel Data
export const HOTEL_MIAMI_1 = {
  name: "citizenM Miami Brickell",
  address: "Brickell, Miami",
  checkIn: "27 Nov (14:00)",
  checkOut: "29 Nov (11:00)",
  bookingCode: "72063702120127"
};

export const AIRBNB_MIAMI = {
  name: "Airbnb Studio",
  address: "230 Northeast 4th Street Unit 1904, Miami, FL",
  checkIn: "29 Nov (15:00)",
  checkOut: "01 Dez (11:00)",
  bookingCode: "HMHF2F58Z4",
  hostContact: "+1 786-603-8106"
};

export const HOTEL_ORLANDO = {
  name: "Celebration Suites",
  address: "5820 W. Irlo Bronson Mem. Hwy, Kissimmee, FL",
  checkIn: "01 Dez (16:30)",
  checkOut: "05 Dez",
  bookingCode: "750250"
};

// Full Itinerary
export const ITINERARY: DayPlan[] = [
  {
    date: "2025-11-27",
    dayOfWeek: "Quinta-feira",
    displayDate: "27 Nov",
    city: "Miami",
    summary: "Chegada, Brickell & South Pointe",
    items: [
      {
        id: "arr-mia",
        time: "05:35 AM",
        title: "Chegada em Miami",
        description: "Pouso no MIA. Retirada do carro alugado.",
        type: ActivityType.FLIGHT,
        location: { name: "Aeroporto Int. Miami" },
        icon: Plane,
        details: INBOUND_FLIGHT_2
      },
      {
        id: "breakfast-1",
        time: "08:00 AM",
        title: "Café da Manhã Americano",
        description: "Comece a viagem com um clássico café no IHOP.",
        type: ActivityType.FOOD,
        location: { name: "IHOP" },
        icon: Utensils
      },
      {
        id: "hotel-drop",
        time: "10:00 AM",
        title: "Deixar Malas / Solicitar Check-in",
        description: "citizenM Miami Brickell. Explorar Brickell City Centre se o quarto não estiver pronto.",
        type: ActivityType.HOTEL_CHECKIN,
        location: { name: "citizenM Miami Brickell" },
        icon: Hotel,
        details: HOTEL_MIAMI_1
      },
      {
        id: "brickell-explore",
        time: "12:00 PM",
        title: "Explorar Brickell",
        description: "Caminhar por Brickell. Visitar loja 'Henry' (Brickell City Centre). Andar no Metromover (gratuito).",
        type: ActivityType.SHOPPING,
        location: { name: "Brickell City Centre" },
        icon: ShoppingBag
      },
      {
        id: "checkin-1",
        time: "02:00 PM",
        title: "Check-in no Hotel",
        description: "Acomodar-se no citizenM.",
        type: ActivityType.HOTEL_CHECKIN,
        icon: Hotel
      },
      {
        id: "sunset-spot",
        time: "05:00 PM",
        title: "Pôr do Sol no South Pointe Park",
        description: "Ver o pôr do sol. Caminhar pelo píer.",
        type: ActivityType.ACTIVITY,
        location: { name: "South Pointe Park" },
        icon: Sun
      },
      {
        id: "lincoln-rd",
        time: "07:30 PM",
        title: "Lincoln Road Mall",
        description: "Jantar e passeio noturno no famoso calçadão ao ar livre.",
        type: ActivityType.ACTIVITY,
        location: { name: "Lincoln Road" },
        icon: MapPin
      }
    ]
  },
  {
    date: "2025-11-28",
    dayOfWeek: "Sexta-feira",
    displayDate: "28 Nov",
    city: "Miami",
    summary: "Cultura, Ônibus Turístico & NBA",
    items: [
      {
        id: "coffee-cuba",
        time: "08:30 AM",
        title: "Café Cubano",
        description: "Café da manhã autêntico em Little Havana (Versailles ou similar).",
        type: ActivityType.FOOD,
        location: { name: "Little Havana" },
        icon: Coffee
      },
      {
        id: "bus-tour",
        time: "10:00 AM",
        title: "Passeio de Ônibus (2 Andares)",
        description: "Tour Hop-on Hop-off para ver os destaques da cidade de forma eficiente.",
        type: ActivityType.ACTIVITY,
        icon: Bus
      },
      {
        id: "aquarium",
        time: "02:00 PM",
        title: "Miami Seaquarium",
        description: "Visita ao aquário em Virginia Key.",
        type: ActivityType.ACTIVITY,
        location: { name: "Miami Seaquarium" },
        icon: Anchor
      },
      {
        id: "sunset-bayside",
        time: "06:00 PM",
        title: "Bayside Marketplace / Marina Village",
        description: "Jantar à beira-mar. Ótima atmosfera.",
        type: ActivityType.FOOD,
        location: { name: "Bayside Marketplace" },
        icon: Utensils
      },
      {
        id: "nba-heat",
        time: "08:00 PM",
        title: "Jogo do Miami Heat (Tentativa)",
        description: "Verificar calendário no Kaseya Center. Se não tiver jogo, curtir o Bayside.",
        type: ActivityType.SPORT,
        location: { name: "Kaseya Center" },
        icon: Trophy
      }
    ]
  },
  {
    date: "2025-11-29",
    dayOfWeek: "Sábado",
    displayDate: "29 Nov",
    city: "Miami / Ft. Lauderdale",
    summary: "Mudança, Sawgrass & Flamengo",
    items: [
      {
        id: "sunrise",
        time: "06:30 AM",
        title: "Nascer do Sol na Praia",
        description: "Ver o sol nascer no mar.",
        type: ActivityType.ACTIVITY,
        icon: Sun
      },
      {
        id: "checkout-1",
        time: "11:00 AM",
        title: "Check-out citizenM",
        description: "Carregar o carro. Seguir para o norte em direção a Fort Lauderdale.",
        type: ActivityType.HOTEL_CHECKOUT,
        icon: Hotel
      },
      {
        id: "sawgrass",
        time: "12:00 PM",
        title: "Shopping Sawgrass Mills",
        description: "Compras principais: Best Buy, Roupas, Relógios, Óculos. Almoço no Johnny Rockets.",
        type: ActivityType.SHOPPING,
        location: { name: "Sawgrass Mills" },
        icon: ShoppingBag
      },
      {
        id: "flamengo",
        time: "04:00 PM",
        title: "Final da Libertadores: Flamengo",
        description: "Encontrar um sports bar em Ft. Lauderdale ou Miami para ver o jogo.",
        type: ActivityType.SPORT,
        icon: Trophy
      },
      {
        id: "las-olas",
        time: "07:00 PM",
        title: "Las Olas & Canais",
        description: "Passeio noturno de carro/a pé pela Las Olas Blvd e ver os canais.",
        type: ActivityType.ACTIVITY,
        location: { name: "Fort Lauderdale" },
        icon: MapPin
      },
      {
        id: "airbnb-checkin",
        time: "09:00 PM",
        title: "Check-in no Airbnb",
        description: "Entrada no apartamento na NE 4th St.",
        type: ActivityType.HOTEL_CHECKIN,
        location: { name: "Airbnb Downtown" },
        icon: Hotel,
        details: AIRBNB_MIAMI
      }
    ]
  },
  {
    date: "2025-11-30",
    dayOfWeek: "Domingo",
    displayDate: "30 Nov",
    city: "Miami",
    summary: "Igreja & NFL",
    items: [
      {
        id: "church",
        time: "10:00 AM",
        title: "Igreja Christ Fellowship",
        description: "Culto de Domingo.",
        type: ActivityType.CHURCH,
        location: { name: "Christ Fellowship" },
        icon: Church
      },
      {
        id: "tailgate",
        time: "11:30 AM",
        title: "Pré-jogo / Loja da NFL",
        description: "Ir para o Hard Rock Stadium. Visitar a loja da NFL.",
        type: ActivityType.SHOPPING,
        location: { name: "Hard Rock Stadium" },
        icon: ShoppingBag
      },
      {
        id: "dolphins",
        time: "01:00 PM",
        title: "Jogo do Miami Dolphins",
        description: "Experiência da NFL ao vivo.",
        type: ActivityType.SPORT,
        location: { name: "Hard Rock Stadium" },
        icon: Trophy
      },
      {
        id: "hollywood",
        time: "06:00 PM",
        title: "Calçadão de Hollywood Beach",
        description: "Caminhada relaxante e jantar (Comida Mexicana?).",
        type: ActivityType.FOOD,
        location: { name: "Hollywood Beach" },
        icon: MapPin
      }
    ]
  },
  {
    date: "2025-12-01",
    dayOfWeek: "Segunda-feira",
    displayDate: "01 Dez",
    city: "Viagem para Orlando",
    summary: "Everglades, Viagem & Disney Springs",
    items: [
      {
        id: "checkout-airbnb",
        time: "10:00 AM",
        title: "Checkout Airbnb",
        description: "Arrumar as malas e iniciar a viagem para o norte.",
        type: ActivityType.HOTEL_CHECKOUT,
        icon: Hotel
      },
      {
        id: "everglades",
        time: "11:00 AM",
        title: "Passeio nos Everglades",
        description: "Parada em um parque nos arredores (ex: Sawgrass Recreation Park) antes de seguir viagem.",
        type: ActivityType.ACTIVITY,
        location: { name: "Everglades" },
        icon: Camera
      },
      {
        id: "drive-orlando",
        time: "01:00 PM",
        title: "Viagem para Kissimmee",
        description: "Aprox 3.5 - 4 horas de estrada.",
        type: ActivityType.DRIVE,
        icon: Bus
      },
      {
        id: "checkin-orl",
        time: "05:00 PM",
        title: "Check-in Celebration Suites",
        description: "Área de Old Town Kissimmee.",
        type: ActivityType.HOTEL_CHECKIN,
        location: { name: "Celebration Suites" },
        icon: Hotel,
        details: HOTEL_ORLANDO
      },
      {
        id: "disney-springs",
        time: "07:00 PM",
        title: "Disney Springs",
        description: "Visitar Loja Lego. Jantar no T-Rex Cafe.",
        type: ActivityType.ACTIVITY,
        location: { name: "Disney Springs" },
        icon: MapPin
      }
    ]
  },
  {
    date: "2025-12-02",
    dayOfWeek: "Terça-feira",
    displayDate: "02 Dez",
    city: "Orlando",
    summary: "Animal Kingdom",
    items: [
      {
        id: "ak-park",
        time: "08:00 AM",
        title: "Animal Kingdom",
        description: "Dia inteiro no parque. Avatar Flight of Passage, Safari.",
        type: ActivityType.ACTIVITY,
        location: { name: "Animal Kingdom" },
        icon: Ticket
      },
      {
        id: "ak-dinner",
        time: "07:00 PM",
        title: "Jantar",
        description: "Rainforest Cafe ou voltar para Old Town Kissimmee.",
        type: ActivityType.FOOD,
        icon: Utensils
      }
    ]
  },
  {
    date: "2025-12-03",
    dayOfWeek: "Quarta-feira",
    displayDate: "03 Dez",
    city: "Orlando",
    summary: "Magic Kingdom",
    items: [
      {
        id: "mk-park",
        time: "08:00 AM",
        title: "Magic Kingdom",
        description: "Dia inteiro. Fotos no castelo, Tron Lightcycle Run, Fogos à noite.",
        type: ActivityType.ACTIVITY,
        location: { name: "Magic Kingdom" },
        icon: Ticket
      }
    ]
  },
  {
    date: "2025-12-04",
    dayOfWeek: "Quinta-feira",
    displayDate: "04 Dez",
    city: "Orlando / St. Augustine",
    summary: "Space Coast & Luzes de Natal",
    items: [
      {
        id: "nasa",
        time: "08:00 AM",
        title: "Ida para Cabo Canaveral",
        description: "Visitar Kennedy Space Center (Vista externa ou tour rápido).",
        type: ActivityType.ACTIVITY,
        location: { name: "Kennedy Space Center" },
        icon: MapPin
      },
      {
        id: "st-augustine",
        time: "02:00 PM",
        title: "St. Augustine",
        description: "Seguir para a cidade mais antiga. Explorar o forte.",
        type: ActivityType.ACTIVITY,
        location: { name: "St. Augustine" },
        icon: MapPin
      },
      {
        id: "nights-lights",
        time: "06:00 PM",
        title: "Festa das Luzes (Nights of Lights)",
        description: "Famosa exibição de luzes de Natal em St. Augustine.",
        type: ActivityType.ACTIVITY,
        icon: Sun
      },
      {
        id: "return-drive",
        time: "09:00 PM",
        title: "Volta para Kissimmee",
        description: "Aprox 2 horas de volta.",
        type: ActivityType.DRIVE,
        icon: Bus
      }
    ]
  },
  {
    date: "2025-12-05",
    dayOfWeek: "Sexta-feira",
    displayDate: "05 Dez",
    city: "Orlando -> Miami",
    summary: "Retorno",
    items: [
      {
        id: "checkout-final",
        time: "10:00 AM",
        title: "Check-out e Viagem Sul",
        description: "Dirigir de volta para Miami (3.5 horas).",
        type: ActivityType.HOTEL_CHECKOUT,
        icon: Bus
      },
      {
        id: "last-shopping",
        time: "02:00 PM",
        title: "Compras de Última Hora",
        description: "Best Buy para eletrônicos se necessário. Dolphin Mall fica perto do aeroporto.",
        type: ActivityType.SHOPPING,
        location: { name: "Dolphin Mall" },
        icon: ShoppingBag
      },
      {
        id: "airport-return",
        time: "06:00 PM",
        title: "Devolução Carro e Check-in",
        description: "Devolver carro no MIA. Check-in do voo.",
        type: ActivityType.FLIGHT,
        location: { name: "Aeroporto MIA" },
        icon: Plane
      },
      {
        id: "fly-home",
        time: "09:30 PM",
        title: "Voo para Casa",
        description: "MIA -> BSB (GOL).",
        type: ActivityType.FLIGHT,
        details: OUTBOUND_FLIGHT,
        icon: Plane
      }
    ]
  }
];

export const WISHLIST_ITEMS: WishlistItem[] = [
  { id: '1', text: 'Jogo do Miami Dolphins NFL (30/11)', category: 'Atividade', completed: true },
  { id: '2', text: 'St. Augustine Festa das Luzes', category: 'Lugar', completed: true },
  { id: '3', text: 'Jogo do Miami Heat', category: 'Atividade', completed: true },
  { id: '4', text: 'Cabo Canaveral (Space Center)', category: 'Lugar', completed: true },
  { id: '5', text: 'Everglades', category: 'Lugar', completed: true },
  { id: '6', text: 'Hollywood Beach', category: 'Lugar', completed: true },
  { id: '7', text: 'Canais Ft. Lauderdale & Las Olas', category: 'Lugar', completed: true },
  { id: '8', text: 'Igreja Christ Fellowship (30/11)', category: 'Atividade', completed: true },
  { id: '9', text: 'Animal Kingdom (02/12)', category: 'Atividade', completed: true },
  { id: '10', text: 'Magic Kingdom (03/12)', category: 'Atividade', completed: true },
  { id: '11', text: 'Loja NFL', category: 'Compras', completed: true },
  { id: '12', text: 'Sawgrass Mills', category: 'Compras', completed: true },
  { id: '13', text: 'South Pointe Park', category: 'Lugar', completed: true },
  { id: '14', text: 'Café da Manhã IHOP', category: 'Comida', completed: true },
  { id: '15', text: 'Lincoln Road', category: 'Lugar', completed: true },
  { id: '16', text: 'Café Cubano', category: 'Comida', completed: true },
  { id: '17', text: 'Best Buy (Eletrônicos)', category: 'Compras', completed: true },
  { id: '18', text: 'Nascer do Sol no Mar', category: 'Atividade', completed: true },
  { id: '19', text: 'Pôr do Sol', category: 'Atividade', completed: true },
  { id: '20', text: 'Aquário Miami', category: 'Atividade', completed: true },
  { id: '21', text: 'Comida Mexicana', category: 'Comida', completed: true },
  { id: '22', text: 'Little Havana', category: 'Lugar', completed: true },
  { id: '23', text: 'Johnny Rockets', category: 'Comida', completed: true },
  { id: '24', text: 'Metromover', category: 'Atividade', completed: true },
  { id: '25', text: 'Passeio Ônibus 2 Andares', category: 'Atividade', completed: true },
  { id: '26', text: 'Comprar: Óculos, Relógio, Celular', category: 'Compras', completed: true },
  { id: '27', text: 'Disney Springs: Lego, T-Rex', category: 'Lugar', completed: true },
  { id: '28', text: 'Marina Village (Fim de tarde)', category: 'Lugar', completed: true },
  { id: '29', text: 'Final Libertadores Flamengo (29/11)', category: 'Atividade', completed: true },
];