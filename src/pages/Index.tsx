import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const popularProducts = products.slice(0, 4);
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">New Season Collection</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              Discover Your <span className="text-primary">Perfect</span> Style
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Curated fashion pieces that blend timeless elegance with contemporary design.
            </p>
            <div className="flex gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
            <h2 className="text-2xl font-bold text-foreground">New Arrivals</h2>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline">See All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {newProducts.map((product, i) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Popular */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Popular Fashion</h2>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline">See All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popularProducts.map((product, i) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 pb-16">
        <div className="gradient-primary rounded-3xl p-8 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Get 20% Off Your First Order</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">Join our community and stay updated with the latest trends and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl text-sm bg-card/20 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50"
            />
            <button className="bg-card text-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:shadow-lg transition-all">
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
