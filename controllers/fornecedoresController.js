const Fornecedores = require('../models/Fornecedores');

exports.listarFornecedores = async (req, res) => {
  const fornecedores = await Fornecedores.find();
  res.json(fornecedores);
};

exports.UmFornecedor = async (req, res) => {
  const fornecedores = await Fornecedores.findById(req.params.id);
  if (!fornecedores) return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  res.json(fornecedores);
};

exports.adicionarFornecedor = async (req, res) => {
  const fornecedores = await Fornecedores.create(req.body);
  res.status(201).json(fornecedores);
};

exports.atualizarFornecedor = async (req, res) => {
  const fornecedores = await Fornecedores.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!fornecedores) return res.status(404).json({ message: 'Fornecedor não encontrado.' });

  res.json(fornecedores);
};

exports.deletarFornecedor = async (req, res) => {
  const fornecedores = await Fornecedores.findByIdAndDelete(req.params.id);
  if (!fornecedores) return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  res.json({ message: 'Fornecedor removido com sucesso.' });
};