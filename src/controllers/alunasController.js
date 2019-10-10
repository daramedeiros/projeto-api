const alunas = require('../model/alunas.json')

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(alunas)
}

exports.getById = (require, response) => {
    const id = require.params.id
    if (id > 17 || id <= 0) {
        // response.send('Id não é válido')
        response.redirect(301, "https://www.smiles.com.br/homekdkdkdk")
    }
    response.status(200).send(alunas.find(aluna => aluna.id == id))

}

exports.getBooks = (req, resp) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    console.log(aluna)

    if (!aluna) {
        resp.send('Não encontrei essa garota')
    }

    const livrosAlunas = aluna.livros
    const tituloLivros = livrosAlunas.map(livro => livro.titulo)

    resp.status(200).send(tituloLivros)
}


exports.getSp = (req, resp) => {

    const alunasSp = alunas.filter(aluna => aluna.nasceuEmSp == "true")
    const alunasPaulistas = alunasSp.map(aluna => aluna.nome)

    resp.status(200).send(alunasPaulistas)
}

// http://braziljs.github.io/eloquente-javascript/