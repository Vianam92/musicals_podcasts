# musicals_podcasts

This project was created with [React](https://create-react-app.dev/)

## Tools and Libs
- [React.ts](https://create-react-app.dev/)
- [jest](https://jestjs.io/) unit testing

## Getting Started
First clone this repository.

Install project dependencies
```shell
npm install
```
When installing dependencies was finished launch project with the following command
```shell
npm run start
```

## Project commands
Main commands served from `package.json`

- `npm run start` ->  Compiles and hot-reloads for development
- `npm run build` -> Compiles and minifies for production
- `npm run test` -> Run your tests

## Folder structure

  * [public](./public) (build public assets)
  * [src](./src) (main source folder)
    * [common](./src/common) (all components and functionalities that can be used in any part of the application)
    * [common-app](./src/common-app) (components and functionalities, not reusable in other applications)
    * [core](./src/core) (reusable - save informations)
    * [layout](./src/layout) (master pages)
    * [pods](./src/pods) (we encapsulate rich and independent functionality)
    * [views](./src/views) (Main Vue component Views/Pages related to router)
