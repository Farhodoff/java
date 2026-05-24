export default function ProgressBar({ progress, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`${colors[color]} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
