import Image from "next/image";

interface GalleryItemProps {
  item: {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
    badgeColor: string;
    type: "image" | "video";
    duration?: string;
  };
  onClick: () => void;
}

export default function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={onClick}
    >
      <Image
        src={item.src}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
          <p className="text-gray-200 text-sm">{item.description}</p>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="text-white px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.category}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            {item.type === "video" ? (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Video Duration */}
      {item.duration && (
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {item.duration}
        </div>
      )}
    </div>
  );
}
