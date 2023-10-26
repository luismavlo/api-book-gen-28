const { AuthorService } = require("../services/author.service")

const authorService = new AuthorService()

exports.findAllAuthors = async(req, res) => {
  try {
    const authors = await authorService.findAll();

    return res.status(200).json(authors)
  } catch (error) {
    return res.status(500).json({
      error
    })  
  }  
}

exports.createAuthor = async(req, res) => {
  try {
      const { name, surname, birthdate, photo, biography } = req.body;

      const author = await authorService.create({ name, surname, birthdate, photo, biography })

      return res.status(201).json(author)
  } catch (error) {
    return res.status(500).json({
      error
    })  
  }
}

exports.findOneAuthor = (req, res) => {
  try {
    const { author } = req;

    return res.json(author)
  } catch (error) {
    return res.status(500).json({
      error
    })  
  }
}
exports.updateAuthor = async(req, res) => {
  try {
    const { author } = req;
    const { name, surname } = req.body;

    const authorUpdated = await authorService.update(author, {name, surname})

    return res.json(authorUpdated)
  } catch (error) {
    return res.status(500).json({
      error
    })  
  }
}
exports.deleteAuthor = async(req, res) => {
  try {
    const { author } = req;

    await authorService.delete(author)

    return res.status(204).json(null)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error
    })  
  }
}


