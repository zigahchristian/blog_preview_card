# Bloom Flower Shop Website

Welcome to the **Bloom Flower Shop**! This project is a fully responsive, modern flower shop website designed to showcase beautiful floral products, provide detailed shop information, and allow customers to get in touch. The site is built using **HTML5** and **TailwindCSS** to ensure smooth styling and optimal performance across all devices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

---

## Introduction

The **Bloom Flower Shop** website is a simple, yet elegant flower shop platform with a modern interface. It features multiple pages, including a homepage with a carousel, a shop page to display flower products, an About Us section, and a Contact page. TailwindCSS is used to design responsive, mobile-friendly pages with ease.

---

## Features

### 1. Homepage
- A clean header with navigation links.
- A fully functional **carousel** that auto-scrolls images of flower arrangements.
- A **footer** with the shop’s contact information and social media links.

### 2. Shop Page
- Displays flower products in a responsive grid layout.
- Each product card features an image, name, and price.

### 3. About Us Page
- A section explaining the shop’s mission, history, and team.
- Beautifully styled text and images.

### 4. Contact Us Page
- A contact form for user inquiries (name, email, and message).
- Fully styled and validated using TailwindCSS classes.

### 5. Footer
- Includes contact details like phone number, email, and address.
- Links to social media pages for better customer engagement.

### 6. Carousel
- Auto-scrolls images with manual control options.
- Timer-based auto-scrolling for an engaging experience.

---

## Technologies Used

- **HTML5**: For the structure of the website.
- **TailwindCSS**: For responsive and utility-first styling.
- **JavaScript**: For dynamic functionality like the image carousel.
- **Unsplash API**: For fetching high-quality images of flowers.

---

## Installation

### Prerequisites
You need the following to run the project locally:
- A modern web browser (Chrome, Firefox, etc.).
- A code editor like **VSCode** for making changes.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flower-shop-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd flower-shop-website
   ```

3. Open the `index.html` file in your browser to view the homepage.

4. (Optional) If you want to modify or customize TailwindCSS styles, install TailwindCSS:
   ```bash
   npm install tailwindcss
   ```

5. Compile the TailwindCSS:
   ```bash
   npx tailwindcss -o ./assets/css/styles.css
   ```

---

## Usage

- Open the `index.html` file in a web browser to explore the website.
- Navigate between pages (Home, Shop, About Us, Contact Us) using the navigation bar.
- On the **homepage**, the carousel will auto-scroll, displaying flower arrangements.
- Use the **shop page** to browse available products, and the **Contact Us** page to send inquiries.

---

## Project Structure

```plaintext
D:.
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tailwind.config.js
│
└───src
    │   about.html
    │   carousel.html
    │   contact.html
    │   index.html
    │   input.css
    │   shop.html
    │
    └───assets
        ├───css
        │       style.css
        │
        ├───img
        │       brighttulip.jpg
        │       c1.png
        │       c2.png
        │       c3.png
        │       cover.jpg
        │       Elegant-orchid-plant.jpg
        │       Fragrant-Lilies.jpg
        │       hannah.jpg
        │       jack.jpg
        │       lily.jpg
        │       logo.jpg
        │       michael.jpg
        │       rose.jpg
        │       Roses2.jpeg
        │       tulip.jfif
        │       tulipcover.jpg
        │
        └───js
                main.js
```

### Key Files
- **index.html**: Homepage structure.
- **shop.html**: Product display page.
- **about.html**: Information about the flower shop.
- **contact.html**: Contact form for user inquiries.
- **carousel.js**: JavaScript for carousel functionality.
- **styles.css**: Compiled TailwindCSS stylesheet.

---

## Customization

You can easily modify and extend the website by following the guidelines below.

### Changing Carousel Timer
To change the auto-scroll interval of the homepage carousel, modify the timer value in the `carousel.js` file:
```javascript
// Auto-scroll timer
function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 5000); // Change 5000 to desired milliseconds
}
```

### Adding New Products
To add new products to the shop page, simply copy the product card structure in `shop.html` and update the image, title, and price:
```html
<div class="product-card">
    <img src="assets/images/flower-new.jpg" alt="New Flower" />
    <h3 class="product-name">New Flower</h3>
    <span class="product-price">$25</span>
</div>
```

### Styling Customizations
Feel free to add or modify TailwindCSS classes in the `styles.css` file or directly within the HTML components. For example, to change button styles:
```html
<button class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg">
    Buy Now
</button>
```

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as needed.

---

## Conclusion

The **Bloom Flower Shop** website is a fully functional, responsive project built using modern web technologies. It's easy to set up, customize, and deploy. We hope you enjoy exploring and working with this project! Feel free to contribute or customize as you see fit.# blog_preview_card
