# Design Guidelines for Luu Stream

## Design Approach
**Reference-Based**: Clone the FK Network aesthetic - a modern e-commerce streaming services marketplace with vibrant gradients, clean cards, and dynamic animations.

## Core Design Principles
- **Bold & Energetic**: Use vibrant gradient backgrounds and high-contrast elements
- **Trust-Focused**: Clear pricing, professional presentation, WhatsApp integration
- **Dynamic Motion**: Animated platform logos create engagement and showcase offerings

## Typography System
- **Primary Font**: Inter or similar modern sans-serif via Google Fonts
- **Hierarchy**:
  - Hero Title (Luu Stream): 3xl-4xl, bold (font-bold)
  - Section Headers: 2xl-3xl, semibold (font-semibold)
  - Product Names: lg-xl, medium (font-medium)
  - Prices: xl-2xl, bold (font-bold)
  - Body Text: base-lg, normal (font-normal)
  - Small Labels: sm, medium (font-medium)

## Layout System
- **Spacing Units**: Use Tailwind spacing of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-7xl with px-4 for content sections
- **Section Padding**: py-12 mobile, py-20 desktop
- **Card Spacing**: gap-4 to gap-6 in grids

## Color Strategy (Structure Only)
- Gradient backgrounds (vibrant, multi-color)
- High contrast cards (dark backgrounds with light text)
- Accent elements for CTAs and prices
- White platform logos on transparent backgrounds

## Component Library

### 1. Header/Navigation
- Fixed top navigation bar
- Logo "Luu Stream" (left-aligned, bold typography)
- Navigation links: "Productos", "Comunidad", "FAQ", "Términos", "Reviews"
- WhatsApp contact button (right-aligned, prominent)
- Backdrop blur effect (backdrop-blur-md)

### 2. Hero Section
- Full-width gradient background
- Centered content with max-w-4xl
- Main heading: "Luu Stream"
- Subtitle/tagline about quality streaming services
- Primary CTA button linking to WhatsApp
- Height: 60vh minimum

### 3. Animated Platform Logos Marquee
- Infinite horizontal scroll animation
- Two rows (one scrolling left, one right for visual interest)
- Platform logos: Netflix, Disney+, HBO Max, Spotify, Prime Video, Paramount, Crunchyroll, YouTube, Canva, ChatGPT, Apple TV
- White logos with transparent backgrounds
- Logo size: h-12 to h-16
- Continuous seamless loop
- No gaps between repetitions

### 4. Search & Filter Bar
- Sticky/fixed below header
- Search input (left): rounded-full, backdrop-blur background, magnifying glass icon
- Category pills (scrollable horizontal): "Todos", "Streaming", "Music", "Editores", "IA", etc.
- Pills: rounded-full, transition effects on hover/active state
- Width: full-width container with max-w-7xl

### 5. Product Grid
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Gap: gap-6
- Card design:
  - Rounded corners (rounded-xl to rounded-2xl)
  - Shadow effect (shadow-lg to shadow-xl)
  - Backdrop blur background
  - Padding: p-6
  - Platform logo at top (h-20 object-contain)
  - Service name (font-semibold, text-lg)
  - Price (font-bold, text-2xl with "S/" prefix)
  - Hover: transform scale-105, increased shadow

### 6. Product Cards (19 total)
Each card displays:
- Platform image (centered)
- Service name (e.g., "NETFLIX PREMIUM")
- Price in Soles (e.g., "S/12")
- Subtle hover animations

Products to display:
1. Netflix por Código TV - S/10
2. Netflix Premium - S/12
3. Disney Premium - S/11
4. Disney Standar - S/8
5. HBO Max - S/6
6. Prime Video - S/7
7. Paramount - S/6
8. Crunchyroll - S/5.50
9. IPTV - S/10
10. Flujo TV - S/15
11. Vix - S/6
12. YouTube Premium - S/5
13. YouTube Premium Renovable - S/10
14. Spotify 1 Mes - S/10
15. Spotify 3 Meses - S/18
16. Canva Pro - S/6
17. Chat GPT Plus - S/12
18. Apple TV - S/10
19. Geminis - S/8.50

### 7. WhatsApp Contact Section
- Floating action button (FAB): Fixed bottom-right position
- WhatsApp icon with "Contactar" text
- Link: https://wa.me/51986558522
- Prominent, always visible
- Green accent matching WhatsApp branding
- Shadow and hover effects

### 8. Footer
- Full-width, backdrop-blur background
- Three columns on desktop, stacked on mobile:
  - Left: "Luu Stream" branding + tagline
  - Center: Quick links (FAQ, Términos)
  - Right: Contact info (WhatsApp number)
- Bottom bar: Copyright text centered
- Padding: py-12

## Interactions & Animations
- **Logo Marquee**: Continuous infinite scroll, smooth animation (animate-scroll)
- **Product Cards**: Hover scale effect (scale-105), shadow increase
- **Category Pills**: Active state highlighting, smooth transitions
- **Search**: Focus states with ring effects
- **Minimal Distraction**: Keep animations purposeful, not overwhelming

## Responsive Behavior
- Mobile: Single column product grid, hamburger menu if needed
- Tablet: 2-column grid, condensed navigation
- Desktop: 4-column grid, full navigation visible
- Logo marquee: Adjust speed/size based on viewport

## Images
- **Platform Logos**: White versions with transparent backgrounds for all services (Netflix, Disney+, HBO Max, Prime Video, Paramount, Crunchyroll, IPTV, Flujo TV, Vix, YouTube, Spotify, Canva, ChatGPT, Apple TV, Geminis)
- **Placement**: Within product cards (centered, h-20) and in animated marquee section (h-12 to h-16)
- **No Large Hero Image**: Focus on gradient backgrounds and platform logo animations instead

## Key Differentiators
- Clone FK Network's vibrant gradient aesthetic
- Dynamic scrolling logo animation as visual centerpiece
- Search + category filtering for easy navigation
- Direct WhatsApp integration for sales
- Professional pricing display in Soles currency