import './header.css'
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <div className='header-list'>
        <ul>
          <li>
            <Link to="/persons">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Header