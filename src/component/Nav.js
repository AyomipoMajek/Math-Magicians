import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1 className='theHeading'>
        Math Magicians
      </h1>
      <Link to="/">Home</Link>
      <Link to="Calculator">Calculator</Link>
      <Link to="Quote">Quote</Link>
    </nav>
  );
}

export default Nav;
