import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListarAvaliacoesPage: React.FC = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [teamFilter, setTeamFilter] = useState('');
  const [evaluatorFilter, setEvaluatorFilter] = useState('');
  const [filteredEvaluations, setFilteredEvaluations] = useState([]);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const { data } = await axios.get('/api/evaluations');
        setEvaluations(data);
        setFilteredEvaluations(data);
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
      }
    };
    fetchEvaluations();
  }, []);

  const handleFilter = () => {
    setFilteredEvaluations(
      evaluations.filter((evaluation: any) => {
        const teamName = evaluation.teamname || '';
        const evaluatorName = evaluation.evaluatorname || '';
        return (
          (!teamFilter || teamName.toLowerCase().includes(teamFilter.toLowerCase())) &&
          (!evaluatorFilter || evaluatorName.toLowerCase().includes(evaluatorFilter.toLowerCase()))
        );
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Lista de Avaliações</h1>
        <div className="mb-4">
          <input
            type="text"
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            placeholder="Filtrar por Equipe"
            className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white mb-2"
          />
          <input
            type="text"
            value={evaluatorFilter}
            onChange={(e) => setEvaluatorFilter(e.target.value)}
            placeholder="Filtrar por Avaliador"
            className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          />
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mt-4"
          >
            Filtrar
          </button>
        </div>
        <ul className="text-white">
          {filteredEvaluations.map((evaluation: any) => (
            <li key={evaluation.id} className="bg-gray-700 p-4 rounded mb-2">
              <span>Equipe: {evaluation.teamname}, Avaliador: {evaluation.evaluatorname}, Nota: {evaluation.notas}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListarAvaliacoesPage;
