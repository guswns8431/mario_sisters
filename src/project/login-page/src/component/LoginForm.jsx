import { useState } from 'react'
import './LoginForm.css'
import ServiceBtn from './ServiceBtn.jsx'

function LoginForm() {
  const [username, setUsername] = useState(localStorage.getItem('user') || '') ;
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('log') === 'true');

  const InputHandler = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    localStorage.setItem('user', username);
    localStorage.setItem('log', true);
    setLoggedIn(true)
  };

  const handleLogout = () => {
    localStorage.setItem('user', '');
    localStorage.setItem('log', false);
    setLoggedIn(false)
    setUsername('');
  };

  return (
    <div>
      {loggedIn ? (
        <div className="login-form">
          <div id="login-text" className="login-ele1">Welcome {username}</div>
          <div className="btn-container">
            <button onClick={handleLogout} className="login-btn">Sign Out</button>
            <ServiceBtn/>
          </div>
        </div>
        ) : (
        <div className="login-form">
          <input id="login-input" className="login-ele1" placeholder="User Name" value={username} onChange={InputHandler}/>
          <div className="btn-container">
            <button onClick={handleLogin} className="login-btn">Sign In</button>
            <ServiceBtn/>
          </div>
        </div>  
      )}
    </div>
  );
}

export default LoginForm