import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavItem from '../molecules/NavItem';

export const Navbar = () => {
  const { url } = usePage();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/struktural', label: 'Struktural' },
    { href: '/event', label: 'Event' },
    { href: '/artikel', label: 'Artikel' },
    { href: '/kotak-saran', label: 'Kotak Saran' },
  ];

  return (
    <nav className="bg-white py-0 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img className="h-24 w-auto" src="/assets/logo.png" alt="OSS Bhakta" />
            <h1 className="ml-2 text-xl font-bold text-gray-800">OSS Bhakta</h1>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavItem 
                key={item.href} 
                href={item.href} 
                active={url === item.href || (item.href !== '/' && url.startsWith(item.href))}
              >
                {item.label}
              </NavItem>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};