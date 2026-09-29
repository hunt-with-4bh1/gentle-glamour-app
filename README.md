# Aura Fashion

Build a modern, elegant fashion eCommerce web application inspired by premium mobile UI designs (clean, minimal, soft shadows, rounded corners, pastel purple theme).

IMPORTANT:

- Focus on UI/UX first (no authentication for now)

- Create scalable backend-ready structure

- Mobile-first responsive design

🎯 CORE FEATURES:

1. Homepage:

- Hero banner with featured products

- Categories section (Jackets, T-Shirts, Jeans, Shoes)

- "Popular Fashion" section with product cards

- Smooth hover animations

- Clean modern typography

2. Product Listing Page:

- Grid layout (2–4 columns responsive)

- Filters (price, size, color, category)

- Sorting (price low-high, newest)

- Product card:

  - Image

  - Name

  - Price

  - Wishlist icon

  - Quick add to cart

3. Product Detail Page:

- Large product image

- Product title, price, description

- Select options:

  - Size (S, M, L, XL)

  - Color (color dots UI)

- Quantity selector

- Add to Cart button (primary CTA)

- Related products section

4. Cart Page:

- List of added products

- Quantity update

- Remove item

- Price summary (subtotal, discount, total)

- Checkout button

5. Checkout Page (UI only for now):

- Address section (dummy)

- Payment methods:

  - Card

  - PayPal

- Order summary

- “Buy Now” button

🎨 DESIGN STYLE:

- Soft purple primary color (#8B5CF6 or similar)

- White background with subtle gradients

- Rounded cards (border-radius 16px+)

- Light shadows (neumorphic feel)

- Clean spacing and padding

- Smooth transitions & hover effects

⚙️ TECH STACK:

- Frontend: React + Tailwind CSS

- State Management: Context API or Zustand

- Backend-ready API structure (no auth yet)

- Use mock JSON data for products

📦 DATA STRUCTURE:

Each product should include:

- id

- name

- price

- description

- images[]

- category

- sizes[]

- colors[]

- stock

🔌 API ENDPOINT STRUCTURE (prepare but mock):

- GET /products

- GET /products/:id

- POST /cart

- GET /cart

✨ EXTRA:

- Add loading skeletons

- Add empty state (cart empty)

- Add toast notifications (add to cart)

- Add wishlist toggle (UI only)

🚫 DO NOT:

- Do not implement login/signup yet

- Do not overcomplicate backend

🎯 GOAL:

Create a clean, premium, mobile-app-like shopping experience similar to modern fashion apps UI.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gentle-glamour-app.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/292e2957-f86a-44c0-9df8-7b2dc7f20fe3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
