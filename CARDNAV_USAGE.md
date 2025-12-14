# CardNav Mobile Navigation Component

## Overview
CardNav is a mobile-only navigation component with beautiful GSAP animations. It displays a hamburger menu that expands into three animated cards when clicked.

## Mobile-Only Visibility
The component is **automatically hidden on desktop** (screens wider than 768px) and **only visible on mobile devices** (screens 768px and below).

## Demo Pages

### Available Routes:
- `http://localhost:5173/mobile-card-nav-demo` - Mobile-only demo (best for testing)
- `http://localhost:5173/simple-card-nav-demo` - Shows on all screen sizes
- `http://localhost:5173/card-nav-demo` - Original demo

## How to Use

### Basic Implementation

```tsx
import React from 'react';
import CardNav from './components/CardNav';
import logo from '/LOGO.jpg';

const MyComponent = () => {
  const navItems = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#company", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:contact@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={navItems}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | Required | Path to logo image |
| `logoAlt` | `string` | `'Logo'` | Alt text for logo |
| `items` | `CardNavItem[]` | Required | Array of navigation items |
| `className` | `string` | `''` | Additional CSS classes |
| `ease` | `string` | `'power3.out'` | GSAP easing function |
| `baseColor` | `string` | `'#fff'` | Background color of navbar |
| `menuColor` | `string` | `'#000'` | Hamburger menu color |
| `buttonBgColor` | `string` | `undefined` | Background color for the optional CTA button. If not provided, the button is not rendered. |
| `buttonTextColor` | `string` | `undefined` | Text color for the optional CTA button. |

## Customization

### Changing Colors
The component accepts color props to match your brand:

```tsx
<CardNav
  logo={logo}
  items={items}
  baseColor="#your-brand-color"
  menuColor="#000"
  buttonBgColor="#111"
  buttonTextColor="#fff"
/>
```

### Customizing Animation
Adjust the easing function:

```tsx
ease="power3.out"     // Smooth, professional
ease="power2.out"     // Slightly faster
ease="elastic.out"    // Bouncy effect
ease="bounce.out"     // More bounce
```

### Changing Card Colors
Modify the `bgColor` in your items array:

```tsx
const items = [
  {
    label: "About",
    bgColor: "#your-color",  // Custom color
    textColor: "#fff",
    links: [...]
  }
]
```

## Mobile Behavior

### Breakpoint
- **Mobile**: Visible when screen width ≤ 768px
- **Desktop**: Hidden when screen width > 768px

### Viewing on Desktop
To test the mobile navigation on desktop:
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select a mobile device or set width to 768px or less

## Accessibility

The component is designed with accessibility in mind:

- **ARIA Labels**: All interactive elements, including links and the menu button, have `aria-label` attributes for screen reader support.
- **Keyboard Navigation**: The menu can be fully operated using a keyboard.
- **Focus Management**: Focus is properly managed when the menu is opened and closed.
- **Semantic HTML**: Uses semantic elements for better structure and understanding by assistive technologies.

## Dependencies
- `gsap` - For animations
- `react-icons` - For arrow icons

## Integration Tips

### Using with an Existing Navigation
`CardNav` is designed to complement your existing desktop navigation. Since it only appears on screens 768px wide or less, you can include it in your main layout, and it will work seamlessly alongside a separate desktop navigation component.

```jsx
function App() {
  return (
    <>
      <DesktopNav /> {/* Your existing desktop navigation */}
      <CardNav {...props} /> {/* This will only show on mobile */}
      <main>
        {/* Your page content */}
      </main>
    </>
  )
}
```

## Troubleshooting

### Not visible on mobile?
- Check that screen width is ≤ 768px
- Verify z-index isn't being overridden
- Ensure position: fixed is working

### Animations not smooth?
- Check if GSAP is properly installed
- Verify browser supports CSS transforms
- Clear browser cache

### Cards not appearing?
- Ensure items array has 3 or fewer items
- Check that bgColor and textColor are valid hex colors
- Verify links array is properly formatted
