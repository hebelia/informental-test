const Login = () => {
  const cardStyle = {
    color: "red",
    backgroundColor: "blue",
  };

  return (
    <div>
      <div className="card">
        <p> SOY EL BENDITO LOGIN</p>
        <p>Aquí se renderiza: formulario: nombre usuario y contraseña</p>
        <p>Hola!</p>
        <p>maldito seas rebase</p>
        <form>
          //un cambio
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </div >
  );
};

export default Login;
