import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ServiceCard from "../components/ServiceCard";
import { categories } from "../data/categories";
import { services } from "../data/services";
function Home() {
  return <div>
    <section className="hero"><div className="hero__content"><div className="eyebrow">THE FUTURE OF FREELANCE WORK</div><h1>Find the right talent.<br /><em>Build what's next.</em></h1><p>Connect with skilled freelancers who bring your ideas to life. Quality work, transparent pricing, and a community you can trust.</p></div></section>
    <section className="section container"><div className="section-heading"><div><span className="eyebrow">EXPLORE POSSIBILITIES</span><h2>What do you need help with?</h2></div><Link to="/explore">View all categories ↗</Link></div><div className="category-grid">{categories.slice(0, 4).map((category) => <CategoryCard key={category.id} category={category} />)}</div></section>
    <section className="section section--tint"><div className="container"><div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>Popular services</h2></div><Link to="/explore">See all services ↗</Link></div><div className="service-grid">{services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} />)}</div></div></section>
    <section className="cta container"><div><span className="eyebrow">ARE YOU A CREATIVE?</span><h2>Turn your skills into<br /><em>something bigger.</em></h2><p>Join thousands of freelancers earning on their own terms.</p><Link to="/register" className="button">Start selling your skills ↗</Link></div></section>
  </div>;
}
export default Home;
