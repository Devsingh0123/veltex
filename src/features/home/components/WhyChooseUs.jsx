import { motion } from 'framer-motion';
import { whyChooseUsData } from '../../../data/dummyData';

const platformFeatures = [
  { title: 'Unmatched Network', desc: 'Boasts an unparalleled network of 300M+ social media influencers' },
  { title: 'Tailored Campaigns', desc: "Brand's vision brought to life through customized influencer campaigns" },
  { title: 'Quality at Its Core', desc: 'We prioritize delivering superior quality content curated by creative minds' },
  { title: 'Strategic Excellence', desc: 'Dedicated team crafts comprehensive strategy for campaign success' },
  { title: 'Veteran Expertise', desc: 'Over 8+ years of dedicated service in impactful marketing campaigns' },
  { title: 'Trusted by Brands', desc: 'Over 1200+ leading brands place trust in us for marketing solutions' },
  { title: 'Elite Leadership', desc: 'Team of IIT, IIM, NIT, and ISB alumni guiding brands to prime positioning' },
  { title: 'Data-Driven Insights', desc: 'Transforming brands through data-driven influencer marketing' },
];

const WhyChooseUs = () => {
  const whyChooseUs = whyChooseUsData;
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-12"
          >
            Why Choose India's Top <span className="text-brand-blue">Influencer Marketing</span> Agency?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center text-sm font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Platform */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-14"
          >
            Why We Are the Best <span className="text-brand-blue">Influencer Marketing</span> Platform in India
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {platformFeatures.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <h4 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
