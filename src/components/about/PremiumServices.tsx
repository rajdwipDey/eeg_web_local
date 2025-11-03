'use client';

export default function PremiumServices() {
  return (
    <section className="py-20 bg-[#F8F8F8] dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mb-6">
            <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
              PREMIUM SERVICES
            </span>
            <span className="text-4xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
              Our Services <b className="font-semibold">Make Your <br /> Business Secure</b>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[
            { title: 'Effective MRI', description: 'Consectetur adipiscing elit.', img: 'img/ab1.jpg' },
            { title: 'MRI Safety Warning', description: 'Consectetur adipiscing elit.', img: 'img/ab2.jpg' },
            { title: 'Healthcare Staff Safe', description: 'Consectetur adipiscing elit.', img: 'img/ab3.jpg' },
          ].map((service, index) => (
            <div
              key={index}
              className="relative min-h-[400px] overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.img}')` }}
              ></div>

              <div className="absolute p-10 bottom-0 left-0 w-full text-center space-y-3 text-white bg-gradient-to-b from-transparent via-black/50 to-black transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-black/60 group-hover:to-black z-10">
                <h2 className="w-full text-2xl font-semibold transform transition-transform duration-300 group-hover:-translate-y-1">
                  {service.title}
                </h2>
                <p className="transform transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
