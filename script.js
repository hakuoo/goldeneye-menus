// Global Variables
let currentLanguage = 'tr';
let currentCurrency = 'bgn';
let exchangeRate = 0.51; // BGN to EUR rate (will be updated from BNB API)

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    updateExchangeRate();
    initializeAnimations();
});

function initializeApp() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    changeLanguage(savedLanguage);
    
    // Add smooth animations
    addPageTransitions();
    
    // Initialize lazy loading
    initializeLazyLoading();
}

// Language Management
function changeLanguage(lang) {
    if (!menuData.translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all language buttons (header and welcome)
    document.querySelectorAll('.header-lang-btn, .welcome-lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    updateTranslations();
    
    // Refresh menu if it's currently displayed
    if (document.getElementById('alacarte-page').classList.contains('active')) {
        loadMenu();
    }
}

function updateTranslations() {
    const translations = menuData.translations[currentLanguage];
    
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Navigation Functions
function navigateToHub() {
    showPage('hub-page');
    
    // Reset animations
    setTimeout(() => {
        const welcomeSection = document.querySelector('.welcome-section');
        const languageSelector = document.querySelector('.language-selector');
        const menuCards = document.querySelectorAll('.menu-card');
        
        if (welcomeSection) {
            welcomeSection.style.animation = 'none';
            welcomeSection.offsetHeight; // Trigger reflow
            welcomeSection.style.animation = 'fadeInUp 1s ease-out';
        }
        
        if (languageSelector) {
            languageSelector.style.animation = 'none';
            languageSelector.offsetHeight;
            languageSelector.style.animation = 'fadeInUp 1s ease-out 0.2s both';
        }
        
        menuCards.forEach((card, index) => {
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = `fadeInUp 1s ease-out ${0.4 + index * 0.1}s both`;
        });
    }, 100);
}

function openMenu(menuType) {
    if (menuType === 'alacarte') {
        animatePageTransition('alacarte-page');
        setTimeout(() => {
            loadMenu();
            animateBackButton();
        }, 500);
    }
}

function showPage(pageId) {
    animatePageTransition(pageId);
}

// Menu Loading Functions
function loadMenu() {
    const menuContent = document.getElementById('menu-content');
    if (!menuContent) return;
    
    // Show loading animation
    menuContent.innerHTML = '<div class="loading"></div>';
    
    // Simulate loading time for better UX
    setTimeout(() => {
        displayMenu();
    }, 500);
}

function displayMenu() {
    const menuContent = document.getElementById('menu-content');
    const categories = menuData.categories;
    
    let menuHTML = '';
    
    Object.keys(categories).forEach((categoryKey, index) => {
        const category = categories[categoryKey];
        const categoryName = category[currentLanguage] || category.tr;
        
        menuHTML += `
            <div class="menu-category animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
                <h2 class="category-title">${categoryName}</h2>
                <div class="menu-items">
        `;
        
        category.items.forEach((item, itemIndex) => {
            const name = item.name[currentLanguage] || item.name.tr;
            const description = item.description[currentLanguage] || item.description.tr;
            const allergens = item.allergens[currentLanguage] || item.allergens.tr;
            
            const priceBGN = `${item.price.toFixed(2)} лв`;
            const priceEUR = `€${(item.price * exchangeRate).toFixed(2)}`;
            
            menuHTML += `
                <div class="menu-item animate__animated animate__fadeInUp">
                    <div class="item-header">
                        <h3 class="item-name">${name}</h3>
                        <div class="item-price">
                            <span class="price-bgn">${priceBGN}</span>
                            <span class="price-eur">${priceEUR}</span>
                        </div>
                    </div>
                    <p class="item-description">${description}</p>
                    <div class="item-details">
                        <span class="item-weight">${item.weight}</span>
                        <span class="item-allergens">${getAllergensLabel()}: ${allergens}</span>
                    </div>
                </div>
            `;
        });
        
        menuHTML += `
                </div>
            </div>
        `;
    });
    
    menuContent.innerHTML = menuHTML;
    
    // Enhanced animations with AnimeJS
    setTimeout(() => {
        animateMenuItems();
    }, 200);
}

// Price formatting (now shows both currencies)
function formatPrices(priceInBGN) {
    const priceBGN = `${priceInBGN.toFixed(2)} лв`;
    const priceEUR = `€${(priceInBGN * exchangeRate).toFixed(2)}`;
    return { bgn: priceBGN, eur: priceEUR };
}

// Exchange Rate Management
async function updateExchangeRate() {
    try {
        // BNB (Bulgarian National Bank) API for EUR/BGN rate
        const response = await fetch('https://api.bnb.bg/bnbwebservices/rest/exchange_rates/current');
        const data = await response.json();
        
        // Find EUR rate (BGN is base currency, so we need 1/EUR_rate)
        const eurRate = data.rates.find(rate => rate.currency === 'EUR');
        if (eurRate) {
            exchangeRate = 1 / eurRate.rate;
        }
    } catch (error) {
        console.warn('Could not fetch exchange rate from BNB API, using fallback rate');
        // Fallback to approximate rate
        exchangeRate = 0.51;
    }
}

// Utility Functions
function getAllergensLabel() {
    const labels = {
        tr: 'Alerjenler',
        en: 'Allergens',
        bg: 'Алергени',
        el: 'Αλλεργιογόνα'
    };
    return labels[currentLanguage] || labels.tr;
}

function addPageTransitions() {
    // Add smooth transitions between pages
    const style = document.createElement('style');
    style.textContent = `
        .page {
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .page:not(.active) {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}

function initializeLazyLoading() {
    // Implement lazy loading for better performance
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should be animated when they come into view
    setTimeout(() => {
        document.querySelectorAll('.menu-item, .menu-category').forEach(el => {
            observer.observe(el);
        });
    }, 1000);
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive Menu Handling
function handleResize() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Adjust animations for mobile
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '0.5s');
    }
}

// Add resize listener
window.addEventListener('resize', debounce(handleResize, 250));

// Touch Support for Mobile
function addTouchSupport() {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could add functionality here
            } else {
                // Swipe down - could add functionality here
            }
        }
    }
}

// Initialize touch support
addTouchSupport();

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'Escape':
            navigateToHub();
            break;
        case '1':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                changeLanguage('tr');
            }
            break;
        case '2':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                changeLanguage('en');
            }
            break;
        case '3':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                changeLanguage('bg');
            }
            break;
        case '4':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                changeLanguage('el');
            }
            break;
    }
});

// PWA Support (Optional - for future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics Tracking (placeholder for future implementation)
function trackMenuView(menuType) {
    // Placeholder for analytics tracking
    console.log(`Menu viewed: ${menuType}, Language: ${currentLanguage}`);
}

function trackLanguageChange(language) {
    // Placeholder for analytics tracking
    console.log(`Language changed to: ${language}`);
}

// Initialize exchange rate update interval (every hour)
setInterval(updateExchangeRate, 3600000);

// Enhanced Animation Functions with AnimeJS
function initializeAnimations() {
    // Animate header elements on load
    anime({
        targets: '.header-bar',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });

    // Animate logo with breathing effect
    anime({
        targets: '.logo-container',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutElastic(1, .8)',
        delay: 300
    });

    // Animate language flags with stagger
    anime({
        targets: '.header-lang-btn',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100, {start: 800}),
        easing: 'easeOutBack'
    });
}

// Enhanced page transitions with AnimeJS
function animatePageTransition(pageId) {
    // Fade out current page
    anime({
        targets: '.page.active',
        opacity: 0,
        translateY: -30,
        duration: 300,
        easing: 'easeInQuad',
        complete: () => {
            // Remove active class from all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show new page
            const newPage = document.getElementById(pageId);
            newPage.classList.add('active');
            
            // Animate new page in
            anime({
                targets: newPage,
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 500,
                easing: 'easeOutQuad'
            });
        }
    });
}

// Enhanced menu item animations
function animateMenuItems() {
    anime({
        targets: '.menu-item',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
    });

    // Animate prices with special effect
    anime({
        targets: '.item-price',
        scale: [0.8, 1],
        duration: 600,
        delay: anime.stagger(150, {start: 400}),
        easing: 'easeOutElastic(1, .6)'
    });
}

// Floating back button entrance animation
function animateBackButton() {
    anime({
        targets: '.floating-back',
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
        delay: 500
    });
}

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
        if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
    });
});

if (window.PerformanceObserver) {
    performanceObserver.observe({ entryTypes: ['measure'] });
}