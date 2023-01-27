FROM node:14-alpine as ts_build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

RUN yarn build

COPY . .

FROM node:14-alpine as js_build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=ts_build /usr/src/app/dist ./dist

EXPOSE 5000

CMD ["yarn" , "start"]
