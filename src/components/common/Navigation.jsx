import React from 'react';
import { X, Menu } from 'lucide-react';

const Navigation = ({ activeTab, setTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const items = ['Home', 'Journey', 'Achievements', 'Gallery', 'Personal'];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="font-serif text-2xl font-bold text-gray-900 cursor-pointer z-50 relative tracking-tight"
          onClick={() => setTab('Home')}
        >
          HK.
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {items.map(item => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 relative ${
                activeTab === item ? 'text-gray-900 border-b-2 border-gray-900 pb-1' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-900 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#FAFAFA] flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in z-40">
            {items.map(item => (
              <button
                key={item}
                onClick={() => {
                  setTab(item);
                  setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-serif text-gray-900"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;