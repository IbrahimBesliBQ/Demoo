# Ubuntu tabanlı Docker görüntüsü
FROM ubuntu
FROM node:20-alpine3.17
# Çalışma dizinini /app olarak ayarlayın
WORKDIR /demoo
ADD . /demoo
COPY package*.json .
RUN npm install

CMD npx wdio