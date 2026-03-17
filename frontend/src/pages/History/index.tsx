import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getHistory } from '../../services/api'

const History: React.FC = () => {
  const { data } = useQuery(['history'], getHistory)

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Results History</h1>
          <p className="text-sm text-gray-500">All analyzed scans</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {(data ?? []).map((s: any) => (
          <div key={s.id} className="card-glass p-4 rounded-lg shadow">
            <div className="h-40 bg-gray-100 rounded mb-3" />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{s.patient}</div>
                <div className="text-xs text-gray-500">{s.date}</div>
              </div>
              <div className="text-right">
                <div className={s.result === 'Positive' ? 'text-red-500 font-semibold' : 'text-green-600 font-semibold'}>{s.result}</div>
                <div className="text-sm text-gray-500">{Math.round(s.confidence * 100)}%</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded border">View</button>
              <button className="px-3 py-2 rounded bg-primary text-white">Export</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History
