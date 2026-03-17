import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeIcon, CloudArrowUpIcon, ArchiveBoxIcon, InformationCircleIcon, Cog6ToothIcon, UserCircleIcon, ArrowRightOnRectangleIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: <HomeIcon className="w-6 h-6" /> },
  { to: '/upload', label: 'Upload MRI', icon: <CloudArrowUpIcon className="w-6 h-6" /> },
  { to: '/history', label: 'History', icon: <ArchiveBoxIcon className="w-6 h-6" /> },
  { to: '/about', label: 'About / Resources', icon: <InformationCircleIcon className="w-6 h-6" /> }
]

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem('theme')
    return s === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: collapsed ? 80 : 256 }}
      className={clsx('flex flex-col h-full text-white shrink-0')}
      style={{ background: 'linear-gradient(180deg, #0B4F6C 0%, #063247 100%)' }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">BT</div>
          {!collapsed && <div className="font-semibold text-lg">BrainScan</div>}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(d => !d)} title="Toggle theme" className="p-2 rounded-md bg-white/10">
            {dark ? <MoonIcon className="w-5 h-5 text-white" /> : <SunIcon className="w-5 h-5 text-white" />}
          </button>
          <button onClick={() => setCollapsed(s => !s)} className="p-2 rounded-md bg-white/10" title={collapsed ? 'Expand' : 'Collapse'}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" /></svg>
          </button>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4" aria-label="Main navigation">
        {items.map(item => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => clsx('group flex items-center gap-3 p-3 my-1 rounded-md transition-colors', isActive ? 'bg-white/20' : 'hover:bg-white/10')}>
            <div className="text-white">{item.icon}</div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-sm">
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
            {collapsed && <span className="sr-only">{item.label}</span>}
            {collapsed && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute left-20 bg-gray-900 text-white text-xs rounded px-2 py-1 shadow">{item.label}</div>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10">
            <Cog6ToothIcon className="w-5 h-5" />
            {!collapsed && <span>Settings</span>}
          </button>
          <button className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10">
            <UserCircleIcon className="w-5 h-5" />
            {!collapsed && <span>Profile</span>}
          </button>
          <button className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar
