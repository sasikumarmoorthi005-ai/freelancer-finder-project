import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
function Explore() {
  return <section className="listing-page container"><div className="listing-header"><div><span className="eyebrow">DISCOVER GREAT WORK</span><h1>Explore services</h1><p>Find exactly what you need from independent experts.</p></div></div><div className="listing-toolbar"><strong>{services.length} services available</strong></div><div className="service-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div></section>;
}
export default Explore;
