import { Link } from 'react-router-dom'
import { ArrowRight, Play, Target, Clock, Award, Zap, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Java'ni 0 dan O'rganing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            6 oy ichida Junior Backend Developer bo'ling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
            >
              <Play size={20} />
              <span>Boshlash</span>
            </Link>
            <Link
              to="/practice"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
            >
              <Play size={20} />
              <span>Amaliyot</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={<Clock size={32} />} title="6 oy" subtitle="O'qish muddati" />
            <StatCard icon={<Target size={32} />} title="50+" subtitle="Haftalik masalalar" />
            <StatCard icon={<Award size={32} />} title="10+" subtitle="Real loyihalar" />
            <StatCard icon={<Zap size={32} />} title="Junior" subtitle="Darajaga erishish" />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">O'qish Roadmapi</h2>
          <div className="space-y-6">
            <RoadmapStep
              number="1"
              title="Programming Fundamentals"
              duration="2-4 hafta"
              topics={['Java nima?', 'JDK, JVM, JRE', 'Variables', 'Data types', 'Operators', 'if/else', 'Loops', 'Methods', 'Arrays']}
              projects={['Calculator', 'Quiz app', 'Number guessing game']}
            />
            <RoadmapStep
              number="2"
              title="OOP (Object Oriented Programming)"
              duration="3-5 hafta"
              topics={['Class va Object', 'Constructor', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Interface']}
              projects={['Student Management System', 'Library System', 'Bank System']}
            />
            <RoadmapStep
              number="3"
              title="Collections & Advanced Java"
              duration="2-4 hafta"
              topics={['ArrayList', 'LinkedList', 'HashMap', 'HashSet', 'Generics', 'Exception handling', 'Streams API', 'Lambda']}
              projects={['Todo app', 'File manager', 'Contact book']}
            />
            <RoadmapStep
              number="4"
              title="Database (SQL + JDBC)"
              duration="2 hafta"
              topics={['SQL basics', 'CRUD', 'MySQL/PostgreSQL', 'JDBC']}
              projects={['Student DB System', 'Expense Tracker']}
            />
            <RoadmapStep
              number="5"
              title="Spring Framework"
              duration="1-2 oy"
              topics={['Spring Core', 'Spring Boot', 'REST API', 'Dependency Injection', 'Hibernate/JPA', 'Security', 'JWT']}
              projects={['Blog API', 'E-commerce backend', 'Auth system']}
            />
            <RoadmapStep
              number="6"
              title="Real Projects"
              duration="2-4 hafta"
              topics={['Portfolio uchun real loyihalar']}
              projects={['Telegram clone backend', 'Online shop backend', 'Task management API', 'Booking system']}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bugun Boshlang!</h2>
          <p className="text-xl mb-8 text-orange-100">
            Har kuni 4-6 soat o'qishingiz bilan 6 oy ichida Junior Backend Developer bo'lishingiz mumkin
          </p>
          <Link
            to="/courses"
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all inline-flex items-center space-x-2"
          >
            <span>Boshlash</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function StatCard({ icon, title, subtitle }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3 text-blue-600">{icon}</div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{title}</div>
      <div className="text-gray-600">{subtitle}</div>
    </div>
  )
}

function RoadmapStep({ number, title, duration, topics, projects }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">{duration}</span>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mavzular:</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Loyihalar:</h4>
            <div className="flex flex-wrap gap-2">
              {projects.map((project, index) => (
                <span key={index} className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
