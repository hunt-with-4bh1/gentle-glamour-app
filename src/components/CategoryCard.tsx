import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
}

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => (
  <Link
    to={`/products?category=${name}`}
    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group"
  >
    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="font-semibold text-sm text-foreground">{name}</span>
    <span className="text-xs text-muted-foreground">{count} items</span>
  </Link>
);

export default CategoryCard;
