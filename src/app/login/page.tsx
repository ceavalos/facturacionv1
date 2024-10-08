'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css'; // Importa el archivo de estilos CSS

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Resetea el error

    try {
      // Llama a la API de login      
      const res = await fetch('/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        throw new Error(data.message || 'Error en la autenticación');
      }

      // Guarda el token JWT en localStorage
      localStorage.setItem('token', data.token);

      // Redirige al usuario al dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
        <h1 className={styles.header}>Iniciar sesion</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}> 
        
          
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.inputField}
          />
               
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />       
        {error && <p className="error">{error}</p>}
        <button type="submit" className={styles.loginButton}>Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;
