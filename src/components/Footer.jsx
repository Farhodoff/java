import { useLocation } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Footer() {
  const location = useLocation()

  if (location.pathname !== '/') {
    return null
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JavaLearn</h3>
            <p className="text-gray-400">
              Java'ni 0 dan Junior Backend Developer darajasigacha o'rganing
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kurslar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Java Basics</li>
              <li>OOP</li>
              <li>Collections</li>
              <li>Database</li>
              <li>Spring Boot</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resurslar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Bog'lanish</h4>
            <div className="flex space-x-4 mb-4">
              <SocialLink icon={<Github size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
              <SocialLink icon={<Mail size={20} />} href="#" />
            </div>
            <ThemeToggle />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JavaLearn. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all"
    >
      {icon}
    </a>
  )
}
