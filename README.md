# Resolaring ☀️♻️

Resolaring is a circular economy platform dedicated to giving photovoltaic (PV) solar panels a second life. By partnering with suppliers and installers, Resolaring keeps solar equipment out of landfills, tests/diagnoses panels for reuse, and provides a secondhand solar marketplace.

---

## 🚀 Vision & Mission

As solar energy installations grow exponentially, the disposal of end-of-life solar panels is becoming a critical environmental challenge. Resolaring solves this by:
- **Reducing Landfill Waste:** Rescuing panels before disposal and putting them back into service.
- **Enabling Circular Economy:** Reclaiming aluminum, glass, and metals from non-reusable panels to feed other industries.
- **Democratizing Solar Energy:** Providing affordable, tested, and certified secondhand solar equipment (150W - 300W panels) for residential and commercial projects.

---

## 🎨 Design System

Resolaring is styled using a modern, rich, and dynamic aesthetic built on Tailwind CSS v4.

* **Typography:** [`Syne`](https://fonts.google.com/specimen/Syne) sans-serif font family.
* **Palette:**
  - 🔵 **Primary:** `#071431` (Deep Slate Blue)
  - 🟡 **Secondary / Highlights:** `#FEC100` (Warm Sun Yellow)
  - 🟠 **Accent:** `#B45C3D` (Rust / Terracotta Earth)
* **Smooth Scrolling:** Integrated with [Lenis Scroll](https://github.com/darkroomengineering/lenis) for premium, fluid user navigation.

---

## 💡 Key Features

### 1. Solar Marketplace (`/marketplace`)
- Interactive list of solar equipment (JA Solar panels, FF Solar panels, etc.).
- Detailed categorization by power output (150W, 180W, 200W, 220W, 250W, 300W) and cell type (Monocrystalline, Polycrystalline, Thin Film).
- Price discounts, ratings, reviews, and detailed technical specifications.

### 2. Seller Dashboard (`/dashboard`)
- **Overview:** Interactive graphs/tables showing total active listings, pending orders, sales revenue, and profile completeness.
- **Upload Product:** Drag-and-drop or select media upload, detailed input fields for brand, specifications, condition, price, discounts, and category selection.
- **Manage Listings:** Direct list views to monitor and edit uploaded solar hardware.
- **Order List:** Live order tracking for sellers to monitor client deliveries.

### 3. Solar Recycling Process (`/recycling-process`)
- Detailed visualization of the recycling pipeline:
  1. **Diagnosis & Quality Control:** Testing the cells and efficiency.
  2. **Evaluation:** Deciding if the panel can be re-installed or needs parts separation.
  3. **Disassembly & Separation:** Dismantling aluminum frames, glass, and chemical extraction of metals.
  4. **Circular Economy Integration:** Distributing recycled raw materials to the automotive and pharmaceutical industries.
  5. **Recycling Goal:** Achieving a 95% material recovery rate.

### 4. Shared Gallery (`/gallery`)
- Community showcase of actual operational installations powered by recycled or secondhand solar setups.
- Inspires confidence in buyers by showcasing real-life engineering success stories.

### 5. Interactive Flows
- **Booking Flow (`/book`):** Inquire about recycling or book solar assessments.
- **Cart & Checkout (`/cart`, `/checkout`, `/change-delivery-details`):** Fully integrated shopping flow for panels.
- **Custom Authentication (`/auth/`):** Dedicated workflows for Account Type selection (Seller/Buyer), Log In, Sign Up, Verification Code, and Password Reset.

---

## 🛠️ Technology Stack & Libraries

### Core Frameworks
* **React 19:** Advanced UI rendering.
* **Vite 7:** Fast developer workflow with Hot Module Replacement (HMR) and optimized build times.
* **React Router v7:** Modern, declarative browser routing with loaders for static mock JSON assets (`products.json` and `solarProducts.json`).

### UI & Styling
* **Tailwind CSS v4:** Styling utility utilizing the new native `@tailwindcss/vite` plugin.
* **Shadcn UI (Radix Primitives):** Beautiful, accessible, and theme-compatible components:
  - Accordion, Button, Card, Checkbox, Dialog, Drawer, Dropdown Menu, Carousel, Sheet, Table, Tabs, Input, Select, Textarea.
* **Lenis Scroll:** High-performance smooth scrolling config:
  - Lerp: `0.1` | Duration: `1.1` | Orientation: `vertical`
* **SweetAlert2:** Clean and modern popup modals for user confirmations (e.g. Logout warning).
* **React CountUp & Embla Carousel:** Dynamic data counter animations and smooth media carousels.

---

## 📂 Project Structure

```bash
Resolaring/
├── public/                 # Static assets (logo, mock JSON data files)
│   ├── products.json       # Marketplace product list
│   └── solarProducts.json  # Shared gallery solar installations data
├── src/
│   ├── assets/             # Images and local graphic assets
│   ├── common/             # Base reusable components (PrimaryButton, SecondaryButton, etc.)
│   ├── components/         # Page-specific components (e.g., HomeComponents, Dashboard, UI components)
│   │   └── ui/             # Shadcn UI primitives (accordion, button, card, etc.)
│   ├── layouts/            # Layout wrappers (MainLayouts, AuthLayouts, DashboardLayouts)
│   ├── lib/                # Shared utilities (Tailwind merges, custom class helpers)
│   ├── pages/              # Views (Home, Marketplace, RecyclingProcess, Dashboard, etc.)
│   ├── router/             # React Router routing configuration
│   ├── index.css           # Global Tailwind CSS and OKLCH color theme variables
│   ├── App.jsx             # Root App wrapper
│   └── main.jsx            # Main entry point (initiates Lenis and RouterProvider)
├── vite.config.js          # Vite config with alias resolution and Tailwind CSS integration
├── package.json            # Dependencies and development scripts
└── jsconfig.json           # Path alias configs (`@/*` mapping to `src/*`)
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Resolaring.git
   cd Resolaring
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### Key Scripts
* `npm run dev`: Runs Vite dev server with Hot Module Replacement.
* `npm run build`: Bundles the application for production deployment into the `dist/` directory.
* `npm run preview`: Locally previews the compiled production build.
* `npm run lint`: Analyzes your code for style and syntax errors using ESLint.
