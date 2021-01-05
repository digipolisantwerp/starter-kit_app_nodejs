// import sinon from 'sinon';
// import { Sequelize } from 'sequelize';
// import initializeDatabase, { closeDatabaseConnection } from '../../src/helpers/postgres.helper';

// describe('DB postgres', () => {
//   let sandbox;
//   beforeEach((done) => {
//     sandbox = sinon.createSandbox();
//     done();
//   });
//   afterEach(() => {
//     closeDatabaseConnection();
//     sandbox.restore();
//   });
//   it('DB connection fail should return error', (done) => {
//     sandbox.stub(Sequelize.prototype, 'authenticate').returns(Promise.reject(new Error('wups')));

//     initializeDatabase()
//       .then(() => {
//         done('shoudn`t resolve');
//       })
//       .catch(() => {
//         done();
//       });
//   });
//   it('DB connection ok should return ok', (done) => {
//     sandbox.stub(Sequelize.prototype, 'authenticate').returns(Promise.resolve('ok'));

//     initializeDatabase()
//       .then(() => {
//         done();
//       })
//       .catch(() => {
//         done('shoud resolve');
//       });
//   });
// });
