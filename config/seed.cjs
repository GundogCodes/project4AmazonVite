require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Electronics', sortOrder: 10 },
    { name: 'Sporting Goods', sortOrder: 20 },
    { name: 'Mens Clothing', sortOrder: 30 },
    { name: 'Womens Clothing', sortOrder: 40 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Sony Playstation 5',
      description:
        'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
      category: categories[0],
      price: 547.9,
      rating: 4.9,
      image: '/img/PS5.png',
      countInventory: 25,
    },
    {
      name: 'Franklin Sports Official Size Football',
      description:
        'Get outdoors for football fun with the Franklin Sports Official Size 1000 Outdoor Football! This official size football is perfect for all players to grip and throw the ball with ease. Constructed with a durable, synthetic leather surface, these footballs are built to stand up to all-weather play year after year. The deep-pebble surface increases grip so players can easily pass and catch the football even in the rain. This outdoor football is also designed with hand sewn laces for a professional feel that will help all players throw their best spirals. Available in single footballs and (12) football bulk packs, you can find official size outdoor footballs for you and your whole flag football team! The bulk football packs also come with an air pump with an inflation needle included, so you can keep your footballs in perfect condition. This football season, get out in the yard with the best outdoor football equipment and grab yourself a Franklin Sports Official Size 1000 Outdoor Football today!',
      category: categories[1],
      price: 9.71,
      rating: 4.7,
      image: '/img/football.png',
      countInventory: 15,
    },
    {
      name: 'Hanes Mens Originals Tri-blend Jersey Hoodie',
      description:
        'Look good and feel good in these distinctive mens t-shirt hoodies from our Hanes® Originals line. Spun with recycled polyester, these Henley-style hooded t-shirts are the perfect marriage between a long-sleeve tee and a classic hoodie. This mens long sleeve tee has a 3-button Henley placket, roomy front kanga pocket, and knotted twill drawcords for an authentic Hanes look youll love. The tri-blend fabric formula is buttery soft, lightweight, and made for layering under a jacket when the weather is cool. Even better when you want to wear a hoodie, but its t-shirt weather - this is the one for you!',
      category: categories[2],
      price: 14,
      rating: 4.3,
      image: '/img/menshirt.png',
      countInventory: 20,
    },
    {
      name: 'ZESICA Womens Dress',
      description:
        'ZESICA Summer Bohemian Floral Crew Neck Smocked High Waist Beach Long Maxi Dress',
      category: categories[3],
      price: 49.99,
      rating: 4.3,
      image: '/img/womensdress.png',
      countInventory: 5,
    },
  ]);
  console.log(items);

  process.exit();
})();
