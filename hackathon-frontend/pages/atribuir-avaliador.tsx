import React, { useState, useEffect } from 'react';
import api from '../axiosConfig';

const AtribuirAvaliadorPage: React.FC = () => {
  const [evaluators, setEvaluators] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedEvaluator, setSelectedEvaluator] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  useEffect(() => {
    const fetchEvaluators = async () => {
      try {
        const { data } = await api.get('/evaluators');
        setEvaluators(data);
      } catch (error) {
        console.error('Erro ao buscar avaliadores:', error);
      }
    };

    const fetchTeams = async () => {
      try {
        const { data } = await api.get('/teams');
        setTeams(data);
      } catch (error) {
        console.error('Erro ao buscar equipes:', error);
      }
    };

    fetchEvaluators();
    fetchTeams();
  }, []);

  const handleAssign = async () => {
    try {
      await api.post('/assign', { evaluatorId: selectedEvaluator, teamId: selectedTeam });
      alert('Avaliador atribuído com sucesso!');
    } catch (error) {
      alert('Erro ao atribuir avaliador: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Atribuir Avaliador a Equipe</h1>
        <div className="mb-4">
          <label htmlFor="evaluator" className="block text-gray-300 mb-2">Avaliador</label>
          <select
            id="evaluator"
            value={selectedEvaluator}
            onChange={(e) => setSelectedEvaluator(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          >
            <option value="">Selecione um Avaliador</option>
            {evaluators.map((evaluator: any) => (
              <option key={evaluator.id} value={evaluator.id}>{evaluator.nome}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="team" className="block text-gray-300 mb-2">Equipe</label>
          <select
            id="team"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          >
            <option value="">Selecione uma Equipe</option>
            {teams.map((team: any) => (
              <option key={team.id} value={team.id}>{team.nome}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAssign}
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Atribuir
        </button>
      </div>
    </div>
  );
};

export default AtribuirAvaliadorPage;
