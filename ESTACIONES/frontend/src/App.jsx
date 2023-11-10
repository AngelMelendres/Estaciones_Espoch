import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <EstacionesProvider>
          <RootLayout>
            <Routes>
              <Route path="/" exact element={<Index />} />
              <Route path="/estaciones" exact element={<Estaciones />} />
              <Route path="/sensores" exact element={<Sensores />} />
              <Route path="/login" exact element={<Login />} />

              <Route exact path="/estaciones/crear" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/estaciones/crear"
                  element={<AgregarEstacion />}
                />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </RootLayout>
        </EstacionesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
