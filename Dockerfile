# Stage 1: Install dependencies and build NestJS app
FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Stage 2: Run the app
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY package.json yarn.lock ./
RUN yarn --production=true

EXPOSE 3000

CMD ["npm", "start"]
