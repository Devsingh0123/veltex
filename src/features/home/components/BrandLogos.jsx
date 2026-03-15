const brands = [
  'Baidyanath', 'Carnival Magic', 'Casio', 'Chinese Wok', 'Facebook',
  'GNC', 'Google', 'Grab', 'Sony', 'Ajmal', 'Kapiva', 'Saffola',
  'BeYoung', 'ReEquil', 'iKonic', 'Shoppers Stop', 'Yamaha',
];

const BrandLogos = () => {
  return (
    <section className="relative overflow-hidden py-4" style={{ background: 'linear-gradient(90deg, var(--color-brand-blue) 0%, var(--color-brand-green) 100%)' }}>
      <div className="brand-ticker flex items-center gap-12 whitespace-nowrap">
        {[...brands, ...brands, ...brands].map((brand, idx) => (
          <span
            key={idx}
            className="text-white/90 text-lg font-bold tracking-wide flex-shrink-0 px-2"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
