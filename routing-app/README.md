# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Master & Details page:

Here's what we achieved in this page:

* The Tour of Heroes app displays a list of selectable heroes.
* You added the ability to select a hero and show the hero's details.
* You learned how to use the built-in directives ngIf and ngFor in a component's template.

## Multiple Components

What changed?

* As before, whenever a user clicks on a hero name, 
the hero detail appears below the hero list. 
But now the HeroDetailView is presenting those details.

* You created a reusable component.
* You learned how to make a component accept input.
* You learned to declare the required application directives in an NgModule. You listed the directives in the @NgModule decorator's declarations array.
* You learned to bind a parent component to a child component.

## Services

* You created a service class that can be shared by many components.
* You used the ngOnInit lifecycle hook to get the hero data when the AppComponent activates.
* You defined the HeroService as a provider for the AppComponent.
* You created mock hero data and imported them into the service.
* You designed the service to return a Promise and the component to get the data from the Promise

# Routing

* This is second app to demonstrate routing
