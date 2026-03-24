import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-foreground mb-4">
            <span className="text-primary">LUXE</span>WEAR
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Premium fashion for the modern individual.</p>
        </div>
        <div>
          <h5 className="font-semibold text-foreground mb-3 text-sm">Shop</h5>
          <div className="flex flex-col gap-2">
            <Link to="/products?category=Jackets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jackets</Link>
            <Link to="/products?category=T-Shirts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">T-Shirts</Link>
            <Link to="/products?category=Jeans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jeans</Link>
            <Link to="/products?category=Shoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shoes</Link>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-foreground mb-3 text-sm">Support</h5>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Contact Us</span>
            <span className="text-sm text-muted-foreground">FAQ</span>
            <span className="text-sm text-muted-foreground">Shipping</span>
            <span className="text-sm text-muted-foreground">Returns</span>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-foreground mb-3 text-sm">Legal</h5>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 LUXEWEAR. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
