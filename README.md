# Responsive Portfolio Website

A modern and professional portfolio website built with HTML, CSS, and JavaScript. This website is fully responsive and features smooth animations, a clean design, and an intuitive user interface.

![Portfolio Preview](src/img/perfil.png)

## Features

- 📱 Fully Responsive Design
- 🎨 Modern UI/UX
- ✨ Smooth Scroll Animations
- 🌙 Light/Dark Theme Toggle
- 📂 Project Showcase Section
- 📝 Contact Form
- 🎯 Skills & Experience Section
- 📱 Mobile-First Approach

## Technologies Used

- HTML5
- CSS3
- JavaScript
- BoxIcons
- ScrollReveal.js

## Project Structure

```
├── src/
│   ├── boxicons-2.1.4/     # Icon library
│   ├── css/                # Stylesheets
│   ├── img/                # Image src
│   ├── js/                 # JavaScript files
│   └── Pages/             # Additional pages
├── index.html             # Main entry point
└── README.md             # Project documentation
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Responsive-Portfolio.git
   ```

2. Open `index.html` in your preferred web browser.

## Environment Variables

To use features like reCAPTCHA and EmailJS, you need to set up environment variables:

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your actual API keys for:
   - `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` (Google reCAPTCHA)
   - `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` (EmailJS)

**Note:**

- Never commit your `.env` file to version control. It is already included in `.gitignore`.
- The `.env.example` file is provided as a template for other developers.

## Customization

1. Replace images in the `src/img/` directory with your own images
2. Modify `src/css/styles.css` to change the styling
3. Update content in `index.html` to personalize your portfolio
4. Adjust animations in `src/js/main.js` as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out through the contact form on the website.

---

⭐ Don't forget to star this repository if you found it helpful!
