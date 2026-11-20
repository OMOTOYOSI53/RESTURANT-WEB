// BLESSINGS Restaurant - Central Brand & Restaurant Information

export const RESTAURANT_INFO = {
  name: 'BLESSINGS',
  tagline: 'Premium African & Nigerian Restaurant',
  brandMessage: 'Bringing the authentic taste of Africa to your table.',
  phoneDisplay: '+234 814 463 8639',
  phoneRaw: '8144638639',
  phoneTel: '+2348144638639',
  whatsappNumber: '2348144638639',
  whatsappUrl: 'https://wa.me/2348144638639',
  email: 'omotehinseayobamidesmond@gmail.com',
  location: 'Prospira Nig. Ltd., Nigeria',
  locationNote: 'Provisional address — subject to confirmation upon official announcement.',
  
  // Sample opening hours clearly marked as provisional
  openingHours: [
    { days: 'Monday – Thursday', hours: '10:00 AM – 10:00 PM', status: 'Open' },
    { days: 'Friday – Saturday', hours: '10:00 AM – 11:30 PM', status: 'Open Late' },
    { days: 'Sunday', hours: '12:00 PM – 10:00 PM', status: 'Sunday Brunch & Dinner' },
  ],
  openingHoursNote: 'Note: These are sample operating hours and can be updated when confirmed.',

  // Social media placeholders
  socials: [
    { name: 'Instagram', handle: '@blessings_restaurant', url: '#' },
    { name: 'Facebook', handle: 'Blessings Restaurant NG', url: '#' },
    { name: 'TikTok', handle: '@blessings_eats', url: '#' },
  ],

  // Core Brand Story (strict compliance with guidelines)
  story: [
    'Blessings was established with a simple vision: to celebrate African food, culture, and hospitality through delicious meals and exceptional service.',
    'We believe food is more than nourishment. It is a connection to our roots, our traditions, our families, and our communities.',
    'Every meal we prepare reflects our commitment to quality, authenticity, and the joy of sharing good food.'
  ],

  mission: 'Our mission is to serve delicious, authentic African meals while creating a welcoming dining experience that brings people together.',
  vision: 'To become a trusted destination for authentic African cuisine, memorable hospitality, and exceptional dining experiences.',

  // Values (About Us Page)
  values: [
    {
      title: 'Quality',
      description: 'We source the freshest local produce, premium meats, and authentic spices to ensure excellence in every bite.',
      icon: 'Award',
    },
    {
      title: 'Authenticity',
      description: 'Honoring ancestral recipes, slow-cooking traditions, and deep-rooted flavors that evoke true nostalgic comfort.',
      icon: 'Flame',
    },
    {
      title: 'Hospitality',
      description: 'Rooted in the warmth of African welcome, every guest is treated like royalty and cherished family.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Dedicated to exceeding expectations through attentive service, memorable ambience, and consistent culinary care.',
      icon: 'Smile',
    },
  ],

  // Why Choose Us (Home Page)
  whyChooseUs: [
    {
      title: 'Authentic African Flavours',
      description: 'Traditional spices, authentic native techniques, and recipes that capture the true essence of Nigerian culinary heritage.',
      icon: 'UtensilsCrossed',
    },
    {
      title: 'Fresh and Quality Ingredients',
      description: 'Hand-selected produce, farm-fresh ingredients, and uncompromised food standards in every prepared dish.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Exceptional Customer Service',
      description: 'Warm, gracious, and attentive staff committed to making every visit and order an effortless delight.',
      icon: 'Sparkles',
    },
    {
      title: 'Warm and Welcoming Atmosphere',
      description: 'Rustic wooden tables, rich dark walnut furniture, golden ambient lighting, and cosy intimate surroundings.',
      icon: 'Home',
    },
  ],

  // Testimonials (Sample placeholder reviews clearly disclosed)
  testimonials: [
    {
      id: 1,
      guestName: 'Babatunde Adeleke',
      guestRole: 'Family Dining Guest',
      quote: 'The Jollof rice had that authentic smoky party aroma that is so rare to find. The warm rustic ambiance made our family Sunday dinner feel truly special.',
      rating: 5,
      date: 'Recent Guest (Sample)',
      favoriteDish: 'Nigerian Jollof & Asun',
    },
    {
      id: 2,
      guestName: 'Chioma Okonkwo',
      guestRole: 'Corporate Client',
      quote: 'Blessings hosted our executive team dinner. The Pounded Yam and Egusi Soup was phenomenal, and the amber-lit rustic setting was sophisticated yet incredibly cosy.',
      rating: 5,
      date: 'Recent Guest (Sample)',
      favoriteDish: 'Egusi Soup & Pounded Yam',
    },
    {
      id: 3,
      guestName: 'Amina Bello',
      guestRole: 'Food Enthusiast & Tourist',
      quote: 'As someone visiting from abroad, Blessings gave me the most warm and genuine introduction to Nigerian hospitality. The Chapman and Pepper Soup are unforgettable!',
      rating: 5,
      date: 'Recent Guest (Sample)',
      favoriteDish: 'Goat Meat Pepper Soup',
    },
  ],

  // Services offered (Services Page)
  services: [
    {
      id: 'dine-in',
      title: 'Dine-In',
      description: 'Enjoy delicious African meals in our warm and welcoming restaurant environment.',
      icon: 'Utensils',
      features: ['Rustic wooden tables & ambient lighting', 'Full table service', 'Intimate seating options'],
      actionText: 'Book a Table',
      actionLink: '#reservation-section',
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery',
      description: 'Enjoy your favourite Blessings meals from the comfort of your home or office.',
      icon: 'Bike',
      features: ['Fast dispatch in insulated packaging', 'Direct tracking & WhatsApp updates', 'Safe contactless options'],
      actionText: 'Order for Delivery',
      actionLink: '#menu-section',
    },
    {
      id: 'takeaway',
      title: 'Takeaway',
      description: 'Get freshly prepared meals packed conveniently for you.',
      icon: 'ShoppingBag',
      features: ['Quick pickup service', 'Spill-proof premium containers', 'Hot & ready on arrival'],
      actionText: 'Order Takeaway',
      actionLink: '#menu-section',
    },
    {
      id: 'event-catering',
      title: 'Event Catering',
      description: 'Let us bring the taste of Blessings to your weddings, birthdays, celebrations, and special occasions.',
      icon: 'PartyPopper',
      features: ['Customized African buffet menus', 'Professional serving staff', 'Live cooking stations'],
      actionText: 'Inquire for Catering',
      actionLink: '/contact?subject=Event%20Catering%20Inquiry',
    },
    {
      id: 'outdoor-dining',
      title: 'Outdoor Dining',
      description: 'Enjoy great food and memorable moments in a relaxed outdoor setting.',
      icon: 'SunMedium',
      features: ['Breezy patio seating', 'Evening fairy lights & lanterns', 'Live acoustic music on weekends'],
      actionText: 'Reserve Outdoor Table',
      actionLink: '#reservation-section',
    },
    {
      id: 'table-reservations',
      title: 'Table Reservations',
      description: 'Reserve your preferred table and prepare for an enjoyable dining experience.',
      icon: 'CalendarCheck2',
      features: ['Instant WhatsApp inquiry', 'Special seating arrangements', 'Birthday & anniversary decor on request'],
      actionText: 'Reserve Now',
      actionLink: '#reservation-section',
    },
  ],

  // Gallery items for About Page
  gallery: [
    {
      id: 1,
      title: 'Rustic Warm Dining Room',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      description: 'Dark walnut tables with golden ambient lanterns creating an intimate luxury atmosphere.',
    },
    {
      id: 2,
      title: 'Artisanal Nigerian Jollof',
      category: 'Dishes',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
      description: 'Firewood-infused smoky Jollof rice plated with crispy plantains.',
    },
    {
      id: 3,
      title: 'Fire & Grill Perfection',
      category: 'Preparation',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
      description: 'Open charcoal grills searing Suya skewers and spiced meats to caramelized perfection.',
    },
    {
      id: 4,
      title: 'Intimate Table Setting',
      category: 'Experience',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Handcrafted wooden tables set for memorable gatherings and shared laughter.',
    },
    {
      id: 5,
      title: 'Traditional Egusi Feast',
      category: 'Dishes',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      description: 'Piping hot Egusi soup enriched with stockfish, crayfish, and tender beef.',
    },
    {
      id: 6,
      title: 'Warm African Hospitality',
      category: 'Experience',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80',
      description: 'Every guest is received with open arms and gracious Nigerian warmth.',
    },
  ],
};

