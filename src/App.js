import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form/form'
import Home from './components/Home/home'
import CollectedData from './components/CollectedData/CollectedData'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/user-form' element={<Form />} />
        <Route path='/Collected-Data' element={<CollectedData />} />
      </Routes>
    </div>
  );
}

export default App;
