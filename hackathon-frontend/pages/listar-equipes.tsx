import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';

const ListarEquipesPage: React.FC = () => {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    const fetchEquipes = async () => {
      try {
        const { data } = await api.get('/teams');
        setEquipes(data);
      } catch (error) {
        console.error('Erro ao buscar equipes:', error);
      }
    };
    fetchEquipes();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/teams/${id}`);
      setEquipes(prevEquipes => prevEquipes.filter(equipe => equipe.id !== id));
    } catch (error) {
      console.error('Erro ao excluir equipe:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Lista de Equipes</h1>
        <ul>
          {equipes.map((equipe: any) => (
            <li key={equipe.id} className="flex justify-between items-center bg-gray-700 p-4 rounded mb-2">
              <span className="text-white">{equipe.nome}</span>
              <button
                onClick={() => handleDelete(equipe.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListarEquipesPage;
