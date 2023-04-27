import useForm from "../hooks/useForm";
import useAuth from "../hooks/useAuth";
import FormInput from "./FormInput";

function FormLoginComponent() {
  const { formInput, handleInput } = useForm({
    username: "",
    password: "",
  });

  const { handleLogin } = useAuth(formInput);

  return (
    <>
      <div className="h-screen">
        <div className="h-full grid place-content-center">
          <div className="mx-auto w-full bg-yellow-300 p-3 text-center">
            <h1 className="text-5xl font-bold">LabCheck</h1>
          </div>
          <div className="flex bg-yellow-100 p-3 items-center justify-center lg:justify-center">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="../src/assets/scientist.png"
                className="w-[85%]"
                alt="LabCheck"
              />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleLogin}>
                <div className="relative z-0 w-3/4 mb-6 group">
                  <FormInput 
                  type={"text"} 
                  value={formInput.username} 
                  onChange={(event)=>handleInput("username", event.target.value)}
                  label={"Username"}
                  />
                </div>

                <div className="relative z-0 w-3/4 mb-6 group">
                <FormInput 
                  type={"password"} 
                  value={formInput.password} 
                  onChange={(event)=>handleInput("password", event.target.value)}
                  label={"Password"}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    className="px-6 py-2.5 bg-yellow-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-300 hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    Masuk
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Belum punya akun ?
                    <a
                      href="#!"
                      className="ml-1 text-red-600 transition duration-150 ease-in-out hover:text-red-400 focus:text-red-400 active:text-red-500"
                    >
                      Daftar disini
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLoginComponent;