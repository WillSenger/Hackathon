import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../axiosConfig';
import { FaUsers, FaChalkboardTeacher, FaStar } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [stats, setStats] = useState({ teams: 0, evaluators: 0, evaluations: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/stats');
        setStats(data);
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      }
    };
    fetchStats();

    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  const handleAtribuirNotasClick = () => {
    router.push('/atribuir-notas');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl">Hackathon</h1>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <button className="bg-green-500 px-4 py-2 rounded" onClick={handleAtribuirNotasClick}>
                Atribuir Notas
              </button>
              <button className="bg-red-500 px-4 py-2 rounded" onClick={handleLogoutClick}>
                Logoff
              </button>
            </>
          ) : (
            <button className="bg-blue-500 px-4 py-2 rounded" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </header>
      <main className="flex justify-around items-center p-8">
        <div className="card bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg flex items-center text-white">
          <FaUsers className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Total de Equipes</h2>
            <p className="text-2xl">{stats.teams}</p>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-lg flex items-center text-white">
          <FaChalkboardTeacher className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Total de Avaliadores</h2>
            <p className="text-2xl">{stats.evaluators}</p>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-lg shadow-lg flex items-center text-white">
          <FaStar className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Total de Notas</h2>
            <p className="text-2xl">{stats.evaluations}</p>
          </div>
        </div>
      </main>
      <footer className="flex justify-around items-center p-4 bg-gray-800 text-white">
        <button
          className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 transition"
          onClick={() => router.push('/cadastro-equipes')}
        >
          Cadastro Equipes
        </button>
        <button
          className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 transition"
          onClick={() => router.push('/listar-equipes')}
        >
          Listar Equipes
        </button>
        <button
          className="bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition"
          onClick={() => router.push('/cadastro-avaliadores')}
        >
          Cadastro Avaliador
        </button>
        <button
          className="bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition"
          onClick={() => router.push('/atribuir-avaliador')}
        >
          Atribuir Avaliador
        </button>
        <button
          className="bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition"
          onClick={() => router.push('/listar-avaliadores')}
        >
          Listar Avaliadores
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition"
          onClick={() => router.push('/listar-avaliacoes')}
        >
          Listar Avaliações
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
