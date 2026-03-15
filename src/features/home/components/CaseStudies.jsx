import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = useSelector((state) => state.caseStudies.items);
  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-start mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900"
          >
            Case Studies by India's Top<br />
            <span className="text-brand-blue">Influencer Marketing</span> Agency
          </motion.h2>
          <Link to="/case-studies" className="flex-shrink-0 px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-bold rounded-md hover:bg-gray-900 hover:text-white transition-colors">
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: cs.color }}>
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
                  Case Study Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">{cs.title}</h3>
                <a href="#" className="text-brand-blue text-sm font-bold hover:text-brand-blue/80 transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                  See detail <span className="transition-transform group-hover:translate-x-1">›</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
