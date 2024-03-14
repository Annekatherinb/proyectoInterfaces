import React from 'react';
import { useState } from 'react'  
import './App.css'
import { useNavigate } from 'react-router-dom'


const users = [
    { usuario: 'Anne Rincon', contraseña: 'A15112004.' },
    { usuario: 'Steban Rivera', contraseña: 'Os345.1' },
    { usuario: 'Laura Lozano', contraseña: 'Ozano2078.' },
  ];
  
  function Login() {
    
    const nave = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Verificar las credenciales
      const usuarioValido = users.find(user => user.usuario === username && user.contraseña === password);
      if (usuarioValido) {
        setMensaje('Inicio de sesión exitoso');
        if (rememberMe) {
            // Guardar credenciales en el almacenamiento local
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        nave('/')
        
      } else {
        setMensaje('Credenciales Incorrectas, digite nuevamente usuario y contraseña');
        setUsername('');
        setPassword('');
        
        setTimeout(() => {
          setMensaje('');
        }, 3000); // 3 segundos
      }
    };
  
    return (
     <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" name='username' id="username" autoComplete="username" placeholder='Username'value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="Password" name='password' id="password" autoComplete="current-password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="remember">
          <label><input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />Remember me</label>
          <span style={{ marginLeft: '10px' }}><a href="#">Forgot Password?</a></span>
        </div>
        <button type='submit' className='but'> Login</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
     </div>
    )
  }
  
  export default Login
  
