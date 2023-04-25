import { useSelector } from "react-redux";
import { Form, Navigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import useForm from "../hooks/useForm";

function LoginPage(){
    const authState = useSelector(state => state.auth);

    if(authState.token !== null){
        if(localStorage.getItem('Role') === "admin") return <Navigate to="/admin"/>;
        return <Navigate to="/customer"/>;
    }
    const { formInput, handleInput } = useForm({
        username: "",
        password: ""
    });
    const { handleLogin } = useLogin(formInput);


    return authState.isLoading === true
    ? <h1>Loading...</h1>
    : <>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label>
                Username : &nbsp;
                <input type="text" value={formInput.username} onChange={(event)=>handleInput('username',event.target.value)}/>
            </label>
            <br />
            <br />
            <label>
                Password : &nbsp;
                <input type="password" value={formInput.password} onChange={(event)=>handleInput('password',event.target.value)}/>
            </label>
            <br />
            <br />
            <button>Login</button>
        </form>
    </>
}

export default LoginPage;