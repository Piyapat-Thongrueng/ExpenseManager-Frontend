import logo from "../assets/wallet.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img
        src={logo}
        alt="Logo"
        width={52}
        height={52}
      />
    </a>
  );
};

export default Logo;
