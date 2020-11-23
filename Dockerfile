FROM node:14

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

ARG release

RUN if [ -z "$release" ] ; then \
    echo -n $(node -e "console.log(Math.floor(Math.random()*10000))") > public/VERSION; \
  else \
    echo -n $release > public/VERSION; \
  fi

CMD ["node", "dist/index.js"]
