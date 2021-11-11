import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <nav className= "navbar">
        <h1>benyamin blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
           
            <Link to="/create">Create</Link>
        </div>
            
            
        </nav>
     );
}

export default Navbar;