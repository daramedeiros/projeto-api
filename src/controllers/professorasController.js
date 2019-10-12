const professoras = require("../model/professoras.json")

// exports.get = (req, res) => {

//     const ArrProfs = []

//     for (let i = 0; i < professoras.length; i++) {
//         const ArrSemCPF = {}
//         ArrSemCPF.id = professoras[i].id
//         ArrSemCPF.nome = professoras[i].nome
//         ArrSemCPF.especialidade = professoras[i].especialidade
//         ArrSemCPF.signo = professoras[i].signo
        
//         ArrProfs.push(ArrSemCPF)   
//     }
//     res.status(200).send(ArrProfs)
// }

// ========

exports.get= (req, res) => {
    const profSemCpf = professoras.map( item => {
        item.cpf = "*********"
        return item
    })

    res.status(200).send(profSemCpf)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const professora = professoras.find(professora => professora.id == id)
    console.log(professora)

    res.status(200).send(professora)

}
