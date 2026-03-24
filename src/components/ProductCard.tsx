import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
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
          {/* Discount badge - Flipkart/Amazon style */}
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
            {product.discount}% OFF
          </span>
          {product.isNew && (
            <span className="absolute top-10 left-3 gradient-primary text-primary-foreground text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
              NEW
            </span>
          )}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-card hover:scale-110 active:scale-95"
          >
            <Heart size={16} className={wishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"} />
          </button>
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 left-3 right-3 gradient-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} /> Quick Add
          </button>
        </div>
        <div className="p-3.5">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{product.category}</p>
          <h3 className="font-semibold text-foreground text-sm leading-tight mb-1.5 line-clamp-1">{product.name}</h3>
          {/* Price section - Amazon/Flipkart style */}
          <div className="flex items-center gap-2 mb-1.5">
            <p className="font-bold text-foreground text-base">₹{product.price.toLocaleString("en-IN")}</p>
            <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</p>
            <span className="text-[10px] font-bold text-success">{product.discount}% off</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5 bg-success/10 text-success text-[10px] font-bold px-1.5 py-0.5 rounded">
                <span>{product.rating}</span>
                <Star size={9} className="fill-current" />
              </div>
            </div>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((c) => (
                <span key={c.name} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
