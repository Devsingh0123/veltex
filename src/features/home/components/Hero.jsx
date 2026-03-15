import { motion } from 'framer-motion';
import logo from '../../../assets/VeltexLogo.png';

const Hero = () => {
  const videosCol1 = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  ];
  const videosCol2 = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  ];
  const videosCol3 = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ];
  const videosCol4 = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  ];

  const col1 = [...videosCol1, ...videosCol1];
  const col2 = [...videosCol2, ...videosCol2];
  const col3 = [...videosCol3, ...videosCol3];
  const col4 = [...videosCol4, ...videosCol4];

  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, var(--color-brand-dark) 0%, #003366 40%, #001a33 100%)' }}>
      
      {/* Video Slider — right side */}
      <div className="absolute top-0 right-0 bottom-0 w-[52%] overflow-hidden hidden lg:block">
        <div className="absolute top-0 inset-x-0 h-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, var(--color-brand-dark), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--color-brand-dark), transparent)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-brand-dark), transparent)' }} />

        <div className="h-full w-full flex gap-3 px-3 pr-4">
          {[col1, col2, col3, col4].map((col, ci) => (
            <div key={ci} className="flex-1 min-w-0 overflow-hidden relative">
              <div
                className={ci % 2 === 0 ? 'slider-col-up' : 'slider-col-down'}
                style={{ animationDuration: `${40 + ci * 5}s` }}
              >
                <div className="flex flex-col gap-3">
                  {col.map((src, idx) => (
                    <div key={`${ci}-${idx}`} className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-gray-800/50 flex-shrink-0 relative">
                      <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                      {/* Brand logo badge */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <img src={logo} alt="Veltex" className="w-8 h-8 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Content — left side */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-[45%] py-32 lg:py-0"
        >
          <h1 className="text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight">
            <span className="text-white">Best </span>
            <span className="text-brand-green italic">Influencer Marketing</span>
            <br />
            <span className="text-white">Agency in India</span>
          </h1>

          <p className="mt-6 text-[0.95rem] md:text-[1.05rem] leading-[1.7] text-gray-400 max-w-lg">
            Veltex is the best Influencer marketing agency in India which provides the top influencer marketing platform to help brands / visionary marketers leverage social media influencers' content in marketing and advertising their products/services.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-white text-sm font-bold rounded-md transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-brand-green) 100%)' }}
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile video slider placeholder */}
      <div className="lg:hidden relative w-full h-[350px] overflow-hidden mt-4 mb-8">
        <div className="absolute top-0 inset-x-0 h-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, var(--color-brand-dark), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--color-brand-dark), transparent)' }} />
        <div className="h-full w-full flex gap-2 px-2">
          {[col1, col2, col3, col4].map((col, ci) => (
            <div key={ci} className="flex-1 min-w-0 overflow-hidden">
              <div className={ci % 2 === 0 ? 'slider-col-up' : 'slider-col-down'} style={{ animationDuration: `${35 + ci * 5}s` }}>
                <div className="flex flex-col gap-2">
                  {col.map((src, idx) => (
                    <div key={`m-${ci}-${idx}`} className="w-full aspect-[9/16] rounded-lg overflow-hidden bg-gray-800/50 flex-shrink-0">
                      <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
