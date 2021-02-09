import request from 'supertest';
import sinon from 'sinon';
import axios from 'axios';
import { expect } from 'chai';
import * as eventhandler from '../../src/services/eventhandler';
import logger from '../../src/helpers/logging.helper';

import app from '../../src/app';

const route = '/api/events';
describe('/api/events', () => {
  let server;
  let sandbox;
  beforeEach((done) => {
    sandbox = sinon.createSandbox();
    app.start().then((application) => {
      server = application;
      return done();
    });
  });
  afterEach((done) => {
    sandbox.restore();
    done();
  });
  after((done) => {
    app.stop();
    done();
  });
  it(`POST: ${route}`, () => {
    sandbox.stub(eventhandler, 'sendEvent').resolves();
    sandbox.stub(axios, 'post').resolves();
    return request(server)
      .post(route)
      .send({ name: 'john' })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.status).to.deep.equal('ok');
      });
  });
  it(`POST: ${route} fails`, () => {
    sandbox.stub(eventhandler, 'sendEvent').rejects();
    return request(server)
      .post(route)
      .send({ name: 'john' })
      .expect('Content-Type', /json/)
      .expect(500);
  });
});
describe('/api/events/my-event', () => {
  const routerecieve = '/api/events/my-event';
  let server;
  let sandbox;
  beforeEach((done) => {
    sandbox = sinon.createSandbox();
    app.start().then((application) => {
      server = application;
      return done();
    });
  });
  afterEach((done) => {
    sandbox.restore();
    done();
  });
  after((done) => {
    app.stop();
    done();
  });
  it(`POST: ${routerecieve}`, () => {
    sandbox.stub(eventhandler, 'sendEvent').resolves();
    sandbox.stub(axios, 'post').resolves();
    sandbox.spy(logger, 'info');
    return request(server)
      .post(routerecieve)
      .send({ name: 'john' })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        sinon.assert.calledWith(logger.info, 'handling event', { name: 'john' });
        expect(body.status).to.deep.equal('ok');
      });
  });
  it(`POST: ${routerecieve} error`, () => {
    sandbox.stub(eventhandler, 'sendEvent').resolves();
    sandbox.stub(logger, 'info').throws();
    return request(server)
      .post(routerecieve)
      .send({ name: 'john' })
      .expect('Content-Type', /json/)
      .expect(500);
  });
});
