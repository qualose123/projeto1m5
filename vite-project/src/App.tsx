import './App.css'
import {Routes, Route} from 'react-router-dom'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
function App() {
  return (
      <>
        <Routes>
          <Route path="/auth" element= {<SingIn/>}/>
          <Route path="/cadastro" element= {<SingUp/>}/>
        </Routes>
      </>
  )
}

export default App
