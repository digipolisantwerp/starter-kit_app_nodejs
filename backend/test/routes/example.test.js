import request from 'supertest';
import { expect } from 'chai';
import Example from '../../src/models/example';
// import User from '../../src/models/pgexample';

import app from '../../src/app';

const routeExamples = '/api/examples';
describe('example routes', () => {
  let server;
  before((done) => {
    app.start().then((application) => {
      server = application;
      done();
    });
  });
  after((done) => {
    app.stop();
    done();
  });
  describe('Without data', () => {
    it(`GET: ${routeExamples}`, () => {
      request(server)
        .get(routeExamples)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          if (err) throw err;
        });
    });
    it(`GET: ${routeExamples}/:exampleId`, () => request(server)
      .get(`${routeExamples}/41224d776a326fb40f000001`)
      .expect('Content-Type', /json/)
      .expect(404)
      .then(({ body }) => {
        expect(body.message).to.deep.equal('example with id 41224d776a326fb40f000001 not found');
      }));
    // it(`GET: ${routeExamples}/:exampleId`, () => request(server)
    //   .get(`${routeExamples}/41`)
    //   .expect('Content-Type', /json/)
    //   .expect(404)
    //   .then(({ body }) => {
    //     expect(body.message).to.deep.equal('example with id 41 not found');
    //   }));
    it(`GET: ${routeExamples}/:exampleId invalid id`, () => request(server)
      .get(`${routeExamples}/fake`)
      .expect('Content-Type', /json/)
      .expect(400));
  });
  describe('with data', () => {
    let id;
    before((done) => {
      new Example({ firstName: 'Jonn' }).save((err, result) => {
        // eslint-disable-next-line
        id = result['_id'];
        done();
      });
    });
    after((done) => {
      Example.findById(id).remove().exec(done);
    });
    it(`GET: ${routeExamples}/:id valid id`, () => request(server)
      .get(`${routeExamples}/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body.firstName).to.deep.equal('Jonn');
      }));
  });
  // describe('with data pg', () => {
  //   let id;
  //   before((done) => {
  //     User.create({ firstName: 'Jonn' }).then((user) => {
  //       // eslint-disable-next-line
  //       id = user.id;
  //       return done();
  //     });
  //   });
  //   after((done) => {
  //     User.destroy({
  //       where: {
  //         id,
  //       },
  //     }).then(done());
  //   });
  //   it(`GET: ${routeExamples}/:id valid id`, () => request(server)
  //     .get(`${routeExamples}/${id}`)
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .then(({ body }) => {
  //       expect(body.firstName).to.deep.equal('Jonn');
  //     }));
  // });
});
