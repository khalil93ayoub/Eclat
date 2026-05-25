const ECLAT = {
    links: {
        instagram: "https://www.instagram.com/",
        whatsapp: "https://wa.me/15551234567"
    },
    products: {
        black: {
            id: "black",
            price: 35,
            main: "assets/generated/eclat-shirt-black.png",
            thumbs: [
                "assets/generated/eclat-shirt-black.png",
                "assets/mockup/black-thumb-2.jpg",
                "assets/mockup/black-thumb-3.jpg",
                "assets/mockup/black-thumb-4.jpg",
                "assets/mockup/black-thumb-5.jpg"
            ]
        },
        white: {
            id: "white",
            price: 35,
            main: "assets/generated/eclat-shirt-white.png",
            thumbs: [
                "assets/generated/eclat-shirt-white.png",
                "assets/mockup/white-thumb-2.jpg",
                "assets/mockup/white-thumb-3.jpg",
                "assets/mockup/white-thumb-4.jpg",
                "assets/mockup/white-thumb-5.jpg"
            ]
        }
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    gallery: [
        {
            id: "reel-01",
            titleKey: "reelTitle1",
            image: "assets/mockup/look-black-detail.jpg",
            type: "video",
            reelUrl: "",
            videoSrc: "assets/videos/reel-01.mp4"
        },
        {
            id: "reel-02",
            titleKey: "reelTitle2",
            image: "assets/mockup/look-video.jpg",
            type: "video",
            reelUrl: "",
            videoSrc: "assets/videos/reel-02.mp4"
        },
        {
            id: "reel-03",
            titleKey: "reelTitle3",
            image: "assets/mockup/look-white-detail.jpg",
            type: "video",
            reelUrl: "",
            videoSrc: "assets/videos/reel-03.mp4"
        }
    ]
};

const CART_KEY = "eclat-cart-v3";
const LANGUAGE_KEY = "eclat-language";
const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let selectedColor = getInitialColor();
let selectedQuantity = 1;
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "fr";

const I18N = {
    fr: {
        ariaOpenMenu: "Ouvrir le menu",
        ariaHome: "Accueil ECLAT",
        ariaPrimaryNav: "Navigation principale",
        ariaMobileNav: "Navigation mobile",
        ariaOpenBag: "Ouvrir le panier",
        ariaCloseBag: "Fermer le panier",
        ariaBackHome: "Retour a l'accueil",
        ariaHero: "Nouvelle sortie ECLAT",
        ariaClosePreview: "Fermer l'apercu",
        ariaDecreaseQty: "Diminuer la quantite",
        ariaIncreaseQty: "Augmenter la quantite",
        navHome: "Accueil",
        navShop: "Boutique",
        navGallery: "Galerie",
        navContact: "Contact",
        contactTitle: "Contacter ECLAT",
        contactInstagram: "Instagram",
        contactWhatsapp: "WhatsApp",
        heroEyebrow: "Nouvelle sortie",
        heroTitle: "Simplicite intemporelle.<br>Faite pour se distinguer.",
        heroCta: "Acheter maintenant",
        altHeroImage: "T-shirts ECLAT noir et blanc sur tissu sombre",
        collectionEyebrow: "La collection",
        collectionTitle: "Simple. Audacieux. Eclat.",
        collectionText: "Des essentiels premium concus pour le quotidien. Design epure. Coupe parfaite. Qualite sans compromis.",
        viewProduct: "Voir le produit",
        viewAllProducts: "Voir les produits",
        featureQualityTitle: "Qualite premium",
        featureQualityText: "Tissu de haute qualite, concu pour durer.",
        featureComfortTitle: "Confort quotidien",
        featureComfortText: "Doux, respirant et pense pour toute la journee.",
        featureDesignTitle: "Design minimal",
        featureDesignText: "Une esthetique epuree qui reste actuelle.",
        featureOrderTitle: "Commande securisee",
        featureOrderText: "Commandez via Instagram ou WhatsApp.",
        cartTitle: "Votre panier",
        subtotal: "Sous-total",
        orderViaInstagram: "Commander via Instagram",
        orderViaWhatsapp: "Commander via WhatsApp",
        backHome: "‹ Retour a l'accueil",
        productDescription: "Design minimal. Impact maximal. Concu en coton premium pour un confort et un style au quotidien.",
        colorLabel: "Couleur",
        sizeLabel: "Taille",
        selectSize: "Choisir la taille",
        quantityLabel: "Quantite",
        addToBag: "Ajouter au panier",
        checkoutVia: "Commander via",
        orderOnInstagram: "Commander sur Instagram",
        orderOnWhatsapp: "Commander sur WhatsApp",
        detailsTitle: "Details du produit",
        detailsText: "T-shirt en coton premium avec impression ECLAT epuree, coupe reguliere et toucher doux au quotidien.",
        sizeGuideTitle: "Guide des tailles",
        sizeGuideText: "Choisissez votre taille habituelle pour une coupe classique. Prenez une taille au-dessus pour un style plus ample.",
        shippingTitle: "Livraison et retours",
        shippingText: "Les commandes se finalisent via Instagram ou WhatsApp jusqu'a la connexion du paiement en ligne.",
        orderNow: "Commander",
        productBase: "T-shirt ECLAT",
        black: "Noir",
        white: "Blanc",
        chooseColor: "Choisir la couleur",
        productView: "vue",
        playReel: "Voir le reel",
        reelTitle1: "Reel ECLAT 01",
        reelTitle2: "Reel ECLAT 02",
        reelTitle3: "Reel ECLAT 03",
        emptyCart: "Votre panier est vide.",
        shopDrop: "Voir la collection",
        remove: "Retirer",
        orderMessageEmpty: "Bonjour, je souhaite commander chez ECLAT.",
        orderMessageIntro: "Bonjour, je souhaite commander :",
        orderMessageContact: "Bonjour, je souhaite contacter ECLAT.",
        orderMessageProduct: "Bonjour, je souhaite commander",
        sizeWord: "taille",
        languageLabel: "Passer en arabe",
        titleHome: "ECLAT | Simplicite intemporelle",
        titleProduct: "ECLAT | Produit"
    },
    ar: {
        ariaOpenMenu: "فتح القائمة",
        ariaHome: "الصفحة الرئيسية ECLAT",
        ariaPrimaryNav: "التنقل الرئيسي",
        ariaMobileNav: "تنقل الهاتف",
        ariaOpenBag: "فتح السلة",
        ariaCloseBag: "إغلاق السلة",
        ariaBackHome: "العودة إلى الرئيسية",
        ariaHero: "إصدار جديد من ECLAT",
        ariaClosePreview: "إغلاق المعاينة",
        ariaDecreaseQty: "إنقاص الكمية",
        ariaIncreaseQty: "زيادة الكمية",
        navHome: "الرئيسية",
        navShop: "المتجر",
        navGallery: "المعرض",
        navContact: "تواصل",
        contactTitle: "تواصل مع ECLAT",
        contactInstagram: "إنستغرام",
        contactWhatsapp: "واتساب",
        heroEyebrow: "إصدار جديد",
        heroTitle: "بساطة خالدة.<br>مصممة لتبرز.",
        heroCta: "تسوق الآن",
        altHeroImage: "قمصان ECLAT باللونين الأسود والأبيض على قماش داكن",
        collectionEyebrow: "المجموعة",
        collectionTitle: "بسيط. جريء. Eclat.",
        collectionText: "أساسيات فاخرة مصممة للاستخدام اليومي. تصميم نقي. قصة مثالية. جودة بلا تنازل.",
        viewProduct: "عرض المنتج",
        viewAllProducts: "عرض المنتجات",
        featureQualityTitle: "جودة فاخرة",
        featureQualityText: "قماش عالي الجودة مصمم ليدوم.",
        featureComfortTitle: "راحة يومية",
        featureComfortText: "ناعم، قابل للتنفس ومصمم لليوم الكامل.",
        featureDesignTitle: "تصميم بسيط",
        featureDesignText: "جمالية نقية لا تفقد حضورها.",
        featureOrderTitle: "طلب آمن",
        featureOrderText: "اطلب عبر إنستغرام أو واتساب.",
        cartTitle: "سلتك",
        subtotal: "المجموع الفرعي",
        orderViaInstagram: "اطلب عبر إنستغرام",
        orderViaWhatsapp: "اطلب عبر واتساب",
        backHome: "‹ العودة إلى الرئيسية",
        productDescription: "تصميم بسيط. تأثير واضح. مصنوع من قطن فاخر لراحة وأناقة يومية.",
        colorLabel: "اللون",
        sizeLabel: "المقاس",
        selectSize: "اختر المقاس",
        quantityLabel: "الكمية",
        addToBag: "أضف إلى السلة",
        checkoutVia: "اطلب عبر",
        orderOnInstagram: "اطلب على إنستغرام",
        orderOnWhatsapp: "اطلب على واتساب",
        detailsTitle: "تفاصيل المنتج",
        detailsText: "تيشيرت من قطن فاخر مع طباعة ECLAT نظيفة، قصة عادية وملمس ناعم للاستخدام اليومي.",
        sizeGuideTitle: "دليل المقاسات",
        sizeGuideText: "اختر مقاسك المعتاد لقصة كلاسيكية. اختر مقاسا أكبر لمظهر أوسع.",
        shippingTitle: "الشحن والإرجاع",
        shippingText: "يتم إنهاء الطلبات عبر إنستغرام أو واتساب إلى حين ربط الدفع الإلكتروني.",
        orderNow: "اطلب الآن",
        productBase: "تيشيرت ECLAT",
        black: "أسود",
        white: "أبيض",
        chooseColor: "اختر اللون",
        productView: "صورة",
        playReel: "شاهد الريل",
        reelTitle1: "ريل ECLAT 01",
        reelTitle2: "ريل ECLAT 02",
        reelTitle3: "ريل ECLAT 03",
        emptyCart: "سلتك فارغة.",
        shopDrop: "تصفح المجموعة",
        remove: "إزالة",
        orderMessageEmpty: "مرحبا، أريد الطلب من ECLAT.",
        orderMessageIntro: "مرحبا، أريد طلب:",
        orderMessageContact: "مرحبا، أريد التواصل مع ECLAT.",
        orderMessageProduct: "مرحبا، أريد طلب",
        sizeWord: "المقاس",
        languageLabel: "Passer en francais",
        titleHome: "ECLAT | بساطة خالدة",
        titleProduct: "ECLAT | المنتج"
    }
};

function money(value) {
    return `$${value.toFixed(2)}`;
}

function t(key) {
    return I18N[currentLanguage][key] || I18N.fr[key] || key;
}

function colorName(color) {
    return t(color);
}

function localizedProductTitle(product) {
    return `${t("productBase")} ${colorName(product.id)}`;
}

function localizedDisplayTitle(product) {
    return `${t("productBase")}<br>${colorName(product.id)}`;
}

function setLanguage(language) {
    currentLanguage = language === "ar" ? "ar" : "fr";
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", currentLanguage === "ar");
    document.title = document.body.dataset.page === "product" ? t("titleProduct") : t("titleHome");

    qsa("[data-i18n]").forEach(node => {
        node.textContent = t(node.dataset.i18n);
    });
    qsa("[data-i18n-html]").forEach(node => {
        node.innerHTML = t(node.dataset.i18nHtml);
    });
    qsa("[data-i18n-aria]").forEach(node => {
        node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });
    qsa("[data-i18n-alt]").forEach(node => {
        node.setAttribute("alt", t(node.dataset.i18nAlt));
    });

    qsa("[data-language-toggle]").forEach(toggle => {
        toggle.setAttribute("aria-pressed", String(currentLanguage === "ar"));
        toggle.setAttribute("aria-label", t("languageLabel"));
    });
    const whatsappContact = qs("[data-contact-whatsapp]");
    if (whatsappContact) {
        whatsappContact.href = `${ECLAT.links.whatsapp}?text=${encodeURIComponent(t("orderMessageContact"))}`;
    }

    renderCart();
    if (document.body.dataset.page === "home") {
        renderHomeProducts();
        renderGallery();
    }
    if (document.body.dataset.page === "product") {
        renderSelectedProduct();
    }
}

function initLanguageToggle() {
    qsa("[data-language-toggle]").forEach(toggle => {
        toggle.addEventListener("click", () => {
            setLanguage(currentLanguage === "fr" ? "ar" : "fr");
        });
    });
    setLanguage(currentLanguage);
}

function productByColor(color) {
    return ECLAT.products[color] || ECLAT.products.black;
}

function getInitialColor() {
    const params = new URLSearchParams(window.location.search);
    return params.get("color") || params.get("product") || "black";
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
}

function initMenu() {
    const toggle = qs("[data-menu-toggle]");
    const menu = qs("[data-mobile-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    qsa("a", menu).forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function renderHomeProducts() {
    const grid = qs("[data-product-grid]");
    if (!grid) return;

    grid.innerHTML = Object.values(ECLAT.products).map(product => `
        <a class="product-card" href="checkout.html?color=${product.id}">
            <img src="${product.main}" alt="${localizedProductTitle(product)}">
            <div class="product-card-row">
                <span>${t("productBase")}<br>${colorName(product.id)}</span>
                <span>${money(product.price)}</span>
            </div>
        </a>
    `).join("");
}

function renderGallery() {
    const track = qs("[data-gallery-track]");
    if (!track) return;

    track.innerHTML = ECLAT.gallery.map(item => `
        <button class="lookbook-card" type="button" data-gallery-item="${item.id}">
            <img src="${item.image}" alt="${t(item.titleKey)}">
            <span class="play-overlay"><span>&#9655;</span><small>${t("playReel")}</small></span>
        </button>
    `).join("");

    qsa("[data-gallery-item]").forEach(button => {
        button.addEventListener("click", () => openGallery(button.dataset.galleryItem));
    });
}

function openGallery(id) {
    const item = ECLAT.gallery.find(entry => entry.id === id);
    const modal = qs("[data-gallery-modal]");
    if (!item || !modal) return;

    const media = qs("[data-modal-media]");
    if (item.type === "video" && item.reelUrl) {
        media.innerHTML = `<iframe src="${item.reelUrl}" title="${t(item.titleKey)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else if (item.type === "video" && item.videoSrc) {
        media.innerHTML = `<video controls playsinline preload="metadata" poster="${item.image}"><source src="${item.videoSrc}" type="video/mp4"></video>`;
        const video = qs("video", media);
        video.load();
    } else {
        media.innerHTML = `<img src="${item.image}" alt="${t(item.titleKey)}">`;
    }

    qs("[data-modal-title]").textContent = t(item.titleKey);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    const modal = qs("[data-gallery-modal]");
    if (!modal) return;

    modal.hidden = true;
    qs("[data-modal-media]").innerHTML = "";
    document.body.style.overflow = "";
}

function initContactDropdown() {
    const menu = qs("[data-contact-menu]");
    if (!menu) return;

    qsa("[data-contact-toggle]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const isHidden = menu.hidden;
            closeCart();
            document.body.classList.remove("menu-open");
            const mobileToggle = qs("[data-menu-toggle]");
            if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
            menu.hidden = !isHidden;
            qsa("[data-contact-toggle]").forEach(toggle => {
                toggle.setAttribute("aria-expanded", String(isHidden));
            });
        });
    });

    const instagram = qs("[data-contact-instagram]");
    const whatsapp = qs("[data-contact-whatsapp]");
    if (instagram) instagram.href = ECLAT.links.instagram;
    if (whatsapp) whatsapp.href = `${ECLAT.links.whatsapp}?text=${encodeURIComponent(t("orderMessageContact"))}`;

    menu.addEventListener("click", event => event.stopPropagation());
    document.addEventListener("click", () => closeContactDropdown());
}

function closeContactDropdown() {
    const menu = qs("[data-contact-menu]");
    if (!menu) return;
    menu.hidden = true;
    qsa("[data-contact-toggle]").forEach(toggle => {
        toggle.setAttribute("aria-expanded", "false");
    });
}

function initGalleryModal() {
    qsa("[data-modal-close]").forEach(close => {
        close.addEventListener("click", closeGallery);
    });
}

function renderProductPage() {
    const page = qs("[data-product-page]");
    if (!page) return;

    selectedColor = productByColor(selectedColor).id;
    selectedQuantity = 1;
    renderSelectedProduct();
    bindProductActions();
    bindAccordions();
}

function renderSelectedProduct() {
    const page = qs("[data-product-page]");
    const product = productByColor(selectedColor);
    if (!page || !product) return;

    page.classList.toggle("theme-white", product.id === "white");
    qs("[data-product-title]").innerHTML = localizedDisplayTitle(product);
    qs("[data-product-price]").textContent = money(product.price);

    const mainImage = qs("[data-main-product-image]");
    mainImage.src = product.main;
    mainImage.alt = localizedProductTitle(product);

    const stickyImage = qs("[data-sticky-image]");
    const stickyTitle = qs("[data-sticky-title]");
    const stickyPrice = qs("[data-sticky-price]");
    if (stickyImage) {
        stickyImage.src = product.main;
        stickyImage.alt = localizedProductTitle(product);
    }
    if (stickyTitle) stickyTitle.innerHTML = localizedDisplayTitle(product);
    if (stickyPrice) stickyPrice.textContent = money(product.price);

    renderColorOptions(product);
    renderThumbnails(product);
    renderQuantity();
    bindOrderLinks(product);
}

function renderColorOptions(product) {
    const target = qs("[data-color-options]");
    if (!target) return;

    target.innerHTML = Object.values(ECLAT.products).map(item => `
        <button class="color-option ${item.id === product.id ? "active" : ""}" type="button" data-color="${item.id}" aria-label="${t("chooseColor")} ${colorName(item.id)}">
            <span class="color-swatch ${item.id}"></span>
            <span>${colorName(item.id)}</span>
        </button>
    `).join("");

    qsa("[data-color]", target).forEach(button => {
        button.addEventListener("click", () => {
            selectedColor = button.dataset.color;
            renderSelectedProduct();
            const url = new URL(window.location.href);
            url.searchParams.set("color", selectedColor);
            url.searchParams.delete("product");
            history.replaceState(null, "", url);
        });
    });
}

function renderThumbnails(product) {
    const row = qs("[data-thumbnail-row]");
    if (!row) return;

    row.innerHTML = product.thumbs.map((thumb, index) => `
        <button type="button" class="${index === 0 ? "active" : ""}" data-thumb="${thumb}">
            <img src="${thumb}" alt="${localizedProductTitle(product)} ${t("productView")} ${index + 1}">
        </button>
    `).join("");

    qsa("[data-thumb]", row).forEach(button => {
        button.addEventListener("click", () => {
            qsa("[data-thumb]", row).forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            qs("[data-main-product-image]").src = button.dataset.thumb;
        });
    });
}

function renderQuantity() {
    const node = qs("[data-quantity]");
    if (node) node.textContent = selectedQuantity;
}

function bindProductActions() {
    const dec = qs("[data-qty-dec]");
    const inc = qs("[data-qty-inc]");
    const addButton = qs("[data-add-to-cart]");
    const stickyButton = qs("[data-sticky-order]");

    if (dec) {
        dec.addEventListener("click", () => {
            selectedQuantity = Math.max(1, selectedQuantity - 1);
            renderQuantity();
        });
    }

    if (inc) {
        inc.addEventListener("click", () => {
            selectedQuantity += 1;
            renderQuantity();
        });
    }

    if (addButton) addButton.addEventListener("click", addSelectedProductToCart);
    if (stickyButton) stickyButton.addEventListener("click", addSelectedProductToCart);
}

function addSelectedProductToCart() {
    const sizeSelect = qs("[data-size-select]");
    const size = sizeSelect && sizeSelect.value ? sizeSelect.value : "M";
    if (sizeSelect && !sizeSelect.value) sizeSelect.value = size;

    addToCart({
        color: selectedColor,
        size,
        quantity: selectedQuantity
    });
    openCart();
}

function addToCart({ color, size, quantity }) {
    const cart = getCart();
    const existing = cart.find(item => item.color === color && item.size === size);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ color, size, quantity });
    }

    saveCart(cart);
}

function renderCart() {
    const cart = getCart();
    const itemsTarget = qs("[data-cart-items]");
    const subtotalTarget = qs("[data-cart-subtotal]");
    const countTargets = qsa("[data-cart-count]");
    if (!itemsTarget || !subtotalTarget) {
        countTargets.forEach(node => {
            node.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        });
        return;
    }

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + productByColor(item.color).price * item.quantity, 0);

    countTargets.forEach(node => {
        node.textContent = count;
    });
    subtotalTarget.textContent = money(subtotal);

    if (!cart.length) {
        itemsTarget.innerHTML = `
            <div class="empty-cart">
                <p>${t("emptyCart")}</p>
                <a href="index.html#collection">${t("shopDrop")}</a>
            </div>
        `;
    } else {
        itemsTarget.innerHTML = cart.map((item, index) => {
            const product = productByColor(item.color);
            return `
                <article class="cart-item">
                    <img src="${product.main}" alt="${localizedProductTitle(product)}">
                    <div class="cart-item-body">
                        <div class="cart-item-top">
                            <strong>${localizedDisplayTitle(product)}</strong>
                            <button type="button" data-cart-remove="${index}">${t("remove")}</button>
                        </div>
                        <div class="cart-edit-grid">
                            <label>
                                ${t("colorLabel")}
                                <select data-cart-color="${index}">
                                    ${Object.values(ECLAT.products).map(option => `<option value="${option.id}" ${option.id === item.color ? "selected" : ""}>${colorName(option.id)}</option>`).join("")}
                                </select>
                            </label>
                            <label>
                                ${t("sizeLabel")}
                                <select data-cart-size="${index}">
                                    ${ECLAT.sizes.map(size => `<option ${size === item.size ? "selected" : ""}>${size}</option>`).join("")}
                                </select>
                            </label>
                        </div>
                        <div class="cart-quantity-row">
                            <div class="cart-quantity">
                                <button type="button" data-cart-dec="${index}">-</button>
                                <span>${item.quantity}</span>
                                <button type="button" data-cart-inc="${index}">+</button>
                            </div>
                            <span>${money(product.price * item.quantity)}</span>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    }

    bindCartItemControls();
    updateCartCheckoutLinks(cart);
}

function bindCartItemControls() {
    qsa("[data-cart-remove]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const cart = getCart();
            cart.splice(Number(button.dataset.cartRemove), 1);
            saveCart(cart);
        });
    });

    qsa("[data-cart-color]").forEach(select => {
        select.addEventListener("click", event => event.stopPropagation());
        select.addEventListener("change", event => {
            event.stopPropagation();
            const cart = getCart();
            cart[Number(select.dataset.cartColor)].color = select.value;
            saveCart(mergeCart(cart));
        });
    });

    qsa("[data-cart-size]").forEach(select => {
        select.addEventListener("click", event => event.stopPropagation());
        select.addEventListener("change", event => {
            event.stopPropagation();
            const cart = getCart();
            cart[Number(select.dataset.cartSize)].size = select.value;
            saveCart(mergeCart(cart));
        });
    });

    qsa("[data-cart-dec], [data-cart-inc]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const cart = getCart();
            const index = Number(button.dataset.cartDec || button.dataset.cartInc);
            if (!cart[index]) return;
            cart[index].quantity += button.dataset.cartInc ? 1 : -1;
            if (cart[index].quantity < 1) cart.splice(index, 1);
            saveCart(cart);
        });
    });
}

function mergeCart(cart) {
    return cart.reduce((merged, item) => {
        const existing = merged.find(entry => entry.color === item.color && entry.size === item.size);
        if (existing) existing.quantity += item.quantity;
        else merged.push(item);
        return merged;
    }, []);
}

function updateCartCheckoutLinks(cart = getCart()) {
    const message = encodeURIComponent(buildOrderMessage(cart));
    const instagram = qs("[data-cart-instagram]");
    const whatsapp = qs("[data-cart-whatsapp]");
    if (instagram) instagram.href = ECLAT.links.instagram;
    if (whatsapp) whatsapp.href = `${ECLAT.links.whatsapp}?text=${message}`;
}

function buildOrderMessage(cart) {
    if (!cart.length) return t("orderMessageEmpty");
    const lines = cart.map(item => {
        const product = productByColor(item.color);
        return `${item.quantity}x ${localizedProductTitle(product)}, ${t("sizeWord")} ${item.size}`;
    });
    return `${t("orderMessageIntro")} ${lines.join("; ")}.`;
}

function openCart() {
    const popover = qs("[data-cart-popover]");
    if (!popover) return;
    closeContactDropdown();
    renderCart();
    popover.hidden = false;
    qsa("[data-cart-toggle]").forEach(button => button.setAttribute("aria-expanded", "true"));
}

function closeCart() {
    const popover = qs("[data-cart-popover]");
    if (!popover) return;
    popover.hidden = true;
    qsa("[data-cart-toggle]").forEach(button => button.setAttribute("aria-expanded", "false"));
}

function initCart() {
    const popover = qs("[data-cart-popover]");
    if (popover) {
        popover.addEventListener("click", event => event.stopPropagation());
    }

    qsa("[data-cart-toggle]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const popover = qs("[data-cart-popover]");
            if (!popover) return;
            popover.hidden ? openCart() : closeCart();
        });
    });

    qsa("[data-cart-close]").forEach(button => {
        button.addEventListener("click", closeCart);
    });

    document.addEventListener("click", event => {
        const popover = qs("[data-cart-popover]");
        if (!popover || popover.hidden) return;
        if (event.target.closest("[data-cart-popover]") || event.target.closest("[data-cart-toggle]") || event.target.closest("[data-add-to-cart]") || event.target.closest("[data-sticky-order]")) return;
        closeCart();
    });

    renderCart();
}

function bindOrderLinks(product) {
    const instagram = qs("[data-instagram-link]");
    const whatsapp = qs("[data-whatsapp-link]");
    const message = encodeURIComponent(`${t("orderMessageProduct")} ${localizedProductTitle(product)}.`);

    if (instagram) instagram.href = ECLAT.links.instagram;
    if (whatsapp) whatsapp.href = `${ECLAT.links.whatsapp}?text=${message}`;
}

function bindAccordions() {
    qsa("[data-accordion]").forEach(item => {
        const button = qs("button", item);
        button.addEventListener("click", () => {
            const isOpen = item.classList.toggle("open");
            button.setAttribute("aria-expanded", String(isOpen));
        });
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeGallery();
        closeCart();
        closeContactDropdown();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initLanguageToggle();
    initCart();
    initContactDropdown();

    if (document.body.dataset.page === "home") {
        renderHomeProducts();
        renderGallery();
        initGalleryModal();
    }

    if (document.body.dataset.page === "product") {
        renderProductPage();
    }
});
