
# Simplified Portfolio Project

This project has been simplified for better compatibility with other development platforms like Bolt.new.

## How to Use the Simplified Version

1. **Replace configuration files:**
   - Replace `vite.config.ts` with `vite.config.simple.ts`
   - Replace `tailwind.config.ts` with `tailwind.config.simple.ts`
   - Replace `package.json` with `package.simple.json`

2. **Update CSS:**
   - Replace the import in `src/main.tsx` from `./index.css` to `./simplified.css`

3. **Use simplified components:**
   - Replace `src/pages/AboutSuriya.tsx` with `src/pages/AboutSuriya.simple.tsx`
   - Replace `src/components/ProfileSelection.tsx` with `src/components/ProfileSelection.simple.tsx`

4. **Remove Lovable-specific files:**
   - Delete `src/components/NetflixNavbar.tsx` (not needed in simplified version)
   - Delete `src/components/PreloaderModal.tsx` (if you don't need the video intro)
   - Delete `src/components/MyProjectsSection.tsx` (if not using)

## Key Changes Made

- Removed Lovable-specific Vite plugins
- Simplified Tailwind config with standard color names
- Replaced custom Netflix classes with standard Tailwind classes
- Removed complex dependencies (kept only essential ones)
- Used inline styles for complex gradients and shadows
- Simplified component structure

## Dependencies Removed

- All shadcn/ui components and Radix UI dependencies
- React Query
- Custom component libraries
- Lovable-specific packages

The simplified version maintains the exact same visual appearance and functionality while being more portable across different platforms.
