# TeeOne

TeeOne is a lightweight web app for people with type 1 diabetes to track their carbohydrate intake and calculate insulin dosage in real time.

## Features

- **Food search** — quickly search a built-in food database with carb values per 100g
- **Carb tracker** — add foods to a running list, adjust portion size, and see your total carbs update live
- **Daily carb goal** — set a target and track progress with a color-coded bar (red / yellow / green)
- **Insulin dosage calculator** — enter your insulin-to-carb ratio and extra correction units to get the total units to inject
- **Light / dark theme** — toggle between themes with a single click
- **Recalculation alerts** — get notified when your inputs change and the result needs to be recalculated

## How it works

1. Search for a food item and add it to your cart.
2. Adjust the weight (in grams) for each item — the total carb count updates automatically.
3. Set your daily carb goal to track progress visually.
4. Enter your insulin dosage (units per 10g of carbs) and any extra correction units.
5. Click **Calculate** to get the total insulin units to inject.

## Tech stack

- HTML / CSS / vanilla JavaScript
- No build tools or frameworks — runs directly in the browser

## Project structure

```
TeeOne/
├── index.html
├── script/
│   ├── main.js
│   └── food.js
├── style/
│   ├── dark.css
│   └── light.css
└── images/
    └── logo.svg
```

## Getting started

Clone the repo and open `index.html` in your browser — no installation required.

```bash
git clone https://github.com/your-username/TeeOne.git
cd TeeOne
open index.html
```

## Disclaimer

TeeOne is a personal tracking tool and is **not a substitute for medical advice**. Always consult your healthcare provider or endocrinologist before making decisions about your insulin dosage.
