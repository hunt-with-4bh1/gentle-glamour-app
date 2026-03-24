import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCartStore();
  const discount = subtotal() > 200 ? subtotal() * 0.1 : 0;
  const total = subtotal() - discount;

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

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-card rounded-2xl card-shadow p-4 flex gap-4 animate-fade-in">
                <img src={item.product.images[0]} alt={item.product.name} className="w-24 h-28 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm line-clamp-1">{item.product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.selectedSize} · {item.selectedColor}
                  </p>
                  <p className="font-bold text-foreground mt-2">${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="inline-flex items-center gap-2 bg-secondary rounded-lg p-0.5">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-accent transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-accent transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.product.id)} className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-card rounded-2xl card-shadow p-6 h-fit sticky top-24 space-y-4">
            <h3 className="font-bold text-foreground text-lg">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal().toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Discount (10%)</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-success">Free</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-center text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Proceed to Checkout
            </Link>
            {discount > 0 && (
              <p className="text-xs text-center text-success">🎉 You saved ${discount.toFixed(2)} on this order!</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
