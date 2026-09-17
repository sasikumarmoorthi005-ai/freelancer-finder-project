import { Link } from "react-router-dom";
function CategoryCard({ category }) {
  return <Link to={`/explore?category=${encodeURIComponent(category.name)}`} className="category-card">
    <span className={`category-icon category-icon--${category.color}`}>{category.icon}</span>
    <span><strong>{category.name}</strong><small>{category.count}+ services</small></span>
    <span className="arrow">↗</span>
  </Link>;
}
export default CategoryCard;
