/*
  Balaji Furnishers & Traders (LuxeWood) — script.js
  Role: Global State Machine — localStorage CRUD, Tier Engine, Pre-Seeding, Event Bus & Toast System
  Dependencies: None
  Phase: 1 — Step 2
  Last Updated: 2026-07-18
*/

const LuxeWood = (() => {
  'use strict';

  // Storage Keys
  const KEYS = {
    PRODUCTS: 'luxewood_products',
    CUSTOMERS: 'luxewood_customers',
    SETTINGS: 'luxewood_settings',
    BROADCASTS: 'luxewood_broadcasts',
    VOUCHERS: 'luxewood_vouchers'
  };

  // Simple Event Bus
  const listeners = {};

  const events = {
    on(event, callback) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(callback);
    },
    off(event, callback) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter(cb => cb !== callback);
    },
    emit(event, data) {
      if (!listeners[event]) return;
      listeners[event].forEach(cb => {
        try { cb(data); } catch (e) { console.error(`Error in event [${event}]:`, e); }
      });
    }
  };

  // Safe localStorage helpers
  function getItem(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error(`localStorage getItem error for ${key}:`, e);
      return defaultValue;
    }
  }

  function setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`localStorage setItem error for ${key}:`, e);
    }
  }

  // Pure Tier Calculator
  function calculateTier(price) {
    const numPrice = Number(price) || 0;
    if (numPrice >= 200000) return 'diamond';
    if (numPrice >= 100000) return 'gold';
    return 'silver';
  }

  // Pre-seeded Initial Data
  const PRODUCT_IMAGE_MAP = {
    "prod_1710900001": "assets/maharaja_bed.png",
    "prod_1710900002": "assets/dining_table.png",
    "prod_1710900003": "assets/rajputana_sofa.png",
    "prod_1710900004": "assets/heritage_desk.png",
    "prod_1710900005": "assets/mughal_wardrobe.png",
    "prod_1710900006": "assets/tv_credenza.png",
    "prod_1710900007": "assets/lounge_recliner.png",
    "prod_1710900008": "assets/executive_desk.png",
    "prod_1710900009": "assets/jodhpur_bedside.png",
    "prod_1710900010": "assets/imperial_dressing.png",
    "prod_1710900011": "assets/room_divider.png",
    "prod_1710900012": "assets/royal_armchair.png",
    "prod_1710900013": "assets/jaisalmer_sideboard.png",
    "prod_1710900014": "assets/bar_cabinet.png",
    "prod_1710900015": "assets/wooden_bookshelf.png",
    "prod_1710900016": "assets/conference_table.png"
  };

  const INITIAL_PRODUCTS = [
    {
      id: "prod_1710900001",
      name: "Maharaja Sheesham King Bed",
      category: "Bedroom",
      material: "Solid Sheesham Wood",
      finish: "Natural Walnut Polish",
      price: 285000,
      mrp: 340000,
      description: "Hand-carved solid Sheesham wood king bed with royal crown headboard and hidden under-bed storage drawers.",
      dimensions: { L: "78\"", W: "72\"", H: "54\"" },
      leadTime: "3–4 weeks",
      badge: "Bestseller",
      inStock: true,
      images: ["assets/maharaja_bed.png"],
      createdAt: "2024-01-15T10:30:00Z"
    },
    {
      id: "prod_1710900002",
      name: "Darbar Hall Dining Table (8s)",
      category: "Dining",
      material: "Premium Indian Teak Wood",
      finish: "Imperial Brass Inlay Finish",
      price: 185000,
      mrp: 220000,
      description: "Grand 8-seater dining table crafted from aged Teak with intricate floral brass artwork embedded along the table perimeter.",
      dimensions: { L: "96\"", W: "42\"", H: "30\"" },
      leadTime: "2–3 weeks",
      badge: "New Arrival",
      inStock: true,
      images: ["assets/dining_table.png"],
      createdAt: "2024-01-18T14:20:00Z"
    },
    {
      id: "prod_1710900003",
      name: "Rajputana Solid Wood Sofa Set",
      category: "Living",
      material: "Solid Teak & Premium Velvet",
      finish: "Antique Honey Matte",
      price: 145000,
      mrp: 175000,
      description: "3+2+1 seating arrangement with hand-carved mahogany armrests and plush high-density memory foam cushions.",
      dimensions: { L: "84\"", W: "34\"", H: "36\"" },
      leadTime: "2 weeks",
      badge: "Bestseller",
      inStock: true,
      images: ["assets/rajputana_sofa.png"],
      createdAt: "2024-02-01T09:15:00Z"
    },
    {
      id: "prod_1710900004",
      name: "Heritage Teak Study Desk",
      category: "Office",
      material: "Seasoned Teak Wood",
      finish: "Clear Lacquer Gloss",
      price: 68000,
      mrp: 82000,
      description: "Minimalist ergonomic executive study desk equipped with integrated cable management and soft-close brass drawers.",
      dimensions: { L: "60\"", W: "30\"", H: "30\"" },
      leadTime: "1–2 weeks",
      badge: null,
      inStock: true,
      images: ["assets/heritage_desk.png"],
      createdAt: "2024-02-10T11:45:00Z"
    },
    {
      id: "prod_1710900005",
      name: "Mughal Carved Wardrobe (4-Door)",
      category: "Bedroom",
      material: "Solid Rosewood",
      finish: "Dark Espresso Satin",
      price: 240000,
      mrp: 290000,
      description: "Four-door armoire featuring traditional Mughal arch carvings, dual full-length mirrors, and biometric safe compartment.",
      dimensions: { L: "84\"", W: "24\"", H: "84\"" },
      leadTime: "4 weeks",
      badge: "Limited",
      inStock: true,
      images: ["assets/mughal_wardrobe.png"],
      createdAt: "2024-02-15T16:00:00Z"
    },
    {
      id: "prod_1710900006",
      name: "Sheesham Corner TV Credenza",
      category: "Living",
      material: "Solid Sheesham Wood",
      finish: "Teak Polish",
      price: 55000,
      mrp: 68000,
      description: "Space-saving heavy-duty media console designed for up to 75-inch TVs with open soundbar shelf and louvered cabinets.",
      dimensions: { L: "66\"", W: "18\"", H: "24\"" },
      leadTime: "1 week",
      badge: null,
      inStock: true,
      images: ["assets/tv_credenza.png"],
      createdAt: "2024-02-20T12:10:00Z"
    },
    {
      id: "prod_1710900007",
      name: "Royal Leather Lounge Recliner",
      category: "Living",
      material: "Sheesham Frame & Italian Leather",
      finish: "Cognac Brown Leather",
      price: 92000,
      mrp: 110000,
      description: "Pneumatic multi-stage lounge recliner with solid wood base, 360-degree swivel, and built-in cup holder.",
      dimensions: { L: "38\"", W: "36\"", H: "42\"" },
      leadTime: "1–2 weeks",
      badge: "New Arrival",
      inStock: true,
      images: ["assets/lounge_recliner.png"],
      createdAt: "2024-03-01T15:30:00Z"
    },
    {
      id: "prod_1710900008",
      name: "Executive CEO L-Desk",
      category: "Office",
      material: "Solid Walnut & Brushed Brass",
      finish: "Deep Walnut Finish",
      price: 125000,
      mrp: 150000,
      description: "Corner executive suite workstation with modesty panel, integrated wireless charging pad, and side credenza.",
      dimensions: { L: "72\"", W: "66\"", H: "30\"" },
      leadTime: "2–3 weeks",
      badge: "Bestseller",
      inStock: true,
      images: ["assets/executive_desk.png"],
      createdAt: "2024-03-05T10:00:00Z"
    },
    {
      id: "prod_1710900009",
      name: "Jodhpur Sheesham Bedside Table",
      category: "Bedroom",
      material: "Solid Sheesham Wood",
      finish: "Honey Walnut Polish",
      price: 32000,
      mrp: 38000,
      description: "Handcrafted Jodhpur style bedside table with intricate brass corner plates and soft-close drawer.",
      dimensions: { L: "20\"", W: "18\"", H: "24\"" },
      leadTime: "1-2 weeks",
      badge: "New",
      inStock: true,
      images: ["assets/jodhpur_bedside.png"],
      createdAt: "2024-03-10T10:00:00Z"
    },
    {
      id: "prod_1710900010",
      name: "Imperial Carved Dressing Table",
      category: "Bedroom",
      material: "Premium Teak Wood & Glass",
      finish: "Imperial Gold Accents",
      price: 115000,
      mrp: 140000,
      description: "Ornate royal dressing table with a large oval vanity mirror, hand-carved floral motifs, and jewelry compartments.",
      dimensions: { L: "48\"", W: "20\"", H: "72\"" },
      leadTime: "3 weeks",
      badge: "Luxury",
      inStock: true,
      images: ["assets/imperial_dressing.png"],
      createdAt: "2024-03-12T11:00:00Z"
    },
    {
      id: "prod_1710900011",
      name: "Shekhawati Carved Room Divider",
      category: "Living",
      material: "Seasoned Mango Wood",
      finish: "Distressed Antique Polish",
      price: 42000,
      mrp: 52000,
      description: "4-panel foldable room partition partition screen featuring traditional Rajasthani floral lattice (jali) woodwork.",
      dimensions: { L: "80\"", W: "1\"", H: "72\"" },
      leadTime: "1 week",
      badge: null,
      inStock: true,
      images: ["assets/room_divider.png"],
      createdAt: "2024-03-15T15:00:00Z"
    },
    {
      id: "prod_1710900012",
      name: "Mughal Velvet Accent Chair",
      category: "Living",
      material: "Solid Teak & Emerald Velvet",
      finish: "Antique Walnut Gloss",
      price: 75000,
      mrp: 90000,
      description: "Premium accent armchair with high backrest, royal emerald green velvet fabric, and gold leaf arm details.",
      dimensions: { L: "32\"", W: "30\"", H: "46\"" },
      leadTime: "2 weeks",
      badge: "Premium",
      inStock: true,
      images: ["assets/royal_armchair.png"],
      createdAt: "2024-03-18T16:30:00Z"
    },
    {
      id: "prod_1710900013",
      name: "Jaisalmer Stone Top Sideboard",
      category: "Dining",
      material: "Rosewood & Jaisalmer Stone",
      finish: "Deep Mahogany Polish",
      price: 135000,
      mrp: 165000,
      description: "Stunning 4-door buffet sideboard cabinet featuring a solid polished yellow Jaisalmer stone top and brass base.",
      dimensions: { L: "72\"", W: "20\"", H: "34\"" },
      leadTime: "3 weeks",
      badge: "Unique",
      inStock: true,
      images: ["assets/jaisalmer_sideboard.png"],
      createdAt: "2024-03-20T12:00:00Z"
    },
    {
      id: "prod_1710900014",
      name: "Royal Palace Bar Cabinet",
      category: "Dining",
      material: "Solid Teak Wood & Glass",
      finish: "Polished Amber Gold",
      price: 155000,
      mrp: 190000,
      description: "Tall bar cabinet with automated interior LED lighting, integrated wine rack (16 bottles), and hanging stemware racks.",
      dimensions: { L: "36\"", W: "18\"", H: "66\"" },
      leadTime: "2-3 weeks",
      badge: "Bestseller",
      inStock: true,
      images: ["assets/bar_cabinet.png"],
      createdAt: "2024-03-22T10:00:00Z"
    },
    {
      id: "prod_1710900015",
      name: "Regal Teak Library Bookshelf",
      category: "Office",
      material: "Premium Aged Teak",
      finish: "Natural Gloss Finish",
      price: 85000,
      mrp: 105000,
      description: "Elegant 5-tier open bookshelf featuring robust solid wood shelves and antique brushed brass corner accents.",
      dimensions: { L: "40\"", W: "14\"", H: "78\"" },
      leadTime: "2 weeks",
      badge: "Organized",
      inStock: true,
      images: ["assets/wooden_bookshelf.png"],
      createdAt: "2024-03-25T14:00:00Z"
    },
    {
      id: "prod_1710900016",
      name: "Sheesham River Epoxy Conference Table",
      category: "Office",
      material: "Solid Sheesham & Blue Epoxy",
      finish: "High-Gloss Polyurethane",
      price: 265000,
      mrp: 320000,
      description: "Elite boardroom conference table featuring a natural-edge Sheesham wood slab with a central blue epoxy resin river insert.",
      dimensions: { L: "120\"", W: "48\"", H: "30\"" },
      leadTime: "4-5 weeks",
      badge: "Masterpiece",
      inStock: true,
      images: ["assets/conference_table.png"],
      createdAt: "2024-03-28T09:00:00Z"
    }
  ];

  const INITIAL_CUSTOMERS = [
    {
      id: "cust_1710910001",
      name: "Rajesh Kumar Sharma",
      phone: "9896011111",
      productId: "prod_1710900001",
      productName: "Maharaja Sheesham King Bed",
      productPrice: 285000,
      location: "Jaber Nagar (Near OBC Bank), Palwal",
      tier: "diamond",
      coords: { x: 38, y: 42 },
      enquiryDate: "2024-03-10T14:22:00Z",
      notes: "Requested custom gold leaf accents on headboard."
    },
    {
      id: "cust_1710910002",
      name: "Sunil Dutt Verma",
      phone: "9896022222",
      productId: "prod_1710900005",
      productName: "Mughal Carved Wardrobe (4-Door)",
      productPrice: 240000,
      location: "Sector 2, Palwal",
      tier: "diamond",
      coords: { x: 62, y: 35 },
      enquiryDate: "2024-03-12T11:00:00Z",
      notes: "Looking for immediate delivery."
    },
    {
      id: "cust_1710910003",
      name: "Amitabh Choudhary",
      phone: "9896033333",
      productId: "prod_1710900002",
      productName: "Darbar Hall Dining Table (8s)",
      productPrice: 185000,
      location: "NH-19 Highway Side, Palwal",
      tier: "gold",
      coords: { x: 75, y: 55 },
      enquiryDate: "2024-03-14T16:45:00Z",
      notes: "Inquired about interest-free EMI options."
    },
    {
      id: "cust_1710910004",
      name: "Pooja Rani Aggarwal",
      phone: "9896044444",
      productId: "prod_1710900003",
      productName: "Rajputana Solid Wood Sofa Set",
      productPrice: 145000,
      location: "Old Grain Market, Palwal",
      tier: "gold",
      coords: { x: 45, y: 65 },
      enquiryDate: "2024-03-15T09:30:00Z",
      notes: "Wants royal blue velvet fabric upholstery."
    },
    {
      id: "cust_1710910005",
      name: "Vikas Bhardwaj",
      phone: "9896055555",
      productId: "prod_1710900008",
      productName: "Executive CEO L-Desk",
      productPrice: 125000,
      location: "Civil Lines, Palwal",
      tier: "gold",
      coords: { x: 50, y: 25 },
      enquiryDate: "2024-03-16T13:15:00Z",
      notes: "Setting up new office space near court."
    },
    {
      id: "cust_1710910006",
      name: "Deepak Rawat",
      phone: "9896066666",
      productId: "prod_1710900007",
      productName: "Royal Leather Lounge Recliner",
      productPrice: 92000,
      location: "Model Town, Palwal",
      tier: "silver",
      coords: { x: 30, y: 70 },
      enquiryDate: "2024-03-17T17:10:00Z",
      notes: "Confirmed color choice: Cognac Brown."
    },
    {
      id: "cust_1710910007",
      name: "Kavita Yadav",
      phone: "9896077777",
      productId: "prod_1710900004",
      productName: "Heritage Teak Study Desk",
      productPrice: 68000,
      location: "Railway Station Area, Palwal",
      tier: "silver",
      coords: { x: 20, y: 48 },
      enquiryDate: "2024-03-18T10:05:00Z",
      notes: "Study desk for home office."
    },
    {
      id: "cust_1710910008",
      name: "Manoj Singh Chauhan",
      phone: "9896088888",
      productId: "prod_1710900006",
      productName: "Sheesham Corner TV Credenza",
      productPrice: 55000,
      location: "Badarpur Colony, Palwal",
      tier: "silver",
      coords: { x: 82, y: 72 },
      enquiryDate: "2024-03-19T14:40:00Z",
      notes: "Checked dimensions for 65-inch TV."
    },
    {
      id: "cust_1710910009",
      name: "Sanjay Gupta",
      phone: "9896099999",
      productId: "prod_1710900001",
      productName: "Maharaja Sheesham King Bed",
      productPrice: 285000,
      location: "Jaber Nagar (Near OBC Bank), Palwal",
      tier: "diamond",
      coords: { x: 40, y: 40 },
      enquiryDate: "2024-03-20T08:50:00Z",
      notes: "Neighbor of Rajesh Sharma, referred by him."
    },
    {
      id: "cust_1710910010",
      name: "Meenakshi Tomar",
      phone: "9896000000",
      productId: "prod_1710900002",
      productName: "Darbar Hall Dining Table (8s)",
      productPrice: 185000,
      location: "New Bus Stand, Palwal",
      tier: "gold",
      coords: { x: 55, y: 80 },
      enquiryDate: "2024-03-20T12:00:00Z",
      notes: "Asked for matching 8 chairs included."
    }
  ];

  function seedData() {
    const settings = getItem(KEYS.SETTINGS, {});
    const products = getItem(KEYS.PRODUCTS, []);
    if (!settings.seeded || products.length < INITIAL_PRODUCTS.length) {
      setItem(KEYS.PRODUCTS, INITIAL_PRODUCTS);
      if (!settings.seeded) {
        setItem(KEYS.CUSTOMERS, INITIAL_CUSTOMERS);
        setItem(KEYS.SETTINGS, {
          seeded: true,
          storeName: "Balaji Furnishers & Traders",
          phone: "+91 9896097124",
          address: "Near OBC Bank, Jaber Nagar, Palwal, Haryana 121102"
        });
      }
      events.emit('data:seeded', true);
    }
  }

  function getProductImage(prod) {
    if (!prod) return null;
    if (PRODUCT_IMAGE_MAP[prod.id]) return PRODUCT_IMAGE_MAP[prod.id];
    if (prod.images && prod.images[0] && prod.images[0].startsWith('http')) return prod.images[0];
    if (prod.images && prod.images[0] && prod.images[0].startsWith('file:')) return prod.images[0];
    return null;
  }

  // Public Product Operations
  function getProducts() {
    seedData();
    const products = getItem(KEYS.PRODUCTS, []);
    // Ensure map images are attached if missing or emoji
    return products.map(p => {
      if (PRODUCT_IMAGE_MAP[p.id]) {
        return { ...p, images: [PRODUCT_IMAGE_MAP[p.id]] };
      }
      return p;
    });
  }

  function getProductById(id) {
    const products = getProducts();
    return products.find(p => p.id === id) || null;
  }

  function addProduct(productData) {
    const products = getProducts();

    // Check duplicate name
    if (products.some(p => p.name.toLowerCase() === productData.name.trim().toLowerCase())) {
      throw new Error("A product with this name already exists.");
    }

    const newProd = {
      id: "prod_" + Date.now(),
      name: productData.name.trim(),
      category: productData.category || "Living",
      material: productData.material || "Solid Sheesham Wood",
      finish: productData.finish || "Natural Finish",
      price: Number(productData.price) || 0,
      mrp: Number(productData.mrp) || Number(productData.price) || 0,
      description: productData.description || "",
      dimensions: productData.dimensions || { L: "60\"", W: "30\"", H: "30\"" },
      leadTime: productData.leadTime || "2-3 weeks",
      badge: productData.badge || null,
      inStock: productData.inStock !== undefined ? Boolean(productData.inStock) : true,
      images: productData.images || ["🪑"],
      createdAt: new Date().toISOString()
    };

    products.unshift(newProd);
    setItem(KEYS.PRODUCTS, products);
    events.emit('product:added', newProd);
    return newProd;
  }

  function updateProduct(id, changes) {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Product not found.");

    products[index] = { ...products[index], ...changes };
    setItem(KEYS.PRODUCTS, products);
    events.emit('product:updated', products[index]);
    return products[index];
  }

  function deleteProduct(id) {
    let products = getProducts();
    const target = products.find(p => p.id === id);
    if (!target) return false;

    products = products.filter(p => p.id !== id);
    setItem(KEYS.PRODUCTS, products);
    events.emit('product:deleted', id);
    return true;
  }

  // Public Customer Operations
  function getCustomers() {
    seedData();
    return getItem(KEYS.CUSTOMERS, []);
  }

  function addCustomer(formData = {}) {
    const customers = getCustomers();
    const rawName = (formData && formData.name) ? String(formData.name).trim() : "Valued Customer";
    const rawPhone = (formData && formData.phone) ? String(formData.phone) : "";
    const cleanPhone = rawPhone.replace(/\D/g, '').slice(-10) || ("989" + Math.floor(1000000 + Math.random() * 9000000));

    // Duplicate check
    if (customers.some(c => c.phone === cleanPhone)) {
      throw new Error("This mobile number is already registered.");
    }

    const product = getProductById(formData.productId);
    const price = product ? product.price : (Number(formData.productPrice) || 0);
    const productName = product ? product.name : (formData.productName || "Custom Order");

    // Assign semi-random coords based on location
    const coords = formData.coords || {
      x: Math.floor(Math.random() * 60) + 20,
      y: Math.floor(Math.random() * 50) + 25
    };

    const newCustomer = {
      id: "cust_" + Date.now(),
      name: rawName,
      phone: cleanPhone,
      productId: formData.productId || null,
      productName: productName,
      productPrice: price,
      location: formData.location || "Jaber Nagar (Near OBC Bank), Palwal",
      address: formData.address || "",
      latLng: formData.latLng || null,
      tier: calculateTier(price),
      coords: coords,
      enquiryDate: formData.enquiryDate || new Date().toISOString(),
      notes: formData.notes || ""
    };

    customers.unshift(newCustomer);
    setItem(KEYS.CUSTOMERS, customers);
    events.emit('customer:added', newCustomer);
    return newCustomer;
  }

  function getCustomersByTier(tier) {
    const customers = getCustomers();
    if (!tier || tier === 'all') return customers;
    return customers.filter(c => c.tier === tier);
  }

  // Analytics Helpers
  function getTierStats() {
    const customers = getCustomers();
    const stats = {
      silver: { count: 0, revenue: 0 },
      gold: { count: 0, revenue: 0 },
      diamond: { count: 0, revenue: 0 },
      total: { count: customers.length, revenue: 0 }
    };

    customers.forEach(c => {
      const tier = c.tier || 'silver';
      const price = Number(c.productPrice) || 0;
      if (stats[tier]) {
        stats[tier].count += 1;
        stats[tier].revenue += price;
      }
      stats.total.revenue += price;
    });

    return stats;
  }

  function getHotspotData() {
    return getCustomers().map(c => ({
      name: c.name,
      phone: c.phone,
      tier: c.tier,
      coords: c.coords,
      location: c.location,
      price: c.productPrice,
      productName: c.productName
    }));
  }

  // Utilities
  function formatPrice(amount) {
    const num = Number(amount) || 0;
    return '₹' + num.toLocaleString('en-IN');
  }

  function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function toast(message, type = 'success', duration = 4000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toastEl = document.createElement('div');
    toastEl.className = `toast toast--${type}`;
    toastEl.innerText = message;

    container.appendChild(toastEl);

    setTimeout(() => {
      toastEl.style.opacity = '0';
      toastEl.style.transform = 'translateY(10px)';
      setTimeout(() => toastEl.remove(), 300);
    }, duration);
  }

  // Voucher Engine System
  const VOUCHER_RULES = {
    2000: { minPrice: 50000, label: "Valid on orders above ₹50,000" },
    3500: { minPrice: 75000, label: "Valid on orders above ₹75,000" },
    5000: { minPrice: 100000, label: "Valid on orders above ₹1,00,000" },
    7500: { minPrice: 150000, label: "Valid on orders above ₹1,50,000" },
    10000: { minPrice: 200000, label: "Valid on orders above ₹2,00,000" },
    15000: { minPrice: 250000, label: "Valid on orders above ₹2,50,000" }
  };

  function getVouchers() {
    return getItem(KEYS.VOUCHERS, []);
  }

  function generateVoucher(customerData = {}) {
    const rewards = [2000, 3500, 5000, 7500, 10000, 15000];
    const amount = rewards[Math.floor(Math.random() * rewards.length)];
    const rule = VOUCHER_RULES[amount] || { minPrice: 50000, label: "Valid on orders above ₹50,000" };

    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = `BALAJI-ROYAL-${amount}-${randomSuffix}`;

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // 30 days validity

    const safeName = (customerData && customerData.name) ? String(customerData.name).trim() : "Palwal VIP Guest";
    const safePhone = (customerData && customerData.phone) ? String(customerData.phone).trim() : "9896097124";
    const safeLocation = (customerData && customerData.location) ? String(customerData.location) : "Palwal Showroom";

    const voucher = {
      code,
      amount,
      minPrice: rule.minPrice,
      label: rule.label,
      customerName: safeName,
      customerPhone: safePhone,
      location: safeLocation,
      expiryDate: expiryDate.toISOString(),
      createdAt: new Date().toISOString(),
      used: false
    };

    try {
      const vouchers = getVouchers();
      vouchers.unshift(voucher);
      setItem(KEYS.VOUCHERS, vouchers);
    } catch (e) {
      console.error("Voucher save error:", e);
    }

    // Auto register customer with won voucher note
    try {
      addCustomer({
        name: safeName,
        phone: safePhone,
        location: safeLocation,
        address: (customerData && customerData.address) || "",
        latLng: (customerData && customerData.latLng) || null,
        coords: (customerData && customerData.coords) || null,
        productPrice: rule.minPrice,
        productName: `Mystery Voucher Won: ₹${amount.toLocaleString('en-IN')}`,
        notes: `[Voucher Won: ${code} (Value ₹${amount.toLocaleString('en-IN')})]`
      });
    } catch (e) {
      // Ignore duplicate customer error if already registered
    }

    events.emit('voucher:generated', voucher);
    return voucher;
  }

  function validateVoucher(codeStr) {
    if (!codeStr) return null;
    const cleanCode = String(codeStr).trim().toUpperCase();
    const vouchers = getVouchers();

    // First check localStorage vouchers
    let found = vouchers.find(v => v.code.toUpperCase() === cleanCode);

    // If not found in localStorage, parse code pattern BALAJI-ROYAL-AMNT-XXXX
    if (!found) {
      const match = cleanCode.match(/^BALAJI-ROYAL-(\d+)-[A-Z0-9]{4}$/);
      if (match) {
        const amount = Number(match[1]);
        const rule = VOUCHER_RULES[amount];
        if (rule) {
          found = {
            code: cleanCode,
            amount: amount,
            minPrice: rule.minPrice,
            label: rule.label,
            customerName: "Valued VIP Guest",
            location: "Palwal Showroom"
          };
        }
      }
    }

    return found || null;
  }

  function downloadVoucherCard(voucher) {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 460;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 800, 460);
    grad.addColorStop(0, '#1A1008');
    grad.addColorStop(1, '#2C1B12');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 460);

    // Double Gold Border
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 768, 428);
    ctx.lineWidth = 1;
    ctx.strokeRect(22, 22, 756, 416);

    // Header Title
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 22px serif';
    ctx.textAlign = 'center';
    ctx.fillText('BALAJI FURNISHERS & TRADERS — PALWAL', 400, 60);

    ctx.fillStyle = '#FAF3E0';
    ctx.font = 'italic 16px sans-serif';
    ctx.fillText('Est. 2009 · Near OBC Bank, Jaber Nagar, Palwal, Haryana 121102', 400, 85);

    // Divider line
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.beginPath();
    ctx.moveTo(100, 105);
    ctx.lineTo(700, 105);
    ctx.stroke();

    // Reward Title
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ROYAL CASH DISCOUNT VOUCHER', 400, 140);

    // Big Discount Amount
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 54px serif';
    ctx.fillText(`₹${voucher.amount.toLocaleString('en-IN')}`, 400, 205);

    // Code Box
    ctx.fillStyle = '#24140A';
    ctx.fillRect(200, 230, 400, 50);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 230, 400, 50);

    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(voucher.code, 400, 262);

    // Terms & Customer Info
    ctx.fillStyle = '#EDE0C8';
    ctx.font = '16px sans-serif';
    ctx.fillText(`Issued To: ${voucher.customerName || 'Valued Guest'} (${voucher.location || 'Palwal Area'})`, 400, 320);

    ctx.fillStyle = '#A8882A';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Terms: Valid on furniture pieces above ₹${(voucher.minPrice || 50000).toLocaleString('en-IN')}`, 400, 350);

    ctx.fillStyle = '#9E8B75';
    ctx.font = '12px sans-serif';
    ctx.fillText('Showroom Contact / WhatsApp: +91 9896097124 · Non-Transferable · Present Code at Billing', 400, 395);

    // Trigger PNG Download
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `Balaji_Royal_Voucher_${voucher.code}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    toast(`📥 Royal Voucher Card downloaded!`, 'success');
  }

  function clearAllData() {
    try {
      localStorage.removeItem(KEYS.PRODUCTS);
      localStorage.removeItem(KEYS.CUSTOMERS);
      localStorage.removeItem(KEYS.SETTINGS);
      localStorage.removeItem(KEYS.BROADCASTS);
      localStorage.removeItem(KEYS.VOUCHERS);
      seedData();
      toast('All data reset to defaults.', 'info');
    } catch (e) {
      console.error('clearAllData error:', e);
    }
  }

  // Initialize
  seedData();

  // Public API
  return {
    events,
    calculateTier,
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    getCustomers,
    addCustomer,
    getCustomersByTier,
    getTierStats,
    getHotspotData,
    formatPrice,
    formatDate,
    toast,
    seedData,
    clearAllData,
    getProductImage,
    PRODUCT_IMAGE_MAP,
    VOUCHER_RULES,
    getVouchers,
    generateVoucher,
    validateVoucher,
    downloadVoucherCard
  };
})();

window.LuxeWood = LuxeWood;
