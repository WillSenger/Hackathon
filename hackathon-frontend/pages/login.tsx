import React, { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../axiosConfig';

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Enviando login:', login);
      console.log('Enviando senha:', senha);
      const response = await api.post('/login', { login, senha });
      localStorage.setItem('isLoggedIn', 'true');
      alert(response.data.message);
      router.push('/');
    } catch (error) {
      alert('Erro ao fazer login: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
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
          onClick={handleLogin}
          className="w-full p-3 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
