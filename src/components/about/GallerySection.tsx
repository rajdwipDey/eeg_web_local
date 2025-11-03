'use client';

export default function GallerySection() {
  const galleryItems = [
    { id: 1, image: '/img/blog-1.jpg', height: '100vh', iconSize: 'w-12 h-12', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
    { id: 2, image: '/img/blog-2.jpg', height: '50vh', iconSize: 'w-8 h-8' },
    { id: 3, image: '/img/blog-3.jpg', height: '50vh', iconSize: 'w-8 h-8' },
    { id: 4, image: '/img/ab1.jpg', height: '50vh', iconSize: 'w-8 h-8' },
    { id: 5, image: '/img/video-banner.jpg', height: '50vh', iconSize: 'w-8 h-8' },
  ];

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer transition-transform hover:scale-[1.02] relative overflow-hidden group gallery-item ${item.colSpan ? item.colSpan : ''} ${item.rowSpan ? item.rowSpan : ''}`}
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: item.height,
            }}
            data-image={item.image}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg
                className={`${item.iconSize} text-white`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
