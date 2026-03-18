import React from 'react';
import { Shield, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              ChildInjury<span className="text-emerald-600">Claims</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Home</Link>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">How it Works</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">FAQ</a>
            <a href="tel:0800000000" className="flex items-center space-x-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
              <Phone className="h-4 w-4" />
              <span>0800 000 0000</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4">
          <Link to="/" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#how-it-works" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#faq" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="tel:0800000000" className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-5 py-3 rounded-xl text-base font-semibold">
            <Phone className="h-5 w-5" />
            <span>Call Free: 0800 000 0000</span>
          </a>
        </div>
      )}
    </nav>
  );
}
