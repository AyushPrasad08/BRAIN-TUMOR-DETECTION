import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import LoadingSkeleton from './components/common/LoadingSkeleton'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Upload = React.lazy(() => import('./pages/Upload'))
const History = React.lazy(() => import('./pages/History'))
const About = React.lazy(() => import('./pages/About'))

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
