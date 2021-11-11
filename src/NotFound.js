import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>sorry</h2>
            <p>that page can not be found </p>
            <Link to="/">back to Home page...</Link>
        </div>
     );
}
 
export default NotFound;