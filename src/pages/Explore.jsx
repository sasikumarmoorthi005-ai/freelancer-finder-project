import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { categories } from "../data/categories";
function Explore() {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const filtered = useMemo(() => services.filter((item) => `${item.title} ${item.category} ${item.seller}`.toLowerCase().includes(search.toLowerCase()) && (!category || item.category === category)), [search, category]);
  return <section className="listing-page container"><div className="listing-header"><div><span className="eyebrow">DISCOVER GREAT WORK</span><h1>Explore services</h1><p>Find exactly what you need from independent experts.</p></div><div className="inline-search"><span>⌕</span><input value={search} onChange={(event) => setParams({ search: event.target.value, category })} placeholder="Search services" /></div></div><div className="category-strip">{categories.map((item) => <button className={category === item.name ? "active" : ""} onClick={() => setParams({ search, category: category === item.name ? "" : item.name })} key={item.id}>{item.icon} {item.name}</button>)}</div><div className="listing-toolbar"><strong>{filtered.length} services found</strong><span>Sort by <select defaultValue="recommended"><option>Recommended</option><option>Price</option><option>Rating</option></select></span></div><div className="service-grid">{filtered.map((service) => <ServiceCard key={service.id} service={service} />)}</div>{!filtered.length && <div className="empty-state"><h2>No services found</h2><p>Try a different search or category.</p></div>}</section>;
}
export default Explore;
