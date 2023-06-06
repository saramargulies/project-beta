import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
              <ul className="dropdown-menu">
                <li>
                    <Link to='/technicians' className="dropdown-item" aria-current="page">Technicians</Link>
                </li>
                <li>
                    <Link to='/technicians/create' className="dropdown-item" aria-current="page">Add a Technician</Link>
                </li>
                <li>
                    <Link to='/appointments' className="dropdown-item" aria-current="page">Service Appointments</Link>
                </li>
                <li>
                    <Link to='/appointments/create' className="dropdown-item" aria-current="page">Create a Service Appointment</Link>
                </li>
                <li>
                    <Link to='/appointments/history' className="dropdown-item" aria-current="page">Service History</Link>
                </li>
              </ul>
              </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </a>
              <ul className="dropdown-menu">
                <li>
                    <Link to='/' className="dropdown-item" aria-current="page">----</Link>
                </li>
              </ul>
              </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </a>
              <ul className="dropdown-menu">
                <li>
                    <Link to='/' className="dropdown-item" aria-current="page">Manufacturers</Link>
                </li>
                <li>
                    <Link to='/' className="dropdown-item" aria-current="page">Create a Manufacturers</Link>
                </li>
              </ul>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
