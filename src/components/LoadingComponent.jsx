import { Oval } from "react-loader-spinner";

function LoadingComponent(){
    return <Oval
    height={80}
    width={80}
    color="#000000"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#fac905"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
}

export default LoadingComponent;