const mongoose = require('mongoose');
const ProdutoSchema = mongoose.Schema({
    nome:{
         type: String,
         require: true
    }
    Preco: {
         type: Number,
         require: true
    }    
});

module.exports = mongoose.model('Produto', ProdutoSchema);