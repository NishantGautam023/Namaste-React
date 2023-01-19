import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom"
const Error = () => {{
    const err = useRouteError();
    return (
        <> 
            <h1>Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status + " :  " + err.statusText}</h2>
            
            <Link to="/" className="logo-wrap">
                <h4>Go back </h4>
            </Link>

      
        </>
    )
}}


export default Error;