import { Link } from "react-router-dom";
function CategoryCard({ category }) {
  return <Link to="/explore" className="category-card">
    <span><strong>{category.name}</strong><small>{category.count}+ services</small></span>
  </Link>;
}
export default CategoryCard;
