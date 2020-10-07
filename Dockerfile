FROM node:12.18-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run db-seed

EXPOSE 3005

CMD [ "npm", "start" ]