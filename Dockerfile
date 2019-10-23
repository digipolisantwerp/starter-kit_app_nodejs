FROM node:12.13-buster

RUN echo '{ "allow_root": true }' > /root/.bowerrc

###############################################################################
###	Frontend
###############################################################################
RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY frontend ./
# RUN npm ci
# RUN npm run build

###############################################################################
###	Backend (BFF)
###############################################################################

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY backend/package.json backend/package-lock.json ./
RUN npm ci
COPY backend ./
RUN npm run build

ARG release
RUN mkdir -p public && \
    echo -n $release > public/VERSION

CMD ["node", "dist/index.js"]
