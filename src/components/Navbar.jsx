import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code, Rocket, MessageSquare, LayoutDashboard, Users, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold text-gray-800">JavaLearn</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon={<LayoutDashboard size={20} />} text="Bosh sahifa" />
            <NavLink to="/courses" icon={<BookOpen size={20} />} text="Kurslar" />
            <NavLink to="/practice" icon={<Code size={20} />} text="Amaliyot" />
            <NavLink to="/projects" icon={<Rocket size={20} />} text="Loyihalar" />
            <NavLink to="/interview" icon={<MessageSquare size={20} />} text="Interview" />
            <NavLink to="/community" icon={<Users size={20} />} text="Jamiyat" />
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            <MobileNavLink to="/" icon={<LayoutDashboard size={20} />} text="Bosh sahifa" />
            <MobileNavLink to="/courses" icon={<BookOpen size={20} />} text="Kurslar" />
            <MobileNavLink to="/practice" icon={<Code size={20} />} text="Amaliyot" />
            <MobileNavLink to="/projects" icon={<Rocket size={20} />} text="Loyihalar" />
            <MobileNavLink to="/interview" icon={<MessageSquare size={20} />} text="Interview" />
            <MobileNavLink to="/community" icon={<Users size={20} />} text="Jamiyat" />
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}

function MobileNavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
      onClick={() => {}}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}
