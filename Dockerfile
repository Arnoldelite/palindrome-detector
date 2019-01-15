FROM mhart/alpine-node:10

ENV PORT=80
ENV PROD=true

EXPOSE 80 

RUN mkdir /app
WORKDIR /app

COPY . /app
COPY ./package.json /package.json

RUN npm install --silent

RUN npm run build-app

CMD npm run build-server