FROM node:14-alpine

LABEL author="cafs.technology@gmail.com"

WORKDIR /home/node

ENV NODE_ENV prod
ENV PORT 3000
EXPOSE 3000

COPY package*.json ./
USER node
RUN npm ci
COPY --chown=node:node . ./
RUN npm run build
RUN npm prune --production

ENTRYPOINT [ "npm", "start" ]
