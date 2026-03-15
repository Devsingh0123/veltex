import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
  {
    q: 'Q1. What is influencer marketing?',
    a: 'Influencer marketing is a form of social media marketing involving endorsements and product placements from influencers — people and organizations who have a purported expert level of knowledge or social influence in their field. Influencers leverage their credibility to promote brands and products to their audiences.',
  },
  {
    q: 'Q2. Who are Influencers?',
    a: 'Influencers are individuals who have built a reputation for their knowledge and expertise on certain topics. They make regular posts about those topics on their preferred social media channels and generate large followings of enthusiastic, engaged people who pay close attention to their views.',
  },
  {
    q: 'Q3. How Successful is Influencer Marketing?',
    a: 'Influencer marketing is incredibly successful, with businesses earning an average of $5.20 for every $1 spent. 89% of marketers say ROI from influencer marketing is comparable to or better than other marketing channels. The industry is expected to grow to $21.1 billion.',
  },
  {
    q: 'Q4. What is Influencer Marketing Strategy?',
    a: 'An influencer marketing strategy involves identifying the right influencers for your brand, setting clear campaign goals, creating authentic content, and measuring results. It includes audience analysis, platform selection, content planning, and performance tracking to ensure maximum ROI.',
  },
  {
    q: 'Q5. How Much is Influencer Marketing Effective?',
    a: '93% of marketers have used influencer marketing in their campaigns. Influencer marketing campaigns earn $6.50 for every dollar spent. 49% of consumers depend on influencer recommendations for their purchase decisions, making it one of the most effective marketing strategies.',
  },
  {
    q: 'Q6. Where are Influencer Marketing Campaigns Executed?',
    a: 'Influencer marketing campaigns are primarily executed on social media platforms including Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Facebook, and Snapchat. The choice of platform depends on the target audience, campaign objectives, and the type of content being created.',
  },
  {
    q: 'Q7. How is influencer marketing different from digital marketing?',
    a: 'While digital marketing encompasses all online marketing efforts (SEO, PPC, email marketing, etc.), influencer marketing specifically leverages the trust and reach of individual content creators. It focuses on authentic endorsements rather than direct brand advertising, creating more organic and relatable content.',
  },
  {
    q: 'Q8. What are the benefits of influencer marketing?',
    a: 'Key benefits include increased brand awareness, authentic content creation, targeted audience reach, improved trust and credibility, higher engagement rates, better ROI compared to traditional advertising, SEO benefits, and access to new markets through the influencer\'s established community.',
  },
  {
    q: 'Q9. What Business Goals Can be Achieved Through Influencer Marketing?',
    a: 'Influencer marketing can help achieve various business goals including brand awareness, lead generation, sales and conversions, website traffic, social media growth, content creation, product launches, reputation management, and customer loyalty building.',
  },
  {
    q: 'Q10. How Much Does Influencer Marketing Cost?',
    a: 'Costs vary widely based on the influencer\'s following, engagement rate, platform, content type, and campaign scope. Nano-influencers (1K-10K followers) may charge ₹5,000-₹15,000 per post, while mega-influencers and celebrities can charge ₹5,00,000+ per collaboration. Custom campaigns are tailored to fit various budgets.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                style={isOpen ? { borderColor: 'var(--color-brand-blue)' } : {}}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[0.95rem] font-bold text-gray-900 pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <FiChevronDown size={20} className={isOpen ? 'text-brand-blue' : 'text-gray-400'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
