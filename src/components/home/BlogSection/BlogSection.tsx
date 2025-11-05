"use client";

import Image from "next/image";

const blogPosts = [
  {
    title: "Ensuring Safety and Accuracy in MRI Scanning: What You Need to Know",
    date: "Mar 16, 2025",
    category: "MRI scanning",
    image: "/img/blog-1.jpg",
    author: {
      name: "Michael Foster",
      role: "Chief Medical Officer",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    excerpt: "MRI scanning is a vital diagnostic tool that relies on powerful magnets and advanced imaging technology to provide detailed views of the body.",
  },
  {
    title: "Understanding Your Head MRI Report: A Patient’s Guide",
    date: "Mar 10, 2025",
    category: "Sales",
    image: "/img/blog-2.jpg",
    author: {
      name: "Lindsay Walton",
      role: "Chief Nursing Officer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    excerpt: "A head MRI provides detailed images of the brain, skull, and surrounding tissues to help diagnose conditions like tumors, strokes, or infections.",
  },
  {
    title: "Decoding Your MRI: Doctor’s Detailed Explanation",
    date: "Feb 12, 2025",
    category: "Business",
    image: "/img/blog-3.jpg",
    author: {
      name: "Tom Cook",
      role: "Anesthesiologist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    excerpt: "A head MRI provides critical insights into brain structure and function, but the medical terminology can be overwhelming.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-14">
      <div className="container mx-auto">
        <div>
          <h1 className="mb-6">
            <span className="text-[#102030] dark:text-[#42b3e5] text-sm font-medium uppercase block mb-4">
              our blog
            </span>
            <span className="text-4xl inline-block font-light leading-normal text-[#005d90] dark:text-white">
              Latest <b className="font-semibold">Articles</b>
            </span>
          </h1>
        </div>

        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="flex max-w-xl flex-col items-start justify-between">
              <div className="h-60 w-full mb-4 relative rounded-t-3xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 duration-200 dark:text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 ml-auto">
                {/* <Image
                  src={post?.author?.avatar}
                  alt={post.author.name}
                  className="rounded-full bg-gray-50"
                  width={40}
                  height={40}
                /> */}
                <div className="text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    <a href="#">
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
