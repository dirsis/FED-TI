import { useState } from "react";
import "./Taskform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Taskform({ tareas, setTareas }) {
  const [valor, setValor] = useState("");
  const [fecha, setFecha] = useState("");
  const [importe, setImporte] = useState("");

  const agregaTarea = (uvalor,ufecha,uimporte) => {
    //BUSCA ULTIMA TAREA PARA AGREGAR EL SIGUIENTE
    let ultimo = Date.now();
    //CREA NUEVA TAREA
    const newTask = { id: ultimo, descrip: uvalor, fecha: ufecha, importe: uimporte, estado: 0 };
    //ARCHIVO TODO EL ARRAY EN UNA VARIABLE TEMP
    const Temp = [...tareas, newTask];
    //AGREGA TAREA
    setTareas(Temp);
    //ARCHIV EN LOCALSTORAGE (SOLO ASI NO PIERDO EL ULTIMO AGREGADO)
    localStorage.setItem("Ltareas", JSON.stringify(Temp));
    //LIMPIAR INPUT PARA EL PROXIMA AGREGADO
    setValor("");
    setFecha("");
    setImporte("");
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      boton.focus();
    }
  };
  return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Nueva Tarea</h5>
        </div>
          <div className="card-body">
            <div className="mb-3">
                <label className="form-label">Motivo</label>
                <input
                type="text"
                className="form-control"
                value={valor}
                placeholder="Ingrese el motivo"
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input
                type="date"
                className="form-control"
                value={fecha}
                placeholder="Fecha"
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div className="mb-3">
                <label className="form-label">Importe</label>
                <input
                type="number" pattern="\d*"
                className="form-control"
                value={importe}
                placeholder="Importe"
                onChange={(e) => setImporte(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)} //para pasar del enter al botón
              />
            </div>            
          </div>
          <div className="card-footer">
          <button
                type="button"
                id="boton"
                className="btn btn-primary"
                onClick={() => agregaTarea(valor,fecha,importe)}
              >
                <FontAwesomeIcon icon={faPlus} /> Agregar
              </button>
        </div>
      </div>
  );
}
