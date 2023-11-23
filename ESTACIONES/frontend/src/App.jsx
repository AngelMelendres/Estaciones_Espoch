import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EstacionesProvider } from "./context/EstacionesContext";
import { AuthProvider } from "./context/AuthContext";
import Estaciones from "./Pages/estaciones/Estaciones";
import Index from "./Pages/inicio";
import RootLayout from "./Pages/layouts/RootLayout";
import Sensores from "./Pages/sensores/Sensores";
import Login from "./Pages/login/Login";
import NotFound from "./Pages/NotFound";
import EditarEstacion from "./Pages/estaciones/EditarEstacion";
import AgregarEstacion from "./Pages/estaciones/AgregarEstacion";
import PrivateRoute from "./Pages/layouts/PrivateRoute";
import Charts from "./Pages/components/Charts";
import Map from "./Pages/components/Map";
import DatosInstantaneos from "./Pages/estaciones/DatosInstantaneos";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EstacionesProvider>
          <RootLayout>
            <Routes>
              <Route path="/" exact element={<Index />} />
              <Route path="/estaciones" exact element={<Estaciones />} />
              <Route path="/sensores" exact element={<Sensores />} />
              <Route path="/login" exact element={<Login />} />

              <Route element={<PrivateRoute />}>
                <Route
                  path="/estaciones/crear"
                  element={<AgregarEstacion />}
                ></Route>
                <Route path="/editar" element={<EditarEstacion />}></Route>
              </Route>

              <Route path="/chart" element={<Charts />}></Route>
              <Route
                path="/instantaneos"
                element={<DatosInstantaneos />}
              ></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RootLayout>
        </EstacionesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
