FROM node:12-alpine
COPY . /var/www/emotional_analysis
WORKDIR /var/www/emotional_analysis
RUN npm install && npm install -g serve
ENTRYPOINT npm -s build -l 3000
EXPOSE 3000
