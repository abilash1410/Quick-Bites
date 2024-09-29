import { useRouteError } from "react-router-dom";


const Error = () => {
    const errorInfo = useRouteError ();
    console.log("errorInfo -->"+JSON.stringify(errorInfo));
    return(<div>
            <h1>{errorInfo.status}</h1>
            <h2>{errorInfo.statusText}</h2>
            <h3>{errorInfo.Error}</h3>
    </div>)
}
export default Error;