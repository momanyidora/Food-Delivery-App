export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  cover: string;
  priceTier: 1 | 2 | 3;
  featured?: boolean;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Bella Italia",
    cuisine: "Italian • Pizza • Pasta",
    rating: 4.8,
    reviews: 1240,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&h=400&fit=crop",
    priceTier: 2,
    featured: true,
    menu: [
      {
        id: "m1",
        name: "Margherita Pizza",
        description: "Fresh mozzarella, basil, tomato sauce",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop",
        category: "Pizza",
      },
      {
        id: "m2",
        name: "Pepperoni Pizza",
        description: "Pepperoni, mozzarella, tomato sauce",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop",
        category: "Pizza",
      },
      {
        id: "m3",
        name: "Spaghetti Carbonara",
        description: "Eggs, pecorino, guanciale, black pepper",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=300&fit=crop",
        category: "Pasta",
      },
      {
        id: "m4",
        name: "Tiramisu",
        description: "Coffee-soaked ladyfingers, mascarpone",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop",
        category: "Dessert",
      },
      {
        id: "m25",
        name: "Garlic Bread",
        description: "Toasted with garlic butter and herbs",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=300&h=300&fit=crop",
        category: "Sides",
      },
      {
        id: "m26",
        name: "Fettuccine Alfredo",
        description: "Creamy parmesan sauce",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1626844131082-256783844137?w=300&h=300&fit=crop",
        category: "Pasta",
      },
    ],
  },
  {
    id: "r2",
    name: "Tokyo Sushi House",
    cuisine: "Japanese • Sushi • Asian",
    rating: 4.9,
    reviews: 2100,
    deliveryTime: "30-40 min",
    deliveryFee: 3.99,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1200&h=400&fit=crop",
    priceTier: 3,
    featured: true,
    menu: [
      {
        id: "m5",
        name: "California Roll",
        description: "Crab, avocado, cucumber",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=300&fit=crop",
        category: "Rolls",
      },
      {
        id: "m6",
        name: "Salmon Nigiri",
        description: "Fresh salmon over rice",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=300&fit=crop",
        category: "Nigiri",
      },
      {
        id: "m7",
        name: "Dragon Roll",
        description: "Eel, avocado, tobiko",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=300&fit=crop",
        category: "Rolls",
      },
      {
        id: "m8",
        name: "Miso Soup",
        description: "Tofu, seaweed, scallions",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop",
        category: "Soup",
      },
      {
        id: "m29",
        name: "Spicy Tuna Roll",
        description: "Tuna, spicy mayo, cucumber",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop",
        category: "Rolls",
      },
      {
        id: "m30",
        name: "Edamame",
        description: "Steamed soybeans with sea salt",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=300&h=300&fit=crop",
        category: "Starters",
      },
    ],
  },
  {
    id: "r3",
    name: "Burger Barn",
    cuisine: "American • Burgers • Fries",
    rating: 4.6,
    reviews: 3400,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&h=400&fit=crop",
    priceTier: 1,
    featured: true,
    menu: [
      {
        id: "m9",
        name: "Classic Burger",
        description: "Beef patty, lettuce, tomato, onion",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop",
        category: "Burgers",
      },
      {
        id: "m10",
        name: "Bacon Cheeseburger",
        description: "Bacon, cheddar, special sauce",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop",
        category: "Burgers",
      },
      {
        id: "m11",
        name: "Loaded Fries",
        description: "Cheese, bacon, jalapeños",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop",
        category: "Sides",
      },
      {
        id: "m12",
        name: "Milkshake",
        description: "Vanilla, chocolate or strawberry",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop",
        category: "Drinks",
      },
      {
        id: "m33",
        name: "Double Smash Burger",
        description: "Two smashed patties, american cheese",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=300&h=300&fit=crop",
        category: "Burgers",
      },
      {
        id: "m34",
        name: "Onion Rings",
        description: "Crispy battered onion rings",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=300&fit=crop",
        category: "Sides",
      },
      {
        id: "m50",
        name: "BBQ Pulled Pork",
        description: "Slow cooked pork, tangy BBQ sauce",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=300&fit=crop",
        category: "Burgers",
      },
    ],
  },
  {
    id: "r4",
    name: "Taco Fiesta",
    cuisine: "Mexican • Tacos • Burritos",
    rating: 4.7,
    reviews: 1800,
    deliveryTime: "20-30 min",
    deliveryFee: 2.49,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1200&h=400&fit=crop",
    priceTier: 1,
    menu: [
      {
        id: "m13",
        name: "Street Tacos (3)",
        description: "Carne asada, onion, cilantro",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=300&fit=crop",
        category: "Tacos",
      },
      {
        id: "m14",
        name: "Chicken Burrito",
        description: "Rice, beans, cheese, salsa",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=300&fit=crop",
        category: "Burritos",
      },
      {
        id: "m15",
        name: "Nachos Supreme",
        description: "Chips, cheese, guac, jalapeños",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=300&fit=crop",
        category: "Sides",
      },
      {
        id: "m16",
        name: "Churros",
        description: "Cinnamon sugar, chocolate dip",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=300&h=300&fit=crop",
        category: "Dessert",
      },
      {
        id: "m36",
        name: "Quesadilla",
        description: "Melted cheese, chicken, peppers",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=300&fit=crop",
        category: "Sides",
      },
    ],
  },
  {
    id: "r5",
    name: "Green Bowl",
    cuisine: "Healthy • Salads • Bowls",
    rating: 4.5,
    reviews: 890,
    deliveryTime: "15-25 min",
    deliveryFee: 2.99,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=1200&h=400&fit=crop",
    priceTier: 2,
    menu: [
      {
        id: "m17",
        name: "Caesar Salad",
        description: "Romaine, parmesan, croutons",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop",
        category: "Salads",
      },
      {
        id: "m18",
        name: "Acai Bowl",
        description: "Acai, granola, berries, honey",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=300&fit=crop",
        category: "Bowls",
      },
      {
        id: "m19",
        name: "Chicken Quinoa Bowl",
        description: "Grilled chicken, quinoa, veggies",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
        category: "Bowls",
      },
      {
        id: "m20",
        name: "Fresh Juice",
        description: "Orange, carrot, ginger",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop",
        category: "Drinks",
      },
      {
        id: "m38",
        name: "Avocado Toast",
        description: "Sourdough, smashed avo, chili flakes",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=300&h=300&fit=crop",
        category: "Starters",
      },
    ],
  },
  {
    id: "r6",
    name: "Curry Palace",
    cuisine: "Indian • Curry • Naan",
    rating: 4.8,
    reviews: 1500,
    deliveryTime: "35-45 min",
    deliveryFee: 3.49,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&h=400&fit=crop",
    priceTier: 2,
    featured: true,
    menu: [
      {
        id: "m21",
        name: "Butter Chicken",
        description: "Creamy tomato curry, tender chicken",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=300&fit=crop",
        category: "Curry",
      },
      {
        id: "m22",
        name: "Palak Paneer",
        description: "Spinach, paneer, spices",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop",
        category: "Curry",
      },
      {
        id: "m23",
        name: "Garlic Naan",
        description: "Fresh baked, garlic butter",
        price: 3.99,
        image:
          "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300&h=300&fit=crop",
        category: "Breads",
      },
      {
        id: "m24",
        name: "Mango Lassi",
        description: "Yogurt, mango, cardamom",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop",
        category: "Drinks",
      },
      {
        id: "m40",
        name: "Chicken Tikka Masala",
        description: "Grilled chicken chunks in spiced curry",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop",
        category: "Curry",
      },
    ],
  },
  {
    id: "r7",
    name: "Nairobi Kitchen",
    cuisine: "Kenyan • African • Grill",
    rating: 4.9,
    reviews: 3200,
    deliveryTime: "30-40 min",
    deliveryFee: 2.99,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=1200&h=400&fit=crop",
    priceTier: 2,
    featured: true,
    menu: [
      {
        id: "k1",
        name: "Nyama Choma",
        description: "Grilled goat meat served with kachumbari",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "k2",
        name: "Ugali & Sukuma Wiki",
        description: "Traditional maize meal with sautéed greens",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "k3",
        name: "Pilau",
        description: "Spiced rice cooked with beef",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop",
        category: "Rice",
      },
      {
        id: "k4",
        name: "Chapati (2)",
        description: "Soft flatbread, perfect for dipping",
        price: 2.99,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop",
        category: "Sides",
      },
      {
        id: "k5",
        name: "Samosas (3)",
        description: "Crispy pastry stuffed with spiced meat",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop",
        category: "Starters",
      },
    ],
  },
  {
    id: "r8",
    name: "Lagos Grill",
    cuisine: "Nigerian • West African",
    rating: 4.7,
    reviews: 1100,
    deliveryTime: "35-45 min",
    deliveryFee: 3.99,
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=400&fit=crop",
    priceTier: 2,
    menu: [
      {
        id: "n1",
        name: "Jollof Rice with Chicken",
        description: "Spicy tomato rice with grilled chicken",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1644974551426-903934f53e93?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "n2",
        name: "Egusi Soup & Pounded Yam",
        description: "Melon seed soup with assorted meat",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "n3",
        name: "Suya Skewers (3)",
        description: "Spicy grilled beef skewers",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop",
        category: "Grill",
      },
      {
        id: "n4",
        name: "Puff Puff (6)",
        description: "Deep-fried sweet dough balls",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=300&h=300&fit=crop",
        category: "Dessert",
      },
    ],
  },
  {
    id: "r9",
    name: "Dar es Salaam Bites",
    cuisine: "Tanzanian • Swahili",
    rating: 4.6,
    reviews: 800,
    deliveryTime: "30-40 min",
    deliveryFee: 2.99,
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=400&fit=crop",
    priceTier: 1,
    menu: [
      {
        id: "t1",
        name: "Zanzibar Pizza",
        description: "Stuffed savory crepe with meat & veggies",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "t2",
        name: "Mishkaki",
        description: "Marinated grilled beef skewers",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop",
        category: "Grill",
      },
      {
        id: "t3",
        name: "Wali Maharage",
        description: "Rice and beans in coconut milk",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "t4",
        name: "Kachumbari",
        description: "Fresh tomato and onion salad",
        price: 3.99,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
        category: "Sides",
      },
    ],
  },
  {
    id: "r10",
    name: "Golden Dragon",
    cuisine: "Chinese • Dim Sum • Noodles",
    rating: 4.8,
    reviews: 2800,
    deliveryTime: "25-35 min",
    deliveryFee: 3.49,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?w=1200&h=400&fit=crop",
    priceTier: 2,
    featured: true,
    menu: [
      {
        id: "c1",
        name: "Kung Pao Chicken",
        description: "Spicy stir-fry with peanuts and veggies",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=300&fit=crop",
        category: "Main",
      },
      {
        id: "c2",
        name: "Pork Dumplings (6)",
        description: "Steamed or fried dumplings",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop",
        category: "Dim Sum",
      },
      {
        id: "c3",
        name: "Beef Chow Mein",
        description: "Stir-fried noodles with tender beef",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop",
        category: "Noodles",
      },
      {
        id: "c4",
        name: "Spring Rolls (4)",
        description: "Crispy vegetable spring rolls",
        price: 5.99,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop",
        category: "Starters",
      },
      {
        id: "c5",
        name: "Sweet & Sour Pork",
        description: "Battered pork in sweet & sour sauce",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop",
        category: "Main",
      },
    ],
  },
  {
    id: "r11",
    name: "Dubai Oasis",
    cuisine: "Middle Eastern • Lebanese • Grill",
    rating: 4.9,
    reviews: 1900,
    deliveryTime: "25-35 min",
    deliveryFee: 3.99,
    image:
      "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=400&h=300&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1200&h=400&fit=crop",
    priceTier: 3,
    featured: true,
    menu: [
      {
        id: "d1",
        name: "Chicken Shawarma",
        description: "Marinated chicken, garlic sauce, pickles",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=300&fit=crop",
        category: "Wraps",
      },
      {
        id: "d2",
        name: "Beef Kebab Platter",
        description: "Grilled beef skewers, rice, salad",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop",
        category: "Grill",
      },
      {
        id: "d3",
        name: "Hummus & Pita",
        description: "Creamy chickpea dip, warm pita bread",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=300&h=300&fit=crop",
        category: "Starters",
      },
      {
        id: "d4",
        name: "Falafel Wrap",
        description: "Crispy falafel, tahini, fresh veggies",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=300&fit=crop",
        category: "Wraps",
      },
      {
        id: "d5",
        name: "Baklava (4)",
        description: "Sweet pastry with nuts and honey",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&h=300&fit=crop",
        category: "Dessert",
      },
      {
        id: "d6",
        name: "Mint Lemonade",
        description: "Fresh lemon juice with crushed mint",
        price: 4.99,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&h=300&fit=crop",
        category: "Drinks",
      },
    ],
  },
];
