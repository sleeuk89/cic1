import { UK_LOCATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function LocationList() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Areas We Cover</h2>
          <p className="text-slate-500">Providing specialist child injury legal support across the United Kingdom.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {UK_LOCATIONS.map((loc) => (
            <Link 
              key={loc.slug}
              to={`/near-me/${loc.slug}`}
              className="flex items-center space-x-2 p-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all text-slate-600 group"
            >
              <MapPin className="h-4 w-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
              <span className="text-sm font-medium">{loc.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
