import logo from "../assets/wallet.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="Logo" width={52} height={52} />
    </NavLink>
  );
};

export default Logo;
