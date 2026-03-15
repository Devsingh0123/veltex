import { motion } from 'framer-motion';
import { FiShield, FiTarget, FiTrendingUp } from 'react-icons/fi';

const cards = [
  {
    icon: <FiShield size={32} className="text-brand-blue" />,
    title: 'Build Trust:',
    desc: "Utilize the trusted relationship between influencers and their followers to position your product superior.",
  },
  {
    icon: <FiTarget size={32} className="text-brand-blue" />,
    title: 'Attract, Engage, and Convert:',
    desc: "We help businesses to attract, engage, and convert their potential customers by increasing their awareness, leads, and sales through organic engagement via creator-generated content.",
  },
  {
    icon: <FiTrendingUp size={32} className="text-brand-blue" />,
    title: 'Influencing Buying Decision:',
    desc: "Hence, helping in inspiring their decision to buy our client's product.",
  },
];

const HowWeHelp = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-4"
        >
          How Our Influencer Marketing Company Helps Brands?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-[0.95rem] leading-relaxed max-w-3xl mb-12"
        >
          Leveraging the talents of professional social media influencers and content creators, our influencer marketing experts collaborate with visionary strategists to develop imaginative, distinctive content that boasts exceptional shareability and engagement. Opt for the best influencer marketing services to elevate your brand's presence!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
