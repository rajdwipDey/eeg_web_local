"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { blogPosts, categories, recentPosts, popularTags } from '@/src/dummyData/blogData'
import PageHeader from '@/src/components/common/PageHeader'

export default function BlogDetail() {
    const params = useParams()
    const slug = params.slug as string

    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return <BlogNotFound />
    }

    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3)

    if (relatedPosts.length < 3) {
        const additionalPosts = blogPosts
            .filter(p => p.id !== post.id && !relatedPosts.includes(p))
            .slice(0, 3 - relatedPosts.length)
        relatedPosts.push(...additionalPosts)
    }

    return (
        <>
            <PageHeader
                title="Blogs Detail"
                backgroundImage="/img/ab1.jpg"
                scrollTargetId="#next-section"
            />

            {/* Breadcrumb Navigation */}
            <section className="py-6 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#42b3e5] dark:text-gray-400 dark:hover:text-white transition-colors duration-300">
                                    <svg className="w-3 h-3 mr-2.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <Link href="/blogs" className="ml-1 text-sm font-medium text-gray-700 hover:text-[#42b3e5] dark:text-gray-400 dark:hover:text-white transition-colors duration-300">
                                        Blog
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 line-clamp-1">
                                        {post.title}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Blog Detail Content */}
            <section id="next-section" className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                                {/* Featured Image */}
                                <div className="relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={1200}
                                        height={600}
                                        className="w-full h-96 object-cover"
                                    />
                                    {post.featured && (
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-[#005d90] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Article Content */}
                                <div className="p-8 lg:p-12">
                                    {/* Article Meta */}
                                    <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-medium" style={{ color: post.categoryColor }}>
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                                            </svg>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Article Title */}
                                    <h1 className="text-4xl lg:text-5xl font-bold text-[#005d90] dark:text-white mb-6 leading-tight">
                                        {post.title}
                                    </h1>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                                        <Image
                                            src={post.author.image}
                                            alt={post.author.name}
                                            width={60}
                                            height={60}
                                            className="w-15 h-15 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-[#005d90] dark:text-white text-lg">
                                                {post.author.name}
                                            </h3>
                                            {post.author.title && (
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {post.author.title}
                                                </p>
                                            )}
                                            {post.author.experience && (
                                                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                                    {post.author.experience}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Social Share Buttons */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                                            Share this article:
                                        </span>
                                        <div className="flex items-center gap-3">
                                            <a href="#" className="w-10 h-10 bg-[#1877f2] text-white rounded-full flex items-center justify-center hover:bg-[#166fe5] transition-colors duration-300">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:bg-[#006396] transition-colors duration-300">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="w-10 h-10 bg-[#25d366] text-white rounded-full flex items-center justify-center hover:bg-[#20ba5a] transition-colors duration-300">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Article Content */}
                                    <BlogContent post={post} />

                                    {/* Article Tags */}
                                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-gray-600 dark:text-gray-400 font-medium mr-2">
                                                Tags:
                                            </span>
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#42b3e5]/10 text-[#42b3e5] px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-[#42b3e5]/20 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </section>

            <RelatedPostsSection relatedPosts={relatedPosts} />
        </>
    )
}

function BlogContent({ post }: { post: any }) {
    if (post.content === 'full') {
        return (
            <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Magnetic Resonance Imaging (MRI) technology has revolutionized medical diagnostics, but it also presents unique safety challenges that healthcare facilities must address comprehensively. This guide provides essential insights into the latest MRI safety protocols for 2025, helping healthcare professionals maintain the highest standards of patient and staff safety.
                </p>

                <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                    Understanding MRI Safety Zones
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The American College of Radiology (ACR) has established a four-zone classification system that forms the foundation of MRI safety protocols. Understanding these zones is crucial for implementing effective safety measures:
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold text-[#005d90] dark:text-white mb-4">
                        Zone Classifications:
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { num: '1', title: 'Zone I:', desc: 'General public areas with no MRI-related restrictions' },
                            { num: '2', title: 'Zone II:', desc: 'Interface between public and restricted areas where initial patient screening occurs' },
                            { num: '3', title: 'Zone III:', desc: 'Restricted access area where only MRI personnel and screened individuals are allowed' },
                            { num: '4', title: 'Zone IV:', desc: 'The MRI scanner room itself, where the magnetic field is always present' }
                        ].map((zone) => (
                            <li key={zone.num} className="flex items-start gap-3">
                                <span className="w-8 h-8 bg-[#42b3e5] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                                    {zone.num}
                                </span>
                                <div>
                                    <strong className="text-[#005d90] dark:text-white">{zone.title}</strong>
                                    <span className="text-gray-700 dark:text-gray-300"> {zone.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                    Essential Safety Protocols
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Implementing comprehensive safety protocols requires a multi-layered approach that addresses both technological solutions and human factors. Here are the key components of an effective MRI safety program:
                </p>

                <h3 className="text-2xl font-semibold text-[#005d90] dark:text-white mt-8 mb-4">
                    1. Metal Detection Systems
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Advanced metal detection technology, such as TechGate Auto systems, provides automated screening capabilities that significantly reduce the risk of ferromagnetic objects entering the MRI environment. These systems offer:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Continuous monitoring of Zone III and Zone IV entrances</li>
                    <li>Automated alerts for unauthorized metal objects</li>
                    <li>Integration with facility access control systems</li>
                    <li>Detailed logging and reporting capabilities</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#005d90] dark:text-white mt-8 mb-4">
                    2. Staff Training and Certification
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Regular training programs ensure that all personnel understand their roles in maintaining MRI safety. Training should cover:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    <li>Zone-specific access protocols and responsibilities</li>
                    <li>Emergency procedures and quench protocols</li>
                    <li>Patient screening techniques and documentation</li>
                    <li>Recognition of contraindicated devices and implants</li>
                </ul>

                <div className="bg-[#42b3e5]/10 border-l-4 border-[#42b3e5] p-6 my-8">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#42b3e5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className="font-semibold text-[#005d90] dark:text-white mb-2">
                                Important Note
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                The implementation of automated safety systems like TechGate Auto doesn't replace the need for human vigilance and proper training. These technologies work best when combined with well-trained staff and established protocols.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                    2025 Updates and Regulatory Changes
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The healthcare industry continues to evolve, and MRI safety protocols must adapt to new challenges and technologies. Key updates for 2025 include:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                        { title: 'Enhanced Screening Protocols', desc: 'Updated guidelines for screening patients with newer implant technologies and medical devices.' },
                        { title: 'Digital Documentation', desc: 'Mandatory electronic record-keeping for all safety screenings and incident reports.' },
                        { title: 'Automated Monitoring', desc: 'Increased emphasis on automated safety systems and continuous monitoring technologies.' },
                        { title: 'Emergency Preparedness', desc: 'Enhanced emergency response protocols and regular drill requirements.' }
                    ].map((update, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                            <h4 className="font-semibold text-[#005d90] dark:text-white mb-3">
                                {update.title}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {update.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                    Conclusion
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    MRI safety is an ongoing commitment that requires the integration of advanced technology, comprehensive training, and strict adherence to established protocols. By implementing the guidelines outlined in this guide and staying current with regulatory updates, healthcare facilities can ensure the highest levels of safety for both patients and staff.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    For more information about implementing comprehensive MRI safety solutions, including TechGate Auto systems, contact our team of specialists who can help design a customized safety program for your facility.
                </p>
            </div>
        )
    }

    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {post.description}
            </p>

            <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                Key Insights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                This article explores important aspects of {post.category.toLowerCase()} in the healthcare industry, focusing on practical applications and best practices that can help improve safety and efficiency in medical facilities.
            </p>

            <h3 className="text-2xl font-semibold text-[#005d90] dark:text-white mt-8 mb-4">
                Industry Impact
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The insights shared in this article are based on current industry standards and emerging trends that are shaping the future of medical imaging and patient safety protocols.
            </p>

            <div className="bg-[#42b3e5]/10 border-l-4 border-[#42b3e5] p-6 my-8">
                <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#42b3e5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                        <h4 className="font-semibold text-[#005d90] dark:text-white mb-2">
                            Expert Insight
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Understanding and implementing these practices can significantly improve patient outcomes and operational efficiency in healthcare facilities.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mt-12 mb-6">
                Conclusion
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Staying informed about the latest developments in {post.category.toLowerCase()} is essential for healthcare professionals committed to providing the best possible care and maintaining the highest safety standards.
            </p>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="lg:w-1/3">
            <div className="space-y-8 sticky top-10">
                {/* Search Widget */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#005d90] dark:text-white mb-4">
                        Search Articles
                    </h3>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#42b3e5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                        />
                        <svg
                            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#005d90] dark:text-white mb-4">
                        Categories
                    </h3>
                    <div className="space-y-3">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/blogs?category=${category.slug}`}
                                className="flex items-center justify-between text-gray-600 dark:text-gray-300 hover:text-[#42b3e5] transition-colors duration-300"
                            >
                                <span>{category.name}</span>
                                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                                    {category.count}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#005d90] dark:text-white mb-4">
                        Recent Posts
                    </h3>
                    <div className="space-y-4">
                        {recentPosts.map((post) => (
                            <Link key={post.id} href={`/blogs/${post.slug}`} className="flex gap-3 group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#42b3e5] transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {post.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter Signup Widget */}
                <div className="bg-gradient-to-br from-[#005d90] to-[#42b3e5] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-white/80 mb-4 text-sm">
                        Get the latest MRI safety insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                        />
                        <button className="w-full px-4 py-3 bg-white text-[#005d90] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* Popular Tags Widget */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#005d90] dark:text-white mb-4">
                        Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {popularTags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-[#42b3e5]/10 text-[#42b3e5] px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-[#42b3e5]/20 transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function RelatedPostsSection({ relatedPosts }: { relatedPosts: any[] }) {
    if (relatedPosts.length === 0) return null

    return (
        <section className="py-20 bg-[#F8F8F8] dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#005d90] dark:text-white mb-4">
                        Related Articles
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Discover more insights on MRI safety and healthcare technology
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <Link href={`/blogs/${post.slug}`}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                                    />
                                </Link>
                                <div className="absolute top-4 left-4">
                                    <span
                                        className="text-white px-2 py-1 rounded-full text-xs font-semibold"
                                        style={{ backgroundColor: post.categoryColor }}
                                    >
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <Link href={`/blogs/${post.slug}`}>
                                    <h3 className="text-lg font-bold text-[#005d90] dark:text-white mb-3 group-hover:text-[#42b3e5] transition-colors duration-300 cursor-pointer">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                    {post.description}
                                </p>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-[#6fb43f] hover:text-[#4a7c2a] font-semibold text-sm transition-colors duration-300"
                                >
                                    Read More
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function BlogNotFound() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center">
            <div className="container mx-auto text-center px-4">
                <div className="max-w-2xl mx-auto">
                    {/* 404 Icon */}
                    <div className="mb-8">
                        <svg
                            className="w-32 h-32 mx-auto text-[#42b3e5] opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-6xl font-bold text-[#005d90] dark:text-white mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Blog Post Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                        Sorry, the blog post you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#42b3e5] text-white font-semibold rounded-lg hover:bg-[#3a9fd1] transition-colors duration-300"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            View All Blogs
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-[#005d90] dark:text-white border-2 border-[#005d90] dark:border-gray-600 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                            Go Home
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            You might be interested in:
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.slice(0, 3).map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/blogs?category=${category.slug}`}
                                    className="px-4 py-2 bg-[#42b3e5]/10 text-[#42b3e5] rounded-full text-sm font-medium hover:bg-[#42b3e5]/20 transition-colors duration-300"
                                >
                                    {category.name} Articles
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}