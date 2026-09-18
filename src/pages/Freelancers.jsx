import { useEffect, useState } from "react";
import FreelancerCard from "../components/FreelancerCard";
import { getFreelancers } from "../data/freelancerStore";
function Freelancers() {
  const [freelancers, setFreelancers] = useState(getFreelancers);
  useEffect(() => {
    const updateFreelancers = () => setFreelancers(getFreelancers());
    window.addEventListener("freelancers-updated", updateFreelancers);
    return () => window.removeEventListener("freelancers-updated", updateFreelancers);
  }, []);
  return <section className="listing-page container"><div className="listing-header"><div><span className="eyebrow">THE SKILLHUB COMMUNITY</span><h1>Meet the freelancers</h1><p>Work with independent talent who care about your success.</p></div></div><div className="listing-toolbar"><strong>{freelancers.length} freelancers available</strong></div><div className="freelancer-grid">{freelancers.map((freelancer) => <FreelancerCard key={freelancer.id} freelancer={freelancer} />)}</div></section>;
}
export default Freelancers;
