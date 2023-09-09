require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Electronics', sortOrder: 10 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Sony Playstation 5',
      description:
        'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
      category: categories[0],
      price: 548,
      rating: 4.9,
      image: '/img/PS5.png',
      countInventory: 25,
    },
    {
      name: 'SAMSUNG 75-Inch Class Crystal UHD 4K CU8000',
      description:
        'The SAMSUNG 75-Inch Class Crystal UHD 4K CU8000 Series  smart tv  features PurColor Object Tracking, Sound Lite, Q-Symphony, Motion Xcelerator, Ultra Slim, Solar Remote and Alexa Built-in',
      category: categories[0],
      price: 947.99,
      rating: 4.2,
      image: '/img/TV.png',
      countInventory: 9,
    },
    {
      name: 'Apple AirPods Pro (2nd Generation) Wireless Earbuds',
      description:
        'The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound. The low-distortion, custom-built driver delivers crisp, clear high notes and deep, rich bass in stunning definition. So every sound is more vivid than ever.',
      category: categories[0],
      price: 199,
      rating: 4.7,
      image: '/img/AirPods.png',
      countInventory: 50,
    },
    {
      name: 'Apple iPhone 13 Pro Max (256 GB, Alpine Green)',
      description:
        'Smooth, responsive Super Retina display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. The ultra fast A15 Bionic chip. And breakthrough battery life.',
      category: categories[0],
      price: 1199,
      rating: 4,
      image: '/img/iphone.png',
      countInventory: 100,
    },
    {
      name: 'Introducing Echo Pop | Full sound compact smart speaker with Alexa',
      description:
        'This compact smart speaker with Alexa features full sound thats great for bedrooms and small spaces. Small enough to blend in and mighty enough to stand out.',
      category: categories[0],
      price: 39.99,
      rating: 4.6,
      image: '/img/echodot.png',
      countInventory: 25,
    },
    {
      name: 'Ring Video Doorbell 3 ',
      description:
        '1080p HD video doorbell with enhanced features that let you see, hear, and speak to anyone from your phone, tablet, or PC.',
      category: categories[0],
      price: 149.99,
      rating: 4.6,
      image: '/img/ring.png',
      countInventory: 75,
    },
    {
      name: 'Sonos Arc - The Premium Smart Soundbar',
      description:
        'All-new Sonos Arc - Bring all your entertainment to life with the brilliantly realistic sound of Arc, featuring Dolby Atmos. Enjoy control with your TV remote, voice, the Sonos app, Apple AirPlay 2, and more.',
      category: categories[0],
      price: 899,
      rating: 4.6,
      image: '/img/sonos.png',
      countInventory: 7,
    },
    {
      name: 'Apple 2023 MacBook Pro Laptop M2 Pro',
      description:
        'Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has up to 12 CPU cores, up to 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.',
      category: categories[0],
      price: 2299,
      rating: 4.8,
      image: '/img/macbook.png',
      countInventory: 100,
    },
    {
      name: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB',
      description:
        'Meta Quest is for ages 13+. Certain apps, games and experiences may be suitable for a more mature audience. Keep your experience smooth and seamless, even as high speed action unfolds around you with a super-fast processor and high-resolution display.',
      category: categories[0],
      price: 349,
      rating: 4.7,
      image: '/img/oculus.png',
      countInventory: 100,
    },
    {
      name: 'Amazon Fire TV Stick 4K Max with 2-Year Protection Plan',
      description:
        'Our first-ever streaming stick with Wi-Fi 6 support means reduced congestion for smoother, more fluid streaming and gaming across multiple Wi-Fi 6-connected devices.',
      category: categories[0],
      price: 32.48,
      rating: 4.7,
      image: '/img/firestick.png',
      countInventory: 25,
    },
  ]);
  console.log(items);

  process.exit();
})();
