import sinon from 'sinon';
import axios from 'axios';
import { expect } from 'chai';
import { sendEvent } from '../../src/services/eventhandler';
import logger from '../../src/helpers/logging.helper';

describe('eventhandler', () => {
  let sandbox;
  beforeEach((done) => {
    sandbox = sinon.createSandbox();
    done();
  });
  afterEach((done) => {
    sandbox.restore();
    done();
  });
  it('sendEvent', async () => {
    sandbox.stub(axios, 'post').resolves();
    await sendEvent('namespace', 'topic', 'message', 'ownerKey');
    sinon.assert.calledWith(
      axios.post,
      'https://fake-gw/acpaas/eventhandler/v2/namespaces/namespace/topics/topic/publish',
      'message',
      { headers: { apikey: 'YOUR-APIKEY', 'owner-key': 'ownerKey' } },
    );
  });
  it('sendEvent fails', async () => {
    sandbox.stub(axios, 'post').rejects(new Error('testerror'));
    try {
      await sendEvent('namespace', 'topic', 'message', 'ownerKey');
    } catch (e) {
      expect(e.message).to.eql('testerror');
    }
  });
  it('sendEvent fails with response', async () => {
    sandbox.spy(logger, 'error');
    sandbox.stub(axios, 'post').rejects({
      request: 'request',
      response: {
        data: 'data',
        status: 'status',
        headers: 'headers',
      },
    });
    try {
      await sendEvent('namespace', 'topic', 'message', 'ownerKey');
    } catch (e) {
      sinon.assert.calledWith(logger.error, 'data');
      sinon.assert.calledWith(logger.error, 'status');
      sinon.assert.calledWith(logger.error, 'headers');
    }
  });
  it('sendEvent fails without response', async () => {
    sandbox.stub(logger, 'error');
    sandbox.stub(axios, 'post').rejects({
      request: 'request',
    });
    try {
      await sendEvent('namespace', 'topic', 'message', 'ownerKey');
    } catch (e) {
      sinon.assert.calledWith(logger.error, 'request');
    }
  });
  it('recieve event', async () => {
    sandbox.stub(logger, 'error');
    sandbox.stub(axios, 'post').rejects({
      request: 'request',
    });
    try {
      await sendEvent('namespace', 'topic', 'message', 'ownerKey');
    } catch (e) {
      sinon.assert.calledWith(logger.error, 'request');
    }
  });
});
