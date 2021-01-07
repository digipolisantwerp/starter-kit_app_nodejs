import sinon from 'sinon';
import mongoose from 'mongoose';
import initializeDatabase from '../../src/helpers/mongoose.helper';

describe('DB mongoose', () => {
  let sandbox;
  before((done) => {
    sandbox = sinon.createSandbox();
    done();
  });
  after(() => {
    sandbox.restore();
  });
  it('DB connection fail should return error', (done) => {
    sandbox.stub(mongoose, 'connect').rejects(new Error('db error'));
    initializeDatabase()
      .then(() => done('shoudn`t resolve'))
      .catch(() => {
        done();
      });
  });
});
