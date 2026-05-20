/* ============================================================
   FILE: app.js
   SavoryGH - Complete JavaScript Functionality
   Cart System | WhatsApp Integration | Animations | Forms
   ============================================================ */

(function () {
    'use strict';

    // ============ CONFIGURATION ============
    const CONFIG = {
        whatsappNumbers: [
            '+2330208072877', // Line 1 - REPLACE WITH ACTUAL NUMBER
            '+917082819336'  // Line 2 - REPLACE WITH ACTUAL NUMBER
        ],
        emailAddress: 'hello@savorygh.com', // REPLACE WITH ACTUAL EMAIL
        deliveryFee: 10.00,
        currency: '₵',
        storeKey: 'savorygh_cart',
        slideshowInterval: 5000,
    };

    // ============ MENU DATA ============
    const menuData = [
        { id: 1, name: 'Jollof Rice with Chicken', category: 'rice', price: 40.00, desc: 'Rich tomato-infused rice with tender grilled chicken', image: 'https://static.wixstatic.com/media/1a02ca_e6658ca9985948d5ac15e41109553f18~mv2.png/v1/crop/x_0,y_49,w_1451,h_862/fill/w_943,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/jollof-rice-with-fried-chicken--description--a-cla_edited.png', badge: 'Popular' },
        { id: 2, name: 'Waakye with Fish', category: 'rice', price: 30.00, desc: 'Sorghum-rice mix with spicy fish & shito', image: 'https://www.primenewsghana.com/images/2021/aug/29/Bra-Perucci-Africa.jpg', badge: '' },
        { id: 3, name: 'Banku with Grilled Tilapia', category: 'swallow', price: 50.00, desc: 'Fermented corn dough with whole grilled tilapia', image: 'https://i.pinimg.com/originals/49/7a/16/497a168ee4f4fb298855d8bfc4cfa5ae.jpg', badge: 'Chef Pick' },
        { id: 4, name: 'Fufu with Goat Light Soup', category: 'swallow', price: 45.00, desc: 'Pounded cassava & plantain with aromatic goat soup', image: 'https://i.pinimg.com/236x/64/0f/a5/640fa50ae043144aecaa950cde4f5ade.jpg', badge: '' },
        { id: 5, name: 'Kenkey with Fried Fish', category: 'swallow', price: 35.00, desc: 'Ga-style fermented corn with crispy fried fish', image: 'https://www.lormnavaafrikcuisine.com/uploads/1/4/1/8/141832043/s457762805251037124_p59_i2_w2000.jpeg', badge: '' },
        { id: 6, name: 'Fried Rice with Chicken', category: 'rice', price: 38.00, desc: 'Flavorful fried rice with spiced chicken', image: 'https://ocdn.eu/pulscms-transforms/1/nFHktkqTURBXy8zY2QzOTZlYjc2ZThjNmMzMjZjMmJmYzgzOTk2MTBjYS5qcGVnkpUDABrNBOTNAsCTBc0EsM0Cdg', badge: 'Popular' },
        { id: 7, name: 'Red Red (Beans & Plantain)', category: 'rice', price: 28.00, desc: 'Bean stew with fried ripe plantain', image: 'https://thumbs.dreamstime.com/b/traditional-ghanaian-dish-called-red-red-black-eyed-pea-stew-served-rustic-black-bowl-fried-plantain-396697048.jpg', badge: '' },
        { id: 8, name: 'Tuo Zaafi with Ayoyo', category: 'soup', price: 35.00, desc: 'Northern-style millet dish with green leafy stew', image: 'https://i.pinimg.com/originals/7e/07/35/7e0735fe88482da855b6b0ae84971a41.jpg', badge: '' },
        { id: 9, name: 'Grilled Chicken (Full)', category: 'grilled', price: 55.00, desc: 'Whole marinated grilled chicken with pepper sauce', image: 'https://cooksdream.com/wp-content/uploads/2022/07/cd-blog-images-2022-07-14t212245335-1536x864.jpg', badge: 'Premium' },
        { id: 10, name: 'Kelewele', category: 'snacks', price: 15.00, desc: 'Spiced fried plantain cubes with groundnuts', image: 'https://images.squarespace-cdn.com/content/v1/65cfd1369377d32bcd0051fa/34764d34-bba3-4c87-bbaf-57438fee7616/Kelewele', badge: 'Snack' },
        { id: 11, name: 'Yam with Palava Sauce', category: 'soup', price: 32.00, desc: 'Boiled yam with spinach & melon seed stew', image: 'https://afrifoodnetwork.com/wp-content/uploads/2019/07/Kontomire-Stew-3.jpg', badge: '' },
        { id: 12, name: 'Grilled Tilapia (Full)', category: 'grilled', price: 60.00, desc: 'Whole grilled tilapia with banku on the side', image: 'https://i.pinimg.com/originals/31/0d/66/310d6657b03efff43695861bab086fcb.jpg', badge: 'Premium' },
        { id: 13, name: 'Assorted Meat Pepper Soup', category: 'soup', price: 25.00, desc: 'Spicy mixed meat broth — a Ghanaian favorite', image: 'https://i.ytimg.com/vi/IVq-LyEA__8/maxresdefault.jpg', badge: '' },
        { id: 14, name: 'Spring Rolls (4pcs)', category: 'snacks', price: 18.00, desc: 'Crispy vegetable spring rolls with dip', image: 'https://atchongkho.com.au/wp-content/uploads/2024/05/452851886_1037432051077527_6428214534130330848_n-e1723120006166.jpg', badge: '' },
        { id: 15, name: 'Fresh Fruit Juice', category: 'drinks', price: 15.00, desc: 'Seasonal fresh fruit blend — mango, pineapple & more', image: 'https://kouroshfoods.com/wp-content/uploads/2023/04/1.jpeg', badge: 'Refresh' },
        { id: 16, name: 'Soft Drink', category: 'drinks', price: 8.00, desc: 'Coca-Cola, Sprite, Fanta, or Malt', image: 'https://c8.alamy.com/comp/2JT9JJ2/rows-of-colourful-soft-drink-cans-bottles-some-sugary-high-sugar-content-co2-fizzy-drinks-on-shelving-inside-convenience-shop-essex-england-uk-2JT9JJ2.jpg', badge: '' },
    ];

    // ============ CART SYSTEM (localStorage) ============
    function getCart() {
        try { return JSON.parse(localStorage.getItem(CONFIG.storeKey)) || []; }
        catch (e) { return []; }
    }
    function saveCart(cart) {
        localStorage.setItem(CONFIG.storeKey, JSON.stringify(cart));
        updateCartBadges();
    }
    function addToCart(item) {
        const cart = getCart();
        const existing = cart.find(c => c.id === item.id);
        if (existing) { existing.quantity += 1; }
        else { cart.push({ ...item, quantity: 1 }); }
        saveCart(cart);
        showToast(`${item.name} added to cart! 🛒`);
    }
    function removeFromCart(id) {
        let cart = getCart();
        cart = cart.filter(c => c.id !== id);
        saveCart(cart);
        renderCartPage();
    }
    function updateQuantity(id, quantity) {
        if (quantity < 1) { removeFromCart(id); return; }
        const cart = getCart();
        const item = cart.find(c => c.id === id);
        if (item) { item.quantity = quantity; }
        saveCart(cart);
        renderCartPage();
    }
    function clearCart() {
        saveCart([]);
        renderCartPage();
        showToast('Cart cleared');
    }
    function getCartTotal() {
        return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    function getCartCount() {
        return getCart().reduce((sum, item) => sum + item.quantity, 0);
    }

    // ============ UPDATE CART BADGES ============
    function updateCartBadges() {
        const count = getCartCount();
        document.querySelectorAll('#cartBadge, #cartBadgeMobile').forEach(badge => {
            if (badge) {
                badge.textContent = count;
                if (count > 0) badge.classList.add('active');
                else badge.classList.remove('active');
                // Re-trigger animation
                badge.classList.remove('active');
                void badge.offsetWidth;
                if (count > 0) badge.classList.add('active');
            }
        });
    }

    // ============ TOAST NOTIFICATIONS ============
    function showToast(message, isError = false) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast' + (isError ? ' error' : '');
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(120%)'; }, 2800);
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3400);
    }

    // ============ FORMAT CURRENCY ============
    function formatPrice(amount) {
        return CONFIG.currency + amount.toFixed(2);
    }

    // ============ RENDER DISH CARD HTML ============
    function createDishCard(dish) {
        return `
        <div class="dish-card animate-in" data-category="${dish.category}" data-name="${dish.name.toLowerCase()}">
            <div class="dish-card__image">
                <img src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#f97316,#fbbf24)';">
                ${dish.badge ? `<span class="dish-card__badge">${dish.badge}</span>` : ''}
            </div>
            <div class="dish-card__body">
                <h3 class="dish-card__name">${dish.name}</h3>
                <p class="dish-card__desc">${dish.desc}</p>
                <div class="dish-card__footer">
                    <span class="dish-card__price">${formatPrice(dish.price)}</span>
                    <button class="dish-card__add" data-id="${dish.id}" aria-label="Add ${dish.name} to cart" title="Add to Cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>`;
    }

    // ============ RENDER FEATURED DISHES (Homepage) ============
    function renderFeaturedDishes() {
        const grid = document.getElementById('featuredGrid');
        if (!grid) return;
        const featured = menuData.filter(d => d.badge === 'Popular' || d.badge === 'Chef Pick' || d.badge === 'Premium').slice(0, 6);
        grid.innerHTML = featured.map(createDishCard).join('');
        attachAddToCartListeners(grid);
    }

    // ============ RENDER MENU PAGE ============
    function renderMenuPage(filterCategory = 'all', searchQuery = '') {
        const grid = document.getElementById('menuGrid');
        const empty = document.getElementById('menuEmpty');
        if (!grid) return;
        let dishes = menuData;
        if (filterCategory !== 'all') dishes = dishes.filter(d => d.category === filterCategory);
        if (searchQuery) dishes = dishes.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));
        if (dishes.length === 0) {
            grid.innerHTML = '';
            if (empty) empty.style.display = 'block';
        } else {
            if (empty) empty.style.display = 'none';
            grid.innerHTML = dishes.map(createDishCard).join('');
            attachAddToCartListeners(grid);
        }
    }

    // ============ ATTACH ADD-TO-CART LISTENERS ============
    function attachAddToCartListeners(container) {
        container.querySelectorAll('.dish-card__add').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const id = parseInt(this.getAttribute('data-id'));
                const dish = menuData.find(d => d.id === id);
                if (dish) {
                    addToCart({ id: dish.id, name: dish.name, price: dish.price, image: dish.image });
                    this.classList.add('added');
                    setTimeout(() => this.classList.remove('added'), 600);
                }
            });
        });
    }

    // ============ RENDER CART PAGE ============
    function renderCartPage() {
        const itemsList = document.getElementById('cartItemsList');
        const emptyState = document.getElementById('cartEmpty');
        const summary = document.getElementById('cartSummary');
        const itemCount = document.getElementById('cartItemCount');
        if (!itemsList) return;

        const cart = getCart();
        if (cart.length === 0) {
            itemsList.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            if (summary) summary.style.display = 'none';
            if (itemCount) itemCount.textContent = '0';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            if (summary) summary.style.display = 'block';
            if (itemCount) itemCount.textContent = getCartCount();
            itemsList.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item__image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#f97316,#fbbf24)';">
                </div>
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__price">${formatPrice(item.price)} each</div>
                    <div class="cart-item__qty">
                        <button class="qty-btn qty-minus" data-id="${item.id}">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div style="font-weight:800;color:var(--clr-primary);white-space:nowrap;">${formatPrice(item.price * item.quantity)}</div>
                <button class="cart-item__remove" data-id="${item.id}" aria-label="Remove ${item.name}" title="Remove">🗑️</button>
            </div>`).join('');

            // Attach listeners
            itemsList.querySelectorAll('.qty-minus').forEach(b => b.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                const item = getCart().find(c => c.id === id);
                if (item) updateQuantity(id, item.quantity - 1);
            }));
            itemsList.querySelectorAll('.qty-plus').forEach(b => b.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                const item = getCart().find(c => c.id === id);
                if (item) updateQuantity(id, item.quantity + 1);
            }));
            itemsList.querySelectorAll('.cart-item__remove').forEach(b => b.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                removeFromCart(id);
            }));
        }
        updateCartSummary();
        updateCartBadges();
    }

    function updateCartSummary() {
        const subtotalEl = document.getElementById('summarySubtotal');
        const deliveryEl = document.getElementById('summaryDelivery');
        const totalEl = document.getElementById('summaryTotal');
        if (!subtotalEl || !totalEl) return;
        const subtotal = getCartTotal();
        const delivery = subtotal > 0 ? CONFIG.deliveryFee : 0;
        subtotalEl.textContent = formatPrice(subtotal);
        if (deliveryEl) deliveryEl.textContent = formatPrice(delivery);
        totalEl.textContent = formatPrice(subtotal + delivery);
    }

    // ============ WHATSAPP ORDER ============
    function buildOrderMessage(customerDetails) {
        const cart = getCart();
        if (cart.length === 0) return '';
        const subtotal = getCartTotal();
        const total = subtotal + CONFIG.deliveryFee;
        let msg = `🛒 *NEW ORDER - SavoryGH*\n\n`;
        msg += `📋 *Order Details:*\n`;
        cart.forEach((item, i) => {
            msg += `  ${i + 1}. ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
        });
        msg += `\n💰 *Subtotal:* ${formatPrice(subtotal)}`;
        msg += `\n🚚 *Delivery Fee:* ${formatPrice(CONFIG.deliveryFee)}`;
        msg += `\n⭐ *TOTAL:* ${formatPrice(total)}`;
        msg += `\n\n👤 *Customer Details:*`;
        msg += `\n  • Name: ${customerDetails.name}`;
        msg += `\n  • Phone: ${customerDetails.phone}`;
        msg += `\n  • Address: ${customerDetails.address}`;
        if (customerDetails.note) msg += `\n  • Note: ${customerDetails.note}`;
        msg += `\n\n🙏 Thank you for your order!`;
        return msg;
    }

    function sendWhatsAppOrder(phoneNumberIndex = 0) {
        const cart = getCart();
        if (cart.length === 0) { showToast('Your cart is empty!', true); return; }
        const name = document.getElementById('customerName')?.value?.trim();
        const phone = document.getElementById('customerPhone')?.value?.trim();
        const address = document.getElementById('customerAddress')?.value?.trim();
        const note = document.getElementById('customerNote')?.value?.trim();
        if (!name || !phone || !address) { showToast('Please fill in all required delivery details.', true); return; }
        const details = { name, phone, address, note };
        const message = buildOrderMessage(details);
        const whatsappNumber = CONFIG.whatsappNumbers[phoneNumberIndex] || CONFIG.whatsappNumbers[0];
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        showToast('Opening WhatsApp... 📱');
    }

    function sendEmailOrder() {
        const cart = getCart();
        if (cart.length === 0) { showToast('Your cart is empty!', true); return; }
        const name = document.getElementById('customerName')?.value?.trim();
        const phone = document.getElementById('customerPhone')?.value?.trim();
        const address = document.getElementById('customerAddress')?.value?.trim();
        const note = document.getElementById('customerNote')?.value?.trim();
        if (!name || !phone || !address) { showToast('Please fill in all required delivery details.', true); return; }
        const details = { name, phone, address, note };
        const message = buildOrderMessage(details);
        const subject = `New Order - ${name}`;
        const mailtoUrl = `mailto:${CONFIG.emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoUrl;
        showToast('Opening email client... 📧');
    }

    // ============ CONTACT FORM ============
    function setupContactForm() {
        const form = document.getElementById('contactForm');
        const emailBtn = document.getElementById('contactEmailBtn');
        const whatsappBtn = document.getElementById('contactWhatsAppBtn');
        if (!form) return;

        function getContactData() {
            return {
                name: document.getElementById('contactName')?.value?.trim() || '',
                email: document.getElementById('contactEmail')?.value?.trim() || '',
                phone: document.getElementById('contactPhone')?.value?.trim() || '',
                subject: document.getElementById('contactSubject')?.value?.trim() || '',
                message: document.getElementById('contactMessage')?.value?.trim() || '',
            };
        }

        function validateContact(data) {
            if (!data.name || !data.email || !data.subject || !data.message) {
                showToast('Please fill in all required fields.', true);
                return false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                showToast('Please enter a valid email address.', true);
                return false;
            }
            return true;
        }

        if (emailBtn) {
            emailBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const data = getContactData();
                if (!validateContact(data)) return;
                const body = `📩 *Message from SavoryGH Contact Form*\n\n👤 *Name:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Phone:* ${data.phone}\n📝 *Subject:* ${data.subject}\n\n💬 *Message:*\n${data.message}`;
                const mailto = `mailto:${CONFIG.emailAddress}?subject=${encodeURIComponent('Contact: ' + data.subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailto;
                showToast('Opening email client... 📧');
            });
        }

        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const data = getContactData();
                if (!validateContact(data)) return;
                const body = `📩 *Message from SavoryGH Contact Form*\n\n👤 *Name:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Phone:* ${data.phone}\n📝 *Subject:* ${data.subject}\n\n💬 *Message:*\n${data.message}`;
                const url = `https://wa.me/${CONFIG.whatsappNumbers[0]}?text=${encodeURIComponent(body)}`;
                window.open(url, '_blank');
                showToast('Opening WhatsApp... 📱');
            });
        }
    }

    // ============ MOBILE MENU ============
    function setupMobileMenu() {
        const toggle = document.getElementById('menuToggle');
        const nav = document.getElementById('headerNav');
        if (!toggle || !nav) return;
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        // Close menu on link click
        nav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
                toggle.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }

    // ============ HERO SLIDESHOW ============
    function setupHeroSlideshow() {
        const slides = document.querySelectorAll('.hero__slide');
        if (slides.length < 2) return;
        let current = 0;
        function nextSlide() {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }
        setInterval(nextSlide, CONFIG.slideshowInterval);
    }

    // ============ BACK TO TOP ============
    function setupBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) btn.classList.add('visible');
            else btn.classList.remove('visible');
        });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ============ HEADER SCROLL SHADOW ============
    function setupHeaderScroll() {
        const header = document.getElementById('header');
        if (!header) return;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    // ============ MENU FILTERS & SEARCH ============
    function setupMenuFilters() {
        const filters = document.getElementById('menuFilters');
        const search = document.getElementById('menuSearch');
        if (!filters && !search) return;
        let activeFilter = 'all';
        let searchQuery = '';

        if (filters) {
            filters.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    activeFilter = e.target.getAttribute('data-category');
                    renderMenuPage(activeFilter, searchQuery);
                }
            });
        }
        if (search) {
            search.addEventListener('input', () => {
                searchQuery = search.value.trim();
                renderMenuPage(activeFilter, searchQuery);
            });
        }
        // Check URL for category param
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('category');
        if (catParam && filters) {
            const targetBtn = filters.querySelector(`[data-category="${catParam}"]`);
            if (targetBtn) {
                filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');
                activeFilter = catParam;
                renderMenuPage(activeFilter, searchQuery);
            }
        }
    }

    // ============ CART PAGE SETUP ============
    function setupCartPage() {
        const clearBtn = document.getElementById('clearCartBtn');
        const whatsappBtn1 = document.getElementById('whatsappOrderBtn1');
        const whatsappBtn2 = document.getElementById('whatsappOrderBtn2');
        const emailBtn = document.getElementById('emailOrderBtn');

        if (clearBtn) clearBtn.addEventListener('click', () => { if (confirm('Clear all items from your cart?')) clearCart(); });
        if (whatsappBtn1) whatsappBtn1.addEventListener('click', () => sendWhatsAppOrder(0));
        if (whatsappBtn2) whatsappBtn2.addEventListener('click', () => sendWhatsAppOrder(1));
        if (emailBtn) emailBtn.addEventListener('click', sendEmailOrder);

        renderCartPage();
    }

    // ============ INITIALIZE ============
    function init() {
        updateCartBadges();
        setupMobileMenu();
        setupHeroSlideshow();
        setupBackToTop();
        setupHeaderScroll();

        // Page-specific initializations
        const path = window.location.pathname;

        if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
            renderFeaturedDishes();
        }
        if (path.includes('menu.html')) {
            renderMenuPage();
            setupMenuFilters();
        }
        if (path.includes('cart.html')) {
            setupCartPage();
        }
        if (path.includes('contact.html')) {
            setupContactForm();
        }
        if (path.includes('about.html')) {
            // About page — no special init needed beyond shared functionality
        }

        // Update cart badges on all pages
        updateCartBadges();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for potential inline use
    window.SavoryGH = {
        addToCart,
        getCart,
        getCartCount,
        clearCart,
        menuData,
    };
})();