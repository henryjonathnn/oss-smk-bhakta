import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Home, Users, Calendar, FileText, MessageSquare, ChartBar } from 'lucide-react';
import SidebarItem from '../molecules/SidebarItem';


const Sidebar = () => {
  const { url } = usePage();

  const sidebarItems = [
    { href: '/admin/dashboard', icon: ChartBar, label: 'Dashboard' },
    { href: '/admin/home', icon: Home, label: 'Home' },
    { href: '/admin/struktural', icon: Users, label: 'Data Struktural' },
    { href: '/admin/event', icon: Calendar, label: 'Data Event' },
    { href: '/admin/artikel', icon: FileText, label: 'Data Artikel' },
    { href: '/admin/kotak-saran', icon: MessageSquare, label: 'Kotak Saran' },
  ];

  return (
    <aside className="bg-slate-900 text-white w-64 min-h-screen p-4">
      <div className="flex justify-center items-center mb-1">
        <a href="/">
          <img className="h-28 w-auto mr-4" src="/assets/logo.png" alt="OSS Bhakta" />
        </a>
      </div>
      <div className="flex items-center justify-center mr-10 mb-6">
        <h1 className="text-xl font-bold">OSS Bhakta</h1>
      </div>
      <nav className="space-y-4">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={url === item.href || (item.href !== '/dashboard' && url.startsWith(item.href))}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;