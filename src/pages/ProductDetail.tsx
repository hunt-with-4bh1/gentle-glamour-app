import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/stores/useCartStore";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-4xl mb-4">😕</p>
          <h2 className="text-xl font-bold mb-2">Product not found</h2>
          <Link to="/products" className="text-primary hover:underline text-sm">Back to shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const savings = (product.originalPrice - product.price) * quantity;

  const handleAddToCart = () => {
    if (!selectedSize) { toast.error("Please select a size"); return; }
    if (!selectedColor) { toast.error("Please select a color"); return; }
    for (let i = 0; i < quantity; i++) addItem(product, selectedSize, selectedColor);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-sm font-bold px-3 py-1 rounded-md shadow-md">
                {product.discount}% OFF
              </span>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? "border-primary scale-105" : "border-transparent hover:border-primary/30"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 bg-success/10 text-success text-xs font-bold px-2 py-1 rounded">
                  <span>{product.rating}</span>
                  <Star size={10} className="fill-current" />
                </div>
                <span className="text-xs text-muted-foreground">|  Free Delivery</span>
              </div>
              {/* Price block */}
              <div className="bg-accent/50 rounded-xl p-4">
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</p>
                  <p className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</p>
                  <span className="text-sm font-bold text-success">{product.discount}% off</span>
                </div>
                <p className="text-xs text-success font-semibold mt-1">You save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>

            {/* Size */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[44px] h-11 px-4 rounded-xl text-sm font-medium border transition-all active:scale-95 ${
                      selectedSize === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Color{selectedColor && `: ${selectedColor}`}</h4>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all active:scale-90 ${
                      selectedColor === c.name ? "border-primary scale-110 ring-2 ring-primary/30" : "border-border hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Quantity</h4>
              <div className="inline-flex items-center gap-3 bg-secondary rounded-xl p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors active:scale-90">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors active:scale-90">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              <ShoppingBag size={18} /> Add to Cart — ₹{(product.price * quantity).toLocaleString("en-IN")}
            </button>
            {savings > 0 && (
              <p className="text-center text-xs font-semibold text-success">You save ₹{savings.toLocaleString("en-IN")} on this purchase!</p>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Truck, text: "Free Delivery" },
                { icon: Shield, text: "Secure Payment" },
                { icon: RotateCcw, text: "Easy Returns" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1 p-3 bg-secondary rounded-xl text-center">
                  <Icon size={16} className="text-primary" />
                  <span className="text-[10px] font-medium text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
