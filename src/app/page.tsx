 'use client';

import { useMemo, useState } from 'react';
import { Search, ShoppingCart, Play, Star, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube, X } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Main Dish',
    countText: '(86 dishes)',
    image: 'img1.png',
    imageAlt: 'Main Dish',
    backgroundClass: 'from-green-50 to-green-100',
  },
  {
    id: 2,
    name: 'Break Fast',
    countText: '(12 break fast)',
    image: 'img2.png',
    imageAlt: 'Break Fast',
    backgroundClass: 'from-yellow-50 to-yellow-100',
  },
  {
    id: 3,
    name: 'Dessert',
    countText: '(48 dessert)',
    image: 'img3.png',
    imageAlt: 'Dessert',
    backgroundClass: 'from-pink-50 to-pink-100',
  },
  {
    id: 4,
    name: 'Browse All',
    countText: '(255 Items)',
    image: 'img4.png',
    imageAlt: 'Browse All',
    backgroundClass: 'from-purple-50 to-purple-100',
  },
];

const dishes = [
  {
    id: 1,
    name: 'Fattoush salad',
    description: 'Description of the item',
    price: '$24.00',
    rating: '4.9',
    image: 'img5.png',
    imageAlt: 'Fattoush salad',
  },
  {
    id: 2,
    name: 'Vegetable salad',
    description: 'Description of the item',
    price: '$26.00',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    imageAlt: 'Vegetable salad',
  },
  {
    id: 3,
    name: 'Egg vegi salad',
    description: 'Description of the item',
    price: '$23.00',
    rating: '4.5',
    image: 'img7.png',
    imageAlt: 'Egg vegi salad',
  },
];

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRestaurantInfo, setShowRestaurantInfo] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const handleExploreClick = () => {
    setShowRestaurantInfo(true);
    setTimeout(() => {
      document.getElementById('restaurant-info')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const filteredDishes = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return dishes;
    }

    return dishes.filter((dish) => {
      return (
        dish.name.toLowerCase().includes(normalizedQuery) ||
        dish.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [dishes, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#39DB4A] rounded-md flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 7V13L10 18L17 13V7L10 2Z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">FOODI</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-[15px] font-medium text-[#39DB4A]">Home</a>
            <a href="#menu" className="text-[15px] text-gray-600 hover:text-gray-900">Menu</a>
            <a href="#services" className="text-[15px] text-gray-600 hover:text-gray-900">Services</a>
            <a href="#contact" className="text-[15px] text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Toggle search"
              className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-gray-50 flex items-center justify-center relative">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#39DB4A] text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button className="hidden lg:block px-6 py-2.5 bg-[#39DB4A] text-white rounded-full text-[15px] font-medium hover:bg-[#32c441] transition-colors">
              Contact
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pb-4">
            <div className="relative max-w-md ml-auto">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                type="text"
                placeholder="Search dishes..."
                className="w-full h-11 rounded-full border border-gray-200 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#39DB4A] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#FFF0F0] rounded-full">
              <span className="text-[#FF6868] text-sm font-medium">Hot spicy Food</span>
            </div>

            <h1 className="text-[52px] lg:text-[62px] font-bold leading-[1.1] text-gray-900">
              Dive into Delights<br />
              Of Delectable <span className="text-[#39DB4A]">Food</span>
            </h1>

            <p className="text-[17px] text-gray-600 leading-relaxed max-w-lg">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>

            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-[#39DB4A] text-white rounded-full text-[16px] font-semibold hover:bg-[#32c441] transition-colors shadow-lg shadow-green-200">
                Contact
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-[16px] font-semibold hover:border-gray-300 transition-colors flex items-center gap-2">
                Watch Video
                <Play className="w-4 h-4 fill-gray-700" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Green Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39DB4A] rounded-full -z-10"></div>

            {/* Main Hero Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1675354358657-3604c4f101f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVhdGluZyUyMGZvb2QlMjBoYXBweSUyMGFzaWFufGVufDF8fHx8MTc3NjE2MTE0OXww&ixlib=rb-4.1.0&q=70&w=1080"
                alt="Woman enjoying food"
                className="w-full max-w-[450px] mx-auto object-cover rounded-full"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-4 w-[160px]">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=1"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-xl font-bold text-gray-900">200+</div>
                  <div className="text-xs text-gray-500">Happy<br/>Customers</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl p-4 w-[160px]">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=2"
                  alt="Outlets"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-500">Outlets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#FF6868] text-sm font-semibold mb-2 tracking-wider uppercase">Customer Favorites</p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900">Popular Categories</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() =>
                setSelectedCategoryId((previousId) =>
                  previousId === category.id ? null : category.id,
                )
              }
              className={`flex flex-col items-center group cursor-pointer rounded-3xl py-4 transition-all duration-300 ${
                selectedCategoryId === category.id ? 'bg-gray-50 shadow-md' : ''
              }`}
            >
              <div
                className={`bg-gradient-to-br ${category.backgroundClass} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${
                  selectedCategoryId === category.id ? 'w-40 h-40' : 'w-32 h-32'
                }`}
              >
                <span className="text-5xl"><img src={category.image} alt={category.imageAlt} /></span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.countText}</p>
              {selectedCategoryId === category.id && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCartCount((previousCount) => previousCount + 1);
                  }}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#39DB4A] text-white rounded-full hover:bg-[#32c441] transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Standout Dishes */}
      <section className="py-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-[#FF6868] text-sm font-semibold mb-2 tracking-wider uppercase">Special Dishes</p>
            <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900">Standout Dishes<br />From Our Menu</h2>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#39DB4A] text-white flex items-center justify-center hover:bg-[#32c441] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-[#39DB4A] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  ❤️
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{dish.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{dish.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredDishes.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No dishes found for "{searchQuery}".
          </p>
        )}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Chef Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                alt="Chef"
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Right - Testimonial Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#FF6868] text-sm font-semibold mb-2 tracking-wider uppercase">Testimonials</p>
              <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900 mb-6">What Our Customers<br />Say About Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                "I had the pleasure of dining at FOODI last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
              </p>
            </div>

            {/* Customer Feedback */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/50?img=3" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/50?img=4" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/50?img=5" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Customer Feedback</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">4.9</span>
                  <span className="text-sm text-gray-500">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#FF6868] text-sm font-semibold mb-2 tracking-wider uppercase">Our Story & Services</p>
              <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900 mb-6">Our Culinary Journey<br />And Services</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
              </p>
            </div>
            <button
              onClick={handleExploreClick}
              className="px-8 py-4 bg-[#39DB4A] text-white rounded-full text-[16px] font-semibold hover:bg-[#32c441] transition-colors shadow-lg shadow-green-200"
            >
              Explore
            </button>
          </div>

          {/* Right - Service Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">CATERING</h3>
              <p className="text-sm text-gray-500">Delight your guests with our flavors and presentation</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">FAST DELIVERY</h3>
              <p className="text-sm text-gray-500">We deliver your order promptly to your door</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ONLINE ORDERING</h3>
              <p className="text-sm text-gray-500">Explore menu & order with ease using our Online Ordering</p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">GIFT CARDS</h3>
              <p className="text-sm text-gray-500">Give the gift of exceptional dining with FOODI Gift Cards</p>
            </div>
          </div>
        </div>
      </section>

      {showRestaurantInfo && (
        <section id="restaurant-info" className="py-16 px-8 lg:px-16 max-w-[1440px] mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-sm">
            <div className="mb-8">
              <p className="text-[#FF6868] text-sm font-semibold mb-2 tracking-wider uppercase">About FOODI</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Welcome to Our Restaurant</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                FOODI is built around fresh ingredients, creative recipes, and warm hospitality. From everyday favorites to signature chef specials, we focus on making every meal memorable for you and your family.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">Serve quality food with consistency, speed, and care in every order.</p>
              </div>
              <div className="rounded-2xl bg-yellow-50 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Opening Hours</h3>
                <p className="text-sm text-gray-600">Mon - Sun: 9:00 AM - 11:00 PM</p>
              </div>
              <div className="rounded-2xl bg-pink-50 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Downtown Food Street, New Zealand</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Customers Love Us</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>- Freshly prepared dishes made daily</li>
                  <li>- Fast delivery and online ordering support</li>
                  <li>- Family-friendly atmosphere and service</li>
                  <li>- Special seasonal menus and offers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact & Reservations</h3>
                <p className="text-sm text-gray-600 mb-2">Email: example@email.com</p>
                <p className="text-sm text-gray-600 mb-2">Phone: +64 958 248 966</p>
                <p className="text-sm text-gray-600">Book your table in advance for weekends and special events.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#39DB4A] rounded-md flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 7V13L10 18L17 13V7L10 2Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">FOODI</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
                Savor the artistry where every dish is a culinary masterpiece
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Useful links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Blogs</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Main Menu */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Main Menu</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Offers</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Menus</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Reservation</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li><a href="mailto:example@email.com" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">example@email.com</a></li>
                <li><a href="tel:+64958248966" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">+64 958 248 966</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-[#39DB4A] transition-colors">Social media</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center hover:bg-[#39DB4A] hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              Copyright 2023 FOODI | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}