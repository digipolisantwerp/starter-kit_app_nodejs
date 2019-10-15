import fs from 'fs';
import Errors from '../errors';

function getStatus(req, res) {
  return res.status(200).json();
}

function getVersion(req, res, next) {
  try {
    const versionFile = './public/VERSION';
    fs.statSync(versionFile);
    const version = fs.readFileSync(versionFile, 'utf8');
    return res.status(200).json({ version });
  } catch (e) {
    if (e.code === 'ENOENT') {
      return next(Errors.notFound({ message: 'Version file not found. Have you build the container with a release arg?' }));
    }
    return next(Errors.internalServerError());
  }
}
export {
  getStatus,
  getVersion,
};
