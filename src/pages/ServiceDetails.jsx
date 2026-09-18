import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import { getFreelancers } from "../data/freelancerStore";
function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === Number(id));
  if (!service) return <section className="empty-state container"><h1>Service not found</h1><Link to="/explore" className="button">Explore services</Link></section>;
  const seller = getFreelancers().find((item) => item.id === service.sellerId);
  return <section className="details-page container"><Link to="/explore" className="back-link">← Back to explore</Link><div className="details-grid"><div><img className="details-image" src={service.image} alt={service.title} /><div className="details-copy"><span className="eyebrow">{service.category}</span><h1>{service.title}</h1><div className="seller-line"><img className="avatar" src={seller.image} alt="" /><b>{seller.name}</b><span className="rating"><span>★</span> {service.rating} ({service.reviews})</span></div><h2>About this service</h2><p>{seller.bio} I tailor every project to your goals and make sure the final result feels unmistakably yours.</p></div></div><aside className="purchase-card"><span className="muted">STARTING AT</span><h2>₹{service.price.toLocaleString()}</h2><p>Professional quality, clear communication, and revisions included.</p><button className="button button--full" onClick={() => alert("Your order request has been started!")}>Continue</button><ul><li>✓ Delivery in 3–5 days</li><li>✓ Secure payments</li><li>✓ Satisfaction guaranteed</li></ul></aside></div></section>;
}
export default ServiceDetails;
