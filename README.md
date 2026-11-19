# Rose Beauty Studio 🌹

A luxury beauty salon and skincare landing page built with **HTML, CSS, and Vanilla JavaScript** for **Assignment #1: Interactive & Responsive Landing Page**, Code To Inspire.

- **GitHub Repository:** *Add your repository link here*
- **Live Website:** *Add your GitHub Pages link here*
- **Twitter/X Post:** *Add your post link here*

## Sections

- Home (Hero)
- About
- Services
- Artists
- Gallery
- Testimonials
- FAQ
- Contact (Form and Map)
- Footer (Navigation, Contact Information, and Social Links)

## Features

### HTML
- Semantic HTML structure using `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Proper heading hierarchy with one `h1` and appropriate section headings.
- Descriptive `alt` attributes for images.
- Accessible skip navigation link.
- Labelled contact form fields with appropriate validation attributes.

### CSS
- External stylesheet: `css/style.css`.
- CSS reset and reusable `:root` variables for colors, fonts, and spacing.
- CSS Box Model, Flexbox, and Grid layouts.
- Responsive, mobile-first design using media queries for different screen sizes.
- Fluid typography using `rem` and `clamp()`.
- Hover effects, smooth transitions, and visible keyboard focus indicators.
- Reduced-motion support for improved accessibility.
- Consistent color palette featuring blush pink, ivory, champagne, and dark brown.
- Light and dark themes with attention to text contrast.

### JavaScript

All JavaScript functionality is implemented using Vanilla JavaScript in `js/script.js`.

1. **Mobile Navigation:** Responsive hamburger menu with dynamic class toggling and accessible `aria-expanded` and `aria-label` attributes.

2. **Dark/Light Mode:** Theme switcher that saves the user's preference using `localStorage`.

3. **Interactive Service Cards:** 3D flip cards that reveal additional service information, with keyboard interaction support.

4. **Modal Popups:** Gallery lightbox and contact form confirmation modal. Supports closing through the close button, overlay click, or Escape key, with focus management.

5. **Contact Form Validation:** Client-side validation with individual error messages, `aria-describedby`, live error clearing, and a confirmation message after successful validation.

6. **Dynamic Content:** Service cards, artists, FAQs, and testimonials are generated dynamically from JavaScript arrays. Service cards also include category filtering.

### Additional Features
- FAQ accordion.
- Testimonial slider with previous/next controls, navigation dots, and automatic rotation.
- Time-of-day greeting.
- Studio opening-hours indicator based on Kabul local time.
- Floating WhatsApp contact button.
- Back-to-top button.
- Scroll animations.

## Project Structure

The project follows the folder structure specified in the assignment.

```text
my-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   ├── favicon.png
│   └── ...
└── README.md
```

## How to Run Locally

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

**Note:** An internet connection is required for Google Fonts and the embedded map.

## Deployment (GitHub Pages)

To publish the website using GitHub Pages:

1. Create a public GitHub repository.
2. Upload the project files. Make sure `index.html` is located in the repository root.
3. Open **Settings → Pages** in your GitHub repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Click **Save** and wait for GitHub Pages to publish the website.

Your website will be available at:

```text
https://<username>.github.io/<repository-name>/
```

## Notes

- Rose Beauty Studio is a fictional luxury beauty salon concept based in Kabul, Afghanistan. The address, phone number, email, prices (AFN), artists, and testimonials are sample content created for this project.
- The contact form performs client-side validation and displays a confirmation message. It does not send or store actual booking requests.
- The WhatsApp button uses a sample phone number. It can be updated in `index.html` by changing the `wa.me/...` link.
- Social media icons currently link to the respective platforms' home pages and can be replaced with actual profile links.
- All photographs were generated using an AI image generator.
- AI assistance (Claude) was used during development. The code was reviewed, modified, and tested as part of the project.

## Credits

- **Fonts:** Cormorant Garamond and Montserrat (Google Fonts).
- **Map:** © OpenStreetMap contributors.
- **Logo:** Rose Beauty Studio.
- **Development:** HTML, CSS, and Vanilla JavaScript.
