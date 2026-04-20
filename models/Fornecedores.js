const mongoose = require('mongoose');

const fornecedoresSchema = new mongoose.Schema(
  {
    Empresa: { type: String, required: true, trim: true },
    descricao : { type: String, required: true, trim: true },
    email:{type :String, required:true , trim: true},
    CNPJ: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Fornecedores', fornecedoresSchema);