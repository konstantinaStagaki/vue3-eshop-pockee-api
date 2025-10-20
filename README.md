# Vue 3 E-Shop Demo

A simple e-shop implemented with **Vue 3**, **Vue Router**, and **Vuex**.  
Includes a homepage with personal details and an image slider, and a product list page that fetches data from the **Pockee public API**.  
The cart popup is shared across all pages. Styling is implemented using **pure CSS** only.

---

## Overview

This project was created as a coding assignment.  
The goal is to demonstrate the use of Vue.js fundamentals (components, routing, and state management) in a small responsive application.

---

## Features

### Homepage
- Displays personal information (name, email, mobile number) and About/Contact section.
- Includes an image slider using a Vue 3-compatible plugin

### Product List Page
- Fetches data from:  
  `https://v8api.pockee.com/api/v8/public/products?assortment_id=14&in_stock=true`
- Product list page that shows:
-Image, brand/title, current price, and (if available) compare price with a discount badge.
- Add to cart button

### Cart Popup
- Accessible from a header button on all pages
- Displays all products added to the cart
- Allows increasing/decreasing quantity and removing items
- Shows total cart value

### Additional
- Fully responsive layout
- Pure CSS, no frameworks or prebuilt themes

---
### Project structure
``` bash
assigment/
  src/
    api/
      client.js           # axios instance
      products.js         # products API wrapper
    components/
      CartPopup.vue       # cart modal (reads/writes Vuex cart)
      HeaderBar.vue       # site header + cart toggle
      ImageSlider.vue     # home page slider
      PersonalInfoCard.vue
    pages/
      HomePage.vue
      ProductListPage.vue
    router/
      index.js            # createWebHashHistory()
    store/
      index.js            # root store
      modules/
        cart.js           # cart logic
        products.js       # load & normalize products
    styles/
      base.css
    App.vue
    main.js
server/
  public/
    api/
      products.php        # PHP proxy to Pockee API

```
---

## Tech Stack

- Vue 3  
- Vue Router  
- Vuex  
- Axios  
- Pure CSS  

---

## Project Setup

### Prerequisites
- Node.js (>=18)
- npm (>=9)
- Vue CLI (optional, recommended)

### Getting Started
1.Install deps
```bash
cd assigment
npm install
```
2.Install deps
```bash
cd server/public
php -S 127.0.0.1:8081
```
3.Run the Vue dev server
```bash
npm run serve
```
- Frontend: http://localhost:8080/#/

## Build for Production
```bash
npm run build
```

---
