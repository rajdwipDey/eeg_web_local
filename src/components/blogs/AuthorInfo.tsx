import Image from 'next/image'

interface Author {
  name: string
  image: string
  title?: string
}

interface AuthorInfoProps {
  author: Author
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={author.image}
        alt={author.name}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-[#005d90] dark:text-white text-sm">
          {author.name}
        </p>
        {author.title && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {author.title}
          </p>
        )}
      </div>
    </div>
  )
}
