const { AuthorService } = require("../services/author.service");

const authorService = new AuthorService()

exports.validExistAuthor = async(req,res,next) => {
  try {
    const { id } = req.params;

    const author = await authorService.findOne(id);

    if(!author){
      return res.status(404).json({
        status: 'error',
        message: 'author not found'
      })
    }

    req.author = author;
    next();
  } catch (error) {
    return res.status(500).json(error)
  }
}