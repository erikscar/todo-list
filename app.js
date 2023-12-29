require('./config/database.js')

const express = require('express');
const path = require('path')
const checklistRouter = require('./src/routes/checklist.js');
const rootRouter = require('./src/routes/index.js')
const methodOverride = require('method-override') //Para poder usar o put e delete no navegador, geralemente nao deixa

const app = express();
app.use(express.json()); // Adiciona middleware para analisar o corpo da requisição como JSON
app.use(express.urlencoded({ extended: true })) //Middleware Para entender os parametros passados via formulário
app.use(express.static(path.join(__dirname, 'public'))) //para colocar arquivos imutaveis, como CSS
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/checklists', checklistRouter); // Substitua '/checklist' pelo caminho desejado
app.use('/', rootRouter)

app.listen(3000, () => {
  console.log('Servidor Express em execução na porta 3000');
});