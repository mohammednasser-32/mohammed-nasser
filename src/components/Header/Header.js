import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className="navbar d-flex justify-content-end p-4">
      <Nav>
        <NavLink className="navlink" to='/'>Home</NavLink>
        <NavLink className="navlink" to='/experience'>Experience</NavLink>
        <NavLink className="navlink" to='/about'>About</NavLink>
        <NavLink className="navlink" to='/comics'>Tech Comics</NavLink>
      </Nav>
    </div>
  );
}

export default Header;
