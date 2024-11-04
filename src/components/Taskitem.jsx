import "./Taskitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Taskitem({ tarea, tareas, setTareas }) {
  const eliminaTarea = (uid) => {
    const newTask = tareas.filter((tarea) => tarea.id !== uid);
    setTareas(newTask);
    //ARCHIV EN LOCALSTORAGE
    localStorage.setItem("Ltareas", JSON.stringify(newTask));
  };
  const editaEstado = (uid, uestado) => {
    const newTask = tareas.map((tarea) => {
      if (tarea.id == uid) {
        return {
          ...tarea,
          estado: uestado == 0 ? 1 : 0,
        };
      }
      return tarea;
    });
    setTareas(newTask);
    //ARCHIV EN LOCALSTORAGE
    localStorage.setItem("Ltareas", JSON.stringify(newTask));
    //localStorage.setItem("Tareas",[tareas]);
  };

  return (
    <tr>
      <td className="text-center">
          {tarea.descrip}
      </td>
      <td>
          {tarea.fecha}
      </td>
      <td className="text-end">
          {tarea.importe}
      </td>
      <td className="d-grid gap-2">
        <button className={tarea.estado == 0 ? "btn btn-outline-danger" : "btn btn-outline-success"}>{tarea.estado == 0 ? "Pendiente" : "Completada"}</button>
      </td>
      <td>
        <button
          className={
            tarea.estado == 0
              ? "btn btn-link text-danger"
              : "btn btn-link text-success"
          }
          onClick={() => editaEstado(tarea.id, tarea.estado)}
        >
          <FontAwesomeIcon
            icon={tarea.estado == 0 ? faThumbsUp : faThumbsDown}
          />
        </button>
        <button
          className="btn btn-link text-danger"
          onClick={() => eliminaTarea(tarea.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}
