import request from 'supertest';
import sinon from 'sinon';
import fs from 'fs';
import { expect } from 'chai';
import app from '../../src/app';

describe('Status route test:', () => {
  let sandbox;
  let server;
  const dir = './public';
  const versionFile = './public/VERSION';
  before((done) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    if (!fs.existsSync(versionFile)) {
      fs.writeFileSync(versionFile, '0.0.1');
    }
    sandbox = sinon.createSandbox();
    app.start().then((application) => {
      server = application;
      done();
    }).catch(e => done(e));
    sandbox.restore();
  });
  after((done) => {
    app.stop();
    done();
  });
  it('GET: /api/status', () => {
    request(server)
      .get('/api/status')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
  it('GET: /api/status/version', () => {
    request(server)
      .get('/api/status/version')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
  it('GET: /api/status/version (file removed)', () => {
    fs.unlinkSync(versionFile);
    return request(server)
      .get('/api/status/version')
      .expect('Content-Type', /json/)
      .expect(404)
      .then(({ body }) => {
        expect(body.message).to.deep.equal('Version file not found. Have you built the container with a release arg?');
      });
  });
  it('GET: /api/status/version (general error)', () => {
    sandbox.stub(fs.promises, 'readFile').throws(new Error('Error'));
    return request(server)
      .get('/api/status/version')
      .expect('Content-Type', /json/)
      .expect(500);
  });
  it('GET: /api/fake', () => request(server)
    .get('/api/fake')
    .expect('Content-Type', /json/)
    .expect(404)
    .then(({ body }) => {
      expect(body.type).to.deep.equal('/api/fake');
      expect(body.title).to.deep.equal('Not Found');
      expect(body.message).to.deep.equal('This route doesn\'t exist on the api');
      expect(body.status).to.deep.equal(404);
      expect(body.code).to.deep.equal(404);
    })
    .catch((err) => {
      throw err;
    }));
});
