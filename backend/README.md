[![Build Status](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs.svg?branch=master)](https://travis-ci.com/digipolisantwerp/starter-kit_app_nodejs)
[![Coverage Status](https://coveralls.io/repos/github/digipolisantwerp/starter-kit_app_nodejs/badge.svg?branch=master)](https://coveralls.io/github/digipolisantwerp/starter-kit_app_nodejs?branch=master)
# Starter kit Node.js


## Usage
### Todo:
- [ ] install dependencies with `npm install`.
- [ ] Set The sessionstore to use a database instead of in-memory: [Compatible Session Stores](https://github.com/expressjs/session#compatible-session-stores)
- [ ] Set the enviroment to use your credentials for auth


### Available commands:
| Name                            | Command                                      | Description                                                                                        |
| ---                             | ---                                          | ---                                                                                                |
| **Start app local**             | `npm start`                                  | Start app with local node                                                                          |
| **Start database**              | `docker-compose up mongo`                    | Start database for local run                                                                       |
| **Build**                       | `npm build`                                  | Compile the ES Modules Syntax to commonjs. <br/> ES Modules are still experimental in the node 12. |
| **Run build**                   | `npm run serve`                              | Run the compiled code                                                                              |
| **Run app in docker**           | `docker-compose up`                          | Run app in dockerized environment                                                                  |
| **Run all tests**               | `npm test`                                   | run the unit test locally.                                                                         |
| **Run all tests in docker**     | `docker-compose -f docker-compose.ci.yml up` | Run all tests in a dockerized environment                                                          |
| **Generate coverage**           | `npm run test:coverage`                      | Run all test & generate coverage                                                                   |
| **test-build (bamboo)**         | `npm run test-build`                         | test command for Bamboo                                                                            |

## Auth
Set configuration in .env (example in Configuration).
By default the login routes are mounted on `/auth`:

 - **Login mprofiel:**          `/auth/login/mprofiel`
 - **isloggedin mprofiel:**     `/auth/login/mprofiel`
 - **logout mprofiel:**         `/logout/callback/{service}`

## Configuration

### Enviroment files (only for local & test purposes)

The enviroment can be set from env files for running the app locally & running the test suite.
For production The enviroment should be set through configuration of the server where the app runs. For Digipolis this is AppConfig. The env files will be overwritten by existing env.

- **local enviroment**: [backend/environment/local.env ](https://github.com/digipolisantwerp/starter-kit_app_nodejs/blob/master/backend/environment/local.env)
- **test eviroment**: [backend/environment/test.env ](https://github.com/digipolisantwerp/starter-kit_app_nodejs/blob/master/backend/environment/test.env)
- **production eviroment**: should be set by ENV


```bash
# General settings
PORT=2000
MONGO_CONNECTIONSTRING=mongodb://localhost:27017/starterkit

# AUTHENTICATION
AUTHENTICATION_OAUTHHOST=https://api-oauth2-o.antwerpen.be
AUTHENTICATION_APIHOST=https://api-gw-o.antwerpen.be
AUTHENTICATION_CLIENTID=<your-client-id>
AUTHENTICATION_CLIENTSECRET=<your-client-secret>
AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_URL=https://api-gw-o.antwerpen.be/astad/mprofiel/v1/me
AUTHENTICATION_SERVICEPROVIDERS_MPROFIEL_TOKENURL=https://api-gw-o.antwerpen.be/astad/mprofiel/v1/oauth2/token
```
