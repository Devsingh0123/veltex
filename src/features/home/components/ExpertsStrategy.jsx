import { motion } from 'framer-motion';
import { FiUsers, FiEdit3, FiCheckCircle } from 'react-icons/fi';

const expertItems = [
  'Understand your business goals',
  'Connect brands with influencers',
  'Strategize & Execute influencer marketing campaigns',
];

const strategySteps = [
  {
    icon: <FiUsers size={32} className="text-white" />,
    step: '1',
    title: 'Selecting the Right Influencers',
    desc: 'We meticulously choose influencers who align with your brand values and target audience for maximum impact.',
  },
  {
    icon: <FiEdit3 size={32} className="text-white" />,
    step: '2',
    title: 'Crafting Engaging Campaigns',
    desc: 'Our team designs creative campaigns that resonate with audiences and drive meaningful engagement.',
  },
  {
    icon: <FiCheckCircle size={32} className="text-white" />,
    step: '3',
    title: 'Achieving Brand Success',
    desc: 'We ensure your campaign delivers measurable results, from brand awareness to conversions.',
  },
];

const ExpertsStrategy = () => {
  return (
    <>
      {/* Our Experts Help */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-8"
          >
            Our Influencer Marketing Experts Help in:
          </motion.h2>

          <div className="flex flex-wrap gap-4 mb-8">
            {expertItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-6 py-4 border border-gray-100"
              >
                <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-gray-700 text-sm font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="inline-block px-8 py-3 bg-brand-blue text-white text-sm font-bold rounded-md hover:bg-brand-blue/90 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-14"
          >
            How We Strategize the Influencer Marketing Campaigns
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {strategySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Step {step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertsStrategy;
