FROM node:14

RUN echo '{ "allow_root": true }' > /root/.bowerrc

###############################################################################
### install dependencies
###############################################################################

# COPY ./frontend/package*.json /code/frontend/
# WORKDIR /code/frontend
# RUN npm ci

COPY ./backend/package*.json /code/backend/
WORKDIR /code/backend
RUN npm ci


###############################################################################
###	Frontend
###############################################################################
COPY ./frontend /code/frontend
WORKDIR /code/frontend

# Run your build commands for front end frameworks here.
# Example for a possible Angular or React setup:
# RUN npm run build:prod

###############################################################################
###	Backend (BFF)
###############################################################################


COPY ./backend /code/backend
WORKDIR /code/backend

RUN npm run build

RUN mkdir -p public && \
    echo -n $(node -e "console.log(Math.floor(Math.random()*10000))") > public/VERSION \
        cat public/VERSION

CMD ["node", "dist/index.js"]
