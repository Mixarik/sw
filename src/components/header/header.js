import './header.css'


const Header = () => {
  return (
    <div className='header'>
      <h3>
        <a href="#">StarDB</a>
      </h3>
      <div className='header-list'>
        <ul>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Header