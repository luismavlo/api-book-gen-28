const db = require("../database/models")

class AuthorService {
  async findAll(){
    return await db.authors.findAll({
      where: {
        status: true
      }
    })
  }

  async findOne(id){
    return await db.authors.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  async create(data){
    return await db.authors.create(data)
  }

  async update(author, data){
    return await author.update(data)
  }

  async delete(author){
    return await author.update({ status: false })
  }

}

module.exports = {
  AuthorService
}