'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { logoutUser } from '@/src/lib/store/slices/authSlice';
import { clearCart } from '@/src/lib/store/slices/cartSlice';

interface ContactInfo {
  phone: { number: string; href: string };
  email: { address: string; href: string };
}

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface AccountMenuItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  isLogout?: boolean;
}

const HEADER_DATA = {
  topBar: {
    contact: {
      phone: { number: '1-(844)-423-4976', href: 'tel:1-844-423-4976' },
      email: { address: 'info@aegysgroup.com', href: 'mailto:info@aegysgroup.com' }
    },
    cta: { text: 'Shop Now', href: '/services' },
    tagline: 'Providing Safety Solutions That Make a Difference',
    social: {
      label: 'Follow Us:',
      links: [
        {
          id: 'facebook',
          name: 'Facebook',
          href: '#',
          icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
        }
      ]
    }
  },
  logo: { src: '/img/logo-color.png', alt: 'Aegys Logo', width: 150, height: 50 },
  navigation: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'products', label: 'Products', href: '/products' },
    { id: 'gallery', label: 'Gallery', href: '/our-work' },
    { id: 'blogs', label: 'Blogs', href: '/blogs' },
    { id: 'contact', label: 'Contact Us', href: '/contact' }
  ],
  accountMenu: [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z M12 15L12 18'
    },
    {
      id: 'profile',
      label: 'Profile',
      href: '/profile-settings',
      icon: 'M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z'
    },
    {
      id: 'addresses',
      label: 'Addresses',
      href: '/addresses',
      icon: 'M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
    },
    {
      id: 'orders',
      label: 'Order History',
      href: '/order-history',
      icon: 'M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19 M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5'
    },
    {
      id: 'security',
      label: 'Security',
      href: '/security',
      icon: 'M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z M12 16V14 M12 8V10.5'
    },
    {
      id: 'logout',
      label: 'Logout',
      href: '/login',
      icon: 'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1',
      isLogout: true
    }
  ]
};

const ICONS = {
  phone: 'M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651M4.00289 5.74561C3.96765 5.12559 4.25823 4.56668 4.69185 4.13552L6.26145 2.57483C7.13596 1.70529 8.61028 1.83992 9.37326 2.85908L10.6342 4.54348C11.2507 5.36691 11.1841 6.49484 10.4775 7.19738L10.1907 7.48257',
  phoneOpacity: 'M18.6763 18.9656C17.0469 19.1175 13.0622 18.9497 8.8154 14.727C4.81076 10.7451 4.09308 7.33231 4.00293 5.74609',
  phoneEnd: 'M16.1007 13.3589C16.1007 13.3589 15.0181 14.4353 12.0631 11.4971C9.10807 8.55886 10.1907 7.48242 10.1907 7.48242',
  email: 'M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z',
  emailArrow: 'M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8',
  account: 'M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20',
  cart: 'M3.74169 20.5545C4.94131 22 7.17402 22 11.6394 22H12.3606C16.826 22 19.0587 22 20.2584 20.5545M3.74169 20.5545C2.54207 19.1091 2.95353 16.9146 3.77645 12.5257C4.36167 9.40452 4.65428 7.84393 5.76518 6.92196M3.74169 20.5545C3.74169 20.5545 3.74169 20.5545 3.74169 20.5545ZM20.2584 20.5545C21.458 19.1091 21.0465 16.9146 20.2236 12.5257C19.6384 9.40452 19.3458 7.84393 18.2349 6.92196M20.2584 20.5545C20.2583 20.5545 20.2584 20.5545 20.2584 20.5545ZM18.2349 6.92196C17.124 6 15.5362 6 12.3606 6H11.6394C8.46386 6 6.87608 6 5.76518 6.92196M18.2349 6.92196C18.2349 6.92196 18.2349 6.92196 18.2349 6.92196ZM5.76518 6.92196C5.76518 6.92196 5.76518 6.92196 5.76518 6.92196Z',
  cartLines: 'M15 11L16 17 M9 11L8 17 M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6'
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (!target.closest('.account-dropdown')) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const toggleAccountDropdown = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleLogout = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    
    try {
      await dispatch(logoutUser()).unwrap();
      dispatch(clearCart());
      setIsAccountDropdownOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleMenuClick = (item: AccountMenuItem, e: React.MouseEvent): void => {
    if (item.isLogout) {
      handleLogout(e);
    } else {
      setIsAccountDropdownOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Header */}
      <div className="top-header py-3 border-b border-gray-200 dark:border-gray-700 transition-colors flex items-center justify-evenly px-10 md:px-20">
        <div className="flex items-start gap-6 w-full">
          <a href={HEADER_DATA.topBar.contact.phone.href} className="flex items-center gap-2 text-sm hover:text-[#6fb43f] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={ICONS.phone} stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {HEADER_DATA.topBar.contact.phone.number}
          </a>
          <a href={HEADER_DATA.topBar.contact.email.href} className="flex items-center gap-2 text-sm hover:text-[#6fb43f] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={ICONS.email} stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {HEADER_DATA.topBar.contact.email.address}
          </a>
        </div>
        <div className="flex items-center gap-2 w-full text-sm">
          <Link href={HEADER_DATA.topBar.cta.href} className="bg-[#6fb43f] text-white px-3 py-1 rounded-lg font-semibold text-xs inline-block hover:bg-[#5fa335] transition-colors">
            {HEADER_DATA.topBar.cta.text}
          </Link>
          <span className="hidden lg:inline">{HEADER_DATA.topBar.tagline}</span>
        </div>
        <div className="w-full flex items-center justify-end gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400 hidden md:inline">{HEADER_DATA.topBar.social.label}</span>
          {HEADER_DATA.topBar.social.links.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="dark:text-gray-400 font-semibold text-[#6fb43f] flex items-center gap-1 hover:text-[#5fa335] transition-colors"
              aria-label={social.name}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className="px-10 md:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src={HEADER_DATA.logo.src}
                alt={HEADER_DATA.logo.alt}
                width={HEADER_DATA.logo.width}
                height={HEADER_DATA.logo.height}
                className="w-[150px] h-auto"
              />
            </Link>
          </div>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
            className="menu-togg p-1 bg-gray-200 dark:bg-gray-600 rounded-sm shadow-2xl my-4 hover:shadow-xl z-50 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7L4 7" stroke="#F89921" strokeWidth="1.5" strokeLinecap="round" />
              <path opacity="0.7" d="M15 12L4 12" stroke="#F89921" strokeWidth="1.5" strokeLinecap="round" />
              <path opacity="0.4" d="M9 17H4" stroke="#F89921" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent shadow-lg md:shadow-none z-40`}>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-2 p-4 md:p-0">
              {HEADER_DATA.navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium py-3 px-4 block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div>
            <ul className="flex items-center gap-2">
              {/* Account Dropdown */}
              <li className="relative account-dropdown">
                <button
                  onClick={toggleAccountDropdown}
                  className="text-sm font-medium py-3 px-1 inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="Account menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.5" cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path opacity="0.5" d={ICONS.account} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Account Dropdown Menu */}
                {isAccountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                    {HEADER_DATA.accountMenu.map((item) => {
                      if (item.isLogout && !isAuthenticated) {
                        return null;
                      }

                      return item.isLogout ? (
                        <button
                          key={item.id}
                          onClick={(e) => handleMenuClick(item, e)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={item.icon} stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span>{item.label}</span>
                        </button>
                      ) : (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => handleMenuClick(item, {} as React.MouseEvent)}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={item.icon} stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>

              {/* Cart */}
              <li>
                <Link
                  href="/cart"
                  className="text-sm font-medium py-3 px-1 inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="Shopping cart"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={ICONS.cart} stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}