# ECLAT Content Guide

This version follows the supplied desktop and phone mockups, with French and Arabic language switching, a live hero banner, generated product photos, color selection, gallery/reel modal, and editable cart dropdown.

## Main Files

- `index.html`: landing page.
- `checkout.html`: single product/order page with black and white color options.
- `css/styles.css`: all layout, spacing, desktop/mobile rules, cart dropdown, and modal styling.
- `js/app.js`: product data, translations, gallery data, cart logic, thumbnail switching, quantity buttons, accordions, and order links.
- `assets/generated/`: active hero and product photos.
- `assets/eclat-logo-real.png`: gold ECLAT logo used in the site header.
- `assets/mockup/`: active gallery and thumbnail images cropped from your mockups.

## Change Product Information

Open `js/app.js` and edit the `products` object:

```js
black: {
    id: "black",
    price: 35,
    main: "assets/generated/eclat-shirt-black.png",
    thumbs: [...]
}
```

The product page is one page. Use these links to open it with a starting color:

```text
checkout.html?color=black
checkout.html?color=white
```

Customers can switch color on the page.

## Change Instagram And WhatsApp Links

Open `js/app.js` and update:

```js
links: {
    instagram: "https://www.instagram.com/yourprofile",
    whatsapp: "https://wa.me/15551234567"
}
```

The header contact dropdown, product buttons, and cart dropdown use those links. WhatsApp also receives an order message with color, size, and quantity.

## Change Languages

French is the main language. Arabic is handled inside the `I18N` object in `js/app.js`.

To change visible wording, edit the matching key in both language blocks:

```js
fr: {
    heroEyebrow: "Nouvelle sortie"
},
ar: {
    heroEyebrow: "إصدار جديد"
}
```

The language toggle appears in the desktop and mobile headers.

## Change Landing Hero

The hero text is live HTML in `index.html`:

```html
<p>Nouvelle sortie</p>
<h1>ECLAT</h1>
<h2>Simplicite intemporelle.<br>Faite pour se distinguer.</h2>
```

The hero banner image is set in `index.html`:

```html
<img src="assets/generated/eclat-banner-photo.jpg" alt="Black and white ECLAT t-shirts on dark fabric">
```

Replace that image when you have final campaign photography. The image is styled inside the black hero banner in `css/styles.css` under `.hero-product-image`.

## Add Instagram Reels To Gallery

Open `js/app.js` and edit the three items in the `gallery` array. For a reel, use:

```js
{
    id: "launch-reel",
    title: "Launch reel",
    image: "assets/your-reel-thumbnail.jpg",
    type: "video",
    reelUrl: "https://www.instagram.com/reel/YOUR_REEL/embed",
    videoSrc: ""
}
```

If you use your own MP4 instead of an Instagram embed, upload the file to `assets/videos/` and keep the path relative to the HTML files:

```js
reelUrl: "",
videoSrc: "assets/videos/reel-01.mp4"
```

Use browser-friendly MP4 exports: H.264 video with AAC audio. The site preloads the three reels and opens them muted/autoplaying so they appear quickly. Test through a local server or your live domain, not by dragging the HTML file into the browser.

When visitors click a gallery video thumbnail, it opens in a large modal with a close button in the top-right corner.

## Cart Dropdown

The cart is stored in the visitor's browser with `localStorage`. In the dropdown, visitors can:

- change color
- change size
- increase or decrease quantity
- remove an item
- order through Instagram or WhatsApp

To connect a real checkout later, replace the cart order links in `js/app.js` or send the cart data to your backend.
