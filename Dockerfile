FROM mhart/alpine-node:10

EXPOSE 80 

RUN mkdir /project
WORKDIR /project

COPY . /project
COPY ./package.json /package.json

RUN npm install --silent
RUN npm run build-app
RUN npm run apidoc

CMD npm run build-server