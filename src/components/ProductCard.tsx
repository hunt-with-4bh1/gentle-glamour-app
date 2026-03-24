import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useWishlistStore } from "@/stores/useWishlistStore";
import { useCartStore } from "@/stores/useCartStore";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { toggle, isWishlisted } = useWishlistStore();
  const addItem = useCartStore((s) => s.addItem);
  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[0], product.colors[0].name);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card card-shadow transition-all duration-300 group-hover:card-shadow-hover group-hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              NEW
            </span>
          )}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-card hover:scale-110"
          >
            <Heart size={16} className={wishlisted ? "fill-primary text-primary" : "text-muted-foreground"} />
          </button>
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 left-3 right-3 gradient-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:shadow-lg"
          >
            Quick Add
          </button>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-semibold text-foreground text-sm leading-tight mb-2 line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="font-bold text-foreground">${product.price.toFixed(2)}</p>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((c) => (
                <span key={c.name} className="w-3.5 h-3.5 rounded-full border-2 border-border" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
