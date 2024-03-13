import { useState } from 'react'    
import './App.css'

const users = [
  { usuario: 'Anne Rincon', contraseña: 'A15112004.' },
  { usuario: 'Steban Rivera', contraseña: 'Os345.1' },
  { usuario: 'Laura Lozano', contraseña: 'Ozano2078.' },
];

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar las credenciales
    const usuarioValido = users.find(user => user.usuario === username && user.contraseña === password);
    if (usuarioValido) {
      setMensaje('Inicio de sesión exitoso');
      // Aquí puedes redirigir al usuario a la página de inicio, etc.
    } else {
      setMensaje('Credenciales Incorrectas');
    }
  };

  return (
   <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Username'value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className="input-box">
        <input type="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="remember">
        <label><input type="checkbox" />Remember me</label>
        <span style={{ marginLeft: '10px' }}><a href="#">Forgot Password?</a></span>
      </div>
      <button type='sunmit' className='but'> Login</button>
    </form>
    {mensaje && <p>{mensaje}</p>}
   </div>
  )
}

export default App
