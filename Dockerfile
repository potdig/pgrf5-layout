# Install NodeCG
FROM node:18-alpine AS nodecg
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/nodecg/nodecg.git &&\
    cd nodecg &&\
    npm install &&\
    npm run build

# Install nodecg-speedcontrol
FROM node:18-alpine AS nodecg_speedcontrol
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/speedcontrol/nodecg-speedcontrol &&\
    cd nodecg-speedcontrol &&\
    npm install &&\
    npm run build

# Install speedcontrol-additions
FROM node:18-alpine AS speedcontrol_additions
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/potdig/speedcontrol-additions &&\
    cd speedcontrol-additions &&\
    npm install --production

# Set up base of NodeCG
FROM node:18-alpine AS base
ARG LAYOUTS_NAME
RUN apk --no-cache add vim
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
COPY --from=nodecg_speedcontrol /app/nodecg-speedcontrol ./nodecg/bundles/nodecg-speedcontrol
COPY --from=speedcontrol_additions /app/speedcontrol-additions ./nodecg/bundles/speedcontrol-additions
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]

# Build bundle
FROM base AS bundle
RUN apk --no-cache add git &&\
    npm install -g nodecg-cli &&\
    nodecg install potdig/pgrf5-layout
