### Setup the fake backend service
It provides data, which will be served by cassandra in production mode.
1. `cd fake-backend`
2. `npm run start`
3. Open [http://localhost:3333/reactive/all](http://localhost:3333/reactive/all) view it in the browser.

### Setup react app
0. `cd ..`
1. `npm run start:local`

Runs the app in the local-development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If you didn't see images - you must setup the fake-backend service first (see first section).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Progress
### Day first
1. ![first day](./screenshots/21-05-2020-1.png "First day")
2. ![first day](./screenshots/21-05-2020-2.png "First day")
3. ![first day](./screenshots/21-05-2020-3.png "First day")
### Updates
- added display of ads and images
- created json fake database for easy development
- added stage flags (local, dev, prod)
- first design and concept

### Day second
1. ![Second day](./screenshots/23-05-2020-1.png "Second day")
2. ![Second day](./screenshots/23-05-2020-2.png "Second day")
#### Updates
- added react router and basic routing
- updated schema of json fake database
- library uikit-react was removed and replaced with clean uikit
- the project structure was rebuilt and divided into simpler components
- added preview of user's classifieds (classifieds management panel)


### Day third
1. ![Third day](./screenshots/24-05-2020-1.png "Third day")
#### Updates
- moved routing config to separated file
- classified site and slider
- repair inconsistent database

### Day fourth & fifth
1. ![Day fourth & fifth](./screenshots/29-05-2020-1.png "Day fourth & fifth")
2. ![Day fourth & fifth](./screenshots/29-05-2020-2.png "Day fourth & fifth")
3. ![Day fourth & fifth](./screenshots/29-05-2020-3.png "Day fourth & fifth")
4. ![Day fourth & fifth](./screenshots/29-05-2020-4.png "Day fourth & fifth")
5. ![Day fourth & fifth](./screenshots/29-05-2020-5.png "Day fourth & fifth")
#### Updates
- updated searchbox
- created autocompletion
- lightbox added &amp; gallery page
- refactoring of domain components (better naming and grouping in directories)
- some updates in management page
- nav & footer moved outside router 
- new records in db