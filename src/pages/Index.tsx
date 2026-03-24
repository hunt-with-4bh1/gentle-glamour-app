import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const popularProducts = products.slice(0, 8);
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Sparkles size={14} /> Flat 20% Off on Everything
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
                Discover Your <span className="text-primary">Perfect</span> Style
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
                Premium fashion at unbeatable prices. Shop 50+ curated styles in Indian Rupees.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
                >
                  Shop Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/products?category=Jackets"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-xl font-semibold text-sm card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  New Arrivals
                </Link>
              </div>
            </div>

            {/* Hero images grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=500&fit=crop"
                    alt="Fashion model in stylish jacket"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop"
                    alt="Fashion model walking"
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop"
                    alt="Fashion collection display"
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop"
                    alt="Shopping fashion bags"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Shop by Category</h2>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">🔥 New Arrivals</h2>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline">See All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((product, i) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Popular */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">⚡ Popular Fashion</h2>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">See All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popularProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 pb-16">
        <div className="gradient-primary rounded-3xl p-8 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Flat 20% Off on Everything! 🛍️</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">Join our community and get exclusive deals on premium fashion in Indian Rupees.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl text-sm bg-card/20 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50"
            />
            <button className="bg-card text-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:shadow-lg transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
