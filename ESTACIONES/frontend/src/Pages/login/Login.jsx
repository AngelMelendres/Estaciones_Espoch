import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const { login } = useAuth();


  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "550px" }}
          >
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a className="navbar-brand">
                    <h3 className="m-0 text-info mb-2">
                      <span className="text-dark">Iniciar</span> sesión
                    </h3>
                  </a>
                </div>

                <p className="mb-4">
                  Por favor, ingrese sus datos para iniciar sesión
                </p>

                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="/login"
                  method="POST"
                >
                  <div className="mb-3">
                    <label className="form-label text-dark">
                      <i className="fa fa-user text-info mr-2"></i>Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usuario"
                      name="nombre"
                      placeholder="Ingrese su nombre de usuario"
                      autofocus
                      required
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label text-dark" for="password">
                        <i className="fa fa-unlock text-info mr-2"></i>Contraseña
                      </label>
                      <a href="">
                        <small>¿Olvidaste tu contraseña?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="contrasena"
                        placeholder="Ingrese su contraseña"
                        aria-describedby="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-info d-grid w-100" type="submit">
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
