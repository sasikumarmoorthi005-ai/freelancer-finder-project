import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ServiceDetails from "./pages/ServiceDetails";
import Freelancers from "./pages/Freelancers";
import FreelancerProfile from "./pages/FreelancerProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<Layout><Explore /></Layout>} />
        <Route path="/services/:id" element={<Layout><ServiceDetails /></Layout>} />
        <Route path="/freelancers" element={<Layout><Freelancers /></Layout>} />
        <Route path="/freelancers/:id" element={<Layout><FreelancerProfile /></Layout>} />
        <Route path="/profile/:id" element={<Layout><FreelancerProfile /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="*" element={<Layout><Explore /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
