const mongoose = require('mongoose')


//Criando um Modelo do Banco de dados, deve ter o name, deve ser do tipo string e é obrigatório
const checklistSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    tasks: [{ //Vai ser um array de tasks, com várias tasks
       type: mongoose.Schema.Types.ObjectId, //Relação entre as tasks - Checklist
       ref: "Task"
    }]
})

    
//exportando o modelo criado, passando o nome, e o Schema que foi criado a cima
module.exports = mongoose.model('Checklist', checklistSchema)
