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
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Take Attendance
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item">
                  <Link to='/technicians' className="nav-link active" aria-current="page">View Techs</Link>
              </li>
              <li className="nav-item">
                  <Link to='/technicians/create' className="nav-link active" aria-current="page">Add a Tech</Link>
              </li>
              <li className="nav-item">
                  <Link to='/appointments' className="nav-link active" aria-current="page">View Appointments</Link>
              </li>
              <li className="nav-item">
                  <Link to='/appointments/create' className="nav-link active" aria-current="page">Create Appointment</Link>
              </li>
              <li className="nav-item">
                  <Link to='/appointments/history' className="nav-link active" aria-current="page">Service History</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
