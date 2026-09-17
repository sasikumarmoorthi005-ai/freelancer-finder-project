import { Link, useParams } from "react-router-dom";
import { freelancers } from "../data/freelancers";
function FreelancerProfile() {
  const { id } = useParams();
  const freelancer = freelancers.find((item) => item.id === Number(id));
  if (!freelancer) return <section className="empty-state container"><h1>Freelancer not found</h1><Link to="/freelancers" className="button">Browse freelancers</Link></section>;
  return <section className="profile-page container"><Link to="/freelancers" className="back-link">← Back to freelancers</Link><div className="profile-layout"><aside className="profile-card"><div className="profile-photo"><img src={freelancer.image} alt={freelancer.name} /><span className="status-dot" /></div><h1>{freelancer.name}</h1><p className="muted">{freelancer.role}</p><p className="location">⌖ {freelancer.location}</p><div className="rating"><span>★</span> {freelancer.rating} <small>{freelancer.reviews} reviews</small></div><button className="button button--full" onClick={() => alert("Your message window is ready!")}>Contact {freelancer.name.split(" ")[0]}</button></aside><div className="profile-content"><span className="eyebrow">ABOUT THE FREELANCER</span><h2>Hi, I'm {freelancer.name.split(" ")[0]}.</h2><p>{freelancer.bio}</p><h3>Skills</h3><div className="skill-list">{freelancer.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="profile-note"><strong>Starting at ₹{freelancer.price.toLocaleString()}</strong><span>Typical delivery: 3–5 days</span></div></div></div></section>;
}
export default FreelancerProfile;
