import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoadingAction, LoginAction } from '../action/Auth';
import AuthService from '../service/Auth';

function useLogin(body){

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
            navigate("/admin");
        }else{
            navigate("/customer");
        }
    } catch(error){
        console.log(error);
    }
    }
    return { navigate, dispatch, handleLogin };
}

export default useLogin;
