import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Newspaper, Store, MessageCircle } from 'lucide-react';
import { storage } from '../utils/storage';

export default function Home() {
  const whatsappLink = storage.get('whatsappLink', '');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <img
          src="https://images.unsplash.com/photo-1625042770755-a959b2e37e8c?auto=format&fit=crop&q=80"
          alt="Traditional Saree Weaving"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Elampillai
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Discover the heart of Tamil Nadu's textile industry and experience our rich cultural heritage
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/shops" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <Store className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Local Shops</h2>
              <p className="text-gray-600">Explore our diverse collection of local businesses and services.</p>
            </div>
          </Link>

          <Link to="/marketplace" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <ShoppingBag className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
              <p className="text-gray-600">Connect with local sellers and discover unique products.</p>
            </div>
          </Link>

          <Link to="/blog" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <Newspaper className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">News & Updates</h2>
              <p className="text-gray-600">Stay informed about local events and community news.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Elampillai</h2>
              <p className="text-gray-600 mb-4">
                Elampillai, located in Tamil Nadu, is renowned for its textile industry and rich cultural heritage. Our city is home to numerous textile manufacturers, producing some of the finest sarees and fabrics in the region.
              </p>
              <p className="text-gray-600">
                With a perfect blend of traditional craftsmanship and modern technology, Elampillai continues to be a major hub for textile trade and commerce in South India.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1624028763097-1e95b43a3252?auto=format&fit=crop&q=80"
                alt="Traditional Handloom Weaving"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8">Connect with local businesses and stay updated with the latest news</p>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Join WhatsApp Community
            </a>
          )}
        </div>
      </section>
    </div>
  );
}