# Aurum Restaurant QR Menu

A modern, multilingual QR menu system for Aurum Restaurant's a la carte menu.

## 🌟 Features

### Core Functionality
- **🌐 Multilingual Support**: Turkish (main), English, Bulgarian, and Greek
- **💰 Currency Conversion**: BGN to EUR with real-time exchange rates from Bulgarian National Bank
- **📱 Responsive Design**: Optimized for mobile devices and tablets
- **⚡ Fast Loading**: Optimized performance with lazy loading and caching
- **📡 Offline Support**: Service worker for offline functionality

### 🎨 Design
- **Color Scheme**: Gold primary (#D4AF37), black and white accents
- **Typography**: Playfair Display for headings, Source Sans Pro for body text
- **Animations**: Smooth, fast-loading animations
- **♿ Accessibility**: Keyboard navigation and focus management

### 🍽️ Menu Structure
- **Categories**: Appetizers, Soups, Salads, Main Dishes, Desserts
- **Item Details**: Name, description, weight, price, allergens
- **Navigation**: Hub page with menu selection, header bar with logo navigation

## 📁 Project Structure
```
/Volumes/Vault v2.0/Aurum_qr_menu/qr/
├── index.html          # Main HTML file with hub and menu pages
├── styles.css          # Complete CSS with responsive design
├── script.js           # JavaScript functionality
├── menu-data.js        # Menu data in all languages
└── README.md          # This file
```

## 🚀 Usage

### To View the Menu:
1. **Simple Option**: Double-click on `index.html` to open in your browser
2. **Better Option**: Use a local server for full functionality:
   ```bash
   # Navigate to the project folder in Terminal:
   cd "/Volumes/Vault v2.0/Aurum_qr_menu/qr"
   
   # Then start a local server:
   python3 -m http.server 8080
   # or
   python -m SimpleHTTPServer 8080
   ```
   Then open: http://localhost:8080

### 🎯 Navigation
- **Hub Page**: Select language and menu type
- **Logo Click**: Return to hub from any page
- **Language Switching**: Click language buttons at any time
- **Currency Toggle**: Switch between BGN and EUR on menu page

### ⌨️ Keyboard Shortcuts
- `Escape`: Return to hub page
- `Cmd + 1`: Turkish
- `Cmd + 2`: English  
- `Cmd + 3`: Bulgarian
- `Cmd + 4`: Greek

## ⚙️ Customization

### Adding Menu Items
Edit `menu-data.js` to add new categories or items. Each item requires:
- Name in all languages
- Description in all languages
- Weight (string)
- Price in BGN (number)
- Allergens in all languages

### Styling Changes
Modify CSS variables in `styles.css`:
```css
:root {
    --gold: #D4AF37;
    --black: #1A1A1A;
    --white: #FFFFFF;
    /* etc. */
}
```

## 🌍 Browser Support

Note: The repository already includes example menu items (main dishes, salads, and desserts) extracted from the provided Aurum menu image to serve as sample data. You can replace or extend them in `menu-data.js`.
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 💡 Technical Details

### Exchange Rate API
Uses Bulgarian National Bank (BNB) API for real-time EUR/BGN exchange rates:
- Updates every hour automatically
- Fallback rate if API unavailable

### Performance Features
- Lazy loading for menu items
- Optimized animations using CSS transforms
- Debounced resize handlers
- Minimal DOM manipulation

## 📈 Future Enhancements Planned
- 📷 Menu item images
- 🔍 Allergen filtering
- 🍷 Wine pairing suggestions
- 📊 Nutritional information
- 🌙 Dark/light theme toggle

## 📞 Support
For any questions about customizing the menu, contact your development team.

---
**© 2025 Aurum Restaurant - All rights reserved**

## 📤 Deploying to GitHub Pages (Test on other devices)

This repository includes a GitHub Actions workflow that deploys the site to GitHub Pages whenever you push to the `main` or `master` branch.

Steps to deploy:
1. Create a new GitHub repository and push the project to it.
2. Ensure the default branch is `main` (or `master`) so the workflow runs on push.
3. Push your code; the Action will deploy the repository root to GitHub Pages.
4. Visit https://<your-username>.github.io/<your-repo> after the Action completes (check the Actions tab for logs).

Notes:
- The workflow publishes the repository root; if you want a specific folder published (e.g. `/docs`), change `publish_dir` in `.github/workflows/deploy-pages.yml`.
- If your site uses a custom domain, add `CNAME` to the repo root and configure GitHub Pages settings.

Troubleshooting:
- Action logs are available under the repository's Actions tab.
- Ensure the repository is not private or that you have configured Pages for private repos with an appropriate plan.
