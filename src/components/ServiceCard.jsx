import { Link } from "react-router-dom";
function ServiceCard({ service }) {
  return <article className="service-card">
    <Link to={`/services/${service.id}`}><img src={service.image} alt={service.title} /></Link>
    <div className="service-card__body">
      <div className="seller-line"><span className="mini-avatar">{service.seller.charAt(0)}</span><span>{service.seller}</span><span className="verified">✓</span></div>
      <Link to={`/services/${service.id}`} className="service-title">{service.title}</Link>
      <div className="rating"><span>★</span> {service.rating} <small>({service.reviews})</small></div>
      <div className="service-footer"><small>STARTING AT</small><strong>₹{service.price.toLocaleString()}</strong></div>
    </div>
  </article>;
}
export default ServiceCard;
