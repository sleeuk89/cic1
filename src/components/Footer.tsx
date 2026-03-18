import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Shield className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight">
                ChildInjury<span className="text-emerald-500">Claims</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              We are a specialist legal lead generation service connecting families with expert child injury solicitors across the UK. Our mission is to ensure every child receives the justice and compensation they deserve.
            </p>
            <div className="flex space-x-4">
              <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">TW</span>
              </div>
              <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">LI</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-500 transition-colors">How it Works</a></li>
              <li><a href="#faq" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>0800 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>help@childinjuryclaims.co.uk</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <p>© 2026 Child Injury Claims. All rights reserved.</p>
          <p>This website is a lead generation tool. We are not a law firm. We connect you with regulated solicitors.</p>
        </div>
      </div>
    </footer>
  );
}
