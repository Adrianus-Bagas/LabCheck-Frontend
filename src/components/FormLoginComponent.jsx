import useForm from "../hooks/useForm";
import useLogin from "../hooks/useLogin";

function FormLoginComponent(){

    const { formInput, handleInput } = useForm({
        username: "",
        password: ""
    });

    const { handleLogin } = useLogin(formInput);

    return <>
        <h1>LabCheck</h1>
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

export default FormLoginComponent;