# Shandy Club

## Scope

- **PUBS** - database of pubs, searchable by ALL data
- **TOURS** - curated and custom tours with cool maps
- **ACCOUNTS** - social logins, pub-log of visits/tours, geofencing/GPS for automation, newsletter/notifications
- **MONETISE** - promoted pubs/breweries in search/homepage, merch, lead tours, [patreon](https://www.patreon.com/)/[kickstarter](https://www.kickstarter.com/learn), [ads](https://adverti.io/)

## Stack

### Frontend (Phase 1)
- [Webpack2](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.80i6oyrxh) + Babel6 + [BrowserSync server](https://github.com/Browsersync/recipes/tree/master/recipes/webpack.react-transform-hmr) + [npm scripts](http://substack.net/task_automation_with_npm_run)
- ES6/React/Redux | Universal app
- [redial](https://github.com/markdalgleish/redial) + sagas
- PostCSS + CSS Modules
- [Offline First](https://logbook.hanno.co/offline-first-matters-developers-know/) ([Service Workers](https://github.com/slightlyoff/ServiceWorker) | [and here](https://serviceworke.rs/)) + [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB) + [webpack loader](https://github.com/NekR/offline-plugin) - [w/redux+pouch](http://blog.yld.io/2015/11/30/building-realtime-collaborative-offline-first-apps-with-react-redux-pouchdb-and-web-sockets/)
- Code Quality - [jscs](http://jscs.info/) and [ESlint](http://eslint.org/)
- [tape](http://redux.js.org/docs/recipes/WritingTests.html)
- CI - Travis or other?
- Commenting - [muut](https://muut.com/) or [disqus](https://publishers.disqus.com/engage)
- Analytics - [heap](https://heapanalytics.com/) + [redux-analytics](https://github.com/markdalgleish/redux-analytics)
- Hosting - [surge](http://surge.sh/)

### Backend (Phase 2)
- NodeJS: [Diet.js](https://github.com/adamhalasz/diet/issues/9) - [good habits](http://blog.heroku.com/archives/2015/11/10/node-habits-2016) + [best practices](https://blog.risingstack.com/how-to-become-a-better-node-js-developer-in-2016/)
- DB: MongoDB w/Mongoose or [PouchDB](http://pouchdb.com/) for offline sync - [see](http://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html)
- Search API: area, feature, occasion, geolocation -> [Apiary](https://apiary.io/)
- Accounts - [passwordless](https://passwordless.net/) or [pouchdb auth](https://github.com/nolanlawson/pouchdb-authentication) or [JWT](https://auth0.com/blog/2016/01/04/secure-your-react-and-redux-app-with-jwt-authentication/) + [Argon2](https://stormpath.com/blog/secure-password-hashing-in-node-with-argon2/)
- [Docker](https://www.docker.com/) - [workflow](https://medium.com/@tribou/react-and-flux-a-docker-development-workflow-469957f3bbf0#.fztwpwfed)
- [supertest](https://github.com/visionmedia/supertest)

### Maps

- [Geolib](https://github.com/manuelbieh/Geolib)
- Photos from [panoramio](http://www.panoramio.com/api/data/api.html) [api](http://www.automatingosint.com/blog/2015/05/osint-updating-panoramio/)
- [opening_hours](https://developers.google.com/maps/documentation/javascript/places)

### Testing/Performance
> choose tools

- TDD
- [RAIL](http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/)
- [Perception of time](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/)
- [BigRig](https://aerotwist.com/blog/bigrig/)
- [OpBeat](https://opbeat.com/)
- [REPL](https://tonicdev.com/)
- [Critical Render Path](http://patrickhamann.com/workshops/performance/tasks/start.html)
- [Responsive images](https://www.smashingmagazine.com/2016/01/leaner-responsive-images-client-hints/)

## Design

###Reading

- [UX Tactics To Make Slow Things Seem Faster](http://blog.placeit.net/ux-tactics-make-slow-things-seem-faster/)
- [Reactive Design](http://gabinaureche.com/reactivedesign/)
- [Design School for Devs](http://webdesign.tutsplus.com/series/design-school-for-developers--webdesign-13793)
- [Visual hierarchy](http://www.awwwards.com/understanding-web-ui-visual-hierarchy.html)
- [beautiful interactions](http://www.awwwards.com/lost-in-transition-understanding-some-basic-concepts-of-animation.html)
- [animating your brand](https://24ways.org/2015/animating-your-brand/)
- [user behaviour](https://www.smashingmagazine.com/2016/01/combining-ux-design-and-psychology-to-change-user-behavior/)

###Layout
- https://dribbble.com/shots/1802075-iPad-Location-Detail-Article/attachments/297281
- https://dribbble.com/shots/2023376-Server-Dashboard/attachments/358617
- https://dribbble.com/shots/1856184-Handy-Supply-Co-Tags
- https://dribbble.com/shots/1889417-Evrgreen-Co-Tag-System

###Interactions
- [UI movement](http://uimovement.com/)
- http://uimovement.com/ui/1049/header-navigation/
- http://uimovement.com/ui/1050/fooddrink-menu/
- [Founders](http://foundersbrewery.co.nz/brewery/range.html)
- https://dribbble.com/shots/1977075-New-app-Menu-Interaction
- [click effects](http://tympanus.net/Development/ClickEffects/)
- [view transitions](https://developers.google.com/web/fundamentals/look-and-feel/animations/animating-between-views?hl=en)
- [interface animation](https://medium.com/@tubikstudio/interface-animation-the-force-of-motion-598b84734e69#.c5dezjb42)

###Inspiration

- [good beer hunting](http://goodbeerhunting.com/)
- [Greetings from CA](http://www.greetingsfrom.ca/)
- [Grain & Mortar](http://grainandmortar.com/)
- [Howard Town](http://www.howardtownbrewery.co.uk/)
- [Hop on](http://hoponthebike.co.uk/)
- [DeskBeers](https://www.deskbeers.com/)
- [BrewBot](http://www.brewbot.io/)
- [Hop Review](http://thehopreview.com/)
- [Supply](http://thesupply.com/)
- [Beer](https://dribbble.com/shots/1940671-Beer-cellar) [Cellar](https://dribbble.com/shots/1942526-Beer-Cellar)
- [Eginstill](http://www.eginstill.com/)
- [Ferment](http://www.fermentmagazine.com/)
- [Mondo](http://www.mondobrewingcompany.com/)
- [Record Cafe](http://therecordcafe.co.uk/)

###Vibe
- https://dribbble.com/shots/1895307-Chicago-Brewery-List
- https://dribbble.com/shots/1895715-Winding-Wheel-Supply-Co-Branding
- https://dribbble.com/shots/1895770-Dinner-Merchants
- https://dribbble.com/shots/1896179-Yonder-Hand-Drawn-Font
- https://dribbble.com/shots/1896153-Twitter-cover-image
- https://dribbble.com/shots/1902503-Hops + https://dribbble.com/danielpatrick
- https://dribbble.com/shots/1924530-Pixels-Pitchers
- https://dribbble.com/shots/1941943-Workplace-for-iOS
- https://dribbble.com/shots/1942416-Beer-Label-System
- https://d13yacurqjgara.cloudfront.net/users/218750/screenshots/1334223/ol.gif

###Ideas
- [icons/illustrations](https://creativemarket.com/Side-Project/246728-Beers-glasses-and-logos-vol.2)
- [more icons](http://www.freepik.com/free-photos-vectors/bar)
- [ads](https://creativemarket.com/kennycoil/62805-Liter-Beer-Mock-Up)
- [logo](https://creativemarket.com/josuf/345985-Beer-Fest-Logo)
- [theming](https://developers.google.com/web/fundamentals/design-and-ui/browser-customization/theme-color)

----------

##Notes
Helvetica / Lovelo / [futura-pt](http://www.vigil-app.com/)
3:4 Typographic Scale [see here](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm)
eg. small 12px, body 16px, h4 21px, h3 28px, h2 37px, h1 50px
1 dominant colour, with 1/2 shades of grey
Prime function: pub search (like [airbnb](https://www.airbnb.co.uk/))
One purpose per page (chunking)
eg. Search, Pub, Tour

----------


##Special

- Curated tour maps (tours will also be held in the DB/API as an ordered array of pubs) - see [urban walks](http://urban-walks.com/)
- [Konami code and keyboard shortcuts](https://github.com/yields/k)
- AI Conversation UI - including occasion-based search [SMS-based system](http://whoo.ps/2015/02/23/futures-of-text) - like [Luka](https://luka.ai/) for pubs
- NewPubNight -> triangulate nearest pub based on everyone's location, plus email recommendations based on prefs (like Honest Brew)
- Custom tour builder
- Journal - http://en.travelepisodes.com/ (+ other cities)
- Accounts - [Hull](http://www.hull.io/) | [OAuth.io](https://oauth.io/) | [hellojs](http://adodson.com/hello.js/)
- Automatic pub-log with geofencing
- Submit pubs for review/inclusion (eg. if a pub name search doesn't return a result suggest submission)
- Pubs list beers on, a la http://www.taplister.com/
- PubBot a la https://citymapper.com/gobot
- Stickers https://www.stickermule.com/
