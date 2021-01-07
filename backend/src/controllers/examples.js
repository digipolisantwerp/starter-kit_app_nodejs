import Errors from '../errors';

import { getExampleById, getAllExamples } from '../services/example';
// import { getExampleById, getAllExamples } from '../services/pgexample';

export function getExample(req, res, next) {
  getExampleById(req.params.exampleId)
    .then((example) => {
      if (!example) {
        return next(Errors.notFound({ message: `example with id ${req.params.exampleId} not found` }));
      }
      return res.json(example);
    })
    .catch(next);
}

export function getExamples(req, res, next) {
  getAllExamples()
    .then(examples => res.json(examples))
    .catch(next);
}
