import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AtribuirNotasPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teams, setTeams] = useState([]);
  const [avaliadorId, setAvaliadorId] = useState<string | null>(null);
  const [notas, setNotas] = useState({
    originalidade: 0,
    impacto: 0,
    execucao: 0,
    apresentacao: 0,
    viabilidade: 0,
  });
  const [equipeId, setEquipeId] = useState<string | null>(null);

  useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      if (!loggedIn) {
        window.location.href = '/login';
      } else {
        setAvaliadorId(localStorage.getItem('avaliadorId'));
      }
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (avaliadorId) {
      const fetchTeams = async () => {
        try {
          const { data } = await axios.get(`http://localhost:3000/api/teams-assigned/${avaliadorId}`);
          setTeams(data);
        } catch (error) {
          console.error('Erro ao buscar equipes:', error);
        }
      };
      fetchTeams();
    }
  }, [avaliadorId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNotas((prevNotas) => ({
      ...prevNotas,
      [name]: Number(value),
    }));
  };

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!avaliadorId || !equipeId) return;

    try {
      const { data } = await axios.get(`http://localhost:3000/api/check-evaluation/${avaliadorId}/${equipeId}`);
      if (data.evaluated) {
        alert('Esta equipe já foi avaliada.');
        return;
      }
      await axios.put(`http://localhost:3000/api/evaluations/${data.id}`, {
        notas,
        avaliadorId,
      });
      alert('Notas atribuídas com sucesso!');
    } catch (error) {
      console.error('Erro ao atribuir notas:', error);
    }
  };

  return isLoggedIn ? (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Atribuir Notas</h1>
        <ul>
          {teams.map((team: any) => (
            <li key={team.id} className="flex justify-between items-center bg-gray-700 p-4 rounded mb-2">
              <span className="text-white">{team.nome}</span>
              <button
                onClick={() => setEquipeId(team.id)}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                Avaliar
              </button>
            </li>
          ))}
        </ul>
        {equipeId && (
          <form className="mt-6" onSubmit={handleEvaluate}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Originalidade do Projeto</label>
              <input
                type="number"
                name="originalidade"
                value={notas.originalidade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
                placeholder="Nota de 0 a 10"
                min="0"
                max="10"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Impacto Potencial</label>
              <input
                type="number"
                name="impacto"
                value={notas.impacto}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
                placeholder="Nota de 0 a 10"
                min="0"
                max="10"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Execução Técnica</label>
              <input
                type="number"
                name="execucao"
                value={notas.execucao}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
                placeholder="Nota de 0 a 10"
                min="0"
                max="10"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Apresentação e Demonstração</label>
              <input
                type="number"
                name="apresentacao"
                value={notas.apresentacao}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
                placeholder="Nota de 0 a 10"
                min="0"
                max="10"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Viabilidade e Sustentabilidade</label>
              <input
                type="number"
                name="viabilidade"
                value={notas.viabilidade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
                placeholder="Nota de 0 a 10"
                min="0"
                max="10"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
            >
              Enviar Avaliação
            </button>
          </form>
        )}
      </div>
    </div>
  ) : (
    <p>Verificando login...</p>
  );
};

export default AtribuirNotasPage;
