FROM node:16-alpine

WORKDIR /usr/app/src

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]