# Angular Full Stack  

[![Maintainability](https://api.codeclimate.com/v1/badges/c11813043e4ad0f0e1e7/maintainability)](https://codeclimate.com/github/riderx/Angular-Full-Stack/maintainability)
[![dependencies Status](https://david-dm.org/riderx/Angular-Full-Stack/status.svg)](https://david-dm.org/riderx/Angular-Full-Stack)
[![devDependencies Status](https://david-dm.org/riderx/Angular-Full-Stack/dev-status.svg)](https://david-dm.org/riderx/Angular-Full-Stack?type=dev)

[![Greenkeeper badge](https://badges.greenkeeper.io/riderx/Angular-Full-Stack.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/riderx/Angular-Full-Stack.svg?branch=master)](https://travis-ci.org/riderx/Angular-Full-Stack)
[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli). The backend is made from scratch. Whole stack in [TypeScript](https://www.typescriptlang.org).

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

Other tools and technologies used:
* [Angular CLI](https://cli.angular.io): frontend scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons
* [JSON Web Token](https://jwt.io): user authentication
* [Angular 2 JWT](https://github.com/auth0/angular2-jwt/tree/v1.0): JWT helper for Angular
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): password encryption
* [stylelint](https://github.com/stylelint/stylelint): style linter
* [htmllint](https://github.com/htmllint/htmllint): html linter

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle and AOT compilation listening at [localhost:3000](http://localhost:3000) 

## Deploy (Heroku)
1. Go to Heroku and create a new app (eg: `your-app-name`)
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
3. `heroku login`
4. `mkdir your-app-name && cd your-app-name`
5. `git init`
6. `heroku git:remote -a your-app-name`
7. Download this repo and copy all files into `your-app-name` folder
8. `npm i`
9. Edit `package.json` as following:
   - add this line to scripts: `"postinstall": "tsc -p server && ng build -aot -prod"`
   - move the following packages from devDependencies to dependencies: `@angular/cli`, `@angular/compiler-cli`, `@types/jasmine`, `@types/node`, `chai`, `chai-http` and `typescript`.
10. Edit `.env` and replace the MongoDB URI with a real remote MongoDB server. You can create a MongoDB server with Heroku or mLab.
11. `git add .`
12. `git commit -m "Going to Heroku"`
13. `git push heroku master`
14. `heroku open` and a window will open with your app online

## Preview
![Preview](https://raw.githubusercontent.com/DavideViolante/Angular2-Full-Stack/master/demo.gif "Preview")

## Please open an issue if
* you have any suggestion to improve this project
* you noticed any problem or error

## To do
* More tests

## Running frontend unit tests
Run `npm run test:front` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running frontend end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `npm start`.

## Running backend tests
Run `mongod` to run an instance of MongoDB, then run `npm run test:back` to execute the backend tests via [Mocha](https://mochajs.org/).

## Running lint
Run `npm run lint:front` for frontend
Run `npm run lint:back` for backend
Run `npm run lint:style` for style
Run `npm run lint:html` for html
Or `npm run lint` for all kind of linter

## Wiki
To get more help about this project, [visit the official wiki](https://github.com/DavideViolante/Angular-Full-Stack/wiki).

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Author
* [Alexandre Teyssier](https://github.com/Alex-teyss)
* [Antoine Porée](https://github.com/AntoinePoree)
* [Bastien Champion](https://github.com/BastienChampion)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/36339268?v=4" width="100px;"/><br /><sub><b>Antoine</b></sub>](https://linkedin/antoine-porée.com)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars.githubusercontent.com/u/6177621?v=3" width="100px;"/><br /><sub><b>Divjot Singh</b></sub>](http://bogas04.github.io)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04 "Documentation") [👀](#review-bogas04 "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/1282980?v=3" width="100px;"/><br /><sub><b>Ben Briggs</b></sub>](http://beneb.info)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb "Documentation") [👀](#review-ben-eb "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/2037007?v=3" width="100px;"/><br /><sub><b>James Monger</b></sub>](https://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger "Documentation") | [<img src="https://avatars.githubusercontent.com/u/3869412?v=3" width="100px;"/><br /><sub><b>Jeroen Engels</b></sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels "Documentation") [👀](#review-jfmengels "Reviewed Pull Requests") [🔧](#tool-jfmengels "Tools") | [<img src="https://avatars.githubusercontent.com/u/4249591?v=3" width="100px;"/><br /><sub><b>Chris Simpkins</b></sub>](https://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins "Documentation") [👀](#review-chrissimpkins "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/153481?v=3" width="100px;"/><br /><sub><b>F. Hemberger</b></sub>](https://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/3982200?v=3" width="100px;"/><br /><sub><b>Daniel Kraft</b></sub>](https://github.com/frigginglorious)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=frigginglorious "Documentation") | [<img src="https://avatars.githubusercontent.com/u/8503331?v=3" width="100px;"/><br /><sub><b>Mayank Badola</b></sub>](https://github.com/mbad0la)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mbad0la "Documentation") [🔧](#tool-mbad0la "Tools") | [<img src="https://avatars.githubusercontent.com/u/5244986?v=3" width="100px;"/><br /><sub><b>Marco Biedermann</b></sub>](https://www.marcobiedermann.com)<br />[🎨](#design-marcobiedermann "Design") | [<img src="https://avatars.githubusercontent.com/u/22768990?v=3" width="100px;"/><br /><sub><b>Itai Steinherz</b></sub>](https://github.com/itaisteinherz)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=itaisteinherz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/305339?v=3" width="100px;"/><br /><sub><b>Patrick Connolly</b></sub>](http://nodescription.net)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=patcon "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3028124?v=4" width="100px;"/><br /><sub><b>Nikola Đuza</b></sub>](http://nikolalsvk.github.io/)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=nikolalsvk "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/5346497?v=4" width="100px;"/><br /><sub><b>Demian Dekoninck</b></sub>](https://dem.be)<br />[💻](https://github.com/kentcdodds/all-contributors/commits?author=DemianD "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/23029903?v=4" width="100px;"/><br /><sub><b>Michael Peyper</b></sub>](https://github.com/mpeyper)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mpeyper "Documentation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->
