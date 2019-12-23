import sinon from 'sinon';
import errorHandler from '../../src/middlewares/error.middleware';

describe('errorHandler', () => {
  let sandbox;
  let originalEnv;
  const withMeta = {
    code: -1,
    identifier: undefined,
    message: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
    meta: 'errors',
    status: 400,
    title: 'myfield',
    type: undefined,
  };
  before((done) => {
    originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    sandbox = sinon.createSandbox();
    done();
  });
  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    sandbox.restore();
  });
  it('test errorhandling with field in development', () => {
    const json = sandbox.stub();
    const res = {
      status: sandbox.stub().returns({ json }),
    };
    errorHandler({ message: 'validation error', field: 'myfield', stack: 'mystack', errors: 'errors' }, {}, res, sandbox.stub());
    sinon.assert.calledWith(json, withMeta);
  });
  it('test errorhandling with CastError', () => {
    const json = sandbox.stub();
    const res = {
      status: sandbox.stub().returns({ json }),
    };
    errorHandler({ name: 'CastError', stack: 'mystack' }, {}, res, sandbox.stub());
    sinon.assert.calledWith(json, {
      status: 400,
      title: 'Bad Request',
      message: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
      meta: {
        stack: 'mystack',
      },
      type: undefined,
      identifier: undefined,
      code: -1,
    });
  });
  it('test validation error without field in production', () => {
    process.env.NODE_ENV = 'production';
    const json = sandbox.stub();
    const res = {
      status: sandbox.stub().returns({ json }),
    };
    errorHandler({ message: 'validation error' }, {}, res, sandbox.stub());
    const withoutMeta = Object.assign({}, withMeta);
    withoutMeta.title = 'Validation Error';
    withoutMeta.meta = sinon.match.any;
    sinon.assert.calledWith(json, {
      code: -1,
      identifier: undefined,
      message: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
      status: 400,
      title: 'Validation Error',
      type: undefined,
    });
  });
  it('test errorhandling with field in production', () => {
    process.env.NODE_ENV = 'production';
    const json = sandbox.stub();
    const res = {
      status: sandbox.stub().returns({ json }),
    };
    errorHandler({ message: 'random error' }, { originalUrl: '/' }, res, sandbox.stub());
    const fallbackerror = {
      status: 500,
      title: 'Something went wrong',
      identifier: sinon.match.any,
      message: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
      code: -1,
    };
    sinon.assert.calledWith(json, fallbackerror);
  });
});
