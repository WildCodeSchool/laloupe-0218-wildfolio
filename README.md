# Angular Full Stack  

[![Maintainability](https://api.codeclimate.com/v1/badges/c11813043e4ad0f0e1e7/maintainability)](https://codeclimate.com/github/riderx/Angular-Full-Stack/maintainability)
[![dependencies Status](https://david-dm.org/riderx/Angular-Full-Stack/status.svg)](https://david-dm.org/riderx/Angular-Full-Stack)
[![devDependencies Status](https://david-dm.org/riderx/Angular-Full-Stack/dev-status.svg)](https://david-dm.org/riderx/Angular-Full-Stack?type=dev)

[![Greenkeeper badge](https://badges.greenkeeper.io/riderx/Angular-Full-Stack.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/riderx/Angular-Full-Stack.svg?branch=master)](https://travis-ci.org/riderx/Angular-Full-Stack)
[![Build Status](https://travis-ci.org/WildCodeSchool/laloupe-0218-wildfolio.svg?branch=master)](https://travis-ci.org/WildCodeSchool/laloupe-0218-wildfolio)
[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)
<!-- 
The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli). The backend is made from scratch. Whole stack in [TypeScript](https://www.typescriptlang.org). -->
## Le Wildfolio sert à rechercher les wilders et de présenter leurs projets
![Image](https://github.com/WildCodeSchool/laloupe-0218-wildfolio/blob/test/client/assets/ChangeFront.png)
<br />
###  Sur la page principale du Wildfolio, trois projets choisis aléatoirement sont présentés pour montrer attirer l'oeil et voir les compétences que les wilders ont acquis lors de la formation !
![Image of Yaktocat](https://github.com/WildCodeSchool/laloupe-0218-wildfolio/blob/test/client/assets/Projetschange.png)
<br />
### Sur la page principale du Wildfolio, trois wilders choisis aléatoirement sont présentés pour susciter l'envie de découvrir les profils qui développeront les applis et site web de demain !
![Image of Yaktocat](https://github.com/WildCodeSchool/laloupe-0218-wildfolio/blob/test/client/assets/Devschange.png)
<br />
### Sur la page principale du Wildfolio, la dernière section est alimentée par les recruteurs qui désirent laisser un avis sur le site et donc en informer tous les éventuels recruteurs
![Image of Yaktocat](https://github.com/WildCodeSchool/laloupe-0218-wildfolio/blob/test/client/assets/oeil.png)
<!-- 
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
* [htmllint](https://github.com/htmllint/htmllint): html linter -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->

### Author
| [<img src="https://avatars3.githubusercontent.com/u/36339268?v=4" width="100px;"/><br /><sub><b>Antoine</b></sub>](https://github.com/AntoinePoree)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation")  [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars0.githubusercontent.com/u/35773862?s=400&v=4" width="100px;"/><br /><sub><b>Alexandre Teyssier</b></sub>](https://github.com/Alex-Teyss)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars2.githubusercontent.com/u/36480928?s=400&v=4" width="100px;"/><br /><sub><b>Bastien Champion</b></sub>](https://github.com/BastienChampion)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation")  [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars0.githubusercontent.com/u/4113162?s=400&v=4" width="100px;"/><br /><sub><b>Victor Leduc</b></sub>](https://github.com/VictorLeduc)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") [🔧](#tool-jfmengels "Tools")  | [<img src="https://avatars1.githubusercontent.com/u/4084527?s=400&v=4" width="100px;"/><br /><sub><b>Martin Donadieu</b></sub>](https://github.com/riderx)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") [🔧](#tool-jfmengels "Tools") | 
| :---: | :---: | :---: | :---: | :---: |

<br /><br /><br /><br />
<!-- ALL-CONTRIBUTORS-LIST:END -->
## Prerequisites if want want to install
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i` or `yarn`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

###  Or

`yarn run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

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
* Write tests
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
