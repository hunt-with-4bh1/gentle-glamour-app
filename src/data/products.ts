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

// All unique Unsplash images — no duplicates across any product
const jacketImgSets: string[][] = [
  ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1517941823-815bea90d291?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1489286696299-aa7b04b73682?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1521093470119-a3acdc43374a?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1510166089176-b57564a542b1?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1605908502724-9093a79a1b39?w=600&h=800&fit=crop"],
];

const teeImgSets: string[][] = [
  ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1503341504253-dff4f94032fc?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1523381294911-8d3cead13b03?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1611042553365-9b101441c135?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop"],
];

const jeansImgSets: string[][] = [
  ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1475178626620-a4d074967571?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1512578659172-63a4634c05ec?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1519568470290-c0b2d9a2a6cc?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1475178626620-a4d074967571?w=600&h=800&fit=crop"],
];

const shoeImgSets: string[][] = [
  ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1638953556925-754484a49a3c?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&h=800&fit=crop"],
  ["https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=600&h=800&fit=crop","https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=800&fit=crop"],
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
    const price = basePrices[i];
    const imgSet = imgs[i];
    const colorSet = colors.slice(0, 2 + (i % 3));
    return mkProduct(
      String(baseId + i), name, price, `Premium quality ${name.toLowerCase()} crafted with care. Perfect addition to your wardrobe for any occasion.`,
      imgSet, category, sizes, colorSet, 10 + (i * 3), 4.0 + (i % 10) * 0.1, i < 4
    );
  });
}

// Prices between ₹400 and ₹10,000
const jacketPrices = [4999, 7999, 3499, 5999, 6499, 8999, 2999, 4499, 9999, 3999, 7499, 2499, 5499];
const teePrices =    [799, 599, 1299, 899, 499, 699, 999, 1499, 449, 849, 649, 1099, 1199];
const jeansPrices =  [1999, 2499, 1499, 1799, 2999, 1699, 2299, 1299, 1599, 1899, 999, 1399, 2799];
const shoePrices =   [2499, 4999, 3499, 3999, 2999, 1999, 3299, 5999, 2799, 4499, 1799, 4299, 1499];

export const products: Product[] = [
  ...generateCategory(jacketNames, jacketImgSets, jacketColors, clothSizes, "Jackets", 1, jacketPrices),
  ...generateCategory(teeNames, teeImgSets, teeColors, clothSizes, "T-Shirts", 100, teePrices),
  ...generateCategory(jeansNames, jeansImgSets, jeansColors, jeansSizes, "Jeans", 200, jeansPrices),
  ...generateCategory(shoeNames, shoeImgSets, shoeColors, shoeSizes, "Shoes", 300, shoeNames.length === shoeImgSets.length ? shoePrices : shoePrices),
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
