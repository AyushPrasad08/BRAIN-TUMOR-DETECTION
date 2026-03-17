const mock = {
  stats: {
    totalScans: 1240,
    positives: 78,
    recentResults: 12,
    avgConfidence: 89.4,
    recentPatients: [
      { id: 'p1', name: 'John Doe', lastScan: '2026-02-12' },
      { id: 'p2', name: 'Jane Smith', lastScan: '2026-02-10' }
    ]
  },
  analyze: {
    label: 'Negative',
    confidence: 0.92,
    heatmap: null
  },
  history: [
    { id: 's1', patient: 'John Doe', date: '2026-02-12', result: 'Negative', confidence: 0.92 },
    { id: 's2', patient: 'Jane Smith', date: '2026-02-10', result: 'Positive', confidence: 0.81 }
  ]
}

export default mock
