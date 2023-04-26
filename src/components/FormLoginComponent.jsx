import useForm from "../hooks/useForm";
import useLogin from "../hooks/useLogin";

function FormLoginComponent() {
  const { formInput, handleInput } = useForm({
    username: "",
    password: "",
  });

  const { handleLogin } = useLogin(formInput);

  return (
    <>
      <div className="h-screen">
        <div className="h-full grid place-content-center">
          <div className="mx-auto text-center">
            <h1 className="text-5xl">LabCheck</h1>
          </div>
          <div className="flex items-center justify-center lg:justify-center">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleLogin}>
                <div className="relative z-0 w-3/4 mb-6 group">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formInput.username}
                    onChange={(event) =>
                      handleInput("username", event.target.value)
                    }
                    required
                  />
                  <label
                    htmlFor="username"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Username
                  </label>
                </div>

                <div className="relative z-0 w-3/4 mb-6 group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formInput.password}
                    onChange={(event) =>
                      handleInput("password", event.target.value)
                    }
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
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
