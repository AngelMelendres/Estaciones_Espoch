import Estaciones from "./Pages/estaciones/Estaciones";
import Index from "./Pages/inicio";
import RootLayout from "./Pages/layouts/RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sensores from "./Pages/sensores/Sensores";
import Login from "./Pages/login/Login";
import { EstacionesProvider } from "./context/EstacionesContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <EstacionesProvider>
            <RootLayout>
              <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/estaciones" exact element={<Estaciones />} />
                <Route path="/sensores" exact element={<Sensores />} />
                <Route path="/login" exact element={<Login />} />
              </Routes>
            </RootLayout>
          </EstacionesProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
