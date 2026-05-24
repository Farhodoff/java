import { useState } from 'react'
import { 
  Coffee, 
  Code, 
  Layers, 
  Database, 
  Link, 
  Leaf, 
  Globe, 
  GitBranch, 
  Shield, 
  Box, 
  Cpu, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Star, 
  Play, 
  CheckCircle, 
  RefreshCw, 
  Sparkles, 
  Trophy, 
  CheckSquare, 
  Award,
  ArrowRight
} from 'lucide-react'
import { interviewCategories, interviewData } from '../data/interview'
import SearchBar from '../components/SearchBar'

const ROADMAP_STEPS = [
  {
    stage: "1-Bosqich: Dasturlash Asoslari (1-4 hafta)",
    topics: [
      { id: "core_java", name: "Core Java", desc: "Primitiv turlar, xotira tuzilishi (Heap/Stack), String, GC, Exception handling." },
      { id: "oop", name: "OOP (Obyektga yo'naltirilgan dasturlash)", desc: "Inkapsulyatsiya, Vorisiylik, Polimorfizm, Abstraksiya, Interface vs Abstract class." },
      { id: "collections", name: "Collections Framework", desc: "ArrayList, LinkedList, HashMap ishlash mexanizmi, Set, Comparable vs Comparator." },
      { id: "git", name: "Git & GitHub", desc: "Commit, push, pull, branching, merge vs rebase, merge conflict yechish." }
    ]
  },
  {
    stage: "2-Bosqich: Ma'lumotlar bilan ishlash (5-8 hafta)",
    topics: [
      { id: "sql", name: "SQL Asoslari", desc: "SELECT, JOIN turlari, GROUP BY, HAVING, Index yaratish, Normalizatsiya, ACID." },
      { id: "jdbc", name: "JDBC (Database Connection)", desc: "Connection, Statement, PreparedStatement (SQL Injection oldini olish), ResultSet, Transaction." },
      { id: "postgresql", name: "PostgreSQL Database", desc: "JSON/JSONB ma'lumot turlari, CTE, Views va Materialized Views, MVCC prinsiplari." },
      { id: "oracle_db", name: "Oracle Database", desc: "Oracle arxitekturasi, DUAL jadvali, ROWNUM, PL/SQL asoslari, Tablespace va Datafiles." }
    ]
  },
  {
    stage: "3-Bosqich: Enterprise Texnologiyalar (9-12 hafta)",
    topics: [
      { id: "springboot", name: "Spring Boot", desc: "IoC va Dependency Injection, Bean Scopes, Auto-configuration, Spring Boot profiles." },
      { id: "rest_api", name: "REST API loyihalash", desc: "HTTP metodlari, Status kodlari, PathVariable, RequestParam, RequestBody, DTO pattern." },
      { id: "hibernate", name: "Hibernate / ORM", desc: "Entity states, Lazy vs Eager loading, N+1 muammosi, L1/L2 kesh, Cascade turlari." },
      { id: "security_jwt", name: "Security (JWT)", desc: "Authentication vs Authorization, Filter Chain, JWT token tuzilishi, BCrypt parollarni shifrlash." }
    ]
  },
  {
    stage: "4-Bosqich: Ilg'or Arxitektura & DevOps (13-16 hafta)",
    topics: [
      { id: "docker", name: "Docker & Containerization", desc: "Dockerfile yozish, COPY vs ADD, Image vs Container, Docker Volumes, Compose, Multi-stage builds." },
      { id: "microservices", name: "Microservices Architecture", desc: "Monolit vs Mikroservis, Service Discovery (Eureka), API Gateway, Circuit Breaker (Resilience4j), Saga." },
      { id: "kafka", name: "Apache Kafka", desc: "Topics va Partitions, Producers vs Consumers, Consumer Groups, Retention, KRaft arxitekturasi." }
    ]
  }
];

function getCategoryIcon(catId, size = 20) {
  switch (catId) {
    case 'core_java': return <Coffee size={size} className="text-amber-600 dark:text-amber-400" />
    case 'oop': return <Code size={size} className="text-blue-600 dark:text-blue-400" />
    case 'collections': return <Layers size={size} className="text-purple-600 dark:text-purple-400" />
    case 'sql': return <Database size={size} className="text-indigo-600 dark:text-indigo-400" />
    case 'jdbc': return <Link size={size} className="text-emerald-600 dark:text-emerald-400" />
    case 'postgresql': return <Database size={size} className="text-sky-600 dark:text-sky-400" />
    case 'springboot': return <Leaf size={size} className="text-green-600 dark:text-green-400" />
    case 'rest_api': return <Globe size={size} className="text-teal-600 dark:text-teal-400" />
    case 'hibernate': return <Layers size={size} className="text-violet-600 dark:text-violet-400" />
    case 'git': return <GitBranch size={size} className="text-rose-600 dark:text-rose-400" />
    case 'security_jwt': return <Shield size={size} className="text-cyan-600 dark:text-cyan-400" />
    case 'docker': return <Box size={size} className="text-blue-500 dark:text-blue-455" />
    case 'oracle_db': return <Database size={size} className="text-red-600 dark:text-red-400" />
    case 'microservices': return <Cpu size={size} className="text-pink-600 dark:text-pink-400" />
    case 'kafka': return <Cpu size={size} className="text-orange-600 dark:text-orange-400" />
    default: return <MessageSquare size={size} className="text-gray-600" />
  }
}

export default function Interview() {
  const [navigationTab, setNavigationTab] = useState('roadmap') // 'roadmap', 'qa', 'simulator'
  const [activeCategory, setActiveCategory] = useState('core_java')
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Study Roadmap Checklist state
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('completed_roadmap_topics')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const toggleTopicCompletion = (topicId) => {
    let updated;
    if (completedTopics.includes(topicId)) {
      updated = completedTopics.filter(id => id !== topicId)
    } else {
      updated = [...completedTopics, topicId]
    }
    setCompletedTopics(updated)
    localStorage.setItem('completed_roadmap_topics', JSON.stringify(updated))
  }

  // Interview Simulator States
  const [simulatorActive, setSimulatorActive] = useState(false)
  const [simCategory, setSimCategory] = useState('core_java')
  const [simQuestions, setSimQuestions] = useState([])
  const [simCurrentIdx, setSimCurrentIdx] = useState(0)
  const [simAnswers, setSimAnswers] = useState({})
  const [simGraded, setSimGraded] = useState(false)
  const [simScore, setSimScore] = useState(0)
  const [showSimSummary, setShowSimSummary] = useState(false)

  const startSimulator = () => {
    const questions = interviewData[simCategory] || []
    if (questions.length === 0) return
    
    // Shuffle and pick 5 questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random())
    setSimQuestions(shuffled.slice(0, 5))
    setSimCurrentIdx(0)
    setSimAnswers({})
    setSimGraded(false)
    setSimScore(0)
    setShowSimSummary(false)
    setSimulatorActive(true)
  }

  const handleSimAnswerChange = (text) => {
    setSimAnswers(prev => ({
      ...prev,
      [simCurrentIdx]: text
    }))
  }

  const handleSimNext = () => {
    if (simCurrentIdx < simQuestions.length - 1) {
      setSimCurrentIdx(simCurrentIdx + 1)
    } else {
      // Grade overall interview
      let finalScore = 0;
      simQuestions.forEach((q, idx) => {
        const ans = (simAnswers[idx] || '').trim().toLowerCase()
        const expectedKeywords = q.answer.toLowerCase().split(/\s+/)
        
        // Simple heuristic matching
        let matches = 0;
        expectedKeywords.forEach(word => {
          if (word.length > 3 && ans.includes(word)) matches++
        })

        if (ans.length > 20) {
          finalScore += 20 // basic effort points
        }
        if (matches > 3) {
          finalScore += 10
        }
      })
      
      const scaledScore = Math.min(100, Math.max(10, Math.round(finalScore)))
      setSimScore(scaledScore)
      setSimGraded(true)
      setShowSimSummary(true)
      
      // Save simulation complete count to localStorage
      try {
        const currentCount = parseInt(localStorage.getItem('completed_mock_interviews') || '0')
        localStorage.setItem('completed_mock_interviews', (currentCount + 1).toString())
      } catch {}
    }
  }

  // Filter QA questions
  const currentQuestions = (interviewData[activeCategory] || []).filter(question =>
    question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const progressPercentage = Math.round((completedTopics.length / 15) * 100);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white flex items-center gap-2">
              <Trophy className="text-yellow-500 animate-pulse" size={36} />
              <span>Junior Interview Tayyorgarlik</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Junior dasturchi darajasiga o'tish uchun to'liq yo'l xaritasi va interaktiv suhbat simulyatori</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-2xl p-4 flex items-center space-x-4 self-start md:self-auto">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
              <CheckSquare size={24} />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Yo'l xaritasi</div>
              <div className="text-lg font-bold text-gray-800 dark:text-white">{progressPercentage}% Tugatilgan</div>
              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1 overflow-hidden">
                <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${progressPercentage}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Global Navigation Tabs */}
        <div className="flex bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-md border border-gray-100 dark:border-gray-750 mb-8 overflow-x-auto">
          <button
            onClick={() => { setNavigationTab('roadmap'); setSimulatorActive(false); }}
            className={`flex-1 min-w-[150px] py-3.5 px-4 rounded-xl font-bold transition-all text-sm flex items-center justify-center space-x-2 ${
              navigationTab === 'roadmap'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-650 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <BookOpen size={18} />
            <span>O'rganish Tartibi</span>
          </button>
          
          <button
            onClick={() => { setNavigationTab('qa'); setSimulatorActive(false); }}
            className={`flex-1 min-w-[150px] py-3.5 px-4 rounded-xl font-bold transition-all text-sm flex items-center justify-center space-x-2 ${
              navigationTab === 'qa'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-650 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <MessageSquare size={18} />
            <span>Savollar & Javoblar</span>
          </button>

          <button
            onClick={() => { setNavigationTab('simulator'); }}
            className={`flex-1 min-w-[150px] py-3.5 px-4 rounded-xl font-bold transition-all text-sm flex items-center justify-center space-x-2 ${
              navigationTab === 'simulator'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-650 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Sparkles size={18} className="text-yellow-500 animate-bounce" />
            <span>Mock Interview Simulyatori</span>
          </button>
        </div>

        {/* ROADMAP SECTION */}
        {navigationTab === 'roadmap' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-xl flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award size={24} />
                  <span>Junior Dasturchi Yo'l Xaritasi</span>
                </h3>
                <p className="text-blue-100 text-sm max-w-xl">Muvaffaqiyatga erishish uchun barcha 15 ta mavzuni o'rganing va amaliy mashq qiling. Progressingizni belgilab boring!</p>
              </div>
              <div className="hidden sm:block text-5xl font-black opacity-10">JUNIOR</div>
            </div>

            <div className="space-y-6">
              {ROADMAP_STEPS.map((step, sIdx) => (
                <div key={sIdx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-150 dark:border-gray-600">
                    <h3 className="font-extrabold text-gray-850 dark:text-white text-base flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <span>{step.stage}</span>
                    </h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.topics.map((topic) => {
                      const isDone = completedTopics.includes(topic.id);
                      return (
                        <div 
                          key={topic.id} 
                          onClick={() => toggleTopicCompletion(topic.id)}
                          className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start space-x-3 relative overflow-hidden ${
                            isDone 
                              ? 'bg-green-50/50 dark:bg-green-950/10 border-green-500 shadow-green-50 dark:shadow-none' 
                              : 'bg-white dark:bg-gray-800 border-gray-150 dark:border-gray-700 hover:border-blue-400'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isDone ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            {getCategoryIcon(topic.id, 20)}
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-gray-800 dark:text-white text-sm">{topic.name}</h4>
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                                isDone 
                                  ? 'bg-green-500 border-green-500 text-white' 
                                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-850'
                              }`}>
                                {isDone && <CheckCircle size={14} className="text-white" fill="currentColor" />}
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                              {topic.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QA EXPLORER SECTION */}
        {navigationTab === 'qa' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Search Bar */}
            <div className="mb-4">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder="Mavzu bo'yicha savol qidirish..."
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Category selector left */}
              <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-fit space-y-2">
                <h3 className="font-bold text-gray-800 dark:text-white px-2 mb-3 text-sm uppercase tracking-wider">Mavzular:</h3>
                <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
                  {interviewCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setExpandedQuestion(null);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all font-semibold flex items-center justify-between text-xs sm:text-sm ${
                        activeCategory === cat.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600 shadow-sm'
                          : 'text-gray-650 dark:text-gray-450 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        {getCategoryIcon(cat.id, 18)}
                        <span>{cat.name}</span>
                      </div>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-0.5 rounded-full">
                        {interviewData[cat.id]?.length || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions list right */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-gray-850 dark:text-white flex items-center space-x-2">
                    {getCategoryIcon(activeCategory, 22)}
                    <span>{interviewCategories.find(c => c.id === activeCategory)?.name || ""}</span>
                  </h3>
                  <span className="bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    Junior darajasi
                  </span>
                </div>

                {currentQuestions.length > 0 ? (
                  <div className="space-y-4">
                    {currentQuestions.map((item) => (
                      <QuestionCard
                        key={item.id}
                        question={item}
                        isExpanded={expandedQuestion === item.id}
                        onToggle={() => setExpandedQuestion(expandedQuestion === item.id ? null : item.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 text-center space-y-3">
                    <MessageSquare size={48} className="text-gray-300 dark:text-gray-600 mx-auto" />
                    <h4 className="font-bold text-gray-800 dark:text-white">Savollar topilmadi</h4>
                    <p className="text-gray-500 dark:text-gray-450 text-sm">Boshqa kalit so'z kiritib ko'ring yoki mavzuni o'zgartiring.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR SECTION */}
        {navigationTab === 'simulator' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {!simulatorActive ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-950/30 rounded-2xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 mx-auto animate-bounce">
                    <Sparkles size={36} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-850 dark:text-white">Interaktiv Mock Interview</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Koningizni tekshirib ko'ring! Tizim tanlagan mavzudan 5 ta tasodifiy savolni beradi. Javobingizni matn yoki kod shaklida yozing va yakunda aqlli hisobot oling.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">Suhbat mavzusini tanlang:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interviewCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSimCategory(cat.id)}
                        className={`p-3 rounded-xl border-2 font-semibold text-xs flex items-center space-x-2 text-left transition-all ${
                          simCategory === cat.id
                            ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-600 text-blue-700 dark:text-blue-400'
                            : 'bg-white dark:bg-gray-800 border-gray-150 dark:border-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {getCategoryIcon(cat.id, 16)}
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={startSimulator}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <Play size={20} />
                  <span>Suhbatni boshlash</span>
                </button>
              </div>
            ) : showSimSummary ? (
              // Simulator summary
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto space-y-6 animate-in zoom-in-95 duration-250">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={36} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-850 dark:text-white">Suhbat yakunlandi!</h2>
                  <p className="text-gray-550 dark:text-gray-400 text-sm">Siz muvaffaqiyatli mock-suhbatdan o'tdingiz.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-650 to-indigo-650 rounded-2xl p-6 text-white text-center space-y-2">
                  <div className="text-xs uppercase tracking-widest opacity-80 font-bold">Yakuniy Suhbat Natijasi</div>
                  <div className="text-5xl font-black">{simScore} / 100</div>
                  <div className="text-sm font-medium">Baho: {simScore >= 80 ? "A'lo (Junior+ tayyor)" : simScore >= 50 ? "Yaxshi (Ko'proq o'qing)" : "Qoniqarsiz (Kam amaliyot)"}</div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800 dark:text-white border-b pb-2 text-sm uppercase">Savollar va To'liq Javoblar tahlili:</h3>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    {simQuestions.map((q, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-750 p-4 rounded-xl space-y-2">
                        <div className="font-bold text-gray-800 dark:text-white text-sm flex items-start space-x-2">
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{idx + 1}</span>
                          <span>{q.question}</span>
                        </div>
                        <div className="pl-7 space-y-2">
                          <div className="text-xs"><span className="font-bold text-gray-500">Sizning javobingiz:</span> <span className="italic text-gray-600 dark:text-gray-350">{simAnswers[idx] || "Javob yozilmadi"}</span></div>
                          <div className="text-xs bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-400 p-2.5 rounded-lg border border-green-100 dark:border-green-900/50">
                            <span className="font-bold">Ekspert javobi:</span> {q.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setSimulatorActive(false)}
                    className="flex-1 bg-gray-150 dark:bg-gray-700 text-gray-800 dark:text-white py-3.5 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-sm"
                  >
                    Menyuga qaytish
                  </button>
                  <button 
                    onClick={startSimulator}
                    className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all text-sm flex items-center justify-center space-x-2"
                  >
                    <RefreshCw size={16} />
                    <span>Qaytadan boshlash</span>
                  </button>
                </div>
              </div>
            ) : (
              // Simulator active testing
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto space-y-6 animate-in slide-in-from-bottom duration-300">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(simCategory, 22)}
                    <span className="font-bold text-gray-800 dark:text-white text-sm uppercase tracking-wide">
                      {interviewCategories.find(c => c.id === simCategory)?.name} Suhbat
                    </span>
                  </div>
                  <span className="bg-blue-105 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                    Savol {simCurrentIdx + 1} / 5
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-relaxed">
                    {simQuestions[simCurrentIdx]?.question}
                  </h3>
                  <textarea
                    value={simAnswers[simCurrentIdx] || ''}
                    onChange={(e) => handleSimAnswerChange(e.target.value)}
                    className="w-full h-40 p-4 rounded-xl border-2 border-gray-150 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 font-sans text-sm leading-relaxed"
                    placeholder="Suhbatdoshga javobingizni batafsil tushuntiring yoki amaliy kod yozing..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => {
                      if (confirm("Mock suhbatni bekor qilmoqchimisiz? Progress yo'qoladi.")) {
                        setSimulatorActive(false);
                      }
                    }}
                    className="px-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-sm"
                  >
                    Bekor qilish
                  </button>
                  
                  <button 
                    onClick={handleSimNext}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all text-sm flex items-center justify-center space-x-2"
                  >
                    <span>{simCurrentIdx === simQuestions.length - 1 ? "Suhbatni yakunlash" : "Keyingi savol"}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Extra references section */}
        {navigationTab !== 'simulator' && (
          <div className="mt-8 p-6 bg-blue-50/60 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-900/40">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm uppercase tracking-wider">Junior uchun Tavsiya Etilgan Resurslar</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-blue-700 dark:text-blue-400 font-medium">
                  <li>• <a href="https://roadmap.sh/java" target="_blank" rel="noreferrer" className="hover:underline">roadmap.sh/java — Full Java Developer Path</a></li>
                  <li>• <a href="https://www.baeldung.com" target="_blank" rel="noreferrer" className="hover:underline">Baeldung — Spring Boot & Hibernate Guides</a></li>
                  <li>• <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer" className="hover:underline">GeeksforGeeks — Java Interview Q&As</a></li>
                  <li>• <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="hover:underline">LeetCode — Coding Questions and Practices</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function QuestionCard({ question, isExpanded, onToggle }) {
  const difficultyColors = {
    Easy: 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/40',
    Medium: 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/40',
    Hard: 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/40',
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-xl">
      <button
        onClick={onToggle}
        className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-all gap-4 focus:outline-none"
      >
        <div className="flex items-center space-x-3.5 flex-1">
          <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageSquare size={18} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base leading-snug">{question.question}</h3>
          </div>
        </div>
        <div className="flex items-center space-x-3 flex-shrink-0">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase ${difficultyColors[question.difficulty]}`}>
            {question.difficulty}
          </span>
          {isExpanded ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-5 pb-5 pt-0 animate-in slide-in-from-top duration-250">
          <div className="ml-12 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-850 leading-relaxed text-sm text-gray-700 dark:text-gray-300">
            {question.answer}
          </div>
        </div>
      )}
    </div>
  )
}
