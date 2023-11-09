import Estaciones from "./Pages/estaciones/Estaciones";
import Index from "./Pages/inicio";
import RootLayout from "./Pages/layouts/RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sensores from "./Pages/sensores/Sensores";
import Login from "./Pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/estaciones" exact element={<Estaciones />} />
            <Route path="/sensores" exact element={<Sensores />} />
            <Route path="/login" exact element={<Login/>} />
          </Routes>
        </RootLayout>
      </Router>
    </>
  );
}

export default App;
