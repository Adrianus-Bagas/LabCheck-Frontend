import { Outlet } from "react-router-dom";

function Background() {
  return (
    <>
      <main className="background h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Background;
