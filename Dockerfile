# base node image
FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install -g sass

# Copy local nuxt code to the container
COPY . .

RUN sass --watch assets/SCSS/main.scss assets/CSS/main.css
# Build production app
RUN npm run build

# Start the service
CMD npm start
