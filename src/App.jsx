import "./App.css";
import { Route, Routes } from "react-router-dom";
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Landing</h1>} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
      {/* 
    
    /
    /login
    /register
    /home
    /user
    /users/:id
    /users/edit-profile

    /patient

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

    /patient   ruta que pertenece a la aplicacion para pacientes
    
    */}
    </>
  );
}

export default App;
