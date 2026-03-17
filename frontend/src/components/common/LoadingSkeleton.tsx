import React from 'react'

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
      <div className="grid grid-cols-3 gap-4">
        <div className="h-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-40 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

export default LoadingSkeleton
