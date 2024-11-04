import { render } from "react-dom";
import Taskitem from "./Taskitem";
import "./Tasklist.css";

export default function Tasklist({ tareas, setTareas }) {
  return (
    <div className="col-12">
      <table className="table table-sm table-responsive">
        <thead className="table-group-divider">
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
