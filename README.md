# Aff

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Install the followings components:
npm install --save jquery popper.js bootstrap

and do the following:

You have now successfully installed Bootstrap and its dependencies. However, you’ll also need to include these libraries inside your application. Your weather-app does not yet know that it’ll need these libraries, therefore you need to add the paths to jquery, popper.js, bootstrap.js, and bootstrap.css into your angular.json file.

For popper.js, the file you’ll need to include is node_modules/popper.js/dist/umd/popper.js. jQuery requires the node_modules/jquery/dist/jquery.slim.js file. Finally, for Bootstrap you’ll need two files (both the JavaScript file and the CSS file). These are node_modules/bootstrap/dist/js/bootstrap.js and node_modules/bootstrap/dist/css/bootstrap.css respectively.

angular.json should look like this:
	    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/popper.js/dist/umd/popper.js",
              "node_modules/jquery/dist/jquery.slim.js",
              "node_modules/bootstrap/dist/js/bootstrap.js"
            ],


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# aff Auditflow front end
