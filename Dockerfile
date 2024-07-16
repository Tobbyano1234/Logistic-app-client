FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY package*.json ./
COPY tsconfig.json ./
COPY . .
# RUN npm install --production --silent && mv node_modules ../
RUN npm i -g typescript
RUN npm i
RUN npm i typescript@4.9.5 --save-dev
RUN npm run build
RUN npm i -g http-server
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["http-server", "dist", "-p", "5000", "-c-1"]
