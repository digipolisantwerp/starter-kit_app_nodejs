import Example from '../models/pgexample';
import Errors from '../errors';

export async function getExampleById(exampleId) {
  try {
    return await Example.findByPk(exampleId);
  } catch (e) {
    if (e.original.code === '22P02') {
      throw Errors.badRequest({ message: 'invalid input' });
    }
    throw e;
  }
}

export function getAllExamples() {
  console.log('here 🔥');
  return Example.findAll();
}
