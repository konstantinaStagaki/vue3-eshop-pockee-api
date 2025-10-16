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
- Displays personal information (name, email, mobile number)
- Includes an image slider using a Vue 3-compatible plugin

### Product List Page
- Fetches data from:  
  `https://v8api.pockee.com/api/v8/public/products?assortment_id=14&in_stock=true`
- Displays product image, title, and price
- Supports adding items to the cart

### Cart Popup
- Accessible from a header button on all pages
- Displays all products added to the cart
- Allows increasing/decreasing quantity and removing items
- Shows total cart value

### Additional
- Fully responsive layout
- Pure CSS, no frameworks or prebuilt themes

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

### Installation

```bash
git clone https://github.com/konstantinaStagaki/vue3-eshop-pockee-api.git
cd vue3-eshop-pockee-api
npm install
```

## Environment

Create a .env file with:
```bash
VUE_APP_API_BASE=https://v8api.pockee.com
```
The application will use this base URL for API requests.

## Run Development Server
```bash
npm run serve
```
## Build for Production
```bash
npm run build
```

---
