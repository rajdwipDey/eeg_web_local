'use client';

export default function NewsletterSubscribe() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1>
            <span className="text-3xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
              Want to Know About Our Offers First? <br />
              <b className="font-semibold">Subscribe to Our Newsletter</b>
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#42b3e5]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent transition-all duration-300 w-full"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#6fb43f] to-[#6fb43f] text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
