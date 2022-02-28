# base node image
FROM node:10
RUN apt-get install -y build-essential python3.6 python3-pip python3.6-venv

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install

# Copy local nuxt code to the container
COPY . .

# Build production app
RUN npm run build

# Start the service
CMD npm start
