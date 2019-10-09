const alunas = require('../model/alunas.json')

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(alunas)
}

exports.getById = (require, response) => {
    const id = require.params.id
    console.log(id)
    response.status(200).send(alunas.find(aluna => aluna.id == id))

}

exports.getBooks = (req, resp) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    console.log(aluna)

    const livrosAlunas = aluna.livros
    const tituloLivros = livrosAlunas.map(livro => livro.titulo)

    resp.status(200).send(tituloLivros)
}


// http://braziljs.github.io/eloquente-javascript/