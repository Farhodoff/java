import { useState } from 'react'
import { BookOpen, Video, FileText, CheckCircle, Lock, ArrowLeft, Play, Code } from 'lucide-react'
import { coursesData } from '../data/courses'
import { lessonContent } from '../data/lessonContent'

export default function Courses() {
  const [activeModule, setActiveModule] = useState(1)
  const [selectedLesson, setSelectedLesson] = useState(null)

  const activeModuleData = coursesData.find(m => m.id === activeModule)

  const currentModuleIndex = coursesData.findIndex(m => m.id === activeModule)
  const isLastLesson = 
    activeModuleData &&
    selectedLesson &&
    activeModuleData.lessons.indexOf(selectedLesson) === activeModuleData.lessons.length - 1 &&
    currentModuleIndex === coursesData.length - 1

  const handleNextLesson = () => {
    if (!selectedLesson) return

    const currentLessons = activeModuleData.lessons
    const currentLessonIndex = currentLessons.indexOf(selectedLesson)

    if (currentLessonIndex < currentLessons.length - 1) {
      setSelectedLesson(currentLessons[currentLessonIndex + 1])
    } else {
      if (currentModuleIndex < coursesData.length - 1) {
        const nextModule = coursesData[currentModuleIndex + 1]
        setActiveModule(nextModule.id)
        setSelectedLesson(nextModule.lessons[0])
      } else {
        setSelectedLesson(null)
      }
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Kurslar</h1>
        
        {selectedLesson ? (
          <LessonView 
            key={`${activeModule}-${activeModuleData.lessons.indexOf(selectedLesson)}`}
            lesson={selectedLesson} 
            moduleId={activeModule}
            lessonIndex={activeModuleData.lessons.indexOf(selectedLesson)}
            onBack={() => setSelectedLesson(null)} 
            onNext={handleNextLesson}
            isLastLesson={isLastLesson}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Module Selection */}
            <div className="lg:col-span-1 space-y-4">
              {coursesData.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeModule === module.id
                      ? 'bg-gradient-to-r ' + module.color + ' text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen size={24} />
                    <div>
                      <div className="font-semibold">{module.title}</div>
                      <div className={`text-sm ${activeModule === module.id ? 'text-white/80' : 'text-gray-500'}`}>
                        {module.duration}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Module Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{activeModuleData.title}</h2>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-medium">
                    {activeModuleData.lessons.length} dars
                  </span>
                </div>

                <div className="space-y-3">
                  {activeModuleData.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        {lesson.type === 'video' ? (
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <Video size={20} className="text-blue-600 dark:text-blue-400" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <FileText size={20} className="text-green-600 dark:text-green-400" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-gray-800 dark:text-white">{lesson.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedLesson(lesson)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Boshlash
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks & Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                    <CheckCircle size={24} className="text-green-600" />
                    <span>Amaliyot masalalari</span>
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{activeModuleData.tasks}</div>
                  <div className="text-gray-600 dark:text-gray-400">ta masala</div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                    <BookOpen size={24} className="text-blue-600" />
                    <span>Mini loyihalar</span>
                  </h3>
                  <div className="space-y-2">
                    {activeModuleData.projects.map((project, index) => (
                      <div key={index} className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function LessonView({ lesson, moduleId, lessonIndex, onBack, onNext, isLastLesson }) {
  const content = lessonContent[moduleId]?.[lessonIndex];
  const [showSolution, setShowSolution] = useState({});

  const toggleSolution = (index) => {
    setShowSolution(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-6"
      >
        <ArrowLeft size={20} />
        <span>Qaytish</span>
      </button>

      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-4">
          {lesson.type === 'video' ? (
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <Video size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
          ) : (
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-green-600 dark:text-green-400" />
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{lesson.title}</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</div>
          </div>
        </div>
      </div>

      {content && (
        <>
          {/* Theory Section */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center space-x-2">
              <BookOpen size={20} />
              <span>Nazariya</span>
            </h3>
            <div className="text-blue-700 dark:text-blue-400 whitespace-pre-line text-sm leading-relaxed">
              {content.theory}
            </div>
          </div>

          {/* Code Examples Section */}
          {content.codeExamples && content.codeExamples.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                <Code size={20} />
                <span>Kod misollari</span>
              </h3>
              <div className="space-y-4">
                {content.codeExamples.map((example, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <p className="text-gray-400 text-sm mt-2">{example.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercises Section */}
          {content.exercises && content.exercises.length > 0 && (
            <div className="bg-green-50 dark:bg-green-900 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Mashqlar</span>
              </h3>
              <div className="space-y-4">
                {content.exercises.map((exercise, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-800 dark:text-white font-medium mb-2">
                      {index + 1}. {exercise.task}
                    </p>
                    <button
                      onClick={() => toggleSolution(index)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      {showSolution[index] ? 'Yashirish' : 'Ko\'rsatish'}
                    </button>
                    {showSolution[index] && (
                      <pre className="mt-2 bg-gray-900 rounded p-3 text-green-400 text-sm overflow-x-auto">
                        <code>{exercise.solution}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points Section */}
          {content.keyPoints && content.keyPoints.length > 0 && (
            <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4">Asosiy nuqtalar:</h3>
              <ul className="space-y-2 text-purple-700 dark:text-purple-400">
                {content.keyPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      <div className="mt-6 flex space-x-4">
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
          <Play size={20} />
          <span>Darsni boshlash</span>
        </button>
        <button 
          onClick={onNext}
          className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          {isLastLesson ? 'Kursni yakunlash' : 'Keyingi dars'}
        </button>
      </div>
    </div>
  )
}
