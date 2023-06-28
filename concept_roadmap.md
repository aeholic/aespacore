
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
		[ ] toggle reminder
		[ ] view change
		[ ] toggle specific events/categories
	[x] alarm sound
	[ ] reminder sound
	[ ] auto-remove the 6th commenced event
	[ ] past events table
	[ ] tile view
	[ ] responsive
( [ ] image ) 
	[x] status
	[x] confirmed
	[x] insert link sources
	[ ] ~admin actions: 
		[ ] add event
		[ ] edit event
		[ ] delete event
( [ ] month dividier )
( [ ] framer motions )
	[x] next event auto update
	[ ] ~automatic continual events:
		[ ] auto-add daily
		[ ] auto-add weekly
	
-----

# Bugs / Chatched Up ToDos
	[ ] fix fa-symbols
	[ ] fix initial countdown/remaining values
	[x] fix EventTimer display

-----

# Birthday/Anniversary
	01/01 Winter
	04/11 Karina
	23/10 NingNing
	30/10 Giselle
	17/11 aespa
	--/-- SM

-----

# Continual Events
	MelOn daily
	Bugs daily
	FLO daily
	iChart weekly
	Genie daily
	YouTube daily
	Apple Music daily
	iTunes daily
	billboard daily
	billboard weekly
	Music shows weekly

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