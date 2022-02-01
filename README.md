# tokotobasi

A CLI to create a API project in typescript using clean architecture and factory pattern.

Install
 
```sh
npm install tokotobasi -g
```
 
Usage

```sh
tkt create [project-name]
```

API

To initialize the api for the first time use the commands.

To create a container in docker
```sh
npm run database:up
```
To create the tables in the database
```sh
npm run migrate
```
To install dependencies
```sh
npm install
```
To start api
```sh
npm run dev
```

The initial project contains 2 routes, one for authentication and the other for the user. The swagger documentation is in localhost/docs.

To generate new modules use the command 
```sh
tkt module [module-name] 
```
