import { useMemo, useState } from "react";
import FreelancerCard from "../components/FreelancerCard";
import { freelancers } from "../data/freelancers";
function Freelancers() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => freelancers.filter((item) => `${item.name} ${item.role} ${item.location}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return <section className="listing-page container"><div className="listing-header"><div><span className="eyebrow">THE SKILLHUB COMMUNITY</span><h1>Meet the freelancers</h1><p>Work with independent talent who care about your success.</p></div><div className="inline-search"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name or skill" /></div></div><div className="listing-toolbar"><strong>{filtered.length} freelancers found</strong><span>Sort by <select defaultValue="recommended"><option value="recommended">Recommended</option><option value="rating">Top rated</option><option value="price">Price: low to high</option></select></span></div><div className="freelancer-grid">{filtered.map((freelancer) => <FreelancerCard key={freelancer.id} freelancer={freelancer} />)}</div></section>;
}
export default Freelancers;
