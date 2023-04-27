import DashboardAdminContent from "../components/DashboardAdminContent";
import SideBar from "../components/Sidebar";

function DashboardAdmin(){
    return <>
        <div>
            <SideBar role={localStorage.getItem('Role')}/>
            <DashboardAdminContent/>
        </div>
    </>
}

export default DashboardAdmin;