import { useState } from 'react'
import { Flame, Trophy, Target, Calendar, TrendingUp, Award, Clock } from 'lucide-react'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'

export default function Dashboard() {
  const [userProgress] = useState({
    xp: 1250,
    level: 5,
    streak: 7,
    completedLessons: 24,
    completedProblems: 45,
    completedProjects: 3,
    totalHours: 48
  })

  const weeklyActivity = [
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 6 },
    { day: 'Fri', hours: 4 },
    { day: 'Sat', hours: 7 },
    { day: 'Sun', hours: 5 },
  ]

  const moduleProgress = [
    { name: 'Module 1 - Basics', progress: 100, color: 'blue' },
    { name: 'Module 2 - OOP', progress: 80, color: 'green' },
    { name: 'Module 3 - Collections', progress: 45, color: 'purple' },
    { name: 'Module 4 - Database', progress: 20, color: 'orange' },
    { name: 'Module 5 - Spring Boot', progress: 0, color: 'red' },
  ]

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Birinchi darsni tugatdingiz', icon: <Award size={24} />, unlocked: true },
    { id: 2, title: 'Code Warrior', description: '10 ta masala yechdingiz', icon: <Trophy size={24} />, unlocked: true },
    { id: 3, title: 'Week Warrior', description: '7 kun ketma-ket o\'qidingiz', icon: <Flame size={24} />, unlocked: true },
    { id: 4, title: 'Project Master', description: 'Birinchi loyihangizni tugatdingiz', icon: <Target size={24} />, unlocked: true },
    { id: 5, title: 'Spring Hero', description: 'Spring Boot kursini tugatdingiz', icon: <Award size={24} />, unlocked: false },
    { id: 6, title: '100 Problems', description: '100 ta masala yechdingiz', icon: <Trophy size={24} />, unlocked: false },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Trophy size={32} className="text-yellow-500" />}
            title={`${userProgress.xp} XP`}
            subtitle={`Level ${userProgress.level}`}
            color="from-yellow-400 to-orange-500"
          />
          <StatCard
            icon={<Flame size={32} className="text-orange-500" />}
            title={`${userProgress.streak} kun`}
            subtitle="Daily streak"
            color="from-orange-400 to-red-500"
          />
          <StatCard
            icon={<Target size={32} className="text-green-500" />}
            title={`${userProgress.completedLessons}/${60}`}
            subtitle="Darslar"
            color="from-green-400 to-emerald-500"
          />
          <StatCard
            icon={<Clock size={32} className="text-blue-500" />}
            title={`${userProgress.totalHours} soat`}
            subtitle="Jami o\'qish vaqti"
            color="from-blue-400 to-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Module Progress */}
          <Card className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Module Progress</h2>
            <div className="space-y-4">
              {moduleProgress.map((module, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{module.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{module.progress}%</span>
                  </div>
                  <ProgressBar progress={module.progress} color={module.color} />
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Haftalik Faoliyat</h2>
            <div className="flex items-end justify-between h-40">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                    style={{ height: `${(day.hours / 8) * 100}%` }}
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
              O\'rtacha: 4.9 soat/kun
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Achievements */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Yutuqlar</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">So\'nggi Faoliyat</h2>
            <div className="space-y-4">
              <ActivityItem
                icon={<Trophy size={20} className="text-yellow-500" />}
                title="Calculator loyihasi tugatildi"
                time="2 soat oldin"
                xp="+100 XP"
              />
              <ActivityItem
                icon={<Target size={20} className="text-green-500" />}
                title="5 ta masala yechildi"
                time="5 soat oldin"
                xp="+50 XP"
              />
              <ActivityItem
                icon={<Award size={20} className="text-blue-500" />}
                title="OOP moduli tugatildi"
                time="1 kun oldin"
                xp="+200 XP"
              />
              <ActivityItem
                icon={<Flame size={20} className="text-orange-500" />}
                title="7 kunlik streak erishildi"
                time="1 kun oldin"
                xp="+50 XP"
              />
            </div>
          </Card>
        </div>

        {/* Daily Goals */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Kunlik Maqsad</h2>
              <p className="text-blue-100">Bugun 4/6 soat o\'qidingiz. Davom eting!</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">67%</div>
              <div className="text-blue-100">tugatildi</div>
            </div>
          </div>
          <div className="mt-4 w-full bg-white/20 rounded-full h-3">
            <div className="bg-white h-3 rounded-full" style={{ width: '67%' }} />
          </div>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ icon, title, subtitle, color }) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        {icon}
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl`} />
      </div>
      <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{title}</div>
      <div className="text-gray-600 dark:text-gray-400">{subtitle}</div>
    </Card>
  )
}

function AchievementCard({ achievement }) {
  return (
    <div
      className={`p-4 rounded-xl border-2 ${
        achievement.unlocked
          ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700'
          : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
      }`}
    >
      <div className={`flex items-center space-x-2 mb-2 ${achievement.unlocked ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-400'}`}>
        {achievement.icon}
        <span className="font-semibold">{achievement.title}</span>
      </div>
      <p className={`text-sm ${achievement.unlocked ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'}`}>
        {achievement.description}
      </p>
    </div>
  )
}

function ActivityItem({ icon, title, time, xp }) {
  return (
    <div className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
      <div className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-gray-800 dark:text-white">{title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{time}</div>
      </div>
      <div className="text-green-600 dark:text-green-400 font-semibold">{xp}</div>
    </div>
  )
}
