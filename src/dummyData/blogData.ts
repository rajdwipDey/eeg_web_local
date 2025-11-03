export interface Author {
    name: string
    image: string
    title?: string
    experience?: string
  }
  
  export interface Category {
    id: number
    name: string
    count: number
    slug: string
  }
  
  export interface RecentPost {
    id: number
    title: string
    date: string
    image: string
    slug: string
  }
  
  export interface BlogPost {
    id: number
    slug: string
    title: string
    date: string
    readTime: string
    category: string
    categoryColor: string
    description: string
    content?: string
    image: string
    author: Author
    featured?: boolean
    tags: string[]
  }
  
  export interface RelatedPost {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    readTime: string
    category: string
    categoryColor: string
    slug: string
  }
  
  export const categories: Category[] = [
    { id: 1, name: "MRI Safety", count: 12, slug: "mri-safety" },
    { id: 2, name: "Technology", count: 8, slug: "technology" },
    { id: 3, name: "Compliance", count: 6, slug: "compliance" },
    { id: 4, name: "Healthcare", count: 10, slug: "healthcare" },
    { id: 5, name: "Industry News", count: 5, slug: "industry-news" },
  ]
  
  export const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "Understanding MRI Zone Classifications",
      date: "Jan 8, 2025",
      image: "/img/ab1.jpg",
      slug: "understanding-mri-zone-classifications"
    },
    {
      id: 2,
      title: "Metal Detection Best Practices",
      date: "Jan 5, 2025",
      image: "/img/ab2.jpg",
      slug: "metal-detection-best-practices"
    },
    {
      id: 3,
      title: "Patient Safety Protocols Update",
      date: "Jan 3, 2025",
      image: "/img/ab3.jpg",
      slug: "patient-safety-protocols-update"
    },
    {
      id: 4,
      title: "TechGate Auto: Revolutionizing MRI Room Safety",
      date: "Jan 12, 2025",
      image: "/img/blog-2.jpg",
      slug: "techgate-auto-revolutionizing-mri"
    },
  ]
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: "complete-guide-mri-safety-protocols",
      title: "Complete Guide to MRI Safety Protocols in 2025",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "MRI Safety",
      categoryColor: "#42b3e5",
      description: "Discover the latest MRI safety protocols and best practices that every healthcare facility should implement. Learn about TechGate's role in enhancing patient and staff safety in MRI environments.",
      image: "/img/blog-1.jpg",
      author: {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face",
        title: "MRI Safety Specialist & Healthcare Consultant",
        experience: "15+ years experience in MRI safety protocols"
      },
      featured: true,
      tags: ["#MRISafety", "#Healthcare", "#TechGate", "#PatientSafety", "#MedicalImaging"],
      content: "full" 
    },
    {
      id: 2,
      slug: "techgate-auto-revolutionizing-mri",
      title: "TechGate Auto: Revolutionizing MRI Room Safety",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Technology",
      categoryColor: "#6fb43f",
      description: "Learn how TechGate Auto is transforming MRI safety protocols and reducing liability for healthcare facilities.",
      image: "/img/blog-2.jpg",
      author: {
        name: "Mike Chen",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=32&h=32&fit=crop&crop=face",
        title: "Technology Innovation Lead"
      },
      tags: ["#TechGate", "#Innovation", "#MRISafety", "#Technology"],
    },
    {
      id: 3,
      slug: "healthcare-compliance-new-standards",
      title: "Healthcare Compliance: New MRI Safety Standards",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Compliance",
      categoryColor: "#005d90",
      description: "Stay compliant with the latest MRI safety standards and regulations affecting healthcare facilities in 2025.",
      image: "/img/blog-3.jpg",
      author: {
        name: "Lisa Rodriguez",
        image: "/img/user-1.png",
        title: "Compliance Director"
      },
      tags: ["#Compliance", "#Healthcare", "#MRISafety", "#Regulations"],
    },
    {
      id: 4,
      slug: "understanding-mri-zone-classifications",
      title: "Understanding MRI Zone Classifications for Enhanced Safety",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "MRI Safety",
      categoryColor: "#42b3e5",
      description: "Learn about the four MRI safety zones and how proper classification can prevent accidents and ensure patient safety.",
      image: "/img/ab1.jpg",
      author: {
        name: "Dr. Mike Chen",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=32&h=32&fit=crop&crop=face",
        title: "MRI Safety Consultant"
      },
      tags: ["#MRISafety", "#ZoneClassification", "#PatientSafety"],
    },
    {
      id: 5,
      slug: "metal-detection-best-practices",
      title: "Advanced Metal Detection: Best Practices for MRI Facilities",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Technology",
      categoryColor: "#6fb43f",
      description: "Discover the latest metal detection technologies and protocols that are revolutionizing MRI safety standards.",
      image: "/img/ab2.jpg",
      author: {
        name: "Lisa Rodriguez",
        image: "/img/user-1.png",
        title: "Safety Technology Specialist"
      },
      tags: ["#Technology", "#MetalDetection", "#MRISafety"],
    },
    {
      id: 6,
      slug: "patient-safety-protocols-update",
      title: "Patient Safety Protocols: 2025 Updates and Guidelines",
      date: "January 3, 2025",
      readTime: "4 min read",
      category: "Healthcare",
      categoryColor: "#005d90",
      description: "Stay updated with the latest patient safety protocols and guidelines that every MRI facility should implement.",
      image: "/img/ab3.jpg",
      author: {
        name: "Dr. Amanda White",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=32&h=32&fit=crop&crop=face",
        title: "Patient Safety Officer"
      },
      tags: ["#PatientSafety", "#Healthcare", "#Guidelines"],
    },
  ]
  
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug)
  }
  
  export function getRelatedPosts(currentPostId: number, limit: number = 3): BlogPost[] {
    return blogPosts
      .filter(post => post.id !== currentPostId)
      .slice(0, limit)
  }
  
  export function getPostsByCategory(categoryName: string): BlogPost[] {
    return blogPosts.filter(post => post.category === categoryName)
  }
  
  export const popularTags = [
    "#MRISafety",
    "#TechGate",
    "#Healthcare",
    "#PatientSafety",
    "#MedicalImaging",
    "#Compliance",
    "#Innovation",
    "#Technology"
  ]