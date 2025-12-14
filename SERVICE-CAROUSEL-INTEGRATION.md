# Service Carousel Component Integration

## ✅ Setup Complete

The Service Carousel component has been successfully integrated into your codebase with the following setup:

### 1. **Tailwind CSS** ✅
- Installed and configured
- Tailwind directives added to `src/index.css`
- Config file created at `tailwind.config.js`
- PostCSS config created at `postcss.config.js`

### 2. **shadcn/ui Structure** ✅
- Created `src/lib/utils.ts` with `cn` utility function
- Created `components.json` configuration file
- Set up path aliases (`@/*` → `./src/*`) in `vite.config.ts` and `tsconfig.app.json`
- Created `src/components/ui/` directory

### 3. **Dependencies Installed** ✅
- `embla-carousel-react` - Carousel functionality
- `lucide-react` - Icons
- `@radix-ui/react-slot` - Button component
- `class-variance-authority` - Component variants
- `tailwindcss`, `postcss`, `autoprefixer` - Styling

### 4. **Components Created** ✅
- `src/components/ui/button.tsx` - shadcn/ui Button component
- `src/components/ui/services-card.tsx` - ServiceCarousel component
- `src/components/ui/animated-service-card-demo.tsx` - Demo component

## 📁 Component Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx                    # shadcn/ui Button
│       ├── services-card.tsx             # ServiceCarousel component
│       └── animated-service-card-demo.tsx  # Demo component
├── lib/
│   └── utils.ts                         # cn utility function
└── index.css                             # Tailwind directives + CSS variables
```

## 🚀 Usage

### Basic Usage

```tsx
import { ServiceCarousel, type Service } from "@/components/ui/services-card";
import { Palette, Code, Search } from "lucide-react";

const services: Service[] = [
  {
    number: "001",
    title: "Branding",
    description: "We craft logos and brand systems that leave a lasting impression.",
    icon: Palette,
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
  },
  // ... more services
];

function MyComponent() {
  return <ServiceCarousel services={services} />;
}
```

### Using the Demo Component

```tsx
import AnimatedServiceCardDemo from "@/components/ui/animated-service-card-demo";

function App() {
  return <AnimatedServiceCardDemo />;
}
```

## 📱 Mobile Usage

The component is responsive and works great on mobile. The carousel automatically adjusts:
- **Mobile**: 1 card per view
- **Tablet (md)**: 2 cards per view
- **Desktop (lg)**: 3 cards per view

## 🎨 Customization

### Service Card Gradients

You can customize the gradient colors for each service card:

```tsx
gradient: "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50"
```

### Available Icons

You can use any icon from `lucide-react`:
- `Palette` - Design/Branding
- `Code` - Development
- `Search` - SEO
- `Heart` - Customer Service
- And many more...

## 🔧 Next Steps

1. **Integrate into your Services section**: Replace or enhance your existing `AnimatedServices` component with the new `ServiceCarousel` on mobile devices.

2. **Customize services data**: Update the services array with your actual service data.

3. **Add to routes**: Create a route for the demo component if needed.

## 📝 Notes

- The component uses Framer Motion for animations
- Carousel supports keyboard navigation (Arrow keys)
- Touch/swipe gestures work on mobile devices
- Dark mode is supported via Tailwind CSS variables

