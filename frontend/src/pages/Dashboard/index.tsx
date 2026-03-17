import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getStats } from '../../services/api'
import DashboardWithChart from './DashboardWithChart'

const Dashboard: React.FC = () => {
  const { data } = useQuery(['stats'], getStats)

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Dr. Smith</h1>
          <p className="text-sm text-gray-500">Overview of recent scans and activity</p>
        </div>
      </header>

      <section className="grid grid-cols-4 gap-4 mb-6">
        <div className="card-glass p-4 rounded-lg shadow"> 
          <h3 className="text-sm text-gray-600">Total Scans</h3>
          <div className="text-2xl font-bold">{data?.totalScans ?? '—'}</div>
        </div>
        <div className="card-glass p-4 rounded-lg shadow"> 
          <h3 className="text-sm text-gray-600">Positive Results</h3>
          <div className="text-2xl font-bold">{data?.positives ?? '—'}</div>
        </div>
        <div className="card-glass p-4 rounded-lg shadow"> 
          <h3 className="text-sm text-gray-600">Recent Results</h3>
          <div className="text-2xl font-bold">{data?.recentResults ?? '—'}</div>
        </div>
        <div className="card-glass p-4 rounded-lg shadow"> 
          <h3 className="text-sm text-gray-600">Avg Confidence</h3>
          <div className="text-2xl font-bold">{data?.avgConfidence ?? '—'}%</div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <DashboardWithChart stats={data} />
        </div>

        <aside className="card-glass p-4 rounded-lg shadow"> 
          <h3 className="text-lg font-medium mb-2">Recent Patients</h3>
          <ul className="space-y-3">
            {(data?.recentPatients ?? []).map((p: any) => (
              <li key={p.id} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.lastScan}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  )
}

export default Dashboard
