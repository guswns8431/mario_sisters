import marioLogo from './assets/mario.png'
import LoginForm from './component/LoginForm.jsx'
import './App.css'

function App() {
  return (
    <>
      <img src={marioLogo} className="mario-logo" alt="Mario Sisters Logo"/>
      <LoginForm />
    </>
  )
}

export default App