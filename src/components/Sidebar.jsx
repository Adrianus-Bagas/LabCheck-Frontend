import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SideBar({ role }) {

  const { handleLogout } = useAuth();
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <label
            htmlFor="my-drawer-2"
            className="bg-yellow-200 ml-4 p-3 drawer-button lg:hidden text-black"
          >
            Menu
          </label>
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-yellow-100 text-black">
            {role === "admin" ? 
            <>
              <li>
                <Link to={"/admin/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/admin/user"}>User</Link>
              </li>
              <li>
                <Link>Kategori</Link>
              </li>
              <li>
                <Link>Produk</Link>
              </li>
              <li>
                <Link>Pesanan</Link>
              </li>
            </> : 
            <>
              <li>
                <Link>Keranjang</Link>
              </li>
              <li>
                <Link>Produk</Link>
              </li>
              <li>
                <Link>Pesanan</Link>
              </li>
            </>
            }
            <li>
              <Link>Ubah Profil</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Keluar</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
