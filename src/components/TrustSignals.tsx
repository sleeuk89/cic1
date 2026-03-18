import { motion } from 'motion/react';
import { CheckCircle, Shield, Scale } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">100% No Win, No Fee</h3>
            <p className="text-slate-500 text-sm leading-relaxed">You don't pay a penny unless we win your case. No hidden costs or upfront fees.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Regulated Solicitors</h3>
            <p className="text-slate-500 text-sm leading-relaxed">We only work with SRA regulated solicitors who specialize in child injury law.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
              <Scale className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Maximum Compensation</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Our experts ensure you receive the full amount of compensation your child is entitled to.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
