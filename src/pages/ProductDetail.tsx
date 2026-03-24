import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
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
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Size */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[44px] h-11 px-4 rounded-xl text-sm font-medium border transition-all ${
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
              <h4 className="font-semibold text-sm mb-3">Color</h4>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === c.name ? "border-primary scale-110 ring-2 ring-primary/30" : "border-border"
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
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <ShoppingBag size={18} /> Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
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
