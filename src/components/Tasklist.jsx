import { render } from "react-dom";
import Taskitem from "./Taskitem";
import "./Tasklist.css";

export default function Tasklist({ tareas, setTareas }) {
  return (
    <div className="col">
      <table className="table table-striped table-primary">
        <thead>
          <tr>
            <th>Motivo</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => {
            return (
              <Taskitem tarea={tarea} tareas={tareas} setTareas={setTareas} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
