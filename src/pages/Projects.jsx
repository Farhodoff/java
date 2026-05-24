import { useState } from 'react'
import { Rocket, Clock, Star, ExternalLink, Github } from 'lucide-react'
import { projectsData } from '../data/projects'
import SearchBar from '../components/SearchBar'

export default function Projects() {
  const [level, setLevel] = useState('beginner')
  const [searchQuery, setSearchQuery] = useState('')

  const currentProjects = projectsData[level].filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Loyihalar</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Loyiha qidirish..."
          />
        </div>

        {/* Level Selector */}
        <div className="flex space-x-4 mb-8">
          <LevelButton
            active={level === 'beginner'}
            onClick={() => setLevel('beginner')}
            label='Beginner'
            color='green'
          />
          <LevelButton
            active={level === 'intermediate'}
            onClick={() => setLevel('intermediate')}
            label='Intermediate'
            color='yellow'
          />
          <LevelButton
            active={level === 'advanced'}
            onClick={() => setLevel('advanced')}
            label='Advanced'
            color='red'
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function LevelButton({ active, onClick, label, color }) {
  const colors = {
    green: active ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
    yellow: active ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    red: active ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200',
  }
  
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all ${colors[color]}`}
    >
      {label}
    </button>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Rocket size={24} className="text-white" />
        </div>
        <div className="flex items-center space-x-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="font-semibold">{project.xp} XP</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
        <Clock size={16} />
        <span className="text-sm">{project.duration}</span>
      </div>
      
      <div className="mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">Module: {project.module}</span>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Kerakli skill\'lar:</h4>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
          <span>Boshlash</span>
        </button>
        <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all flex items-center justify-center space-x-2">
          <Github size={16} />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  )
}
