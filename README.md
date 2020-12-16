[![Build Status](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs.svg?branch=master)](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs)
[![Coverage Status](https://coveralls.io/repos/github/digipolisantwerp/starter-kit_app_nodejs/badge.svg?branch=master)](https://coveralls.io/github/digipolisantwerp/starter-kit_app_nodejs?branch=master)
# Digipolis starter-kit Node.js

A boilerplate project for Digipolis, created to keep a consistent folder stucture and implements some much used modules like:

-  [`@digipolis/auth`](https://www.npmjs.com/package/@digipolis/auth)
-  [`@digipolis/response`](https://www.npmjs.com/package/@digipolis/response)

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

## Contributing

Pull requests are always welcome, however keep the following things in mind:

- New features (both breaking and non-breaking) should always be discussed with the [repo's owner](#support). If possible, please open an issue first to discuss what you would like to change.
- Fork this repo and issue your fix or new feature via a pull request.
- Please make sure to update tests as appropriate. Also check possible linting errors and update the CHANGELOG if applicable.

## Support

Peter Brion (<peter.brion@digipolis.be>)
