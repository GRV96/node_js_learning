FROM node:22.5

WORKDIR /app

COPY . /app

CMD ["npm", "start"]