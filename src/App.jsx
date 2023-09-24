import "./App.css";
import { Route, Routes } from "react-router-dom";
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import UserById from "./views/UserById/UserById";
import Admin from "./views/Admin/Admin";

function App() {
  return (
    <>
    {/* le vamos a ir agregando las rutas que encontremos en el camino 👍🏻 */}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/users" element={<UserById />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/users" element={} />

        <Route path="/users/:id" element={<UserById />} />
        
        <Route path="/edit-profile" element={} />

        <Route path="/patients" element={} />

        <Route path="/patients/:id" element={} />

        <Route path="/patients/create" element={} />

        <Route path="/trackings" element={} />

        <Route path="/trackings/:id" element={} />

        <Route path="/trackings/create" element={} />

        <Route path="/professionals" element={} />

        <Route path="/institutions" element={} />

        <Route path="/institutions/:id" element={} />

        <Route path="/institutions/create" element={} />

        <Route path="/terms" element={} />

        <Route path="/about-us" element={} />

      </Routes>

      {/* 

    / ✅
    /admin ✅
    /login: componente, path, html ✅
    /register: componente, path, html ✅
    /home: componente, path, html ✅
    /user ¿No se donde se renderiza?
    /users✅
    /users/:id : componente, path ¿Tampoco se como se llega a ese endpoint? ✅
    /edit-profile ( previo users/perfil/edit ) ✅


    /patients ✅
    /patients/:id✅
    /patients/create✅
    /trackings  (previo /therapy )✅
    /trackings/:id  (previo /therapy/:id)✅
    /trackings/create (previo /therapy/create)✅
    /professionals✅
    /institutions✅
    /institution/:id✅
    /institution/create✅
    /terms (previo """"/THERMS"""")✅
    /about-us (previo /aboutus)✅
    
    /export/therapy

    /admin: html

    /patient   ruta que pertenece a la aplicacion para pacientes
    
    */}
    </>
  );
}

export default App;
