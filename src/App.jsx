import { useState } from 'react'    
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="login">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
      </div>
      <div className="input-box">
        <input type="Password" placeholder='Password' required />
      </div>
      <div className="remember">
        <label><input type="checkbox"/>Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      <button type='sunmit' className='but'> Login</button>
    </form>

   </div>
  )
}

export default App
