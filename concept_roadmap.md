
#	+-------------------------------------+
#	|								      								|
#	|		aespa Web App Statistic Project	  |
#	|									  									|
#	|		 	 			 - AESPACORE -			  		|		
#	|									  									|
#	+-------------------------------------+

# Info web app about aespa statistics. Main goals are the Fancams and Content Timeline management and contributions. The web app is supposed to display statistics only, no photos, no galleries and no videos except for MV stats. The most of it in this SPA will be automated through async ops, API requests and hooks set up on PaaS 

# ::: MAIN GOALS:
	[Fancams]
		└ Statistics (views, likes, date)
		└ Total and member specific
		└ In/official list
		└ Sorting options
		└ List of the most 1 millions
		└ Closest/next million
		└ Views and most millions by era
		└ Apply own fancam
  [Content Timeline]:
		└ Order by era/date/type
		└ Embed videos if possible
		└ Report button if source is dead
	[Achievements]:
		└ Awards
		└ Music Show Wins and Nominations
		└ Charts
		└ Sales
		└ Other noteworthy milestones
	[instiz iChart]:
		└ Top 10 display of every chart
		└ Stats of currently charting aespa songs
		└ iChart ranking by week and total
		└ Chart calculation / Reset time

# ::: OPTIONAL:
	[Brand Reputation]:
		└ Statistics (graphs)
		└ Monthly reports
		└ [Ranking by]:
			└ girl groups
			└ 4th generation girl groups
			└ individual members
			└ 4th generation individual members
	[SMCU]:
		└ Introduction
		└ Encyclopedia
		└ Theories		
	[Other]:
		└ [Schedule]:
			└ Browser notification, optional with sound
			└ Remain timer
			└ Chart update timer
			└ Display KST time
		└ [Discord Bot on the website]: 
			└ Login system / Account panel
			└ Settings specific for the user/admin and server
			└ Dashboard
			└ Invite link
		└ Fansites
		└ Game
		└ YT stats
		└ MV stats
		└ SNS stats
		└ Spotify stats
		└ Discord widget
		└ Reddit r/aespa posts 
		└ Instagram embed
		└ twitter embed
		└ instagram embed

# --- Extra ---	
	[Discord Bot]:
		└ MV views
		└ [Fancam]:
			└ Views member
			└ Views total
			└ Next million
			└ List of the most millions by member
			└ Viewst and most millions by era
		└ instiz iChart 
		└ [Sales stats]:
			└ KTown4U
			└ Circle
			└ Hanteo
		└ Encyclopedia
		└ Game

-----

# Pages
	Fancams
	Fansites
	Achievements
	Content Timeline

-----

# Event Schedule ToDos
	[ ] ~user action:
		[x] toggle alarm
	(	[ ] toggle reminder )
		[ ] view change
		[ ] toggle specific events/categories
	[ ] ~admin actions: 
		[ ] add event
		[ ] edit event
		[ ] delete event
	[x] alarm sound
( [ ] reminder sound )
	[ ] auto-remove the 6th commenced event
	[ ] past events table
( [ ] tile view )
	[ ] responsive
( [ ] image ) 
	[x] status
	[x] confirmed
	[x] insert link sources
  [x] month dividier
( [ ] framer motions )
	[x] next event auto update
	[ ] ~automatic continual events:
		[ ] auto-add daily
		[ ] auto-add weekly
	[x] adding birthdays
	
# Bugs / Chatched Up ToDos
	[ ] fix fa-symbols
	[ ] fix initial countdown/remaining values
	[x] fix EventTimer display

-----

# Memory Game ToDos
(	[ ] different Decks )
	[ ] ~leaderboard:
		[ ] database setup
		[ ] data display: name, date, playtime
		[ ] ~user action:
			[ ] enter name when score in top10
	(	[ ] "New Record" message )
( [ ] ~sounds: )
	(	[ ] flip )
	(	[ ] matching cards )
	(	[ ] unmatching cards )
	(	[ ] game completed )
	[ ] ~user action:
		[x] start game
		[x] restart button
	(	[ ] screenshot score )

# Birthday/Anniversary
	01/01 Winter
	04/11 Karina
	23/10 NingNing
	30/10 Giselle
	17/11 aespa
	--/-- SM

-----

# Continual Events
	Sun, 	00:00		iChart weekly
				13:00		MelOn daily
				12:00		Genie daily
				07:00		VIBE chart daily
				12:00		Bugs daily
								YouTube daily
	Sun, 	07:00		YouTube Music weekly
								Apple Music daily
							( iTunes daily )
								billboard daily
								billboard weekly
							( Music shows weekly )
				04:00		Spotify monthly listeners update daily
				19:00		Spotify streams and chart update daily

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
-----

# Event Status
	0 RUMORED
	1 SCHEDULED
	2 PAST EVENT
	3 POSTPONED
	4 CANCELLED

-----

# Content Categories
	1 Release
	2 Interview
	3 Fansign
	4 Radio
	5 Variety
	6 Reality
	7 BTS
	8 Vlog
	9 Live
	10 VOD
	11 Performance
	12 Reaction
	(13 Fancams)
	14 Other

-----

# Event Categories
	Festival/Performance
	Concert/Tour
	Variety
	Chart Update
	Fansign
	Reality
	Interview/Radio
	Comeback Teaser
	Release
	Birthday/Anniversary
	Other (YouTube, Charity, Solo, Cameo, OST, Collabs, etc)