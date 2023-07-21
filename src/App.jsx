import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

// https://www.youtube.com/watch?v=GPxt65zPdDE
// Intensivão de React.js e TypeScript

function App({ children }) {

  return (
  <>

    <div className="App">
    <p>Cabeçalho</p>
    <h1>AGENDA</h1>
    <Home/>
    <Outlet/>
    <p>Rodapé</p>
    </div>
     
  </>
  )
}

export default App	