import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { analyzeFile } from '../../services/api'
import HeatmapPlaceholder from './HeatmapPlaceholder'

const Upload: React.FC = () => {
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return
    setFilePreview(URL.createObjectURL(file))
    // analyze
    setLoading(true)
    analyzeFile(file).then(res => {
      setResult(res)
      setLoading(false)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } })

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Upload & Analyze</h1>
          <p className="text-sm text-gray-500">Upload MRI scans for AI-assisted analysis</p>
        </div>
      </header>

      <div {...getRootProps()} className="card-glass p-6 rounded-lg border-dashed border-2 border-gray-200 text-center cursor-pointer">
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop MRI scans here, or click to select files</p>}
        <em className="text-xs text-gray-500">Supported: DICOM, JPEG, PNG</em>
      </div>

      {filePreview && (
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-medium mb-2">Preview</h3>
            <img src={filePreview} alt="preview" className="max-h-80 mx-auto" />
          </div>

          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-medium mb-2">Analysis</h3>
            {loading ? (
              <div>Analyzing... <div className="w-full h-2 bg-gray-200 rounded mt-2"><div className="h-2 bg-primary w-1/3" /></div></div>
            ) : result ? (
              <div>
                <div className="text-lg font-semibold">Result: {result.label}</div>
                <div className="text-sm text-gray-500">Confidence: {Math.round(result.confidence * 100)}%</div>
                <div className="mt-4">
                  <HeatmapPlaceholder />
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-2 rounded bg-primary text-white">Download Report</button>
                  <button className="px-3 py-2 rounded border">Share</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">No analysis yet</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Upload
