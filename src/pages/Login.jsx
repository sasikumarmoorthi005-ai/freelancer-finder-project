import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState(""); const navigate = useNavigate();
  const submit = (event) => { event.preventDefault(); if (email.trim()) navigate("/dashboard"); };
  return <div className="auth-page"><div className="auth-card"><Link to="/" className="logo"><span>✦</span> Skill<span>Hub</span></Link><h1>Welcome back</h1><p>Log in to continue your journey.</p><form onSubmit={submit}><label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label><label>Password<input required type="password" placeholder="Your password" /></label><div className="form-row"><label className="checkbox"><input type="checkbox" /> Remember me</label><a href="mailto:hello@skillhub.example">Forgot password?</a></div><button className="button button--full">Log in</button></form><small>Don't have an account? <Link to="/register">Create one</Link></small></div></div>;
}
export default Login;
