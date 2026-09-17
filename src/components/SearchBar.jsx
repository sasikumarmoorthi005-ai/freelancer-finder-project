import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ compact = false, initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    navigate(`/explore${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ""}`);
  };
  return (
    <form className={`search-bar ${compact ? "search-bar--compact" : ""}`} onSubmit={submit}>
      <span className="search-icon">⌕</span>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What service are you looking for today?" aria-label="Search services" />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;
