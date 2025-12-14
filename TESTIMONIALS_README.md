# Testimonials Marquee Component

## Overview
A custom testimonials marquee component built with React, TypeScript, and CSS Modules that matches your existing codebase style.

## Files Created

### Components
- `src/components/TestimonialCard.tsx` - Individual testimonial card component
- `src/components/TestimonialsMarquee.tsx` - Marquee container component

### Styles
- `src/styles/testimonial.module.css` - Testimonial card styles
- `src/styles/testimonialsMarquee.module.css` - Marquee animation and layout styles

### Data
- `src/data/testimonials.ts` - Sample testimonials data

## Usage

The component has been integrated into your homepage (`App.tsx`). Here's how it's used:

```typescript
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import { homePageTestimonials } from './data/testimonials';

<TestimonialsMarquee
  title="Trusted by Industry Leaders Worldwide"
  description="Join thousands of companies who have transformed their digital presence with our expertise"
  testimonials={homePageTestimonials}
/>
```

## Features

✅ **Infinite Scroll Animation** - Smooth marquee animation that loops continuously
✅ **Hover to Pause** - Animation pauses when users hover over testimonials
✅ **Gradient Fade** - Left and right gradient overlays for smooth visual effect
✅ **Responsive Design** - Works perfectly on all screen sizes
✅ **CSS Modules** - Scoped styling matching your project architecture
✅ **TypeScript** - Full type safety with proper interfaces
✅ **Ratings Display** - 5-star rating system with visual indicators
✅ **Avatar Support** - Profile images with fallback support

## Customization

### Adding New Testimonials

Add testimonials to `src/data/testimonials.ts`:

```typescript
{
  author: {
    name: "John Doe",
    role: "CTO",
    company: "TechCorp",
    handle: "@johndoe",
    avatar: "https://images.unsplash.com/photo-xxx"
  },
  text: "Amazing service!",
  rating: 5
}
```

### Styling

Modify the CSS Module files:
- `src/styles/testimonial.module.css` - Card appearance
- `src/styles/testimonialsMarquee.module.css` - Layout and animation

### Animation Speed

Adjust the animation duration in `testimonialsMarquee.module.css`:

```css
.marqueeTrack {
  animation: marquee 40s linear infinite; /* Change 40s to your preferred speed */
}
```

## Component Props

### TestimonialsMarquee

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | "Trusted by developers worldwide" | Section title |
| `description` | `string` | "Join thousands..." | Section description |
| `testimonials` | `TestimonialCardProps[]` | required | Array of testimonials |
| `className` | `string` | - | Additional CSS class |

### TestimonialCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `author` | `TestimonialAuthor` | required | Author information |
| `text` | `string` | required | Testimonial content |
| `href` | `string` | - | Optional link URL |
| `rating` | `number` | 5 | Star rating (1-5) |

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Notes

- No external dependencies required
- Uses only native CSS animations
- Fully accessible with semantic HTML
- Optimized for performance
