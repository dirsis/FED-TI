import { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
//import Tareas from './assets/tareas';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';

function App() {

const [tareas, setTareas] = useState([]);
const Ltareas = JSON.parse(localStorage.getItem('Ltareas'));
console.log(Ltareas);
useEffect(() => {
if (Ltareas){
  setTareas(Ltareas)
}else{
  //setTareas(Tareas)
}
}, [])

return (
    <>
      <div className="container">
        <h1>Agenda</h1>
        <div className="row">
            <Tasklist 
            tareas={tareas}
            setTareas={setTareas} 
            />
            </div>
        <div className="row">
            <Taskform
            tareas={tareas}
            setTareas={setTareas} 
            />
        </div>
      </div>
    </>
  )
}

export default App
