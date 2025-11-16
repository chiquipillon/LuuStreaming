# Luu Stream - Servicios de Streaming Premium

A beautiful e-commerce landing page for selling streaming service subscriptions, styled after FK Network.

## Project Overview

Luu Stream is a modern, dark-themed website that showcases and sells premium streaming service accounts including Netflix, Disney+, HBO Max, Spotify, YouTube Premium, and more. The site features a stunning gradient design, animated platform logos, and direct WhatsApp integration for instant customer contact.

## Features

### 🎨 Beautiful Design
- Dark theme with vibrant purple and blue gradients
- Smooth animations and transitions throughout
- Responsive design that works on all devices
- Modern glassmorphic effects with backdrop blur

### 🎬 Animated Platform Showcase
- Dual-row marquee with platform logos
- Counter-scrolling animations (one row left, one row right)
- White logos on transparent backgrounds for clean aesthetic
- Seamless infinite scroll

### 🔍 Smart Product Discovery
- Real-time search functionality
- Category filters: Todos, Streaming, Music, Editores, IA
- 19 carefully curated streaming services
- Clear pricing in Peruvian Soles (S/)

### 💬 WhatsApp Integration
- Multiple contact points throughout the site
- Floating action button (FAB) for quick access
- Pre-filled messages for product inquiries
- Direct link: +51 986 558 522

### 📱 Products Offered

**Streaming Services:**
- Netflix por Código TV (S/10)
- Netflix Premium (S/12)
- Disney Premium (S/11)
- Disney Standar (S/8)
- HBO Max (S/6)
- Prime Video (S/7)
- Paramount (S/6)
- Crunchyroll (S/5.50)
- IPTV (S/10)
- Flujo TV (S/15)
- Vix (S/6)
- YouTube Premium (S/5)
- YouTube Premium Renovable (S/10)
- Apple TV (S/10)

**Music:**
- Spotify 1 Mes (S/10)
- Spotify 3 Meses (S/18)

**Editors:**
- Canva Pro (S/6)

**AI Tools:**
- Chat GPT Plus (S/12)
- Geminis (S/8.50)

## Technical Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter
- **Styling:** Tailwind CSS + Shadcn UI components
- **State Management:** TanStack Query (React Query)
- **Animations:** Custom CSS keyframes + Framer Motion ready

### Backend
- **Server:** Express.js
- **Storage:** In-memory storage (MemStorage)
- **API:** RESTful endpoints

### Development
- **Build Tool:** Vite
- **Package Manager:** npm
- **Language:** TypeScript

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/ui/     # Shadcn UI components
│   │   ├── pages/
│   │   │   ├── home.tsx       # Main landing page
│   │   │   └── not-found.tsx  # 404 page
│   │   ├── App.tsx            # Root component
│   │   ├── index.css          # Global styles + animations
│   │   └── main.tsx           # Entry point
│   └── index.html
├── server/
│   ├── index.ts               # Express server setup
│   ├── routes.ts              # API endpoints
│   ├── storage.ts             # In-memory data store
│   └── vite.ts                # Vite integration
├── shared/
│   └── schema.ts              # TypeScript types + Zod schemas
└── design_guidelines.md       # Design system documentation
```

## API Endpoints

- `GET /api/products` - Fetch all streaming service products
- `GET /api/products/:id` - Fetch a specific product by ID

## Design System

### Colors
- **Background:** Dark (240° 10% 3.9%)
- **Primary:** Purple (280° 90% 65%)
- **Accent Gradients:** Purple to Blue
- **Cards:** Elevated dark with subtle borders
- **Text:** High contrast white with muted secondary text

### Typography
- **Font Family:** Inter (modern, clean sans-serif)
- **Hero Title:** 5xl-7xl, font-black
- **Section Titles:** 2xl-3xl, semibold
- **Product Names:** lg, semibold
- **Prices:** 3xl, bold with gradient

### Components
- Cards with hover elevation effects
- Glassmorphic sections with backdrop blur
- Gradient text for emphasis
- Smooth transitions on all interactive elements

## Running the Project

The project automatically runs when you open the Repl:

```bash
npm run dev
```

This starts:
- Express server on port 5000
- Vite dev server with HMR
- Frontend and backend on the same port

## Recent Changes

- November 13, 2024: Initial implementation with all 19 products
- Fixed keyframes placement for smooth marquee animations
- Added comprehensive navigation and WhatsApp integration
- Implemented search and category filtering
- Created responsive dark theme with purple/blue gradients

## Future Enhancements

Potential improvements for future iterations:
- Shopping cart for multiple purchases
- Customer reviews and testimonials section
- FAQ accordion with common questions
- Payment gateway integration
- Admin panel for product management
- Email notifications for orders
- User accounts and order history

## Contact

For customer inquiries and purchases, contact via WhatsApp: **+51 986 558 522**

---

Built with ❤️ for Luu Stream
