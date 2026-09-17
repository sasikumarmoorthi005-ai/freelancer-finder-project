import { Link } from "react-router-dom";
function Footer() {
  return <footer className="footer"><div className="container footer__grid"><div><Link to="/" className="logo"><span>✦</span> Skill<span>Hub</span></Link><p>The smarter way to find great freelance talent.</p></div><div><h4>For clients</h4><Link to="/explore">Browse services</Link><Link to="/freelancers">Find freelancers</Link></div><div><h4>For freelancers</h4><Link to="/register">Become a seller</Link><Link to="/dashboard">Dashboard</Link></div><div><h4>Support</h4><a href="mailto:hello@skillhub.example">Help center</a><a href="mailto:hello@skillhub.example">Contact us</a></div></div><div className="container footer__bottom">© 2026 SkillHub <span>Made for ambitious teams and independent talent.</span></div></footer>;
}
export default Footer;
