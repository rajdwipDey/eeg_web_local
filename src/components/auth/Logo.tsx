import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  width?: number;
  height?: number;
  href?: string;
  className?: string;
}

export default function Logo({ 
  width = 200, 
  height = 60, 
  href = '/',
  className = ''
}: LogoProps) {
  return (
    <Link 
      href={href} 
      className="inline-block"
      aria-label="Go to homepage"
    >
      <Image
        src="/img/logo-color.png"
        alt="Aegys Logo"
        width={width}
        height={height}
        className={`w-[200px] object-contain ${className}`}
        priority
      />
    </Link>
  );
}