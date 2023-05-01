import { Navigate, Outlet } from "react-router-dom";

function PageHandling({allowedRole}) {

    const token = localStorage.getItem('Token');
    const role = localStorage.getItem('Role');

    if(token === null){
        return <Navigate to="/"/>
    }else{
        if(role === allowedRole){
            return <Outlet/>
        }else{
            return <Navigate to={`/${role}/dashboard`}/>
        }
    }
}

export default PageHandling;