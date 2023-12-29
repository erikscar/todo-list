const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo-list')
}

main()
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log(err));