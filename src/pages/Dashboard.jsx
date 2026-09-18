import { useState } from "react";
import { Link } from "react-router-dom";
import { getFreelancers, saveFreelancers } from "../data/freelancerStore";

const emptyForm = {
  name: "",
  role: "",
  category: "",
  location: "",
  price: "",
  image: "",
  bio: "",
  skills: "",
};

function Dashboard() {
  const [freelancerList, setFreelancerList] = useState(getFreelancers);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setForm((current) => ({ ...current, image: reader.result })));
    reader.readAsDataURL(file);
  };

  const saveFreelancer = (event) => {
    event.preventDefault();
    if (!form.image) return;
    const freelancer = {
      id: editingId ?? Math.max(0, ...freelancerList.map((item) => item.id)) + 1,
      ...form,
      price: Number(form.price),
      rating: editingId ? freelancerList.find((item) => item.id === editingId).rating : 5,
      reviews: editingId ? freelancerList.find((item) => item.id === editingId).reviews : 0,
      online: true,
      skills: form.skills.split(",").map((skill) => skill.trim()).filter(Boolean),
    };

    const nextFreelancers = editingId
      ? freelancerList.map((item) => item.id === editingId ? freelancer : item)
      : [...freelancerList, freelancer];
    setFreelancerList(nextFreelancers);
    saveFreelancers(nextFreelancers);
    setForm(emptyForm);
    setEditingId(null);
  };

  const editFreelancer = (freelancer) => {
    setEditingId(freelancer.id);
    setForm({ ...freelancer, skills: freelancer.skills.join(", ") });
  };

  const deleteFreelancer = (id) => {
    const nextFreelancers = freelancerList.filter((item) => item.id !== id);
    setFreelancerList(nextFreelancers);
    saveFreelancers(nextFreelancers);
    if (editingId === id) {
      setEditingId(null);
      setForm(emptyForm);
    }
  };

  return <section className="dashboard container"><div className="dashboard-welcome"><div><span className="eyebrow">YOUR WORKSPACE</span><h1>Good morning, Alex.</h1><p>Keep track of your projects and discover your next opportunity.</p></div><Link to="/explore" className="button">Find a service ↗</Link></div><div className="stats-grid"><div><span>ACTIVE PROJECTS</span><strong>03</strong><small>+1 this week</small></div><div><span>COMPLETED</span><strong>12</strong><small>All time</small></div><div><span>SAVED SERVICES</span><strong>08</strong><small>Ready when you are</small></div></div><div className="panel freelancer-manager"><div className="panel-heading"><div><span className="eyebrow">FREELANCER DIRECTORY</span><h2>Manage freelancers</h2></div><strong>{freelancerList.length} profiles</strong></div><form className="freelancer-form" onSubmit={saveFreelancer}><input name="name" value={form.name} onChange={updateField} placeholder="Name" required /><input name="role" value={form.role} onChange={updateField} placeholder="Role" required /><input name="category" value={form.category} onChange={updateField} placeholder="Category" required /><input name="location" value={form.location} onChange={updateField} placeholder="Location" required /><input name="price" type="number" min="0" value={form.price} onChange={updateField} placeholder="Price" required /><label className="image-upload">Profile image<input type="file" accept="image/*" onChange={uploadImage} required={!editingId} /></label>{form.image && <img className="image-preview" src={form.image} alt="Selected profile preview" />}<input name="skills" value={form.skills} onChange={updateField} placeholder="Skills (comma separated)" required /><textarea name="bio" value={form.bio} onChange={updateField} placeholder="Short bio" required /><div className="form-actions"><button className="button" type="submit">{editingId ? "Update freelancer" : "Add freelancer"}</button>{editingId && <button className="button button--muted" type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }}>Cancel</button>}</div></form><div className="manager-list">{freelancerList.map((freelancer) => <div className="manager-row" key={freelancer.id}><img src={freelancer.image} alt="" /><div><strong>{freelancer.name}</strong><small>{freelancer.role} · ₹{freelancer.price.toLocaleString()}</small></div><div className="manager-actions"><button type="button" onClick={() => editFreelancer(freelancer)}>Edit</button><button type="button" onClick={() => deleteFreelancer(freelancer.id)}>Delete</button></div></div>)}</div></div></section>;
}
export default Dashboard;
