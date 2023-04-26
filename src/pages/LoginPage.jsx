import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import { useEffect } from "react";
import FormLoginComponent from "../components/FormLoginComponent";

function LoginPage(){
    const authState = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(authState.token !== null){
            localStorage.getItem('Role') === "admin" ? navigate("/admin") : navigate("/customer");
        }
    }, []);

    return authState.isLoading === true
    ? <LoadingComponent/>
    : <FormLoginComponent/>
}

export default LoginPage;