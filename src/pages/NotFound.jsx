import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Sahifa topilmadi</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Kechirasiz, siz qidirgan sahifa mavjud emas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <Home size={20} />
            <span>Bosh sahifaga qaytish</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Orqaga</span>
          </button>
        </div>
      </div>
    </div>
  )
}
