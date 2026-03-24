import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCartStore();
  const originalTotal = items.reduce((s, i) => s + i.product.originalPrice * i.quantity, 0);
  const discount = originalTotal - subtotal();
  const total = subtotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6 text-sm">Looks like you haven't added anything yet.</p>
          <Link to="/products" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm">
            Start Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Shopping Cart ({items.length} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <div key={item.product.id + item.selectedSize + item.selectedColor} className="bg-card rounded-2xl card-shadow p-3 flex gap-3 animate-fade-in hover:card-shadow-hover transition-all">
                <img src={item.product.images[0]} alt={item.product.name} className="w-16 h-20 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-xs line-clamp-1">{item.product.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {item.selectedSize} · {item.selectedColor}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="font-bold text-foreground text-sm">₹{item.product.price.toLocaleString("en-IN")}</p>
                    <p className="text-[10px] text-muted-foreground line-through">₹{item.product.originalPrice.toLocaleString("en-IN")}</p>
                    <span className="text-[10px] font-bold text-success">{item.product.discount}% off</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="inline-flex items-center gap-1.5 bg-secondary rounded-lg p-0.5">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-accent transition-colors active:scale-90">
                        <Minus size={12} />
                      </button>
                      <span className="w-5 text-center text-xs font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-accent transition-colors active:scale-90">
                        <Plus size={12} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.product.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors active:scale-90">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-card rounded-2xl card-shadow p-5 h-fit sticky top-24 space-y-3">
            <h3 className="font-bold text-foreground text-lg">Price Details</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price ({items.length} items)</span>
                <span className="font-medium">₹{originalTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-success">
                <span className="flex items-center gap-1"><Tag size={12} /> Discount</span>
                <span className="font-medium">-₹{discount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium text-success">FREE</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold text-foreground">Total Amount</span>
                <span className="font-bold text-lg">₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div className="bg-success/10 text-success text-xs font-semibold p-2.5 rounded-xl text-center">
              🎉 You will save ₹{discount.toLocaleString("en-IN")} on this order
            </div>
            <Link
              to="/checkout"
              className="block w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-center text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
