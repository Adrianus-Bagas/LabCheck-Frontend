import { Outlet } from "react-router-dom";

function Background() {
  return (
    <>
      <main className="background">
        <Outlet />
      </main>
    </>
  );
}

export default Background;
