import {Link} from 'react-router-dom';
import "../Global/Css/Nav.css"

export default function Nav(){
    return (
        <nav>
        <ul className="navbar">
          <li className="navbar-list">
            <Link className="navbar-list-link" to="/">Home</Link>
          </li>
          <li className="navbar-list">
            <Link className="navbar-list-link"to="/about">About</Link>
          </li>
          <li className="navbar-list">
            <Link className="navbar-list-link"to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    )
};