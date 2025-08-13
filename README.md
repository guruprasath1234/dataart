# My Timeline App

## Task 1: Static Skeleton
The initial HTML structure for **My Timeline** included:
- **Header** with logo and theme toggle placeholder.
- **Navigation (`<nav>`)** for future filters.
- **Main Timeline Section** with placeholder years (1990, 2000, 2005, 2015).
- **Image Placeholder** for a decorative banner.
- **Modal Container** reserved for future pop-ups.
- **Footer** with basic copyright.

---

## Task 2: CSS Implementation
In this stage, the app received its first styling pass using `style.css`.

### ✅ IMPLEMENTED:
- **Responsive Layout**: Flexbox-based header, centered timeline, and adaptive layout for mobile and desktop.
- **Color Theme**: Light mode by default with a consistent blue accent (`#4a90e2`).
- **Dark Mode Styling**: Styles for background, text, timeline items, and modal when dark mode is enabled.
- **Timeline Styling**: Circular year markers with hover effects.
- **Modal Styling**: Centered popup with fade-in animation, rounded corners, and responsive image display.
- **Custom Theme Toggle Switch**: Replaced default button with a smooth animated slider switch.

---

## Task 3: JavaScript Implementation
In this stage, dynamic functionality was added using `script.js`.

### ✅ IMPLEMENTED:
- **Data Fetching**:
  - Loaded event data from `data/events.json` (8 sample events).
- **Dynamic Event Rendering**:
  - Injected clickable year markers into the timeline based on JSON data.
- **Modal Functionality**:
  - Clicking an event marker opens a modal with the event’s title, year, description, image, and category.
  - Modal closes via close button or clicking outside the content area.
- **Dark Mode Toggle**:
  - Linked the toggle switch to add/remove the `.dark-mode` class on the `<body>` element.
  - Works seamlessly with CSS to update colors instantly.

---
