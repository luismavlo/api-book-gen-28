const express = require('express');
const authorController = require('./../controllers/author.controller')
const validationMiddleware = require('./../middlewares/validation.middleware')
const authorMiddleware = require('./../middlewares/author.middleware')

const router = express.Router()

router
  .route('/')
  .get(authorController.findAllAuthors)
  .post(
    validationMiddleware.createAuthorValidation,
    authorController.createAuthor
  );

router
  .use('/:id', authorMiddleware.validExistAuthor)
  .route('/:id')
  .get(authorController.findOneAuthor)
  .patch(authorController.updateAuthor)
  .delete(authorController.deleteAuthor)


module.exports = {
  authorsRouter: router
}