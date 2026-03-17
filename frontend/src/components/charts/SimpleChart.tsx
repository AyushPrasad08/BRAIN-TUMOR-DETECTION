import React from 'react'

const SimpleChart: React.FC<{ data?: number[] }> = ({ data = [5, 10, 8, 12, 7, 15, 9] }) => {
  // Very simple sparkline using SVG
  const max = Math.max(...data)
  const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d / max) * 100}`).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-40">
      <polyline fill="none" stroke="#01BAEF" strokeWidth={1.8} points={points} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default SimpleChart
