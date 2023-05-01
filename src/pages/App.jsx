import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import PageHandling from "../components/PageHandling";
import DashboardAdmin from "./DashboardAdmin";
import DashboardCustomer from "./DashboardCustomer";
import Background from "../components/Background";
import '../styles/App.css'
import UserAdmin from "./UserAdmin";
import DashboardAdminContent from "../components/DashboardAdminContent";


function App(){

    return (
        <Routes>
            <Route element={<Background/>}>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route element={<PageHandling allowedRole={"admin"}/>}>
                    <Route path="admin" element={<DashboardAdmin/>}>
                        <Route path="dashboard" element={<DashboardAdminContent/>}/>
                        <Route path="user" element={<UserAdmin/>}/>
                    </Route>
                </Route>
                <Route element={<PageHandling allowedRole={"customer"}/>}>
                    <Route path="customer" element={<DashboardCustomer/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;