import React, { useState } from 'react';
import api from '../axiosConfig'; // Use a configuração do Axios

const TeamForm: React.FC = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/teams', { nome }); // Remova o prefixo '/api'
      alert('Equipe cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      alert('Erro ao cadastrar equipe: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="nome" className="block text-gray-300 mb-2">Nome da Equipe</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          placeholder="Digite o nome da equipe"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
        Cadastrar Equipe
      </button>
    </form>
  );
};

const CadastroEquipesPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Cadastro de Equipes</h1>
        <TeamForm />
      </div>
    </div>
  );
};

export default CadastroEquipesPage;
