const mongoose = require('mongoose')


//Criando um Modelo do Banco de dados, deve ter o name, deve ser do tipo string e é obrigatório
//Cada task tera a referencia de uma checklist
const taskSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    done: {type: Boolean, default: false}, //Inicia como false
    checklist: { //Forma de fazer por Refe^rencia,
        type: mongoose.Schema.Types.ObjectId, //O tipo será o ID que o Mongo Cria
        ref: 'Checklist', //A ref será o nome da checklist criada no outro arquivo
        required: true //Obrigatório
    }
})


//exportando o modelo criado, passando o nome, e o Schema que foi criado a cima
module.exports = mongoose.model('Task', taskSchema)
