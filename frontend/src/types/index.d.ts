export type ScanRecord = {
  id: string
  patient: string
  date: string
  result: 'Positive' | 'Negative'
  confidence: number
}
