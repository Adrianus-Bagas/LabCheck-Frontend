import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoadingAction, LoginAction, LogoutAction } from '../action/Auth';
import AuthService from '../service/Auth';
import Swal from 'sweetalert2';

function useAuth(body){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();
        dispatch(LoadingAction(true));

        try{
        const response = await AuthService.LoginService(body);

        localStorage.setItem('Token', response.data.token);
        localStorage.setItem('User', response.data.username);
        localStorage.setItem('Email', response.data.email);
        localStorage.setItem('Role', response.data.role);
    
        dispatch(LoginAction(response.data.token));

        console.log(response);
        dispatch(LoadingAction(false));

        if(response.data.role === "admin"){
            navigate("/admin/dashboard");
        }else{
            navigate("/customer/dashboard");
        }
    } catch(error){
        Swal.fire({
            title: "Login Gagal",
            icon: "error",
            text: "Pastikan Username dan Password sudah benar",
            confirmButtonText: "Kembali ke Login",
            allowOutsideClick: false
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.reload();
            }
        });
        console.log(error);
    }
    }

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.clear();
        dispatch(LogoutAction());
        navigate("/");
    }
    return { navigate, dispatch, handleLogin, handleLogout };
}

export default useAuth;
