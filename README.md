# angularJS-www-Implants24Pl

SPA website w angularjs;
* preloading all images (promise.all)
* dynamic breadcrumb nav
* image component - dynamic hint/large img loading
* responsive design
* angular material design components
* devOps gulp pipes



-------------------------------------

read www/info.nfo

`cd www` 

`code .`
  
1) node_modules init
npm install

2) bower_components init:
bower install


3) code `index.html`:


dev:
`<base href="/src/#" />`


prod: 
`<base href="/" />`

-------------------------------------

`config.routes.js`:

dev:
`// $locationProvider.html5Mode(true);`

prod: 
`$locationProvider.html5Mode(true);`
