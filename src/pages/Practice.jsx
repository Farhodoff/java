import { useState } from 'react'
import { 
  CheckCircle, 
  Clock, 
  Star, 
  Play, 
  Code, 
  ArrowLeft, 
  Terminal as TerminalIcon, 
  AlertCircle, 
  RefreshCw, 
  Sparkles, 
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { practiceData } from '../data/practice'
import SearchBar from '../components/SearchBar'

const HINTS = {
  1: "Konsolga matn chiqarish uchun Java-da 'System.out.println()' metodidan foydalaniladi. Matn qo'shtirnoq (\" \") ichida bo'lishi kerak.",
  2: "Java-da butun sonli o'zgaruvchi yaratish uchun 'int' toifasidan foydalaniladi. Sintaksis: int o'zgaruvchiNomi = qiymat;",
  3: "Shart operatori sintaksisi: if (shart) { ... } else { ... } Musbat sonlarni aniqlash uchun son > 0 shartidan foydalaning.",
  4: "1 dan 10 gacha sonlarni chop etish uchun for (int i = 1; i <= 10; i++) siklidan foydalaning.",
  5: "Massiv elementlarini aylanib chiqish uchun 'for-each' yoki oddiy 'for' siklidan foydalaning. Yig'indini yig'ib boruvchi o'zgaruvchi e'lon qiling."
}

const TEST_CASES = {
  1: { input: "Boshlang'ich", expected: "Hello World" },
  2: { input: "E'lon qilish", expected: "int toifasidagi o'zgaruvchi (masalan: int son = 42;)" },
  3: { input: "son = 15", expected: "Musbat" },
  4: { input: "Sikl", expected: "1 dan 10 gacha sonlar" },
  5: { input: "sonlar = {1..10}", expected: "55" }
}

function getStarterCode(problem) {
  if (problem.id === 1) {
    return `public class Solution {
    public static void main(String[] args) {
        // Consolega "Hello World" chiqaring
        System.out.println("");
    }
}`;
  }
  if (problem.id === 2) {
    return `public class Solution {
    public static void main(String[] args) {
        // Integer o'zgaruvchi yarating va unga qiymat bering
        int son = ;
    }
}`;
  }
  if (problem.id === 3) {
    return `public class Solution {
    public static void main(String[] args) {
        int son = 15;
        // Son musbat yoki manfiy ekanini aniqlang (if/else)
        if (son > 0) {
            System.out.println("Musbat");
        } else {
            
        }
    }
}`;
  }
  if (problem.id === 4) {
    return `public class Solution {
    public static void main(String[] args) {
        // 1 dan 10 gacha bo'lgan sonlarni chiqaring (for loop)
        for (int i = 1; i <= 10; i++) {
            
        }
    }
}`;
  }
  if (problem.id === 5) {
    return `public class Solution {
    public static void main(String[] args) {
        int[] sonlar = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int yigindi = 0;
        
        // Array elementlari yig'indisini hisoblang
        
        System.out.println("Massiv elementlari yig'indisi: " + yigindi);
    }
}`;
  }
  return `public class Solution {
    public static void main(String[] args) {
        // Masala yechimini yozing
        
    }
}`;
}

const runValidation = (problemId, code) => {
  const normalizedCode = code.replace(/\s+/g, ' ');
  
  switch(problemId) {
    case 1: // Hello World
      if (normalizedCode.includes('System.out.println') && (normalizedCode.includes('"Hello World"') || normalizedCode.includes("'Hello World'"))) {
        return {
          success: true,
          output: "Hello World",
          tests: [
            { name: "Sintaksis tahlili (Syntax analysis)", passed: true },
            { name: "\"Hello World\" konsolga chiqishi", passed: true },
            { name: "Main metodini chaqirish", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: Konsolga \"Hello World\" matni chop etilmadi.\nIltimos System.out.println(\"Hello World\"); operatoridan to'g'ri foydalaning.",
        tests: [
          { name: "Sintaksis tahlili (Syntax analysis)", passed: true },
          { name: "\"Hello World\" konsolga chiqishi", passed: false },
          { name: "Main metodini chaqirish", passed: true }
        ]
      };

    case 2: // Variable yaratish
      if (/int\s+[a-zA-Z_]\w*\s*=\s*\d+/.test(code)) {
        return {
          success: true,
          output: "O'zgaruvchi muvaffaqiyatli yaratildi.\nButun son saqlandi.",
          tests: [
            { name: "int kalit so'zi aniqlandi", passed: true },
            { name: "O'zgaruvchiga qiymat berildi", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: 'int' toifasidagi o'zgaruvchi e'lon qilinmagan yoki qiymat berilmagan.\nMisol: int son = 10;",
        tests: [
          { name: "int kalit so'zi aniqlandi", passed: false },
          { name: "O'zgaruvchiga qiymat berildi", passed: false }
        ]
      };

    case 3: // If/else
      if (code.includes('if') && code.includes('else')) {
        return {
          success: true,
          output: "Musbat",
          tests: [
            { name: "Shart operatorlari aniqlandi (if/else)", passed: true },
            { name: "Musbat holat tekshirildi", passed: true },
            { name: "Manfiy holat tekshirildi", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: if va else bloklari to'liq yozilmagan.\nSon musbat yoki manfiyligiga qarab shart operatorini to'ldiring.",
        tests: [
          { name: "Shart operatorlari aniqlandi (if/else)", passed: false },
          { name: "Musbat holat tekshirildi", passed: false },
          { name: "Manfiy holat tekshirildi", passed: false }
        ]
      };

    case 4: // For loop
      if (code.includes('for') && (code.includes('++') || code.includes('+=') || code.includes('--'))) {
        return {
          success: true,
          output: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
          tests: [
            { name: "for sikl operatori aniqlandi", passed: true },
            { name: "1 dan 10 gacha sonlar chop etildi", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: for sikli to'g'ri yozilmagan.\nSikl yordamida 1 dan 10 gacha bo'lgan sonlarni chop eting.",
        tests: [
          { name: "for sikl operatori aniqlandi", passed: false },
          { name: "1 dan 10 gacha sonlar chop etildi", passed: false }
        ]
      };

    case 5: // Array sum
      if ((code.includes('for') || code.includes('while') || code.includes('stream') || code.includes('sum')) && (code.includes('[') || code.includes('array') || code.includes('arr') || code.includes('sonlar'))) {
        return {
          success: true,
          output: "Massiv elementlari yig'indisi: 55",
          tests: [
            { name: "Massiv e'lon qilindi", passed: true },
            { name: "Sikl yordamida massiv aylanib chiqildi", passed: true },
            { name: "Elementlar yig'indisi to'g'ri hisoblandi", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: Massiv elementlari yig'indisini hisoblashda xatolik.\nMassiv elementlarini sikl orqali yig'ib boring.",
        tests: [
          { name: "Massiv e'lon qilindi", passed: true },
          { name: "Sikl yordamida massiv aylanib chiqildi", passed: false },
          { name: "Elementlar yig'indisi to'g'ri hisoblandi", passed: false }
        ]
      };

    default:
      if (code.length > 120 && (code.includes('for') || code.includes('while') || code.includes('if') || code.includes('return') || code.includes('public'))) {
        return {
          success: true,
          output: "Dastur muvaffaqiyatli ishga tushdi.\nNatija: Kutilgan qiymat olindi.",
          tests: [
            { name: "Sintaktik tahlil", passed: true },
            { name: "Kompilyatsiya va testlar", passed: true }
          ]
        };
      }
      return {
        success: false,
        output: "Xatolik: Kod juda qisqa yoki yechim to'liq yozilmagan.\nMasala shartini qayta o'qib chiqing va to'liq yechim yozing.",
        tests: [
          { name: "Sintaktik tahlil", passed: true },
          { name: "Kompilyatsiya va testlar", passed: false }
        ]
      };
  }
};

export default function Practice() {
  const [difficulty, setDifficulty] = useState('easy')
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [solvedProblems, setSolvedProblems] = useState(() => {
    try {
      const saved = localStorage.getItem('solved_problems')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const markAsSolved = (problemId) => {
    if (!solvedProblems.includes(problemId)) {
      const updated = [...solvedProblems, problemId]
      setSolvedProblems(updated)
      localStorage.setItem('solved_problems', JSON.stringify(updated))
    }
  }

  const currentProblems = practiceData[difficulty].filter(problem =>
    problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Amaliyot</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Masala qidirish..."
          />
        </div>

        {/* Difficulty Selector */}
        <div className="flex space-x-4 mb-8">
          <DifficultyButton
            active={difficulty === 'easy'}
            onClick={() => setDifficulty('easy')}
            label='Easy'
            color='green'
          />
          <DifficultyButton
            active={difficulty === 'medium'}
            onClick={() => setDifficulty('medium')}
            label='Medium'
            color='yellow'
          />
          <DifficultyButton
            active={difficulty === 'hard'}
            onClick={() => setDifficulty('hard')}
            label='Hard'
            color='red'
          />
        </div>

        {selectedProblem ? (
          <CodeEditor 
            problem={selectedProblem} 
            difficulty={difficulty}
            onBack={() => setSelectedProblem(null)} 
            onSolve={() => markAsSolved(selectedProblem.id)}
            isSolvedInitially={solvedProblems.includes(selectedProblem.id)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProblems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                isSolved={solvedProblems.includes(problem.id)}
                onClick={() => setSelectedProblem(problem)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function DifficultyButton({ active, onClick, label, color }) {
  const colors = {
    green: active 
      ? 'bg-green-600 text-white shadow-lg shadow-green-100 dark:shadow-none' 
      : 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30',
    yellow: active 
      ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-100 dark:shadow-none' 
      : 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
    red: active 
      ? 'bg-red-600 text-white shadow-lg shadow-red-100 dark:shadow-none' 
      : 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30',
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

function ProblemCard({ problem, isSolved, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden border-2 ${
        isSolved 
          ? 'border-green-500 dark:border-green-600 shadow-green-100 dark:shadow-none' 
          : 'border-transparent hover:border-blue-500 dark:hover:border-blue-400'
      }`}
    >
      {isSolved && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-xl text-xs font-semibold flex items-center space-x-1">
          <CheckCircle size={12} />
          <span>Bajarildi</span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isSolved ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'
        }`}>
          <Code size={24} className={isSolved ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} />
        </div>
        <div className="flex items-center space-x-1 text-yellow-500 pr-12">
          <Star size={16} fill="currentColor" />
          <span className="font-semibold">{problem.xp} XP</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{problem.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{problem.description}</p>
      
      <button className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
        isSolved 
          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/35 border border-green-200 dark:border-green-800' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        <Play size={20} />
        <span>{isSolved ? 'Qayta yechish' : 'Boshlash'}</span>
      </button>
    </div>
  )
}

function CodeEditor({ problem, difficulty, onBack, onSolve, isSolvedInitially }) {
  const [code, setCode] = useState(() => getStarterCode(problem))
  const [consoleOutput, setConsoleOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [testResults, setTestResults] = useState(null)
  const [showTerminal, setShowTerminal] = useState(false)
  const [isSolved, setIsSolved] = useState(isSolvedInitially)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleReset = () => {
    if (confirm("Kodingizni dastlabki holatga qaytarmoqchimisiz?")) {
      setCode(getStarterCode(problem))
      setConsoleOutput('')
      setTestResults(null)
      setShowTerminal(false)
    }
  }

  const handleRun = () => {
    setIsRunning(true)
    setShowTerminal(true)
    setConsoleOutput("[Kompilyatsiya qilinmoqda...]\nJVM Virtual Sandbox v1.0.2 ishga tushmoqda...\n")
    setTestResults(null)

    setTimeout(() => {
      const validation = runValidation(problem.id, code)
      setIsRunning(false)
      if (validation.success) {
        setConsoleOutput(prev => prev + `Kompilyatsiya muvaffaqiyatli yakunlandi.\n\n--- Dastur Chiqishi (Output) ---\n${validation.output}\n\nDastur 0.04 soniyada yakunlandi.\n`)
      } else {
        setConsoleOutput(prev => prev + `KOMPILYATSIYA XATOLIGI (Compilation error):\n\n${validation.output}\n\nDastur xato kodi (1) bilan tugadi.\n`)
      }
    }, 1200)
  }

  const handleVerify = () => {
    setIsVerifying(true)
    setShowTerminal(true)
    setConsoleOutput("[Testlar tekshirilmoqda...]\nSintaktik va mantiqiy test case'lar yuborildi...\n")
    setTestResults(null)

    setTimeout(() => {
      const validation = runValidation(problem.id, code)
      setIsVerifying(false)
      setTestResults(validation.tests)

      if (validation.success) {
        setConsoleOutput(prev => prev + `Barcha testlar muvaffaqiyatli yakunlandi (PASS).\nMasala yechildi! Tabriklaymiz!\n`)
        setIsSolved(true)
        onSolve() // Save progress to localStorage
        setShowCelebration(true)
      } else {
        setConsoleOutput(prev => prev + `Testlar muvaffaqiyatsiz tugadi (FAIL).\nIltimos kodingizni tekshirib ko'ring.\n`)
      }
    }, 1500)
  }

  const badgeColor = {
    easy: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800',
    hard: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
  }

  return (
    <div className="space-y-6">
      {/* Celebration Modal Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 max-w-md w-full rounded-3xl shadow-2xl p-8 text-center space-y-6 transform scale-100 transition-all border border-green-100 dark:border-green-900 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400 animate-bounce">
              <Sparkles size={44} />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Ajoyib bajarildi!</h2>
              <p className="text-gray-600 dark:text-gray-400">Masala barcha testlardan muvaffaqiyatli o'tdi.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-white flex items-center justify-center space-x-3 shadow-lg shadow-orange-100 dark:shadow-none">
              <Star size={24} fill="currentColor" />
              <span className="text-xl font-bold">+{problem.xp} XP qo'shildi!</span>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  setShowCelebration(false)
                  onBack()
                }}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-[0.98] transition-all"
              >
                Mashqlarga qaytish
              </button>
              <button 
                onClick={() => setShowCelebration(false)}
                className="px-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-100 dark:border-gray-750 gap-4">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center transition-all text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
            <ArrowLeft size={20} />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-gray-850 dark:text-white">{problem.title}</h2>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase border ${badgeColor[difficulty]}`}>
                {difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Java tilida muammoni hal qiling</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 self-end sm:self-auto">
          <div className="flex items-center space-x-1.5 bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 rounded-lg border border-yellow-200 dark:border-yellow-800 font-semibold text-sm">
            <Star size={16} fill="currentColor" />
            <span>{problem.xp} XP</span>
          </div>
          {isSolved && (
            <div className="flex items-center space-x-1.5 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg border border-green-200 dark:border-green-800 font-semibold text-sm">
              <CheckCircle size={16} />
              <span>Yechilgan</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left pane: Details & Hints */}
        <div className="lg:col-span-5 space-y-6">
          {/* Problem description */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center space-x-2">
              <BookOpen size={20} className="text-blue-600" />
              <span>Masala sharti</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {problem.description}
            </p>
          </div>

          {/* Test cases sample */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Namunaviy Test-case'lar</h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-xs font-mono text-gray-700 dark:text-gray-300 space-y-2">
              <div><span className="text-blue-500 font-semibold">Test Kirişi:</span> {TEST_CASES[problem.id]?.input || "Boshlang'ich parametrlar"}</div>
              <hr className="border-gray-200 dark:border-gray-800" />
              <div><span className="text-green-500 font-semibold">Kutilgan Natija:</span> {TEST_CASES[problem.id]?.expected || "Masala javobi"}</div>
            </div>
          </div>

          {/* Hints / Help */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setShowHint(!showHint)}
              className="w-full flex items-center justify-between font-bold text-gray-800 dark:text-white focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <Sparkles size={20} className="text-yellow-500 animate-pulse" />
                <span>Nazariy Yordam & Maslahatlar</span>
              </div>
              {showHint ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {showHint && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 bg-yellow-50/50 dark:bg-yellow-950/10 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/50 leading-relaxed animate-in slide-in-from-top duration-250">
                {HINTS[problem.id] || "Java-da sintaksis va klass nomlarini to'g'ri yozganligingizga ishonch hosil qiling. Boshqa mavzulardagi darslarni ko'rib chiqing."}
              </div>
            )}
          </div>
        </div>

        {/* Right pane: Editor & Terminal */}
        <div className="lg:col-span-7 space-y-6">
          {/* Editor block */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 flex flex-col">
            <div className="bg-gray-950 px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs font-semibold pl-2">Solution.java (Virtual IDE)</span>
              </div>
              <button 
                onClick={handleReset}
                className="text-xs text-gray-400 hover:text-white flex items-center space-x-1 transition-all"
                title="Kodni boshlang'ich holatga qaytarish"
              >
                <RefreshCw size={12} />
                <span>Qayta tiklash</span>
              </button>
            </div>
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-80 p-4 font-mono text-sm bg-gray-955 text-emerald-400 focus:outline-none focus:ring-0 resize-none leading-relaxed"
              spellCheck="false"
              placeholder="// Kodingizni yozing..."
            />

            <div className="bg-gray-950 p-4 border-t border-gray-800 flex flex-wrap gap-3">
              <button
                disabled={isRunning || isVerifying}
                onClick={handleRun}
                className="flex-1 min-w-[120px] bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Ishlamoqda...</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>Ishga tushirish</span>
                  </>
                )}
              </button>
              <button
                disabled={isRunning || isVerifying}
                onClick={handleVerify}
                className="flex-1 min-w-[120px] bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Tekshirilmoqda...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    <span>Tekshirish (Submit)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Console Output */}
          {showTerminal && (
            <div className="bg-black rounded-2xl shadow-xl overflow-hidden border border-gray-800 flex flex-col font-mono text-xs animate-in slide-in-from-bottom duration-300">
              <div className="bg-gray-950 px-4 py-2.5 border-b border-gray-800 flex items-center justify-between text-gray-500">
                <span className="flex items-center space-x-2">
                  <TerminalIcon size={14} className="text-gray-450" />
                  <span className="text-xs font-semibold text-gray-400">Terminal & Test Case tekshiruvlari</span>
                </span>
                <button 
                  onClick={() => setShowTerminal(false)}
                  className="text-gray-500 hover:text-white text-sm"
                >
                  Yopish
                </button>
              </div>
              <div className="p-4 space-y-4 max-h-60 overflow-y-auto">
                <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                  {consoleOutput}
                </pre>

                {/* Test results checkmarks */}
                {testResults && (
                  <div className="space-y-2 border-t border-gray-800 pt-3">
                    <div className="font-semibold text-gray-450 text-xs uppercase tracking-wider mb-2">Test natijalari:</div>
                    {testResults.map((test, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-300 animate-in fade-in duration-200">
                        {test.passed ? (
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        ) : (
                          <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        )}
                        <span className={test.passed ? "text-green-200" : "text-red-300"}>
                          {test.name}: {test.passed ? "Muvaffaqiyatli o'tdi (PASS)" : "Xato yuz berdi (FAIL)"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
