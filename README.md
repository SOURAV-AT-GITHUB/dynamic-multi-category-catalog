### Project Write-up: Dynamic Multi-Category Catalog

#### 1. Tools & Technologies Used
*   **Next.js 16 (App Router):** Utilized for its modern file-based routing system, optimized image handling (`next/image`), and the ability to seamlessly handle dynamic routes for individual items.
*   **React 19:** For building a declarative, component-based user interface.
*   **Tailwind CSS v4:** Chosen as the primary styling solution for layout, spacing, grids, and responsive design. Its utility-first approach allowed for rapid development of a scalable, maintainable UI without bloated custom CSS files.
*   **Material UI (MUI v9) & Emotion:** Used strategically for interactive and structured components (like `Card`, `Chip`, and `Button`) and vector icons. 
*   **TypeScript:** Implemented for strong static typing (`src/types.ts`), ensuring data integrity when mapping through the dynamic JSON structures and preventing runtime errors.

#### 2. Time Taken to Complete
The assignment took approximately **3 to 4 hours** of focused development time. This included planning the architecture, parsing the JSON data, setting up the Next.js routing, integrating the hybrid Tailwind/MUI styling system, and polishing the responsive UI/UX.

#### 3. Idea and Approach Behind the Implementation
**Data-Driven Architecture:**
My first priority was ensuring the application could dynamically handle any category or item thrown at it. I built utility functions (`src/data.ts`) that read the provided `data.json`, dynamically group the items by their `category`, and generate URL-safe slugs for routing. This means if a new category (e.g., "Smartwatches") with entirely different properties is added to the JSON tomorrow, the application will render it perfectly without any code changes.

**Flexible Detail Pages:**
Because different products have drastically different specifications (e.g., "RPM" for Cars vs. "Lens Type" for Phones), I designed the `/item/[slug]` route to be completely agnostic to the specific data points. The detail page simply maps over the `itemprops` array, dynamically generating uniform "Specification Cards" for whatever attributes exist for that specific item.

**Hybrid "Glassmorphism" Design System:**
To make the catalog visually striking and premium, I opted for a dark-themed "glassmorphism" aesthetic. 
*   **Tailwind CSS** handles the heavy lifting of the CSS grid logic, responsive breakpoints, padding, and layout. 
*   **Material UI** handles interactive elements. 
To ensure these two technologies worked seamlessly together, I configured CSS layer precedence (`@layer mui`) inside `globals.css`. This architectural decision prevented MUI's Emotion engine from overriding Tailwind's utility classes, allowing for a highly maintainable, clean styling approach.

**Performance & UX:**
I focused heavily on user experience by implementing subtle micro-interactions (hover zoom effects on images, staggered entrance animations for grid items) and ensuring the layout remains fluid and usable on both large desktop monitors and small mobile screens.