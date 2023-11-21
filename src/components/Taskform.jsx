import { useState } from "react";
import "./Taskform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Taskform({ tareas, setTareas }) {
  const [valor, setValor] = useState("");

  const agregaTarea = (uvalor) => {
    //BUSCA ULTIMA TAREA PARA AGREGAR EL SIGUIENTE
    let ultimo = Date.now();
    //CREA NUEVA TAREA
    const newTask = { id: ultimo, descrip: uvalor, estado: 0 };
    //ARCHIVO TODO EL ARRAY EN UNA VARIABLE TEMP
    const Temp = [...tareas, newTask];
    //AGREGA TAREA
    setTareas(Temp);
    //ARCHIV EN LOCALSTORAGE (SOLO ASI NO PIERDO EL ULTIMO AGREGADO)
    localStorage.setItem("Ltareas", JSON.stringify(Temp));
    //LIMPIAR INPUT PARA EL PROXIMA AGREGADO
    setValor("");
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      boton.focus();
    }
  };
  return (
    <div className="row justify-content-md-center">
      <div className="card text-bg-secondary mb-6 col-8">
        <div className="card-body">
          <h5 className="card-title">Nueva Tarea</h5>

          <div className="mb-3">
            {/* <label className="form-label">Motivo</label> */}
            <input
              type="text"
              className="form-control"
              value={valor}
              placeholder="Ingrese el motivo"
              onChange={(e) => setValor(e.target.value)}
              onKeyUp={(e) => handleKeyUp(e)} //para pasar del enter al botón
            />
          </div>
          <div className="botones">
            <div className="mb-3">
              <button
                type="button"
                id="boton"
                className="btn btn-primary"
                onClick={() => agregaTarea(valor)}
              >
                <FontAwesomeIcon icon={faPlus} /> Agregar
              </button>
              {/* <div className="burrito-container"> */}
              <div>
                <img
                  src="../src/assets/GigDonkey.jpg"
                  class="image"
                  alt="burrito"
                  
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
