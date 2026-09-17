import { Link } from "react-router-dom";

function FreelancerCard({ freelancer }) {
  return <article className="freelancer-card">
    <div className="freelancer-card__top"><img src={freelancer.image} alt={freelancer.name} /><span className={freelancer.online ? "status-dot" : "status-dot offline"} /></div>
    <h3>{freelancer.name}</h3><p className="muted">{freelancer.role}</p>
    <div className="rating"><span>★</span> {freelancer.rating} <small>({freelancer.reviews})</small></div>
    <p className="location">⌖ {freelancer.location}</p>
    <div className="card-bottom"><strong>₹{freelancer.price.toLocaleString()}<small> / project</small></strong><Link to={`/freelancers/${freelancer.id}`}>View profile</Link></div>
  </article>;
}
export default FreelancerCard;
