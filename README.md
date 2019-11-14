[![Build Status](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs.svg?branch=master)](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs)
[![Coverage Status](https://coveralls.io/repos/github/digipolisantwerp/starter-kit_app_nodejs/badge.svg?branch=master)](https://coveralls.io/github/digipolisantwerp/starter-kit_app_nodejs?branch=master)
# Digipolis starter-kit Node.js

A boilerplate project for Digipolis, created to keep a consistent folder stucture and implements some much used modules like:

-  [`@digipolis/auth`](https://github.com/digipolisantwerp/auth_module_nodejs)
-  [`digipolis-response`](https://www.npmjs.com/package/digipolis-response)

## How to use

### Backend:

 **[Backend documentation](backend/README.md)**

### Run:
|                       | cmd                 |  description                     |
| --------------------- | ------------------- | -------------------------------- |
| **Run app in docker** | `docker-compose up` | Run app in dockerized environment |


### Testing:
|   |  cmd |  description |
| --------------------------- | ------------------------------------------- | ------------- |
| **Run all tests in docker** | `docker-compose -f docker-compose.ci.yml up`| Run all tests |
