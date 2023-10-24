# Install NodeCG
FROM node:lts-alpine AS nodecg
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/nodecg/nodecg.git &&\
    cd nodecg &&\
    npm install &&\
    npm run build

# Install nodecg-speedcontrol
FROM node:lts-alpine AS nodecg_speedcontrol
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone https://github.com/speedcontrol/nodecg-speedcontrol &&\
    cd nodecg-speedcontrol &&\
    npm install &&\
    npm run build

# Build apps
FROM node:lts-alpine AS build
WORKDIR /build
COPY . ./
RUN apk add --no-cache python3 alpine-sdk &&\
    npm install &&\
    npm run build &&\
    npm run build:extension

# Set up 
FROM node:lts-alpine
ARG LAYOUTS_NAME
RUN apk --no-cache add vim
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
COPY --from=nodecg_speedcontrol /app/nodecg-speedcontrol ./nodecg/bundles/nodecg-speedcontrol
COPY --from=build /build/dist ./nodecg/bundles/${LAYOUTS_NAME}/
COPY --from=build /build/public ./nodecg/assets/${LAYOUTS_NAME}/materials/
COPY package-nodecg.json ./nodecg/bundles/${LAYOUTS_NAME}/package.json
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]
