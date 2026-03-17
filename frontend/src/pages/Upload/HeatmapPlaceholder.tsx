import React from 'react'

const HeatmapPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-48 rounded bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 flex items-center justify-center">
      <div className="text-sm text-gray-700">Heatmap placeholder (mock)</div>
    </div>
  )
}

export default HeatmapPlaceholder
