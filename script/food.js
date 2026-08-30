const foods = [
  {
    "name": "Alaska Pollock, raw",
    "carbs_per_100g": 0.1
  },
  {
    "name": "Almond butter, creamy",
    "carbs_per_100g": 21.2
  },
  {
    "name": "Almond milk, unsweetened, plain, refrigerated",
    "carbs_per_100g": 0.7
  },
  {
    "name": "Almond milk, unsweetened, plain, shelf stable",
    "carbs_per_100g": 0.3
  },
  {
    "name": "Anchovies, canned in olive oil, with salt, drained",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Apple juice, with added vitamin C, from concentrate, shelf stable",
    "carbs_per_100g": 11.4
  },
  {
    "name": "Apples, fuji, with skin, raw",
    "carbs_per_100g": 15.7
  },
  {
    "name": "Apples, gala, with skin, raw",
    "carbs_per_100g": 14.8
  },
  {
    "name": "Apples, granny smith, with skin, raw",
    "carbs_per_100g": 14.2
  },
  {
    "name": "Apples, granny smith, with skin, raw",
    "carbs_per_100g": 14.1
  },
  {
    "name": "Apples, honeycrisp, with skin, raw",
    "carbs_per_100g": 14.7
  },
  {
    "name": "Apples, red delicious, with skin, raw",
    "carbs_per_100g": 14.8
  },
  {
    "name": "Applesauce, unsweetened, with added vitamin C",
    "carbs_per_100g": 12.3
  },
  {
    "name": "Apricot, with skin, raw",
    "carbs_per_100g": 10.2
  },
  {
    "name": "Arugula, baby, raw",
    "carbs_per_100g": 5.4
  },
  {
    "name": "Asparagus, green, raw",
    "carbs_per_100g": 5.1
  },
  {
    "name": "Avocado, Hass, peeled, raw",
    "carbs_per_100g": 8.3
  },
  {
    "name": "Bananas, overripe, raw",
    "carbs_per_100g": 20.1
  },
  {
    "name": "Bananas, ripe and slightly ripe, raw",
    "carbs_per_100g": 23.0
  },
  {
    "name": "Beans, black, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 19.8
  },
  {
    "name": "Beans, cannellini, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 18.8
  },
  {
    "name": "Beans, cannellini, dry",
    "carbs_per_100g": 59.8
  },
  {
    "name": "Beans, great northern, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 19.3
  },
  {
    "name": "Beans, kidney, dark red, canned, sodium added, sugar added, drained and rinsed",
    "carbs_per_100g": 21.0
  },
  {
    "name": "Beans, kidney, light red, canned, sodium added, sugar added, drained and rinsed",
    "carbs_per_100g": 21.4
  },
  {
    "name": "Beans, navy, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 20.0
  },
  {
    "name": "Beans, pinto, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 19.6
  },
  {
    "name": "Beans, snap, green, canned, regular pack, drained solids",
    "carbs_per_100g": 4.1
  },
  {
    "name": "Beans, snap, green, raw",
    "carbs_per_100g": 7.4
  },
  {
    "name": "Beef, chuck, roast, boneless, choice, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, flank, steak, boneless, choice, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, ground, 80% lean meat / 20% fat, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, ground, 90% lean meat / 10% fat, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, loin, tenderloin roast, separable lean only, boneless, trimmed to 0\" fat, select, cooked, roasted",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8\" fat, choice, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, ribeye, steak, boneless, choice, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0\" fat, select, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, round, top round roast, boneless, separable lean only, trimmed to 0\" fat, select, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, round, top round, boneless, choice, raw",
    "carbs_per_100g": 0.9
  },
  {
    "name": "Beef, short loin (NY strip steak), raw",
    "carbs_per_100g": 0.2
  },
  {
    "name": "Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8\" fat, select, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8\" fat, choice, cooked, grilled",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Beef, top sirloin steak, raw",
    "carbs_per_100g": 0.2
  },
  {
    "name": "Beef, tenderloin steak, raw",
    "carbs_per_100g": 0.2
  },
  {
    "name": "Beet greens, raw",
    "carbs_per_100g": 4.7
  },
  {
    "name": "Beets, raw",
    "carbs_per_100g": 8.8
  },
  {
    "name": "Bison, ground, raw",
    "carbs_per_100g": -0.1
  },
  {
    "name": "Blackeye pea, canned, sodium added, drained and rinsed",
    "carbs_per_100g": 19.2
  },
  {
    "name": "Blackeye pea, dry",
    "carbs_per_100g": 61.8
  },
  {
    "name": "Blueberries, raw",
    "carbs_per_100g": 14.6
  },
  {
    "name": "Bread, white, commercially prepared",
    "carbs_per_100g": 49.2
  },
  {
    "name": "Bread, whole-wheat, commercially prepared",
    "carbs_per_100g": 43.1
  },
  {
    "name": "Broccoli, raw",
    "carbs_per_100g": 6.3
  },
  {
    "name": "Brussels sprouts, raw",
    "carbs_per_100g": 9.6
  },
  {
    "name": "Buckwheat, whole grain",
    "carbs_per_100g": 71.1
  },
  {
    "name": "Bulgur, dry, raw",
    "carbs_per_100g": 75.9
  },
  {
    "name": "Buttermilk, low fat",
    "carbs_per_100g": 4.8
  },
  {
    "name": "Cabbage, bok choy, raw",
    "carbs_per_100g": 3.5
  },
  {
    "name": "Cabbage, green, raw",
    "carbs_per_100g": 6.4
  },
  {
    "name": "Cabbage, red, raw",
    "carbs_per_100g": 6.8
  },
  {
    "name": "Carrots, baby, raw",
    "carbs_per_100g": 9.1
  },
  {
    "name": "Carrots, frozen, unprepared",
    "carbs_per_100g": 7.9
  },
  {
    "name": "Carrots, frozen, unprepared (Includes foods for USDA's Food Distribution Program)",
    "carbs_per_100g": 7.9
  },
  {
    "name": "Carrots, mature, raw",
    "carbs_per_100g": 10.3
  },
  {
    "name": "Cauliflower, raw",
    "carbs_per_100g": 4.7
  },
  {
    "name": "Celery, raw",
    "carbs_per_100g": 3.3
  },
  {
    "name": "Cheese, American, restaurant",
    "carbs_per_100g": 6.3
  },
  {
    "name": "Cheese, cheddar",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Cheese, cotija, solid",
    "carbs_per_100g": 2.7
  },
  {
    "name": "Cheese, cottage, lowfat, 1% milkfat",
    "carbs_per_100g": 4.3
  },
  {
    "name": "Cheese, dry white, queso seco",
    "carbs_per_100g": 2.1
  },
  {
    "name": "Cheese, feta, whole milk, crumbled",
    "carbs_per_100g": 5.6
  },
  {
    "name": "Cheese, monterey jack, solid",
    "carbs_per_100g": 1.9
  },
  {
    "name": "Cheese, mozzarella, low moisture, part-skim",
    "carbs_per_100g": 4.4
  },
  {
    "name": "Cheese, oaxaca, solid",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Cheese, parmesan, grated",
    "carbs_per_100g": 12.4
  },
  {
    "name": "Cheese, parmesan, grated, refrigerated",
    "carbs_per_100g": 4.3
  },
  {
    "name": "Cheese, pasteurized process cheese food or product, American, singles",
    "carbs_per_100g": 8.2
  },
  {
    "name": "Cheese, pasteurized process, American, vitamin D fortified",
    "carbs_per_100g": 5.3
  },
  {
    "name": "Cheese, provolone, sliced",
    "carbs_per_100g": 2.5
  },
  {
    "name": "Cheese, queso fresco, solid",
    "carbs_per_100g": 3.0
  },
  {
    "name": "Cheese, ricotta, whole milk",
    "carbs_per_100g": 6.9
  },
  {
    "name": "Cheese, swiss",
    "carbs_per_100g": 1.4
  },
  {
    "name": "Cherries, sweet, dark red, raw",
    "carbs_per_100g": 16.2
  },
  {
    "name": "Chia seeds, dry, raw",
    "carbs_per_100g": 38.3
  },
  {
    "name": "Chicken, breast, boneless, skinless, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Chicken, breast, meat and skin, raw",
    "carbs_per_100g": -0.4
  },
  {
    "name": "Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, braised",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Chicken, broilers or fryers, drumstick, meat only, cooked, braised",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Chicken, drumstick, meat and skin, raw",
    "carbs_per_100g": -0.5
  },
  {
    "name": "Chicken, ground, with additives, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Chicken, thigh, boneless, skinless, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Chicken, thigh, meat and skin, raw",
    "carbs_per_100g": -0.2
  },
  {
    "name": "Chicken, wing, meat and skin, raw",
    "carbs_per_100g": -0.5
  },
  {
    "name": "Chickpeas (garbanzo beans, bengal gram), canned, sodium added, drained and rinsed",
    "carbs_per_100g": 20.3
  },
  {
    "name": "Chickpeas, (garbanzo beans, bengal gram), dry",
    "carbs_per_100g": 60.4
  },
  {
    "name": "Cod, Pacific or Alaskan, frozen, wild caught",
    "carbs_per_100g": 0.5
  },
  {
    "name": "Collards, raw",
    "carbs_per_100g": 7.0
  },
  {
    "name": "Cookies, oatmeal, soft, with raisins",
    "carbs_per_100g": 69.6
  },
  {
    "name": "Corn flour, masa harina, white or yellow, dry, raw",
    "carbs_per_100g": 76.7
  },
  {
    "name": "Corn, sweet, yellow and white kernels,  fresh, raw",
    "carbs_per_100g": 14.7
  },
  {
    "name": "Cottage cheese, full fat, large or small curd",
    "carbs_per_100g": 4.6
  },
  {
    "name": "Cranberry juice, not fortified, from concentrate, shelf stable",
    "carbs_per_100g": 7.3
  },
  {
    "name": "Cream cheese, full fat, block",
    "carbs_per_100g": 4.6
  },
  {
    "name": "Cream, heavy",
    "carbs_per_100g": 3.8
  },
  {
    "name": "Cream, sour, full fat",
    "carbs_per_100g": 5.6
  },
  {
    "name": "Crustaceans, crab, blue swimming, lump, pasteurized, refrigerated",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Crustaceans, shrimp, farm raised, raw",
    "carbs_per_100g": 0.5
  },
  {
    "name": "Cucumber, with peel, raw",
    "carbs_per_100g": 3.0
  },
  {
    "name": "Egg, white, dried",
    "carbs_per_100g": 6.0
  },
  {
    "name": "Egg, white, raw, frozen, pasteurized",
    "carbs_per_100g": 0.7
  },
  {
    "name": "Egg, whole, dried",
    "carbs_per_100g": 1.9
  },
  {
    "name": "Egg, whole, raw, frozen, pasteurized",
    "carbs_per_100g": 0.9
  },
  {
    "name": "Egg, yolk, dried",
    "carbs_per_100g": 1.1
  },
  {
    "name": "Egg, yolk, raw, frozen, pasteurized",
    "carbs_per_100g": 0.6
  },
  {
    "name": "Eggplant, raw",
    "carbs_per_100g": 5.4
  },
  {
    "name": "Eggs, Grade A, Large, egg white",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Eggs, Grade A, Large, egg whole",
    "carbs_per_100g": 1.0
  },
  {
    "name": "Eggs, Grade A, Large, egg yolk",
    "carbs_per_100g": 1.0
  },
  {
    "name": "Einkorn, grain, dry, raw",
    "carbs_per_100g": 68.7
  },
  {
    "name": "Farro, pearled, dry, raw",
    "carbs_per_100g": 72.1
  },
  {
    "name": "Fennel, bulb, raw",
    "carbs_per_100g": 5.5
  },
  {
    "name": "Figs, dried, uncooked",
    "carbs_per_100g": 63.9
  },
  {
    "name": "Fish, catfish, farm raised, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, cod, Atlantic, wild caught, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, haddock, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, pollock, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, salmon, Atlantic, farm raised, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, salmon, sockeye, wild caught, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, tilapia, farm raised, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Fish, tuna, light, canned in water, drained solids",
    "carbs_per_100g": 0.1
  },
  {
    "name": "Flaxseed, ground",
    "carbs_per_100g": 34.4
  },
  {
    "name": "Flour, 00",
    "carbs_per_100g": 74.4
  },
  {
    "name": "Flour, almond",
    "carbs_per_100g": 16.2
  },
  {
    "name": "Flour, amaranth",
    "carbs_per_100g": 68.8
  },
  {
    "name": "Flour, barley",
    "carbs_per_100g": 77.4
  },
  {
    "name": "Flour, bread, white, enriched, unbleached",
    "carbs_per_100g": 72.8
  },
  {
    "name": "Flour, buckwheat",
    "carbs_per_100g": 75.0
  },
  {
    "name": "Flour, cassava",
    "carbs_per_100g": 87.3
  },
  {
    "name": "Flour, chestnut",
    "carbs_per_100g": 80.5
  },
  {
    "name": "Flour, coconut",
    "carbs_per_100g": 58.9
  },
  {
    "name": "Flour, corn, yellow, fine meal, enriched",
    "carbs_per_100g": 80.8
  },
  {
    "name": "Flour, oat, whole grain",
    "carbs_per_100g": 69.9
  },
  {
    "name": "Flour, pastry, unenriched, unbleached",
    "carbs_per_100g": 77.2
  },
  {
    "name": "Flour, potato",
    "carbs_per_100g": 79.9
  },
  {
    "name": "Flour, quinoa",
    "carbs_per_100g": 69.5
  },
  {
    "name": "Flour, rice, brown",
    "carbs_per_100g": 75.5
  },
  {
    "name": "Flour, rice, glutinous",
    "carbs_per_100g": 80.1
  },
  {
    "name": "Flour, rice, white, unenriched",
    "carbs_per_100g": 79.8
  },
  {
    "name": "Flour, rye",
    "carbs_per_100g": 77.2
  },
  {
    "name": "Flour, semolina, coarse and semi-coarse",
    "carbs_per_100g": 73.8
  },
  {
    "name": "Flour, semolina, fine",
    "carbs_per_100g": 72.0
  },
  {
    "name": "Flour, sorghum",
    "carbs_per_100g": 77.4
  },
  {
    "name": "Flour, soy, defatted",
    "carbs_per_100g": 32.9
  },
  {
    "name": "Flour, soy, full-fat",
    "carbs_per_100g": 27.9
  },
  {
    "name": "Flour, spelt, whole grain",
    "carbs_per_100g": 70.7
  },
  {
    "name": "Flour, wheat, all-purpose, enriched, bleached",
    "carbs_per_100g": 77.3
  },
  {
    "name": "Flour, wheat, all-purpose, enriched, unbleached",
    "carbs_per_100g": 73.2
  },
  {
    "name": "Flour, wheat, all-purpose, unenriched, unbleached",
    "carbs_per_100g": 74.6
  },
  {
    "name": "Flour, whole wheat, unenriched",
    "carbs_per_100g": 71.2
  },
  {
    "name": "Fonio, grain, dry, raw",
    "carbs_per_100g": 81.3
  },
  {
    "name": "Frankfurter, beef, unheated",
    "carbs_per_100g": 2.9
  },
  {
    "name": "Garlic, raw",
    "carbs_per_100g": 28.2
  },
  {
    "name": "Grape juice, purple, with added vitamin C, from concentrate, shelf stable",
    "carbs_per_100g": 15.6
  },
  {
    "name": "Grape juice, white, with added vitamin C, from concentrate, shelf stable",
    "carbs_per_100g": 15.8
  },
  {
    "name": "Grapefruit juice, red, not fortified, not from concentrate, refrigerated",
    "carbs_per_100g": 9.1
  },
  {
    "name": "Grapefruit juice, white, canned or bottled, unsweetened",
    "carbs_per_100g": 7.6
  },
  {
    "name": "Grapes, green, seedless, raw",
    "carbs_per_100g": 18.6
  },
  {
    "name": "Grapes, red, seedless, raw",
    "carbs_per_100g": 20.2
  },
  {
    "name": "Halibut, frozen, wild caught",
    "carbs_per_100g": -0.1
  },
  {
    "name": "Ham, sliced, pre-packaged, deli meat (96%fat free, water added)",
    "carbs_per_100g": 0.3
  },
  {
    "name": "Ham, sliced, restaurant",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Hummus, commercial",
    "carbs_per_100g": 14.9
  },
  {
    "name": "Kale, frozen, cooked, boiled, drained, without salt",
    "carbs_per_100g": 5.3
  },
  {
    "name": "Kale, raw",
    "carbs_per_100g": 4.4
  },
  {
    "name": "Ketchup, restaurant",
    "carbs_per_100g": 26.8
  },
  {
    "name": "Khorasan, grain, dry, raw",
    "carbs_per_100g": 71.8
  },
  {
    "name": "Kiwifruit (kiwi), green, peeled, raw",
    "carbs_per_100g": 13.8
  },
  {
    "name": "Kiwifruit, green, raw",
    "carbs_per_100g": 14.0
  },
  {
    "name": "Lamb, ground, raw",
    "carbs_per_100g": -0.3
  },
  {
    "name": "Lentils, dry",
    "carbs_per_100g": 62.2
  },
  {
    "name": "Lettuce, cos or romaine, raw",
    "carbs_per_100g": 3.2
  },
  {
    "name": "Lettuce, iceberg, raw",
    "carbs_per_100g": 3.4
  },
  {
    "name": "Lettuce, leaf, green, raw",
    "carbs_per_100g": 4.1
  },
  {
    "name": "Lettuce, leaf, red, raw",
    "carbs_per_100g": 3.3
  },
  {
    "name": "Lettuce, romaine, green, raw",
    "carbs_per_100g": 4.1
  },
  {
    "name": "Lobster, tail only, frozen, wild caught",
    "carbs_per_100g": 0.9
  },
  {
    "name": "Mahi mahi, frozen, wild caught",
    "carbs_per_100g": 0.3
  },
  {
    "name": "Mandarin, seedless, peeled, raw",
    "carbs_per_100g": 13.4
  },
  {
    "name": "Mango, Ataulfo, peeled, raw",
    "carbs_per_100g": 17.4
  },
  {
    "name": "Mango, Tommy Atkins, peeled, raw",
    "carbs_per_100g": 15.3
  },
  {
    "name": "Melons, cantaloupe, raw",
    "carbs_per_100g": 8.2
  },
  {
    "name": "Melons, honeydew, raw",
    "carbs_per_100g": 8.1
  },
  {
    "name": "Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D",
    "carbs_per_100g": 5.2
  },
  {
    "name": "Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)",
    "carbs_per_100g": 4.9
  },
  {
    "name": "Milk, reduced fat, fluid, 1% milkfat, with added vitamin A and vitamin D",
    "carbs_per_100g": 4.9
  },
  {
    "name": "Milk, whole, 3.25% milkfat, with added vitamin D",
    "carbs_per_100g": 4.7
  },
  {
    "name": "Milk, whole, 3.25% milkfat, with added vitamin D",
    "carbs_per_100g": 4.6
  },
  {
    "name": "Millet, whole grain",
    "carbs_per_100g": 74.4
  },
  {
    "name": "Mushroom, beech",
    "carbs_per_100g": 6.8
  },
  {
    "name": "Mushroom, crimini",
    "carbs_per_100g": 4.0
  },
  {
    "name": "Mushroom, enoki",
    "carbs_per_100g": 8.1
  },
  {
    "name": "Mushroom, king oyster",
    "carbs_per_100g": 8.5
  },
  {
    "name": "Mushroom, lion's mane",
    "carbs_per_100g": 7.6
  },
  {
    "name": "Mushroom, maitake",
    "carbs_per_100g": 6.6
  },
  {
    "name": "Mushroom, oyster",
    "carbs_per_100g": 6.9
  },
  {
    "name": "Mushroom, pioppini",
    "carbs_per_100g": 5.8
  },
  {
    "name": "Mushroom, portabella",
    "carbs_per_100g": 4.7
  },
  {
    "name": "Mushrooms, shiitake",
    "carbs_per_100g": 8.2
  },
  {
    "name": "Mushrooms, white button",
    "carbs_per_100g": 4.1
  },
  {
    "name": "Mustard, prepared, yellow",
    "carbs_per_100g": 5.3
  },
  {
    "name": "Nectarines, raw",
    "carbs_per_100g": 9.2
  },
  {
    "name": "Nuts, almonds, dry roasted, with salt added",
    "carbs_per_100g": 16.2
  },
  {
    "name": "Nuts, almonds, whole, raw",
    "carbs_per_100g": 20.0
  },
  {
    "name": "Nuts, brazilnuts, raw",
    "carbs_per_100g": 21.6
  },
  {
    "name": "Nuts, cashew nuts, raw",
    "carbs_per_100g": 36.3
  },
  {
    "name": "Nuts, hazelnuts or filberts, raw",
    "carbs_per_100g": 26.5
  },
  {
    "name": "Nuts, macadamia nuts, raw",
    "carbs_per_100g": 24.1
  },
  {
    "name": "Nuts, pecans, halves, raw",
    "carbs_per_100g": 12.7
  },
  {
    "name": "Nuts, pine nuts, raw",
    "carbs_per_100g": 18.6
  },
  {
    "name": "Nuts, pistachio nuts, raw",
    "carbs_per_100g": 27.7
  },
  {
    "name": "Nuts, walnuts, English, halves, raw",
    "carbs_per_100g": 10.9
  },
  {
    "name": "Oat milk, unsweetened, plain, refrigerated",
    "carbs_per_100g": 5.1
  },
  {
    "name": "Oats, whole grain, rolled, old fashioned",
    "carbs_per_100g": 68.7
  },
  {
    "name": "Oats, whole grain, steel cut",
    "carbs_per_100g": 69.8
  },
  {
    "name": "Oil, coconut",
    "carbs_per_100g": 0.8
  },
  {
    "name": "Olives, green, Manzanilla, stuffed with pimiento",
    "carbs_per_100g": 5.0
  },
  {
    "name": "Onion rings, breaded, par fried, frozen, prepared, heated in oven",
    "carbs_per_100g": 36.3
  },
  {
    "name": "Onions, red, raw",
    "carbs_per_100g": 9.9
  },
  {
    "name": "Onions, white, raw",
    "carbs_per_100g": 7.7
  },
  {
    "name": "Onions, yellow, raw",
    "carbs_per_100g": 8.6
  },
  {
    "name": "Orange juice, no pulp, not fortified, from concentrate, refrigerated",
    "carbs_per_100g": 10.3
  },
  {
    "name": "Orange juice, no pulp, not fortified, not from concentrate, refrigerated",
    "carbs_per_100g": 10.0
  },
  {
    "name": "Oranges, raw, navels",
    "carbs_per_100g": 11.8
  },
  {
    "name": "Oranges, raw, navels (Includes foods for USDA's Food Distribution Program)",
    "carbs_per_100g": 11.8
  },
  {
    "name": "Parsnips, raw",
    "carbs_per_100g": 19.3
  },
  {
    "name": "Peaches, yellow, raw",
    "carbs_per_100g": 10.1
  },
  {
    "name": "Peanut butter, creamy",
    "carbs_per_100g": 22.7
  },
  {
    "name": "Peanut butter, smooth style, with salt",
    "carbs_per_100g": 22.3
  },
  {
    "name": "Peanuts, raw",
    "carbs_per_100g": 26.5
  },
  {
    "name": "Pear, Anjou, green, with skin, raw",
    "carbs_per_100g": 14.8
  },
  {
    "name": "Pears, raw, bartlett",
    "carbs_per_100g": 15.1
  },
  {
    "name": "Pears, raw, bartlett (Includes foods for USDA's Food Distribution Program)",
    "carbs_per_100g": 15.1
  },
  {
    "name": "Peas, green, sweet, canned, sodium added, sugar added, drained and rinsed",
    "carbs_per_100g": 12.7
  },
  {
    "name": "Peppers, banana or Hungarian wax, seeded, raw",
    "carbs_per_100g": 5.0
  },
  {
    "name": "Peppers, bell, green, raw",
    "carbs_per_100g": 4.8
  },
  {
    "name": "Peppers, bell, orange, raw",
    "carbs_per_100g": 6.7
  },
  {
    "name": "Peppers, bell, red, raw",
    "carbs_per_100g": 6.7
  },
  {
    "name": "Peppers, bell, yellow, raw",
    "carbs_per_100g": 6.6
  },
  {
    "name": "Peppers, jalapeno, seeded, raw",
    "carbs_per_100g": 5.1
  },
  {
    "name": "Peppers, poblano, seeded, raw",
    "carbs_per_100g": 5.1
  },
  {
    "name": "Peppers, serrano, seeded, raw",
    "carbs_per_100g": 6.1
  },
  {
    "name": "Pickles, cucumber, dill or kosher dill",
    "carbs_per_100g": 2.0
  },
  {
    "name": "Pineapple, raw",
    "carbs_per_100g": 14.1
  },
  {
    "name": "Plantains, overripe, raw",
    "carbs_per_100g": 29.2
  },
  {
    "name": "Plantains, ripe, raw",
    "carbs_per_100g": 31.0
  },
  {
    "name": "Plantains, underripe, raw",
    "carbs_per_100g": 33.6
  },
  {
    "name": "Plum, black, with skin, raw",
    "carbs_per_100g": 13.5
  },
  {
    "name": "Pork, belly, with skin, raw",
    "carbs_per_100g": -0.7
  },
  {
    "name": "Pork, chop, center cut, raw",
    "carbs_per_100g": -0.6
  },
  {
    "name": "Pork, cured, bacon, cooked, restaurant",
    "carbs_per_100g": 2.1
  },
  {
    "name": "Pork, ground, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Pork, loin, boneless, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Pork, loin, tenderloin, boneless, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Potatoes, gold, without skin, raw",
    "carbs_per_100g": 16.0
  },
  {
    "name": "Potatoes, red, without skin, raw",
    "carbs_per_100g": 16.3
  },
  {
    "name": "Potatoes, russet, without skin, raw",
    "carbs_per_100g": 17.8
  },
  {
    "name": "Radicchio, raw",
    "carbs_per_100g": 5.0
  },
  {
    "name": "Radishes, red, raw",
    "carbs_per_100g": 4.1
  },
  {
    "name": "Raspberries, raw",
    "carbs_per_100g": 12.9
  },
  {
    "name": "Restaurant, Chinese, fried rice, without meat",
    "carbs_per_100g": 32.5
  },
  {
    "name": "Restaurant, Chinese, sweet and sour pork",
    "carbs_per_100g": 25.5
  },
  {
    "name": "Restaurant, Latino, pupusas con frijoles (pupusas, bean)",
    "carbs_per_100g": 31.5
  },
  {
    "name": "Restaurant, Latino, tamale, pork",
    "carbs_per_100g": 15.8
  },
  {
    "name": "Rice, black, unenriched, raw",
    "carbs_per_100g": 77.2
  },
  {
    "name": "Rice, brown, long grain, unenriched, raw",
    "carbs_per_100g": 76.7
  },
  {
    "name": "Rice, red, unenriched, dry, raw",
    "carbs_per_100g": 76.2
  },
  {
    "name": "Rice, white, long grain, unenriched, raw",
    "carbs_per_100g": 80.3
  },
  {
    "name": "Sauce, pasta, spaghetti/marinara, ready-to-serve",
    "carbs_per_100g": 8.1
  },
  {
    "name": "Sauce, salsa, ready-to-serve",
    "carbs_per_100g": 6.7
  },
  {
    "name": "Sausage, Italian, pork, mild, cooked, pan-fried",
    "carbs_per_100g": 2.1
  },
  {
    "name": "Sausage, breakfast sausage, beef, pre-cooked, unprepared",
    "carbs_per_100g": 3.4
  },
  {
    "name": "Sausage, pork, chorizo, link or ground, cooked, pan-fried",
    "carbs_per_100g": 2.6
  },
  {
    "name": "Sausage, turkey, breakfast links, mild, raw",
    "carbs_per_100g": 0.9
  },
  {
    "name": "Scallops, bay, Patagonian, frozen, wild caught",
    "carbs_per_100g": 2.3
  },
  {
    "name": "Scallops, sea, frozen, wild caught",
    "carbs_per_100g": 2.0
  },
  {
    "name": "Sea bass, Chilean, frozen, wild caught",
    "carbs_per_100g": 0.1
  },
  {
    "name": "Seeds, pumpkin seeds (pepitas), raw",
    "carbs_per_100g": 18.7
  },
  {
    "name": "Seeds, sunflower seed kernels, dry roasted, with salt added",
    "carbs_per_100g": 17.1
  },
  {
    "name": "Seeds, sunflower seed, kernel, raw",
    "carbs_per_100g": 24.5
  },
  {
    "name": "Sesame butter, creamy",
    "carbs_per_100g": 14.2
  },
  {
    "name": "Snapper, frozen, wild caught",
    "carbs_per_100g": 0.4
  },
  {
    "name": "Snow crab, legs only, frozen  ",
    "carbs_per_100g": 1.1
  },
  {
    "name": "Sorghum bran, white, unenriched, dry, raw",
    "carbs_per_100g": 68.7
  },
  {
    "name": "Sorghum flour, white, pearled, unenriched, dry, raw",
    "carbs_per_100g": 73.5
  },
  {
    "name": "Sorghum grain, white, pearled, unenriched, dry, raw",
    "carbs_per_100g": 74.9
  },
  {
    "name": "Sorghum, whole grain, white, dry, raw",
    "carbs_per_100g": 73.6
  },
  {
    "name": "Soy milk, sweetened, plain, refrigerated",
    "carbs_per_100g": 3.0
  },
  {
    "name": "Soy milk, unsweetened, plain, shelf stable",
    "carbs_per_100g": 1.3
  },
  {
    "name": "Spinach, baby",
    "carbs_per_100g": 2.4
  },
  {
    "name": "Spinach, mature",
    "carbs_per_100g": 2.6
  },
  {
    "name": "Squash, summer, green, zucchini, includes skin, raw",
    "carbs_per_100g": 3.3
  },
  {
    "name": "Squash, summer, yellow, includes skin, raw",
    "carbs_per_100g": 4.4
  },
  {
    "name": "Squash, winter, acorn, raw",
    "carbs_per_100g": 10.5
  },
  {
    "name": "Squash, winter, butternut, raw",
    "carbs_per_100g": 10.5
  },
  {
    "name": "Squid (calamari), frozen, tubes only",
    "carbs_per_100g": 0.9
  },
  {
    "name": "Strawberries, raw",
    "carbs_per_100g": 7.6
  },
  {
    "name": "Strawberries, raw",
    "carbs_per_100g": 8.0
  },
  {
    "name": "Sugars, granulated",
    "carbs_per_100g": 99.6
  },
  {
    "name": "Sweet potatoes, orange flesh, without skin, raw",
    "carbs_per_100g": 17.3
  },
  {
    "name": "Swordfish, frozen, wild caught",
    "carbs_per_100g": 0.4
  },
  {
    "name": "Tomato juice, with added ingredients, from concentrate, shelf stable",
    "carbs_per_100g": 4.3
  },
  {
    "name": "Tomato, paste, canned, without salt added",
    "carbs_per_100g": 20.2
  },
  {
    "name": "Tomato, puree, canned",
    "carbs_per_100g": 8.0
  },
  {
    "name": "Tomato, roma",
    "carbs_per_100g": 3.8
  },
  {
    "name": "Tomato, sauce, canned, with salt added",
    "carbs_per_100g": 6.3
  },
  {
    "name": "Tomatoes, canned, red, ripe, diced",
    "carbs_per_100g": 3.3
  },
  {
    "name": "Tomatoes, crushed, canned",
    "carbs_per_100g": 7.1
  },
  {
    "name": "Tomatoes, grape, raw",
    "carbs_per_100g": 5.5
  },
  {
    "name": "Tomatoes, whole, canned, solids and liquids, with salt added",
    "carbs_per_100g": 4.3
  },
  {
    "name": "Tuna, ahi or yellowfin, frozen, wild caught",
    "carbs_per_100g": -0.1
  },
  {
    "name": "Turkey, ground, 93% lean, 7% fat, pan-broiled crumbles",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Turkey, ground, 93% lean/ 7% fat, raw",
    "carbs_per_100g": 0.0
  },
  {
    "name": "Turnips, raw",
    "carbs_per_100g": 7.3
  },
  {
    "name": "Watermelon, seedless, rind only, raw",
    "carbs_per_100g": 4.2
  },
  {
    "name": "Wild rice, dry, raw",
    "carbs_per_100g": 75.7
  },
  {
    "name": "Yogurt, Greek, plain, nonfat",
    "carbs_per_100g": 3.6
  },
  {
    "name": "Yogurt, Greek, plain, whole milk",
    "carbs_per_100g": 4.8
  },
  {
    "name": "Yogurt, Greek, strawberry, nonfat",
    "carbs_per_100g": 12.2
  },
  {
    "name": "Yogurt, plain, nonfat",
    "carbs_per_100g": 8.1
  },
  {
    "name": "Yogurt, plain, whole milk",
    "carbs_per_100g": 5.6
  }
];