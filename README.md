# Palindrome Detector

- An application to store messages and detect palindromes.
- Access deployed app on (Live App)[http://35.183.127.191/]
- Access API Documentation app on (Api Documenation)[http://35.183.127.191/apidoc]

## Depenedencies

- Docker
- Node version >= 10

## Dev

- Install dependencies `npm install`
- Start app locally `npm start`
- App accessible on (Dev)[http://localhost:3000]

## Test

- Run test `npm run test`

## Tech Stack

- UI: React
- Server: Node.js Express.js
- Database: Mongodb
- Deploy: AWS

## Deployment

- Sign up for AWS and configure credentials [https://docs.docker.com/machine/examples/aws/]
- Create docker machine `docker-machine create --driver amazonec2 --amazonec2-open-port 80 --amazonec2-region ca-central-1 palindrome-detector`
- Deploy to AWS EC2 docker machine `npm run deploy`

## Architecture Overview
![Architecture Overview](https://github.com/Arnoldelite/palindrome-detector/blob/master/app/src/assets/palindrome%20proj%20architecture%20overview.png)
