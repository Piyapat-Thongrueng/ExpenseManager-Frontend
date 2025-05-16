import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              แดชบอร์ดค่าใช้จ่าย
            </NavLink>
            <NavLink className="nav-link" to="/new">
              เพิ่มรายการค่าใช้จ่าย
            </NavLink>
            <NavLink className="nav-link" to="reports">
              รายงานสรุปค่าใช้จ่าย
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://www.youtube.com/watch?v=uI-bR1FPoFE"
            >
              ข่าวสาร
            </NavLink>
          </div>
        </div>
        <div className="d-flex gap-2" role="search">
          <NavLink className="btn btn-light" to="/login">
            ลงชื่อเข้าใช้
          </NavLink>
          <NavLink className="btn btn-success" to="/register">
            ลงทะเบียน
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
