import { useState } from "react";
import { ArrowLeft, CreditCard, Check, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/stores/useCartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [placed, setPlaced] = useState(false);
  const originalTotal = items.reduce((s, i) => s + i.product.originalPrice * i.quantity, 0);
  const discount = originalTotal - subtotal();
  const total = subtotal();

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
                <input placeholder="Full Name" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="Rahul Sharma" />
                <input placeholder="Phone Number" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="+91 98765 43210" />
                <input placeholder="Address" className="sm:col-span-2 px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="42, MG Road, Koramangala" />
                <input placeholder="City" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="Bangalore" />
                <input placeholder="PIN Code" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="560034" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-2xl card-shadow p-6">
              <h3 className="font-bold text-foreground mb-4">Payment Method</h3>
              <div className="flex gap-3 mb-4">
                {[
                  { id: "card", label: "Credit/Debit Card" },
                  { id: "upi", label: "UPI" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium border transition-all active:scale-95 ${
                      paymentMethod === m.id
                        ? "border-primary bg-accent text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <CreditCard size={14} /> {m.label}
                  </button>
                ))}
              </div>
              {paymentMethod === "card" && (
                <div className="space-y-4 animate-fade-in">
                  <input placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="•••• •••• •••• 4242" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM/YY" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="12/28" />
                    <input placeholder="CVV" className="px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" defaultValue="•••" />
                  </div>
                </div>
              )}
              {paymentMethod === "upi" && (
                <div className="animate-fade-in">
                  <input placeholder="Enter UPI ID (e.g. name@upi)" className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm border border-transparent focus:border-primary focus:outline-none transition-colors" />
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-2xl card-shadow p-5 h-fit sticky top-24 space-y-3">
            <h3 className="font-bold text-foreground text-lg">Price Details</h3>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <img src={item.product.images[0]} alt="" className="w-10 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground line-clamp-1">{item.product.name}</p>
                    <p className="text-[10px] text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <p className="text-xs font-semibold">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price ({items.length} items)</span>
                <span>₹{originalTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-success">
                <span className="flex items-center gap-1"><Tag size={12} /> Discount</span>
                <span>-₹{discount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-success font-medium">FREE</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div className="bg-success/10 text-success text-xs font-semibold p-2.5 rounded-xl text-center">
              🎉 You save ₹{discount.toLocaleString("en-IN")} on this order
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Place Order — ₹{total.toLocaleString("en-IN")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
