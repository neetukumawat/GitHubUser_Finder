
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GithubUser from './components/UserSearch'

function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<GithubUser/>}/>
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
