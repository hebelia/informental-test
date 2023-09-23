import "./App.css";
import { Route, Routes } from "react-router-dom";
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import UserById from "./views/UserById/UserById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<UserById />} />
        <Route path="/hola" element={<UserById />} />
      </Routes>

      {/* 

    /
    /admin
    /login: componente, path, html
    /register: componente, path, html
    /home: componente, path, html
    /user ¿No se donde se renderiza?
    /users/:id : componente, path ¿Tampoco se como se llega a ese endpoint?
    /users/edit-profile


    /patients
    /patients/:id
    /patients/create
    /therapy
    /therapy/create
    /therapy/:id
    /professionals
    /institutions
    /institution/:id
    /institution/create
    /terms
    /about-us
    
    /export/therapy

    /admin: html

    /patient   ruta que pertenece a la aplicacion para pacientes
    
    */}
    </>
  );
}

export default App;
