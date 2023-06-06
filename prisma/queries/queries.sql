CREATE TABLE IF NOT EXISTS `dailyevent` (
  "id" TEXT NOT NULL PRIMARY KEY,
  "eventName" TEXT NOT NULL,
  "time" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS `weeklyevent` (
  "id" TEXT NOT NULL PRIMARY KEY,
  "eventName" TEXT NOT NULL,
  "time" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

INSERT INTO WeeklyEvent VALUES ('1fbad0f7-1590-49ad-ae08-89c24168d654', 'YouTube Music', '2023/06/11', '07:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- weekly

INSERT INTO DailyEvent VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b676', 'Spotify monthly listeners', '2023/06/07', '04:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily
INSERT INTO DailyEvent VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b675', 'VIBE daily chart update', '2023/06/07', '07:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily
INSERT INTO DailyEvent VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b674', 'Spotify daily streams and charts', '2023/06/07', '19:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily

INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b676', 'Spotify monthly listeners', '2023/06/07', '04:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b675', 'VIBE chart update', '2023/06/07', '07:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24168d654', 'YouTube Music', '2023/06/11', '07:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- weekly
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b674', 'Spotify daily streams and charts', '2023/06/07', '19:00:00', 'Chart Update', 0, '1685924842916', '1685924842916'); -- daily
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b677', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Jakarta/Indonesia @Hall 5, Indonesia Convention Exhibition BSD', '2023/06/24', '16:30:00', 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b678', 'Waterbomb Festival in Seoul', '2023/06/25', null, 'Special Performance/Festival', 0, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b679', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Bangkok/Thailand @Thunder Dome - Day #1', '2023/07/29', '20:00:00', 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b680', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Bangkok/Thailand @Thunder Dome - Day #2', '2023/07/30', '18:00:00', 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b68c', 'aespa Live Tour 2023 "SYNK: HYPER LINE" Special in Tokyo/Japan @Tokyo Dome - Day #1', '2023/08/05', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b681', 'aespa Live Tour 2023 "SYNK: HYPER LINE" Special in Tokyo/Japan @Tokyo Dome - Day #2', '2023/08/06', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b682', 'Outside Lands Music & Arts Festival in San Francisco/US @Golden Gate Park', '2023/08/11', null, 'Special Performance/Festival', 0, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b683', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Los Angeles/US @Crypto.com Arena', '2023/08/13', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b684', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Dallas/US @The Pavilion At Toyota Music Factory', '2023/08/18', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b685', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Miami/US @James L. Knight Center', '2023/08/22', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b686', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Atlanta/US @Fox Theater', '2023/08/25', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b687', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Washington/US @The Theater at MGM National Harbor', '2023/08/27', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b688', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Chicago/US @Rosemont Theatre', '2023/08/30', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b689', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Boston/US @MGM Music Hall at Fenway', '2023/09/02', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b690', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Brooklyn/US @Barclays Center', '2023/09/05', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b691', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Mexico City/Mexico @Palacio de los Deportes', '2023/09/08', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b692', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in São Paulo/Brazil @Espaço Unimed', '2023/09/11', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b693', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Santiago/Chile @Teatro Caupolicán', '2023/09/14', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b694', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Berlin/Germany @Columbiahalle', '2023/09/25', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b695', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in London/UK @The O2', '2023/09/28', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');
INSERT INTO Event VALUES ('1fbad0f7-1590-49ad-ae08-89c24167b696', 'aespa Live Tour 2023 "SYNK: HYPER LINE" in Paris/France @Dôme de Paris', '2023/09/30', null, 'Concert/Tour', 1, '1685924842916', '1685924842916');

