import Wrapper from '../assets/wrappers/Navbar'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">MixMaster</div>
        <div className="nav-links">
          <Link className="nav-link">Home</Link>
       
          <Link className="nav-link" to='/about'>About</Link>
        
          <Link className="nav-link" to='/newsletter'>Newsletter</Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar
