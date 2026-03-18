import { motion } from 'motion/react';
import LeadForm from './LeadForm';
import { ShieldCheck, Award, Clock } from 'lucide-react';

export default function Hero({ locationName = "UK" }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Specialist Child Injury Solicitors</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Expert <span className="text-emerald-600">Child Injury Claims</span> in {locationName}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              If your child has been injured in an accident that wasn't their fault, we're here to help you secure the compensation they deserve. 100% No Win, No Fee.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">No Win, No Fee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <Award className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Expert Legal Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Fast Assessment</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
