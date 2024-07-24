// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Home from "./AdminHome.jsx";
import Categorias from "./AdminCateg.jsx";
import Departamentos from "./AdminDep.jsx";
import Productos from "./AdminProduc.jsx";
import Usuarios from "./AdminUsers.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4 ml-64">
          <Routes>
            <Route path="/" element={<Categorias />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
