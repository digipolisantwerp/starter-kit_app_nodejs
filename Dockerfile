FROM node:12

RUN echo '{ "allow_root": true }' > /root/.bowerrc

###############################################################################
###	Frontend
###############################################################################
COPY ./frontend /code/frontend
WORKDIR /code/frontend

RUN npm i
RUN npm run build:prod

###############################################################################
###	Backend (BFF)
###############################################################################

RUN mkdir -p /code/backend
WORKDIR /code/backend

COPY ./backend /code/backend
RUN npm i
RUN npm run build

ARG release
RUN mkdir -p public && \
    echo -n $release > public/VERSION

CMD ["node", "dist/index.js"]
