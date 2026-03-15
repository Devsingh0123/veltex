import { FiYoutube, FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from '../../assets/VeltexLogo.png';
const Footer = () => {
  const quickLinks = [
    'Influencer Marketing Agency',
    'YouTube Influencer Marketing',
    'Instagram Influencer Marketing',
    'LinkedIn Influencer Marketing',
    'Meme Marketing',
    'Barter Collaborations',
  ];

  const resources = [
    'Our Work', 'Case Studies', 'Creators', 'Blog', 'About Us', 'Contact Us',
  ];

  return (
    <footer className="bg-[#0a0e1a] text-gray-400 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Veltex" className="h-10 w-auto" />

            </a>
            <p className="text-sm leading-relaxed mb-6">
              India's best influencer marketing agency helping brands leverage social media influencers for growth.
            </p>
            <div className="flex gap-3">
              {[FiYoutube, FiInstagram, FiLinkedin, FiTwitter, FiFacebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <FiMail size={16} className="flex-shrink-0 mt-0.5" />
                info@veltex.in
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FiPhone size={16} className="flex-shrink-0 mt-0.5" />
                +91-XXXXXXXXXX
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FiMapPin size={16} className="flex-shrink-0 mt-0.5" />
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Veltex Media Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
