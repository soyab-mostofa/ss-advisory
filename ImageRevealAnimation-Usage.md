# ImageRevealAnimation Component - Tailwind CSS Integration

The `ImageRevealAnimation` component has been updated to fully support Tailwind CSS classes for responsive sizing and styling. This allows for flexible, responsive image animations that adapt to different screen sizes and container constraints.

## Key Features

- ✅ **Tailwind CSS Integration**: Use any Tailwind classes for responsive sizing
- ✅ **Flexible Aspect Ratios**: Control image proportions with the `aspectRatio` prop
- ✅ **GSAP Animation**: Smooth 9-mask grid reveal animation powered by GSAP
- ✅ **Scroll Trigger**: Animation triggers when scrolling into view
- ✅ **Performance Optimized**: Hardware acceleration and optimized rendering

## Updated Props

```typescript
interface ImageRevealAnimationProps {
  src: string;                    // Image source URL
  alt?: string;                   // Image alt text
  aspectRatio?: string;           // Optional aspect ratio (default: '6.3 / 7.1')
  borderRadius?: string;          // Optional border radius (default: '0.38rem')
  triggerPosition?: string;       // Optional scroll trigger position (default: 'top 75%')
  duration?: number;              // Optional animation duration (default: 1)
  ease?: string;                  // Optional easing function (default: 'power4.out')
  className?: string;             // Tailwind CSS classes for responsive sizing and styling
  style?: React.CSSProperties;    // Optional inline styles
}
```

## Usage Examples

### 1. Basic Responsive
```tsx
<ImageRevealAnimation
  src="/images/example.jpg"
  alt="Example image"
  className="w-full h-auto"
/>
```

### 2. Responsive with Breakpoints
```tsx
<ImageRevealAnimation
  src="/images/example.jpg"
  alt="Example image"
  className="w-full h-48 md:h-64 lg:h-80 xl:h-96"
/>
```

### 3. Centered with Max Constraints
```tsx
<ImageRevealAnimation
  src="/images/example.jpg"
  alt="Example image"
  className="w-full max-w-2xl max-h-96 mx-auto"
  aspectRatio="16 / 9"
/>
```

### 4. Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ImageRevealAnimation
    src="/images/example1.jpg"
    alt="Grid item 1"
    className="w-full h-48"
    aspectRatio="4 / 3"
  />
  <ImageRevealAnimation
    src="/images/example2.jpg"
    alt="Grid item 2"
    className="w-full h-48"
    aspectRatio="4 / 3"
  />
</div>
```

### 5. Flexible Container Sizing
```tsx
<div className="flex flex-col lg:flex-row gap-6">
  <ImageRevealAnimation
    src="/images/example.jpg"
    alt="Flexible image"
    className="w-full h-auto min-h-[200px] max-h-[400px]"
    aspectRatio="3 / 2"
  />
</div>
```

## Common Tailwind Classes for Responsive Images

### Width Classes
- `w-full` - Full width of container
- `w-1/2`, `w-2/3`, `w-3/4` - Fractional widths
- `w-64`, `w-80`, `w-96` - Fixed widths
- `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-2xl` - Maximum widths

### Height Classes
- `h-auto` - Automatic height (maintains aspect ratio)
- `h-48`, `h-64`, `h-80`, `h-96` - Fixed heights
- `min-h-[200px]`, `max-h-[400px]` - Min/max height constraints

### Responsive Breakpoints
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)
- `2xl:` - 2X large screens (1536px+)

### Layout Classes
- `mx-auto` - Center horizontally
- `object-cover`, `object-contain` - Object fit behavior

## Best Practices

1. **Always use `w-full`** for responsive behavior
2. **Combine with `h-auto`** to maintain aspect ratios
3. **Use `max-w-*` classes** to prevent images from becoming too large
4. **Set `aspectRatio` prop** for consistent proportions across breakpoints
5. **Use responsive prefixes** (`md:`, `lg:`, etc.) for breakpoint-specific sizing
6. **Consider container context** when setting dimensions

## Migration from Previous Version

The component now uses Tailwind classes instead of fixed inline styles:

```tsx
// Before (fixed styling)
<ImageRevealAnimation
  src="/images/example.jpg"
  alt="Example"
/>

// After (flexible with Tailwind)
<ImageRevealAnimation
  src="/images/example.jpg"
  alt="Example"
  className="w-full h-auto max-w-4xl mx-auto"
/>
```

## Performance Considerations

- The component uses hardware acceleration (`translateZ(0)`)
- Optimized rendering with `backfaceVisibility: 'hidden'`
- Efficient clip-path animations with overlapping boundaries
- Minimal layout shifts with proper aspect ratio handling

## Example Page

Visit `/responsive-image-example` to see live examples of all responsive sizing options.

## Animation Details

- **Animation Type**: 9-mask grid reveal
- **Trigger**: Scroll into view (customizable with `triggerPosition`)
- **Duration**: 1 second (customizable with `duration`)
- **Easing**: `power4.out` (customizable with `ease`)
- **Performance**: Hardware accelerated with GSAP

The animation creates a smooth reveal effect where the image appears through a 3x3 grid of masks that animate in sequence, creating an engaging visual experience while maintaining excellent performance.