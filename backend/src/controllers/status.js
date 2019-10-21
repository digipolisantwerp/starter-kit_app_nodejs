import fs from 'fs';
import util from 'util';
import Errors from '../errors';

function getStatus(req, res) {
  return res.status(200).json();
}

async function getVersion(req, res, next) {
  try {
    const readFile = util.promisify(fs.readFile);
    const versionFile = './public/VERSION';
    const version = await readFile(versionFile, 'utf8');
    return res.status(200).json({ version });
  } catch (e) {
    console.log('Something went wrong in getVersion: ', e);
    if (e.code === 'ENOENT') {
      return next(Errors.notFound({ message: 'Version file not found. Have you built the container with a release arg?' }));
    }
    return next(e);
  }
}

export {
  getStatus,
  getVersion,
};
