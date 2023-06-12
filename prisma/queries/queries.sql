CREATE TABLE IF NOT EXISTS `ContinualEvent` (
  "id" TEXT NOT NULL PRIMARY KEY,
  "eventName" TEXT NOT NULL,
  "frequency" TEXT NOT NULL,
  "time" TEXT DEFAULT NULL,
  "category" TEXT NOT NULL,
  "link" TEXT DEFAULT NULL,
  "image" TEXT DEFAULT NULL,
  "status" INT DEFAULT 1,
  "reminder" BOOLEAN DEFAULT FALSE,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

INSERT INTO ContinualEvent VALUES 
('1fbad0f7-1590-49ad-ae08-89c24167b676', 'Spotify monthly listeners', 'daily', '04:00:00', 'Chart Update', NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24168d654', 'YouTube Music', 'weekly', '07:00:00', 'Chart Update', NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b675', 'VIBE daily chart update', 'daily', '07:00:00', 'Chart Update', NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b674', 'Spotify daily streams and charts', 'daily', '19:00:00', 'Chart Update', NULL, NULL, 1, FALSE, '1685924842916', '1685924842916');
# MelOn daily
# Bugs daily
# FLO daily
# iChart weekly
# Genie daily
# YouTube daily
# Apple Music daily
# iTunes daily
# billboard daily
# billboard weekly
# Music shows weekly

INSERT INTO Event VALUES ('ID', 'EventName', 'YYYY/MM/DD', 'HH:mm:ss', 'Category', 'confirmed', Link, Image, Status, Reminder, 'CreatedAt', 'UpdatedAt');

#Dummy Record
INSERT INTO Event VALUES ('993ac140-f0f0-41e7-88b4-a3e3f93b366d', 'Event Name', '2023/06/13', '04:49:00', 'Other', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916');

INSERT INTO Event VALUES 
('993ac140-f0f0-41e7-88b4-a3e3f93b3667', 'The Governors Ball Music Festival @ Flushing Meadows Corona Park, New York City, USA', '2023/06/10', '07:45:00', 'Festival/Performance', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b673', 'Knowing Bros EP.387', '2023/06/10', '20:50:00', 'Variety', 1, NULL, NULL, 1, FALSE, '1685925171807', '1685925171807'),
('8486205f-8be0-4e1c-8274-b558cd1dff95', 'Withmuu Fansign Event', '2023/06/14', '20:00:00', 'Fansign', 1, NULL, NULL, 1, FALSE, '1685925237859', '1685925237859'),
('07cc7aab-9b8e-4f0f-868b-a0e70a67896f', '32nd Lotte Duty Free Family Concert', '2023/06/16', '19:30:00', 'Concert/Tour', 0, NULL, NULL, 1, FALSE, '1685925410470', '1685925410470'),
('15900917-3901-4bdc-bde5-d5f70de9a7db', '\'SEEN Festival\' - Hoiana Resort & Golf in Hoi An, Vietnam', '2023/06/18', '21:00:00', 'Festival/Performance', 0, NULL, NULL, 1, FALSE, '1685925504441', '1685925504441'),
('1fbad0f7-1590-49ad-ae08-89c24167b677', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Jakarta/Indonesia @Hall 5, Indonesia Convention Exhibition BSD', '2023/06/24', '16:30:00', 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b678', 'Waterbomb Festival in Seoul', '2023/06/25', null, 'Festival/Performance', 0, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b679', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Bangkok/Thailand @Thunder Dome - Day #1', '2023/07/29', '20:00:00', 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b680', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Bangkok/Thailand @Thunder Dome - Day #2', '2023/07/30', '18:00:00', 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b68c', 'aespa Live Tour 2023 "SYNK: HYPER LINE" Special in Tokyo/Japan @Tokyo Dome - Day #1', '2023/08/05', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b681', 'aespa Live Tour 2023 "SYNK: HYPER LINE" Special in Tokyo/Japan @Tokyo Dome - Day #2', '2023/08/06', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b682', 'Outside Lands Music & Arts Festival in San Francisco/US @Golden Gate Park', '2023/08/11', null, 'Festival/Performance', 0, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b683', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Los Angeles/US @Crypto.com Arena', '2023/08/13', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b684', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Dallas/US @The Pavilion At Toyota Music Factory', '2023/08/18', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b685', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Miami/US @James L. Knight Center', '2023/08/22', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b686', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Atlanta/US @Fox Theater', '2023/08/25', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b687', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Washington/US @The Theater at MGM National Harbor', '2023/08/27', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b688', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Chicago/US @Rosemont Theatre', '2023/08/30', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b689', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Boston/US @MGM Music Hall at Fenway', '2023/09/02', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b690', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Brooklyn/US @Barclays Center', '2023/09/05', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b691', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Mexico City/Mexico @Palacio de los Deportes', '2023/09/08', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b692', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in São Paulo/Brazil @Espaço Unimed', '2023/09/11', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b693', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Santiago/Chile @Teatro Caupolicán', '2023/09/14', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b694', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Berlin/Germany @Columbiahalle', '2023/09/25', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b695', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in London/UK @The O2', '2023/09/28', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916'),
('1fbad0f7-1590-49ad-ae08-89c24167b696', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Paris/France @Dôme de Paris', '2023/09/30', null, 'Concert/Tour', 1, NULL, NULL, 1, FALSE, '1685924842916', '1685924842916');