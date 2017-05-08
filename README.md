# Welcome to Introduction to Angular

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday through Friday: 9am to 5:30pm (half days for each group)
- Morning Session: 9am to 1pm
- Lunch: 1pm to 1:30pm
- Afternoon Session: 1:30pm to 5:30pm

Breaks:

1 break, halfway through each session

## Course Outline

TypeScript & JavaScript topics will be included as needed into the Angular content

- Day 1 - Introduction to Components, Event Handling, Directives, Template Forms
- Day 2 - Modules, Pipes, Reactive Forms, Form Validation
- Day 3 - Composing Components
- Day 4 - Services, HTTP + REST Services
- Day 5 - jQuery, NgBootstrap, Unit Testing

## Links

### Instructor's Resources

- [Accelebrate, Inc.](https://www.accelebrate.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts - Post 4 - React Unit Tests](https://github.com/training4developers/react-flux-blog)
- [TopTal Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Overview

This is a simple CRUD (create, read, update & delete) starter project supporting the essentials of Angular including HTTP services, routing, forms, composing components and unit testing. The base project configuration was originally adapted from the [Angular Webpack Starter project](https://angular.io/docs/ts/latest/guide/webpack.html), and has been updated to Webpack 2 with help from this project [Angular Class - Angular 2 Webpack Stater](https://github.com/AngularClass/angular2-webpack-starter).

## Application Setup

Step 1. Install Node.js version 6 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository from [here](https://github.com/training4developers/ng2-widgets-app/archive/master.zip). Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
$ npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in those files. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
[0] Child html-webpack-plugin for "index.html":
[0]     chunk    {0} index.html 541 kB [entry] [rendered]
[0]         [0] ./~/lodash/lodash.js 540 kB {0} [built]
[0]         [1] (webpack)/buildin/global.js 509 bytes {0} [built]
[0]         [2] (webpack)/buildin/module.js 517 bytes {0} [built]
[0]         [3] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 644 bytes {0} [built]
[0] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The Angular 2 web application should load and be usable.

**To Modify the Web Application**

Step 6. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

The solution is preconfigured for IntelliJ IDEA and Webstorm for ESLint and TSLint. Also, automatic transpilation for TypeScript and SASS has been disabled. All transpilation should be performed via Webpack from the command line.

Visual Studio Code supports TypeScript out of the box, but several additional extensions will greatly enhance the development experience. Install the following extensions:

- ESLint: dbaeumer.vscode-eslint
- HTMLHint: mkaufman.HTMLHint
- MarkDown Lint: DavidAnson.vscode-markdownlint
- Sass Lint: glen-84.sass-lint
- TSLint: eg2.tslint

Atom does not support TypeScript out of the box. Please install the following packages to enhance the development experience. To install an extension from the menu bar, go to Packages -> Settings View -> Install Packages/Themes. Search for the following packages individually, and install them.

- atom-typescript
- linter
- linter-eslint
- linter-htmlhint
- linter-sass-lint
- linter-tslint
- platformio-ide-terminal

```bash
apm config set proxy "http://localhost:8080"

apm config set https_proxy "http://localhost:8080"

apm config set strict-ssl false
```

Restart Atom, then re-attempt to install the **atom-typescript** package again.

## Running Unit Tests

From a terminal run the following command:

```bash
npm test
```

The results of the unit tests and code coverage report will be displayed in the terminal window.

To view the HTML version of the code coverage report, open the **index.html** in the **reports/coverage/browser-name** folder with a web browser.

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - removes the dist folder, builds and deploys the web app, and starts the web app and the rest app in production mode
- **npm test** - starts karma to run the unit tests once
- **npm run clean** - removes the **dist** folder
- **npm run dev** - starts the web app in development mode
- **npm run prod** - starts the web app in production mode
- **npm run web-dev** - starts the webpack dev server in development mode (JSON server is not started)
- **npm run web-prod** - starts the webpack dev server in production mode (JSON server is not started)
- **npm run rest** - starts the rest server
- **npm run webpack-dev:w** - runs webpack in development mode under watch mode so web app file changes are automatically processed, and deployed to the **dist** folder
- **npm run webpack-dev** - runs webpack in development mode so web app file changes are processed once, and deployed to the **dist** folder
- **npm run webpack-prod** - runs webpack in production mode so web app file changes are processed once, and deployed to the **dist** folder
- **npm run webpack-test** - runs webpack in test mode so web app file changes are processed once, and deployed to the **dist** folder
- **npm run tdd** - run application in test driven development mode, karma will re-run tests on each file save

To learn more about the Angular/WebPack/TypeScript/Karma configuration, click [here](https://github.com/training4developers/ng2-widgets-app/tree/master/config).

## Useful Resources

- [TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Angular Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
- [Angular API](https://angular.io/docs/ts/latest/api/)
- [Angular Quick Start Project](https://angular.io/docs/ts/latest/quickstart.html)
- [Angular Webpack Project](https://angular.io/docs/ts/latest/guide/webpack.html)
- [Angular Class - Angular Webpack Project](https://github.com/AngularClass/angular2-webpack-starter)
