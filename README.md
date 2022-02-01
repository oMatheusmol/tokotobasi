# tokotobasi

A CLI to create a API project in typescript using clean architecture and factory pattern.

Install

npm install tokotobasi

Usage

tkt create [project-name]

API

To initialize the api for the first time use the commands. 
npm run database:up - to create a container in docker
npm run migrate - to create the tables in the database
npm install - to install dependencies
npm run dev

The initial project contains 2 routes, one for authentication and the other for the user. The swagger documentation is in localhost/docs.

To generate new modules use the command tkt module [module-name] 