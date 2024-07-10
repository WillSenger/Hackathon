import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';

const ListarAvaliadoresPage: React.FC = () => {
  const [avaliadores, setAvaliadores] = useState([]);

  useEffect(() => {
    const fetchAvaliadores = async () => {
      try {
        const { data } = await api.get('/evaluators');
        setAvaliadores(data);
      } catch (error) {
        console.error('Erro ao buscar avaliadores:', error);
      }
    };
    fetchAvaliadores();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/evaluators/${id}`);
      setAvaliadores(prevAvaliadores => prevAvaliadores.filter(a => a.id !== id));
    } catch (error) {
      console.error('Erro ao excluir avaliador:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Lista de Avaliadores</h1>
        <ul>
          {avaliadores.map((a: any) => (
            <li key={a.id} className="flex justify-between items-center bg-gray-700 p-4 rounded mb-2">
              <span className="text-white">{a.nome} ({a.login})</span>
              <button
                onClick={() => handleDelete(a.id)}
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

export default ListarAvaliadoresPage;
