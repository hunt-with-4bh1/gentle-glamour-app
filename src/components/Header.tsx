import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";

const Header = () => {
  const totalItems = useCartStore((s) => s.totalItems());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          <span className="text-primary">LUXE</span>WEAR
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link to="/products?category=Jackets" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Jackets
          </Link>
          <Link to="/products?category=Shoes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shoes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl hover:bg-accent transition-colors">
            <Search size={20} className="text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-accent transition-colors">
            <Heart size={20} className="text-muted-foreground" />
          </button>
          <Link to="/cart" className="p-2 rounded-xl hover:bg-accent transition-colors relative">
            <ShoppingBag size={20} className="text-muted-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 gradient-primary rounded-full text-xs text-primary-foreground flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 rounded-xl hover:bg-accent transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="text-sm font-medium py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/products?category=Jackets" className="text-sm font-medium py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>Jackets</Link>
            <Link to="/products?category=Shoes" className="text-sm font-medium py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>Shoes</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
