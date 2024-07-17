import marioLogo from './assets/mario.png'
import './App.css'

function App() {
  return (
    <>
      <img src={marioLogo} className="mario-logo" alt="Mario Sisters Logo"/>
      <p className="login-block">
        <input type="text" class="login-input" name="username" id="username" placeholder="User Name"/>
        <button type="submit" class="login-btn">Sign in</button>
      </p>
    </>
  )
}

export default App
