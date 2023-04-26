import { RotatingLines } from "react-loader-spinner";

function LoadingComponent(){
  return <>
    <div className="h-screen grid place-content-center">
      <RotatingLines
        strokeColor="yellow"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  </>
}

export default LoadingComponent;