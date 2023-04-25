import { Navigate, Outlet } from "react-router-dom";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardCustomer from "../pages/DashboardCustomer";

function PageHandling({allowedRole}) {

    const token = localStorage.getItem('Token');
    const role = localStorage.getItem('Role');

    if(token === null){
        return <Navigate to="/"/>
    }else{
        if(role === allowedRole){
            return <Outlet/>
        }else{
            return <Navigate to={`/${role}`}/>
        }
    }
}

export default PageHandling;