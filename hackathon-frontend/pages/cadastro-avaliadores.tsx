import React, { useState } from 'react';
import api from '../axiosConfig';

const CadastroAvaliadoresPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/evaluators', { nome, login, senha });
      alert('Avaliador cadastrado com sucesso!');
      setNome('');
      setLogin('');
      setSenha('');
    } catch (error) {
      alert('Erro ao cadastrar avaliador: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Cadastro de Avaliadores</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-900 text-white"
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
            className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-900 text-white"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded"
          >
            Cadastrar Avaliador
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroAvaliadoresPage;
