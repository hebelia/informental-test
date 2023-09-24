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
import Users from "./views/Users/Users";
import EditUserById from "./views/EditUserById/EditUserById";
import EditProfile from "./views/EditProfile/EditProfile";
import Patients from "./views/Patients/Patients";
import CreatePatient from "./views/CreatePatient/CreatePatient";
import TrackingById from "./views/TrackingById/TrackingById";
import CreateTracking from "./views/CreateTracking/CreateTracking";
import Institutions from "./views/Institutions/Institutions";
import InstitutionById from "./views/InstitutionById/InstitutionById";
import CreateInstitution from "./views/CreateInstitutions/CreateInstitution";
import Terms from "./views/Terms/Terms";
import AboutUs from "./views/AboutUs/AboutUs";

function App() {
  return (
    <>
    {/* le vamos a ir agregando las rutas que encontremos en el camino 👍🏻 */}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/users" element={<Users/>} />

        <Route path="/users/:id" element={<UserById />} />  {/* pagina que solo existe si el usuario existe/ no ha sido eliminado, si no existe el id muestra 404 error */}

        <Route path="/users/:id/edit" element={<EditUserById />} />  {/* si existe el user*/}

        <Route path="/home" element={<Home />} /> 
        
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/patients" element={<Patients/>} />

        <Route path="/patients/:id" element={<PatientById/>} />

        <Route path="/patients/create" element={<CreatePatient/>} />

        <Route path="/trackings" element={<Trackings/>} />

        <Route path="/trackings/:id" element={<TrackingById/>} />

        <Route path="/trackings/create" element={<CreateTracking/>} />

        <Route path="/professionals" element={<Professionals />} />

        <Route path="/institutions" element={<Institutions/>} />

        <Route path="/institutions/:id" element={<InstitutionById/>} />

        <Route path="/institutions/create" element={<CreateInstitution/>} />

        <Route path="/terms" element={<Terms/>} />

        <Route path="/about-us" element={<AboutUs/>} />

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

    USERS/PERFIL/EDIT === USERS/:ID/EDIT

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
