import React, { useState } from "react";
import useEstaciones from "../../hooks/useEstaciones";
import { useNavigate } from "react-router-dom";

const AgregarEstacion = () => {
  const { agregarEstacion } = useEstaciones();
  const navigate = useNavigate();

  const [nuevaEstacion, setNuevaEstacion] = useState({
    nombre: "",
    parroquia: "",
    canton: "",
    provincia: "",
    latitud: "",
    longitud: "",
    altura: "",
  });

  const handleChange = (e) => {
    setNuevaEstacion({
      ...nuevaEstacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEstacion(nuevaEstacion);
    // Limpiar el formulario después de enviar los datos 
    setNuevaEstacion({
      nombre: "",
      parroquia: "",
      canton: "",
      provincia: "",
      latitud: "",
      longitud: "",
      altura: "",
    });
    // Redirige to the list of stations
    navigate("/estaciones");
  };

  return (
    <div>
      <div className="container-fluid page-header my-3">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "700px" }}
          >
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a className="navbar-brand">
                    <h3 className="m-0 text-info mb-2">
                      <span className="text-dark">Nueva</span> Estación
                    </h3>
                  </a>
                </div>

                <p className="mb-4">
                  Llene los datos para añadir una nueva estación
                </p>

                <form
                  id="formAuthentication"
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={nuevaEstacion.nombre}
                      placeholder="Nombre de la estación"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="parroquia"
                      value={nuevaEstacion.parroquia}
                      placeholder="Parroquia"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="canton"
                      value={nuevaEstacion.canton}
                      placeholder="Cantón"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="provincia"
                      value={nuevaEstacion.provincia}
                      placeholder="Provincia"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="latitud"
                      value={nuevaEstacion.latitud}
                      placeholder="Latitud"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="longitud"
                      placeholder="Longitud"
                      value={nuevaEstacion.longitud}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="altura"
                      value={nuevaEstacion.altura}
                      placeholder="Altura"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted mx-2">
                      Imágen de la estación
                    </label>
                    <input type="file" className="form-control" name="image" />
                  </div>
                  <div className="mb-3 text-center">
                    <button className="btn bg-blue-400 text-white d-grid w-auto mx-2">
                      <i className="fa fa-save mr-2"></i>Guardar
                    </button>
                    <a className="btn btn-danger d-grid w-auto mx-2">
                      <i className="fa fa-ban mr-2"></i>Cancelar
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarEstacion;
