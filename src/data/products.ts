import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Jacket",
    price: 189.99,
    description: "Crafted from premium Italian leather, this jacket features a sleek silhouette with a buttery soft feel. Perfect for layering over any outfit for an effortlessly cool look.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop",
    ],
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Burgundy", hex: "#722F37" },
    ],
    stock: 15,
    rating: 4.8,
    isNew: true,
  },
  {
    id: "2",
    name: "Oversized Cotton Tee",
    price: 39.99,
    description: "Ultra-soft organic cotton tee with a relaxed oversized fit. Features dropped shoulders and a clean neckline for a modern minimalist aesthetic.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop",
    ],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Sage", hex: "#9CAF88" },
    ],
    stock: 42,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Slim Fit Dark Jeans",
    price: 79.99,
    description: "Classic slim-fit jeans in a rich dark indigo wash. Made with stretch denim for comfort without compromising on style.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
    ],
    category: "Jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Dark Indigo", hex: "#1B2A4A" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Light Blue", hex: "#A4C8E1" },
    ],
    stock: 28,
    rating: 4.6,
  },
  {
    id: "4",
    name: "Canvas Sneakers",
    price: 64.99,
    description: "Minimalist canvas sneakers with a vulcanized rubber sole. The perfect everyday shoe that pairs with anything in your wardrobe.",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop",
    ],
    category: "Shoes",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Forest", hex: "#2D5A3D" },
    ],
    stock: 35,
    rating: 4.7,
    isNew: true,
  },
  {
    id: "5",
    name: "Wool Blend Coat",
    price: 229.99,
    description: "A timeless wool blend overcoat with a tailored fit. Features a notch lapel, single-breasted closure, and deep pockets for sophisticated warmth.",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
    ],
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    stock: 12,
    rating: 4.9,
  },
  {
    id: "6",
    name: "Graphic Print Tee",
    price: 34.99,
    description: "Statement graphic tee featuring original artwork printed on heavyweight cotton. Pre-washed for a lived-in feel from day one.",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4f94032fc?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    ],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#FFFFFF" },
    ],
    stock: 50,
    rating: 4.3,
  },
  {
    id: "7",
    name: "Wide Leg Denim",
    price: 89.99,
    description: "Retro-inspired wide leg jeans in a medium wash. High-rise waist and relaxed silhouette for a fashion-forward take on classic denim.",
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop",
    ],
    category: "Jeans",
    sizes: ["26", "28", "30", "32", "34"],
    colors: [
      { name: "Medium Wash", hex: "#6B8EB5" },
      { name: "Vintage Blue", hex: "#5B7FA5" },
    ],
    stock: 20,
    rating: 4.4,
    isNew: true,
  },
  {
    id: "8",
    name: "Suede Chelsea Boots",
    price: 149.99,
    description: "Luxurious suede Chelsea boots with elastic side panels and a stacked leather heel. A versatile staple that transitions seamlessly from day to night.",
    images: [
      "https://images.unsplash.com/photo-1638953556925-754484a49a3c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop",
    ],
    category: "Shoes",
    sizes: ["7", "8", "9", "10", "11"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Olive", hex: "#556B2F" },
    ],
    stock: 18,
    rating: 4.7,
  },
];

export const categories = [
  { name: "Jackets", icon: "🧥", count: products.filter(p => p.category === "Jackets").length },
  { name: "T-Shirts", icon: "👕", count: products.filter(p => p.category === "T-Shirts").length },
  { name: "Jeans", icon: "👖", count: products.filter(p => p.category === "Jeans").length },
  { name: "Shoes", icon: "👟", count: products.filter(p => p.category === "Shoes").length },
];

// Mock API functions
export const api = {
  getProducts: async (filters?: { category?: string; sort?: string }): Promise<Product[]> => {
    await new Promise(r => setTimeout(r, 300));
    let result = [...products];
    if (filters?.category) result = result.filter(p => p.category === filters.category);
    if (filters?.sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (filters?.sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (filters?.sort === "newest") result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
    return result;
  },
  getProduct: async (id: string): Promise<Product | undefined> => {
    await new Promise(r => setTimeout(r, 200));
    return products.find(p => p.id === id);
  },
};
