"use client";

export default function SecuritySection() {
  const features = [
    "TechGate",
    "PD240CH Handheld Detector",
    "PD240CH-Z4 Handheld Detector",
    "MSDW – FMD",
    "MetalMag Portal",
    "Automated MRI Room Access Control",
    "Non-Ferromagnetic Detection",
    "Visual Alert System",
  ];

  return (
    <section className="py-20 px-4 md:px-10 lg:px-14">
      <div className="container mx-auto">
        <div className="w-[80%]">
          <h1 className="mb-6">
            <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
              Security and protection
            </span>
            <span className="text-4xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
              Our Technicians are Equipped with the Latest <br />
              <b className="font-semibold">
                Modern Technology and are Available 24/7 <br /> at Your Request
              </b>
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-2/3">
            <img
              src="/img/ab1.jpg"
              alt="Security"
              className="object-cover w-full rounded-3xl"
            />
          </div>

          <div className="w-full md:w-1/3 py-10 text-[20px] space-y-8 font-light relative">
            <p>
              At Aegys Group, we are dedicated to advancing safety standards in the healthcare sector. 
              Specializing in diagnostic imaging and MRI room safety, we partner with global leaders to deliver innovative solutions that protect patients, staff, and equipment.
            </p>
            <p>
              Our commitment to excellence and collaboration ensures that we provide comprehensive safety solutions that make a meaningful impact worldwide.
            </p>

            {/* Wrapper to mimic the overflow trick */}
            <div className="relative md:left-[-50%] left-[-1.8%] md:w-[150%] w-[105%]">
              <ul className="bg-[#6fb43f] p-14 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-3xl dark:bg-gray-950">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span>
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-white">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
