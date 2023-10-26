const { body, validationResult } = require('express-validator')

const validFields = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).json({
      status: 'error',
      errors: errors.mapped()
    })
  }

  next()
}

exports.createAuthorValidation = [
  body('name')
    .notEmpty().withMessage('Name cannot be empty')
    .isString().withMessage('Name must be a string'),
  body('surname')
    .notEmpty().withMessage('Surname cannot be empty')
    .isString().withMessage('Surname must be a string')
    // .isLength({min:8, max: 10})
    ,
  body('birthdate')
    .notEmpty().withMessage('Name cannot be empty')
    .isISO8601().withMessage('birthdate must be a correct format'),
  body('photo')
    .not().isEmpty().withMessage('photo cannot be empty'),
  body('biography')
    .notEmpty().withMessage('biography cannot be empty'),
  validFields
]





