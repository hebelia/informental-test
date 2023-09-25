

const Register = () => {
    return (
        <div>
            <p>Aquí se registran los profesionales y pacientes</p>
            <p>Se utiliza el mismo endpoint "/register" tanto para profesionales como para instituciones ¿Debería ser así?</p>
        
            <div className="container">
                <h1 className="mt-5">Registro de Usuario</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contraseña" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="contraseña" name="contraseña" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmar-contraseña" className="form-label">Confirmar Contraseña:</label>
                        <input type="password" className="form-control" id="confirmar-contraseña" name="confirmar-contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>
    )
}

export default Register