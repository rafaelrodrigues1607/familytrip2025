
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create days table
create table if not exists days (
  id uuid default uuid_generate_v4() primary key,
  date date unique not null,
  day_of_week text not null,
  display_date text not null,
  city text not null,
  summary text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create itinerary_items table
create table if not exists itinerary_items (
  id text primary key,
  date date references days(date) on delete cascade,
  time text not null,
  title text not null,
  description text,
  type text not null,
  location_name text,
  icon_name text,
  details jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create wishlist_items table
create table if not exists wishlist_items (
  id text primary key,
  text text not null,
  category text not null,
  completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert Days
insert into days (date, day_of_week, display_date, city, summary) values
('2025-11-27', 'Quinta-feira', '27 Nov', 'Miami', 'Chegada, Brickell & South Pointe'),
('2025-11-28', 'Sexta-feira', '28 Nov', 'Miami', 'Cultura, Ônibus Turístico & NBA'),
('2025-11-29', 'Sábado', '29 Nov', 'Miami / Ft. Lauderdale', 'Mudança, Sawgrass & Flamengo'),
('2025-11-30', 'Domingo', '30 Nov', 'Miami', 'Igreja & NFL'),
('2025-12-01', 'Segunda-feira', '01 Dez', 'Viagem para Orlando', 'Everglades, Viagem & Disney Springs'),
('2025-12-02', 'Terça-feira', '02 Dez', 'Orlando', 'Animal Kingdom'),
('2025-12-03', 'Quarta-feira', '03 Dez', 'Orlando', 'Magic Kingdom'),
('2025-12-04', 'Quinta-feira', '04 Dez', 'Orlando / St. Augustine', 'Space Coast & Luzes de Natal'),
('2025-12-05', 'Sexta-feira', '05 Dez', 'Orlando -> Miami', 'Retorno')
on conflict (date) do nothing;

-- Insert Itinerary Items
insert into itinerary_items (id, date, time, title, description, type, location_name, icon_name, details) values
-- 27 Nov
('arr-mia', '2025-11-27', '05:35 AM', 'Chegada em Miami', 'Pouso no MIA. Retirada do carro alugado.', 'FLIGHT', 'Aeroporto Int. Miami', 'Plane', '{"airline": "American Airlines", "flightNumber": "930", "origin": "São Paulo (GRU)", "destination": "Miami (MIA)", "departureTime": "23:10 - 26 Nov", "arrivalTime": "05:35 - 27 Nov", "bookingCode": "LOABAS"}'),
('breakfast-1', '2025-11-27', '08:00 AM', 'Café da Manhã Americano', 'Comece a viagem com um clássico café no IHOP.', 'FOOD', 'IHOP', 'Utensils', null),
('hotel-drop', '2025-11-27', '10:00 AM', 'Deixar Malas / Solicitar Check-in', 'citizenM Miami Brickell. Explorar Brickell City Centre se o quarto não estiver pronto.', 'HOTEL_CHECKIN', 'citizenM Miami Brickell', 'Hotel', '{"name": "citizenM Miami Brickell", "address": "Brickell, Miami", "checkIn": "27 Nov (14:00)", "checkOut": "29 Nov (11:00)", "bookingCode": "72063702120127"}'),
('brickell-explore', '2025-11-27', '12:00 PM', 'Explorar Brickell', 'Caminhar por Brickell. Visitar loja ''Henry'' (Brickell City Centre). Andar no Metromover (gratuito).', 'SHOPPING', 'Brickell City Centre', 'ShoppingBag', null),
('checkin-1', '2025-11-27', '02:00 PM', 'Check-in no Hotel', 'Acomodar-se no citizenM.', 'HOTEL_CHECKIN', null, 'Hotel', null),
('sunset-spot', '2025-11-27', '05:00 PM', 'Pôr do Sol no South Pointe Park', 'Ver o pôr do sol. Caminhar pelo píer.', 'ACTIVITY', 'South Pointe Park', 'Sun', null),
('lincoln-rd', '2025-11-27', '07:30 PM', 'Lincoln Road Mall', 'Jantar e passeio noturno no famoso calçadão ao ar livre.', 'ACTIVITY', 'Lincoln Road', 'MapPin', null),

-- 28 Nov
('coffee-cuba', '2025-11-28', '08:30 AM', 'Café Cubano', 'Café da manhã autêntico em Little Havana (Versailles ou similar).', 'FOOD', 'Little Havana', 'Coffee', null),
('bus-tour', '2025-11-28', '10:00 AM', 'Passeio de Ônibus (2 Andares)', 'Tour Hop-on Hop-off para ver os destaques da cidade de forma eficiente.', 'ACTIVITY', null, 'Bus', null),
('aquarium', '2025-11-28', '02:00 PM', 'Miami Seaquarium', 'Visita ao aquário em Virginia Key.', 'ACTIVITY', 'Miami Seaquarium', 'Anchor', null),
('sunset-bayside', '2025-11-28', '06:00 PM', 'Bayside Marketplace / Marina Village', 'Jantar à beira-mar. Ótima atmosfera.', 'FOOD', 'Bayside Marketplace', 'Utensils', null),
('nba-heat', '2025-11-28', '08:00 PM', 'Jogo do Miami Heat (Tentativa)', 'Verificar calendário no Kaseya Center. Se não tiver jogo, curtir o Bayside.', 'SPORT', 'Kaseya Center', 'Trophy', null),

-- 29 Nov
('sunrise', '2025-11-29', '06:30 AM', 'Nascer do Sol na Praia', 'Ver o sol nascer no mar.', 'ACTIVITY', null, 'Sun', null),
('checkout-1', '2025-11-29', '11:00 AM', 'Check-out citizenM', 'Carregar o carro. Seguir para o norte em direção a Fort Lauderdale.', 'HOTEL_CHECKOUT', null, 'Hotel', null),
('sawgrass', '2025-11-29', '12:00 PM', 'Shopping Sawgrass Mills', 'Compras principais: Best Buy, Roupas, Relógios, Óculos. Almoço no Johnny Rockets.', 'SHOPPING', 'Sawgrass Mills', 'ShoppingBag', null),
('flamengo', '2025-11-29', '04:00 PM', 'Final da Libertadores: Flamengo', 'Encontrar um sports bar em Ft. Lauderdale ou Miami para ver o jogo.', 'SPORT', null, 'Trophy', null),
('las-olas', '2025-11-29', '07:00 PM', 'Las Olas & Canais', 'Passeio noturno de carro/a pé pela Las Olas Blvd e ver os canais.', 'ACTIVITY', 'Fort Lauderdale', 'MapPin', null),
('airbnb-checkin', '2025-11-29', '09:00 PM', 'Check-in no Airbnb', 'Entrada no apartamento na NE 4th St.', 'HOTEL_CHECKIN', 'Airbnb Downtown', 'Hotel', '{"name": "Airbnb Studio", "address": "230 Northeast 4th Street Unit 1904, Miami, FL", "checkIn": "29 Nov (15:00)", "checkOut": "01 Dez (11:00)", "bookingCode": "HMHF2F58Z4", "hostContact": "+1 786-603-8106"}'),

-- 30 Nov
('church', '2025-11-30', '10:00 AM', 'Igreja Christ Fellowship', 'Culto de Domingo.', 'CHURCH', 'Christ Fellowship', 'Church', null),
('tailgate', '2025-11-30', '11:30 AM', 'Pré-jogo / Loja da NFL', 'Ir para o Hard Rock Stadium. Visitar a loja da NFL.', 'SHOPPING', 'Hard Rock Stadium', 'ShoppingBag', null),
('dolphins', '2025-11-30', '01:00 PM', 'Jogo do Miami Dolphins', 'Experiência da NFL ao vivo.', 'SPORT', 'Hard Rock Stadium', 'Trophy', null),
('hollywood', '2025-11-30', '06:00 PM', 'Calçadão de Hollywood Beach', 'Caminhada relaxante e jantar (Comida Mexicana?).', 'FOOD', 'Hollywood Beach', 'MapPin', null),

-- 01 Dez
('checkout-airbnb', '2025-12-01', '10:00 AM', 'Checkout Airbnb', 'Arrumar as malas e iniciar a viagem para o norte.', 'HOTEL_CHECKOUT', null, 'Hotel', null),
('everglades', '2025-12-01', '11:00 AM', 'Passeio nos Everglades', 'Parada em um parque nos arredores (ex: Sawgrass Recreation Park) antes de seguir viagem.', 'ACTIVITY', 'Everglades', 'Camera', null),
('drive-orlando', '2025-12-01', '01:00 PM', 'Viagem para Kissimmee', 'Aprox 3.5 - 4 horas de estrada.', 'DRIVE', null, 'Bus', null),
('checkin-orl', '2025-12-01', '05:00 PM', 'Check-in Celebration Suites', 'Área de Old Town Kissimmee.', 'HOTEL_CHECKIN', 'Celebration Suites', 'Hotel', '{"name": "Celebration Suites", "address": "5820 W. Irlo Bronson Mem. Hwy, Kissimmee, FL", "checkIn": "01 Dez (16:30)", "checkOut": "05 Dez", "bookingCode": "750250"}'),
('disney-springs', '2025-12-01', '07:00 PM', 'Disney Springs', 'Visitar Loja Lego. Jantar no T-Rex Cafe.', 'ACTIVITY', 'Disney Springs', 'MapPin', null),

-- 02 Dez
('ak-park', '2025-12-02', '08:00 AM', 'Animal Kingdom', 'Dia inteiro no parque. Avatar Flight of Passage, Safari.', 'ACTIVITY', 'Animal Kingdom', 'Ticket', null),
('ak-dinner', '2025-12-02', '07:00 PM', 'Jantar', 'Rainforest Cafe ou voltar para Old Town Kissimmee.', 'FOOD', null, 'Utensils', null),

-- 03 Dez
('mk-park', '2025-12-03', '08:00 AM', 'Magic Kingdom', 'Dia inteiro. Fotos no castelo, Tron Lightcycle Run, Fogos à noite.', 'ACTIVITY', 'Magic Kingdom', 'Ticket', null),

-- 04 Dez
('nasa', '2025-12-04', '08:00 AM', 'Ida para Cabo Canaveral', 'Visitar Kennedy Space Center (Vista externa ou tour rápido).', 'ACTIVITY', 'Kennedy Space Center', 'MapPin', null),
('st-augustine', '2025-12-04', '02:00 PM', 'St. Augustine', 'Seguir para a cidade mais antiga. Explorar o forte.', 'ACTIVITY', 'St. Augustine', 'MapPin', null),
('nights-lights', '2025-12-04', '06:00 PM', 'Festa das Luzes (Nights of Lights)', 'Famosa exibição de luzes de Natal em St. Augustine.', 'ACTIVITY', null, 'Sun', null),
('return-drive', '2025-12-04', '09:00 PM', 'Volta para Kissimmee', 'Aprox 2 horas de volta.', 'DRIVE', null, 'Bus', null),

-- 05 Dez
('checkout-final', '2025-12-05', '10:00 AM', 'Check-out e Viagem Sul', 'Dirigir de volta para Miami (3.5 horas).', 'HOTEL_CHECKOUT', null, 'Bus', null),
('last-shopping', '2025-12-05', '02:00 PM', 'Compras de Última Hora', 'Best Buy para eletrônicos se necessário. Dolphin Mall fica perto do aeroporto.', 'SHOPPING', 'Dolphin Mall', 'ShoppingBag', null),
('airport-return', '2025-12-05', '06:00 PM', 'Devolução Carro e Check-in', 'Devolver carro no MIA. Check-in do voo.', 'FLIGHT', 'Aeroporto MIA', 'Plane', null),
('fly-home', '2025-12-05', '09:30 PM', 'Voo para Casa', 'MIA -> BSB (GOL).', 'FLIGHT', null, 'Plane', '{"airline": "GOL", "flightNumber": "G3 7749", "origin": "Miami (MIA)", "destination": "Brasília (BSB)", "departureTime": "21:30 - 05 Dez", "arrivalTime": "07:15 - 06 Dez", "bookingCode": "LOMVXE"}')
on conflict (id) do nothing;

-- Insert Wishlist Items
insert into wishlist_items (id, text, category, completed) values
('1', 'Jogo do Miami Dolphins NFL (30/11)', 'Atividade', true),
('2', 'St. Augustine Festa das Luzes', 'Lugar', true),
('3', 'Jogo do Miami Heat', 'Atividade', true),
('4', 'Cabo Canaveral (Space Center)', 'Lugar', true),
('5', 'Everglades', 'Lugar', true),
('6', 'Hollywood Beach', 'Lugar', true),
('7', 'Canais Ft. Lauderdale & Las Olas', 'Lugar', true),
('8', 'Igreja Christ Fellowship (30/11)', 'Atividade', true),
('9', 'Animal Kingdom (02/12)', 'Atividade', true),
('10', 'Magic Kingdom (03/12)', 'Atividade', true),
('11', 'Loja NFL', 'Compras', true),
('12', 'Sawgrass Mills', 'Compras', true),
('13', 'South Pointe Park', 'Lugar', true),
('14', 'Café da Manhã IHOP', 'Comida', true),
('15', 'Lincoln Road', 'Lugar', true),
('16', 'Café Cubano', 'Comida', true),
('17', 'Best Buy (Eletrônicos)', 'Compras', true),
('18', 'Nascer do Sol no Mar', 'Atividade', true),
('19', 'Pôr do Sol', 'Atividade', true),
('20', 'Aquário Miami', 'Atividade', true),
('21', 'Comida Mexicana', 'Comida', true),
('22', 'Little Havana', 'Lugar', true),
('23', 'Johnny Rockets', 'Comida', true),
('24', 'Metromover', 'Atividade', true),
('25', 'Passeio Ônibus 2 Andares', 'Atividade', true),
('26', 'Comprar: Óculos, Relógio, Celular', 'Compras', true),
('27', 'Disney Springs: Lego, T-Rex', 'Lugar', true),
('28', 'Marina Village (Fim de tarde)', 'Lugar', true),
('29', 'Final Libertadores Flamengo (29/11)', 'Atividade', true)
on conflict (id) do nothing;
