import React, { useState } from 'react';
import axios from 'axios';

const EvaluatorForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/api/evaluators', { nome, login, senha });
      alert('Avaliador cadastrado com sucesso!');
      setNome('');
      setLogin('');
      setSenha('');
    } catch (error) {
      alert('Erro ao cadastrar avaliador.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="nome" className="block text-gray-300 mb-2">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Digite o nome"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="login" className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Digite o email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="senha" className="block text-gray-300 mb-2">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Digite a senha"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
        Cadastrar Avaliador
      </button>
    </form>
  );
};

export default EvaluatorForm;
