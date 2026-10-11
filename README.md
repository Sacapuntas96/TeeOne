# TeeOne

A small web app for tracking the carbohydrates in a meal. Search a food list, add items to a cart, set the weight of each one in grams, and see the running carb total against a daily goal. It can also turn the total into an estimated number of insulin units from a ratio you enter.

> **Disclaimer:** TeeOne is a personal project, not a medical device. The dose estimate is a simple calculation and is **not medical advice**. Always follow your doctor's or diabetes care team's instructions, and double-check any dose before you use it.

## Features

- **Food search**: filter the food list by name as you type
- **Pagination**: results are shown 50 at a time with Previous / Next buttons
- **Cart**: add foods, edit the weight in grams, and remove items
- **Live carb total**: recalculated from each item's carbs per 100 g and its weight
- **Goal progress bar**: shows how close the total is to your carb goal
- **Dose estimate**: enter an insulin ratio and any extra units, then press Calculate. A "Need To Recalculate" notice appears whenever the inputs or the cart change
- **Light and dark theme**: the choice is saved in the browser

## Tech stack

| Area | Technology |
| --- | --- |
| UI | [React](https://react.dev) (function components and hooks: `useState`, `useMemo`, `memo`) |
| Build tool | [Vite](https://vite.dev) |
| Language | JavaScript (JSX) |
| Styling | Plain CSS with CSS variables for theming |
| Data | Static `food.json` file, bundled with the app |
| Persistence | Browser `localStorage` (theme only) |
| Linting | [Oxlint](https://oxc.rs) |
| Hosting | [Cloudflare](https://www.cloudflare.com) (static site) |

There is no backend and no database. Everything runs in the browser.

## Food data

`src/food.json` is an array of foods in this shape:

```json
{ "id": 321358, "name": "Hummus, commercial", "carbs_per_100g": 14.9 }
```

- `id` is the food's FDC ID from the USDA FoodData Central database
- `carbs_per_100g` is carbohydrate by difference, in grams per 100 g

The nutrient values come from [USDA FoodData Central](https://fdc.nal.usda.gov). Carbohydrate by difference includes fibre.

## Project structure

```
Frontend/TeeOne
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx        # app entry point
    ├── App.jsx         # state, search, cart, totals, theme
    ├── FoodCard.jsx    # one food in the search list (memoized)
    ├── food.json       # food data
    ├── App.css
    └── index.css
```

## Getting started

You need [Node.js](https://nodejs.org) installed.

```bash
git clone https://github.com/Sacapuntas96/TeeOne
cd TeeOne/Frontend/TeeOne
npm install
npm run dev
```

Then open the local address that Vite prints in the terminal.

### Other scripts

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

The app builds to static files, so it can be hosted on Cloudflare (Pages or Workers static assets):

| Setting | Value |
| --- | --- |
| Root directory | `Frontend/TeeOne` |
| Build command | `npm run build` |
| Output directory | `dist` |

Or deploy from the terminal:

```bash
cd Frontend/TeeOne
npm run build
npx wrangler pages deploy dist --project-name teeone
```

## Roadmap

- Save the cart and settings in `localStorage`
- Warning messages for duplicate items and invalid ratios
- More nutrients per food (protein, fat, calories)
- Save favourite foods and common meals

## Data source and credits

Food composition data: U.S. Department of Agriculture, Agricultural Research Service, [FoodData Central](https://fdc.nal.usda.gov).
