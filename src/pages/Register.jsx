import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const [name, setName] = useState(""); const navigate = useNavigate();
  const submit = (event) => { event.preventDefault(); if (!name.trim()) return; navigate("/dashboard"); };
  return <div className="auth-page"><div className="auth-card"><Link to="/" className="logo">Skill<span>Hub</span></Link><h1>Join the community</h1><p>Create an account and start building what's next.</p><form onSubmit={submit}><label>Full name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Password<input required type="password" minLength="6" placeholder="At least 6 characters" /></label><button className="button button--full">Create account</button></form><small>Already have an account? <Link to="/login">Log in</Link></small></div></div>;
}
export default Register;
