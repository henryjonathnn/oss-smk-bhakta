import React from 'react'

const NavItem = ({ href, text }) => (
  <a
    href={href}
    className="text-gray-700 hover:bg-gray-200 hover:text-slate-950 px-2 py-2 rounded-md duration-500"
  >
    {text}
  </a>
)

const navItems = [
  { href: "#", text: "Home" },
  { href: "#", text: "Sekbid" },
  { href: "#", text: "Event" },
  { href: "#", text: "Artikel" },
  { href: "#", text: "Kotak Saran" }
]

export const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center bg-white">
            <div className="flex-shrink-0">
              <img className="h-28 w-28" src="/assets/logo.png" alt="Workflow" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">OSS Bhakta</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-3 text-base font-bold">
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