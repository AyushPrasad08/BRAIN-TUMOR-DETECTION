import React from 'react'

const About: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">About & Resources</h1>
          <p className="text-sm text-gray-500">Medical team, papers, tutorials and contact</p>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-6">
        <div className="card-glass p-4 rounded-lg">
          <h3 className="font-medium mb-2">Medical Team</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <div className="font-medium">Dr. Amelia Chen</div>
                <div className="text-xs text-gray-500">Neuroradiologist</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="card-glass p-4 rounded-lg">
          <h3 className="font-medium mb-2">Research Papers</h3>
          <div className="text-sm text-gray-500">List of curated papers (mock)</div>
        </div>

        <div className="card-glass p-4 rounded-lg">
          <h3 className="font-medium mb-2">FAQ</h3>
          <div className="text-sm text-gray-500">Common questions and answers</div>
        </div>
      </section>
    </div>
  )
}

export default About
