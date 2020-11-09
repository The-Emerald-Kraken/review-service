## Recreational Engineering Interface (REI ) Review Service [![The-Emerald-Kraken](https://circleci.com/gh/The-Emerald-Kraken/review-service.svg?style=shield)](https://circleci.com/gh/The-Emerald-Kraken/review-service)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Open sourced Ecommerce Review Service application. Demonstrates the functionality of a common review service for a web application. Optimized loading speeds to hold a score of 99 Performance rating according to Lighthouse  

![image][https://imgur.com/M4jc4pZ]
	
## Technologies
Project is created with:
* React/Hooks
* Node.js
* Express
* MongoDB/Mongoose
* Webpack
* Docker/DockerHub
	
## Setup

For local testing
#### Inital setup 
```
$ cd ../review-service
$ npm install
```
#### To seed Database
Ensure MongoDB is running
```
$ npm run db-seed.js
```
#### Start the Server
```
$ npm start
```
Default config is set to listen to localhost:3005

### IN PROGRESS
If using Docker image
```
start
```
