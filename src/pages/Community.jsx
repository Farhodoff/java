import { useState } from 'react'
import { Users, MessageSquare, ThumbsUp, Clock, Send, Search, User } from 'lucide-react'

export default function Community() {
  const [activeTab, setActiveTab] = useState('forum')
  const [newPost, setNewPost] = useState('')

  const forumPosts = [
    {
      id: 1,
      author: 'JavaMaster',
      avatar: 'JM',
      title: 'Spring Boot\'da Security qanday ishlaydi?',
      content: 'Spring Security\'ni tushunishda qiyinchilik bo\'lyapti. JWT implementation\'i haqida tushuntira oladigan odam bormi?',
      likes: 24,
      comments: 8,
      time: '2 soat oldin',
      category: 'Spring Boot'
    },
    {
      id: 2,
      author: 'CodeNinja',
      avatar: 'CN',
      title: 'HashMap vs LinkedHashMap - qaysisini ishlatish kerak?',
      content: 'Project\'da HashMap ishlatyapman, lekin order muhim. LinkedHashMap\'ga o\'tishim kerakmi?',
      likes: 18,
      comments: 5,
      time: '5 soat oldin',
      category: 'Java Core'
    },
    {
      id: 3,
      author: 'BackendDev',
      avatar: 'BD',
      title: 'JPA OneToMany relationship\'ni to\'g\'ri qanday yozish kerak?',
      content: 'User va Post entity\'lari orasidagi OneToMany relationship\'ni qurishda xatolik bo\'lyapti. Kode yordam bera olasizmi?',
      likes: 15,
      comments: 3,
      time: '1 kun oldin',
      category: 'Database'
    },
    {
      id: 4,
      author: 'NewbieCoder',
      avatar: 'NC',
      title: 'OOP concepts\'ni qanday o\'rganish kerak?',
      content: 'OOP\'ni o\'rganishni boshladim, lekin Polymorphism va Abstraction\'ni tushunish qiyin. Tavsiya bering.',
      likes: 32,
      comments: 12,
      time: '2 kun oldin',
      category: 'OOP'
    },
    {
      id: 5,
      author: 'SpringLearner',
      avatar: 'SL',
      title: '@Transactional annotation\'ni qachon ishlatish kerak?',
      content: 'Service layer\'da @Transactional ishlatyapman, lekin qachon va qayerda ishlatish kerakligini tushunmayapman.',
      likes: 21,
      comments: 7,
      time: '3 kun oldin',
      category: 'Spring Boot'
    },
    {
      id: 6,
      author: 'AlgoFan',
      avatar: 'AF',
      title: 'Binary Search vs Linear Search - qaysi tezroq?',
      content: 'Sorted array\'da qidirish uchun qaysi algoritmni ishlatish yaxshiroq? Performance comparison kerak.',
      likes: 28,
      comments: 9,
      time: '4 kun oldin',
      category: 'Algorithms'
    },
    {
      id: 7,
      author: 'DBExpert',
      avatar: 'DE',
      title: 'SQL JOIN turlari o\'rtasidagi farq nima?',
      content: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN o\'rtasidagi farqni misollar bilan tushuntiring.',
      likes: 35,
      comments: 11,
      time: '5 kun oldin',
      category: 'SQL'
    },
    {
      id: 8,
      author: 'MicroservicesDev',
      avatar: 'MD',
      title: 'Microservices architecture\'ni qanday boshlash kerak?',
      content: 'Monolith dan microservices\'ga o\'tishni rejalashtiryapman. Qanday tools va framework\'lar kerak?',
      likes: 42,
      comments: 15,
      time: '1 hafta oldin',
      category: 'Architecture'
    },
  ]

  const mentors = [
    {
      id: 1,
      name: 'Ali Karimov',
      role: 'Senior Java Developer',
      company: 'Google',
      experience: '8 yil',
      rating: 4.9,
      students: 150,
      avatar: 'AK',
      specialties: ['Spring Boot', 'Microservices', 'System Design']
    },
    {
      id: 2,
      name: 'Nilufar Rahimova',
      role: 'Java Team Lead',
      company: 'Uber',
      experience: '6 yil',
      rating: 4.8,
      students: 120,
      avatar: 'NR',
      specialties: ['Java Core', 'OOP', 'Algorithms']
    },
    {
      id: 3,
      name: 'Jamshid Toshmatov',
      role: 'Backend Architect',
      company: 'Amazon',
      experience: '10 yil',
      rating: 5.0,
      students: 200,
      avatar: 'JT',
      specialties: ['System Design', 'Database', 'Performance']
    },
    {
      id: 4,
      name: 'Dilnoza Saidova',
      role: 'Senior Software Engineer',
      company: 'Microsoft',
      experience: '7 yil',
      rating: 4.9,
      students: 180,
      avatar: 'DS',
      specialties: ['Spring Security', 'JWT', 'OAuth2']
    },
    {
      id: 5,
      name: 'Bekzod Nazarov',
      role: 'Full Stack Developer',
      company: 'Netflix',
      experience: '5 yil',
      rating: 4.7,
      students: 95,
      avatar: 'BN',
      specialties: ['React', 'Spring Boot', 'REST API']
    },
    {
      id: 6,
      name: 'Gulnora Karimova',
      role: 'Java Consultant',
      company: 'Freelance',
      experience: '12 yil',
      rating: 4.9,
      students: 250,
      avatar: 'GK',
      specialties: ['Java Performance', 'JVM Tuning', 'Concurrency']
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Jamiyat</h1>
        
        {/* Tab Selector */}
        <div className="flex space-x-4 mb-8">
          <TabButton
            active={activeTab === 'forum'}
            onClick={() => setActiveTab('forum')}
            label='Forum'
            icon={<MessageSquare size={20} />}
          />
          <TabButton
            active={activeTab === 'mentors'}
            onClick={() => setActiveTab('mentors')}
            label='Mentorlar'
            icon={<Users size={20} />}
          />
        </div>

        {activeTab === 'forum' ? (
          <ForumSection posts={forumPosts} newPost={newPost} setNewPost={setNewPost} />
        ) : (
          <MentorsSection mentors={mentors} />
        )}
      </div>
    </div>
  )
}

function TabButton({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function ForumSection({ posts, newPost, setNewPost }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* New Post */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Yangi savol yozish</h2>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Savolingizni shu yerga yozing..."
            className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center space-x-2">
              <Send size={18} />
              <span>Yuborish</span>
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
            <Search size={20} className="text-blue-600" />
            <span>Qidirish</span>
          </h3>
          <input
            type="text"
            placeholder="Savol qidirish..."
            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-gray-800 dark:text-white mb-4">Mashhur kategoriyalar</h3>
          <div className="space-y-2">
            <CategoryBadge label="Java Core" count={45} color="blue" />
            <CategoryBadge label="Spring Boot" count={32} color="green" />
            <CategoryBadge label="OOP" count={28} color="purple" />
            <CategoryBadge label="Database" count={21} color="orange" />
            <CategoryBadge label="Algorithms" count={18} color="red" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="font-bold mb-2">Mentor bo\'lishni xohlaysizmi?</h3>
          <p className="text-blue-100 text-sm mb-4">
            Boshqa o\'quvchilarga yordam bering va XP yig\'ing
          </p>
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            Ariza yuborish
          </button>
        </div>
      </div>
    </div>
  )
}

function PostCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
          {post.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold text-gray-800 dark:text-white">{post.author}</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.time}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{post.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <ThumbsUp size={18} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <MessageSquare size={18} />
                <span>{post.comments}</span>
              </button>
            </div>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CategoryBadge({ label, count, color }) {
  const colors = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  }
  
  return (
    <div className={`flex items-center justify-between p-2 rounded-lg ${colors[color]} cursor-pointer hover:opacity-80 transition-all`}>
      <span className="font-medium">{label}</span>
      <span className="text-sm opacity-75">{count}</span>
    </div>
  )
}

function MentorsSection({ mentors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  )
}

function MentorCard({ mentor }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
          {mentor.avatar}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 dark:text-white">{mentor.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.role}</p>
          <p className="text-sm text-blue-600 dark:text-blue-400">{mentor.company}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Tajriba:</span>
          <span className="font-medium text-gray-800 dark:text-white">{mentor.experience}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Reyting:</span>
          <span className="font-medium text-yellow-600">⭐ {mentor.rating}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">O\'quvchilar:</span>
          <span className="font-medium text-gray-800 dark:text-white">{mentor.students}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Specialty:</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.specialties.map((specialty, index) => (
            <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
        <User size={18} />
        <span>Bog\'lanish</span>
      </button>
    </div>
  )
}
