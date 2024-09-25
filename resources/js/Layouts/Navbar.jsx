import React from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'

const NavItem = ({ href, text }) => {
  const { url } = usePage()
  const isActive = url.startsWith(href)

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-bold ${
        isActive
          ? 'bg-slate-900 text-white'
          : 'text-gray-900 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      {text}
    </Link>
  )
}

const navItems = [
  { href: "/", text: "Home" },
  { href: "/struktural", text: "Struktural" },
  { href: "/event", text: "Event" },
  { href: "/artikel", text: "Artikel" },
  { href: "/kotak-saran", text: "Kotak Saran" }
]

export const Navbar = () => {
  return (
    <nav className="bg-white py-2 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-28 w-auto" src="/assets/logo.png" alt="OSS Bhakta" />
            </div>
            <h1 className="ml-2 text-xl font-bold text-gray-800">OSS Bhakta</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <NavItem key={index} href={item.href} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}