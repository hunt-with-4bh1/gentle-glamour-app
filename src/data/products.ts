import { Product } from "@/types/product";

const mkProduct = (id: string, name: string, price: number, desc: string, imgs: string[], category: string, sizes: string[], colors: {name:string;hex:string}[], stock: number, rating: number, isNew?: boolean): Product => ({
  id, name, price, originalPrice: Math.round(price / 0.8), discount: 20, description: desc, images: imgs, category, sizes, colors, stock, rating, isNew,
});

const jacketColors = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Brown", hex: "#8B4513" },
  { name: "Burgundy", hex: "#722F37" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Olive", hex: "#556B2F" },
];
const teeColors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Sage", hex: "#9CAF88" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Coral", hex: "#FF7F50" },
];
const jeansColors = [
  { name: "Dark Indigo", hex: "#1B2A4A" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Light Blue", hex: "#A4C8E1" },
  { name: "Grey", hex: "#808080" },
];
const shoeColors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Navy", hex: "#1B2A4A" },
];

const jacketImgs = [
  ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop"],
];
const teeImgs = [
  ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1503341504253-dff4f94032fc?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1503341504253-dff4f94032fc?w=600&h=800&fit=crop"],
];
const jeansImgs = [
  ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop"],
];
const shoeImgs = [
  ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1638953556925-754484a49a3c?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1638953556925-754484a49a3c?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop"],
];

const jacketNames = ["Premium Leather Jacket","Wool Blend Coat","Bomber Jacket","Denim Trucker Jacket","Quilted Puffer Jacket","Suede Moto Jacket","Corduroy Blazer","Windbreaker Jacket","Shearling Coat","Varsity Jacket","Trench Coat","Rain Jacket","Fleece Hoodie Jacket"];
const teeNames = ["Oversized Cotton Tee","Graphic Print Tee","Striped Polo Shirt","Henley Neck Tee","V-Neck Essential Tee","Acid Wash Tee","Tie-Dye Crew Neck","Longline Curved Tee","Pocket Tee Classic","Muscle Fit Tee","Raglan Sleeve Tee","Cropped Box Tee","Embroidered Logo Tee"];
const jeansNames = ["Slim Fit Dark Jeans","Wide Leg Denim","Skinny Stretch Jeans","Relaxed Fit Cargo Jeans","Bootcut Classic Jeans","Ripped Boyfriend Jeans","High Rise Mom Jeans","Tapered Ankle Jeans","Straight Leg Vintage","Acid Wash Slim Jeans","Carpenter Work Jeans","Jogger Denim Pants","Raw Selvedge Jeans"];
const shoeNames = ["Canvas Sneakers","Suede Chelsea Boots","Running Sport Shoes","Leather Oxford Shoes","High Top Sneakers","Slip-On Loafers","Platform Chunky Shoes","Desert Ankle Boots","Minimalist White Sneakers","Retro Basketball Shoes","Mesh Training Shoes","Monk Strap Formals","Espadrille Casuals"];

const clothSizes = ["S","M","L","XL","XXL"];
const jeansSizes = ["28","30","32","34","36"];
const shoeSizes = ["6","7","8","9","10","11"];

function generateCategory(names: string[], imgs: string[][], colors: {name:string;hex:string}[], sizes: string[], category: string, baseId: number, basePrices: number[]): Product[] {
  return names.map((name, i) => {
    const price = basePrices[i % basePrices.length];
    const imgSet = imgs[i % imgs.length];
    const colorSet = colors.slice(0, 2 + (i % 3));
    return mkProduct(
      String(baseId + i), name, price, `Premium quality ${name.toLowerCase()} crafted with care. Perfect addition to your wardrobe for any occasion.`,
      imgSet, category, sizes, colorSet, 10 + (i * 3), 4.0 + (i % 10) * 0.1, i < 4
    );
  });
}

const jacketPrices = [15999,18999,12999,9999,14999,16999,11999,8999,22999,13999,19999,7999,10999];
const teePrices = [1999,1499,2499,1799,999,1299,1599,2199,899,1699,1399,1899,2299];
const jeansPrices = [3999,4499,2999,3499,4999,3799,4299,2799,3299,3599,2499,3199,5499];
const shoePrices = [4999,8999,6999,7499,5499,3999,6499,9999,5999,7999,4499,8499,3499];

export const products: Product[] = [
  ...generateCategory(jacketNames, jacketImgs, jacketColors, clothSizes, "Jackets", 1, jacketPrices),
  ...generateCategory(teeNames, teeImgs, teeColors, clothSizes, "T-Shirts", 100, teePrices),
  ...generateCategory(jeansNames, jeansImgs, jeansColors, jeansSizes, "Jeans", 200, jeansPrices),
  ...generateCategory(shoeNames, shoeImgs, shoeColors, shoeSizes, "Shoes", 300, shoePrices),
];

export const categories = [
  { name: "Jackets", icon: "🧥", count: products.filter(p => p.category === "Jackets").length },
  { name: "T-Shirts", icon: "👕", count: products.filter(p => p.category === "T-Shirts").length },
  { name: "Jeans", icon: "👖", count: products.filter(p => p.category === "Jeans").length },
  { name: "Shoes", icon: "👟", count: products.filter(p => p.category === "Shoes").length },
];

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
