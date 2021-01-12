# angularJS-www-Implants24Pl
read www/info.nfo

SPA website w angularjs;
* preloading all images (promiseAll)
* dynamic breadcrumb nav
* image component - dynamic hint/large img laod
* responsive design
* angular material design components
* dev gulp pipes





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
