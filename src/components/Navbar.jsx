import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return <header className="navbar"><div className="container navbar__inner">
    <Link to="/" className="logo"><span>✦</span> Skill<span>Hub</span></Link>
    <nav><NavLink to="/explore">Explore</NavLink><NavLink to="/freelancers">Find Freelancers</NavLink><NavLink to="/dashboard">My Dashboard</NavLink></nav>
    <div className="nav-actions"><Link to="/login" className="text-button">Log in</Link><Link to="/register" className="button button--small">Join SkillHub</Link></div>
  </div></header>;
}
export default Navbar;
