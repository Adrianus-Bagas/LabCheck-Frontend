import { Outlet } from "react-router-dom";
import DashboardAdminContent from "../components/DashboardAdminContent";
import SideBar from "../components/Sidebar";

function DashboardAdmin(){
    return <>
        <div>
            <SideBar role={localStorage.getItem('Role')}/>
        </div>
        <Outlet/>
    </>
}

export default DashboardAdmin;