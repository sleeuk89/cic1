import { FAQ_DATA } from '../constants';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import React from 'react';

export default function FAQ({ locationName = "UK" }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            Common Questions About <span className="text-emerald-600">Child Injury Claims</span>
          </h2>
          <p className="text-slate-600">Everything you need to know about making a claim for your child in {locationName}.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-8">{item.question.replace('?', ` in ${locationName}?`)}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-slate-600 leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
