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

# Set up base of NodeCG
FROM node:18-alpine AS base
ARG LAYOUTS_NAME
RUN apk --no-cache add vim
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
COPY --from=nodecg_speedcontrol /app/nodecg-speedcontrol ./nodecg/bundles/nodecg-speedcontrol
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]

# Build bundle
FROM base AS bundle
WORKDIR /build
COPY . ./
RUN apk add --no-cache python3 alpine-sdk &&\
    npm install &&\
    npm run build &&\
    npm run build:extension
WORKDIR /app
RUN mkdir -p ./nodecg/bundles/${LAYOUTS_NAME}/ &&\
    mkdir -p ./nodecg/assets/${LAYOUTS_NAME}/materials/ &&\
    cp -rp /build/dist/* ./nodecg/bundles/${LAYOUTS_NAME}/ &&\
    cp -rp /build/public/* ./nodecg/assets/${LAYOUTS_NAME}/materials/ &&\
    cp -rp /build/package-nodecg.json ./nodecg/bundles/${LAYOUTS_NAME}/package.json
WORKDIR /app/nodecg
