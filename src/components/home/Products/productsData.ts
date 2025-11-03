export interface Product {
    id: number;
    name: string;
    image: string;
    label: string;
    labelColor: string;
    price: string;
    oldPrice?: string;
    rating: number;
    stock: string;
    extra: string;
    detailLink: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "TechGate Auto",
      image: "/img/ab1.jpg",
      label: "FEATURED",
      labelColor: "bg-[#42b3e5]",
      price: "$2,499",
      oldPrice: "$2,999",
      rating: 4.9,
      stock: "In Stock",
      extra: "Free Shipping",
      detailLink: "/products/2",
    },
    {
      id: 2,
      name: "HD Security System",
      image: "/img/ab2.jpg",
      label: "NEW",
      labelColor: "bg-green-500",
      price: "$1,899",
      rating: 4.7,
      stock: "In Stock",
      extra: "Installation Included",
      detailLink: "/products/2",
    },
    {
      id: 3,
      name: "Smart Access Control",
      image: "/img/ab3.jpg",
      label: "POPULAR",
      labelColor: "bg-orange-500",
      price: "$3,299",
      rating: 4.8,
      stock: "2-3 Weeks",
      extra: "Custom Installation",
      detailLink: "/products/2",
    },
    {
      id: 4,
      name: "Fire Safety System",
      image: "/img/ab4.jpg",
      label: "ESSENTIAL",
      labelColor: "bg-red-500",
      price: "$4,599",
      rating: 4.6,
      stock: "In Stock",
      extra: "Professional Setup",
      detailLink: "/products/2",
    },
  ];
  