import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 text-center space-y-4"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-2">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
        <p className="text-slate-600">Your enquiry has been received. One of our specialist child injury solicitors will call you back shortly for a free consultation.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-emerald-600 font-semibold hover:underline"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Claim Assessment</h3>
      <p className="text-slate-500 text-sm mb-6">Find out if you can claim in under 60 seconds.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="e.g. 07123 456789"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Injury Type</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none bg-white">
              <option>Road Traffic Accident</option>
              <option>Accident at School/Nursery</option>
              <option>Medical Negligence</option>
              <option>Slip, Trip or Fall</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Check Eligibility Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          By clicking, you agree to our privacy policy. We handle all data securely and your initial consultation is 100% free with no obligation.
        </p>
      </form>
    </div>
  );
}
