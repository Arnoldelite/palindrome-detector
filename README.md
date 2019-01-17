Qlik palindrome-detector
=====================

## Dev-Setup
## Commands
  `confirm` docker installed locally and running

  `npm install` install application dependencies


  `npm start` Start application in browser,  start server, connects to MongoDB database.


  `npm run test-watch` run server integration tests PS, must not have any other instance of application running.


## Deploy
  `npm run docker_build` builds application for deploy to docker repo, tags on docker repo with "latest" and push to dockerhub   Connects to MongoDB database.


  `npm run build-web` Build app for browser

## About

This project takes an approach that uses react for client side rendering, with mobx for state management and  node for server implementation and docker for building and deploying to Heroku.

The goal with the project is to design an application that detects palindromes according to specifications received prior to due date in separate email.

This is possible thanks to


[Docker](https://docs.docker.com/docker-for-mac/install/),

[Deployed Application](Sample-env.nc3kdmcppu.us-west-2.elasticbeanstalk.com),
