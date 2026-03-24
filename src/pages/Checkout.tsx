import { useState } from "react";
import { ArrowLeft, CreditCard, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/stores/useCartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [placed, setPlaced] = useState(false);
  const discount = subtotal() > 200 ? subtotal() * 0.1 : 0;
  const total = subtotal() - discount;

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Order Confirmed!</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Thank you for your purchase. Your order is being processed.</p>
          <Link to="/" className="gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-xl font-bold mb-4">Nothing to checkout</h2>
          <Link to="/products" className="text-primary hover:underline text-sm">Go shopping</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Cart
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="bg-card rounded-2xl card-shadow p-6">
              <h3 className="font-bold text-foreground mb-4">Shipping Address</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="First Name" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="John" />
                <input placeholder="Last Name" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="Doe" />
                <input placeholder="Address" className="sm:col-span-2 px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="123 Fashion Ave" />
                <input placeholder="City" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="New York" />
                <input placeholder="ZIP Code" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="10001" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-2xl card-shadow p-6">
              <h3 className="font-bold text-foreground mb-4">Payment Method</h3>
              <div className="flex gap-3 mb-4">
                {[
                  { id: "card", label: "Credit Card" },
                  { id: "paypal", label: "PayPal" },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border transition-all ${
                      paymentMethod === m.id
                        ? "border-primary bg-accent text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <CreditCard size={16} /> {m.label}
                  </button>
                ))}
              </div>
              {paymentMethod === "card" && (
                <div className="space-y-4 animate-fade-in">
                  <input placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="•••• •••• •••• 4242" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM/YY" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="12/28" />
                    <input placeholder="CVC" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="•••" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-2xl card-shadow p-6 h-fit sticky top-24 space-y-4">
            <h3 className="font-bold text-foreground text-lg">Order Summary</h3>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <img src={item.product.images[0]} alt="" className="w-12 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal().toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Buy Now — ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
