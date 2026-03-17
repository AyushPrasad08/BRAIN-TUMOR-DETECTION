import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const client = axios.create({
  baseURL: API_BASE,
  timeout: 15000
})

export const getStats = async () => {
  try {
    const res = await client.get('/stats')
    return res.data
  } catch (e) {
    // fallback to mock
    return {
      totalScans: 1240,
      positives: 78,
      recentResults: 12,
      avgConfidence: 89.4,
      recentPatients: [
        { id: 'p1', name: 'John Doe', lastScan: '2026-02-12' },
        { id: 'p2', name: 'Jane Smith', lastScan: '2026-02-10' }
      ]
    }
  }
}

export const analyzeFile = async (file: File) => {
  const form = new FormData()
  form.append('file', file)
  try {
    const res = await client.post('/analyze', form, { headers: { 'Content-Type': 'multipart/form-data' } })
    return res.data
  } catch (e) {
    // mock fallback
    return { label: 'Negative', confidence: 0.92 }
  }
}

export const getHistory = async () => {
  try {
    const res = await client.get('/history')
    return res.data
  } catch (e) {
    return [
      { id: 's1', patient: 'John Doe', date: '2026-02-12', result: 'Negative', confidence: 0.92 },
      { id: 's2', patient: 'Jane Smith', date: '2026-02-10', result: 'Positive', confidence: 0.81 }
    ]
  }
}

export default client
