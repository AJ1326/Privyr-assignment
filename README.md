# About this assignment

## Objective

To create a lead generation page where different agents can accept or reject the lead and can add new lead that will be reflected back in the lead list.

## Shell

Shells are mainly created in a project for different roles. Since this assignment is single role based it consists of only one shell that includes the header and sidenav component.
This shell inherits on other modules as router outlet and these modules render around it.

## Modules

It consists of 4 modules:
-Home module
-About module
-Documentation module
-Shared module

### Home module

It consists of 2 child components. These are added in the shared module so that they can be used anywhere in the project
For search of the leads by name
Showing details of the leads in the accordian format

### About module

It includes about the:
-Problem statement
-About me

### Document module

It includes documentation of the project.

### Shared module

It includes the components that can be used throughout the project.
-Search lead component by name
-Tabular representation of lead list
-Custom modal component (you can design custom modal)
    - Add new lead component
    - Success modal when new lead is generated.
-Spinner for showing http requests.
-Confirm dialog component that work as alert modal.

## Themes

I created a wrapper theme over ng-bootsrap and primeng. So that you can directly use the components as per the color of the project. It’s been added to give consistency throughout the project without wasting much time on CSS.
It consists of:
-Button
-Form
-General
-Topography
-Mobile

## Assets

It includes the image that are used in the project and sample lead list data.

## Error handling

I have created a wrapper over in the build validator class of reactive forms so that all the errors can be stored and used from one place.
Path:
app->modules->data-validator.ts

## Extra features

I have added some extra features:
-Searching
-Confirm modal for accept/reject
-In case of pending it will show the buttons
-Modular modal service
-Wrapper theme
-Data validator for error handling
-Documentation

# Used ngX Starter Kit

Generated using [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket).

# Getting started

1. Go to project folder and install dependencies:

```bash
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```

# Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (singleton services and single-use components)
|  |- @shared/               shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                         | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| npm start                     | Run development server on `http://localhost:4200/`                              |
| npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder                        |
| npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode        |
| npm run test:ci               | Lint code and run unit tests once for continuous integration                    |
| npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)                 |
| npm run lint                  | Lint code                                                                       |
| npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json` |
| npm run docs                  | Display project documentation                                                   |

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootstrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)
