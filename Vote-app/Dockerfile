FROM node:16.13.2

WORKDIR /app
COPY ./package.json ./
COPY . ./
RUN npm i
EXPOSE 5000
CMD [ "node","app.js" ]