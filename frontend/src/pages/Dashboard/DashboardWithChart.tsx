import React from 'react'
import SimpleChart from '../../components/charts/SimpleChart'

const DashboardWithChart: React.FC<{ stats: any }> = ({ stats }) => {
  return (
    <div>
      <div className="card-glass p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-medium mb-2">Scan Trends</h3>
        <SimpleChart data={[5, 9, 7, 10, 12, 8, 14]} />
      </div>
    </div>
  )
}

export default DashboardWithChart
